import { CUSTOMER_DEPARTURE_LIMIT } from '../game/constants';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import clearDesserts from '../assets/game/clear-desserts.webp';
import rewardStar from '../assets/game/reward-star.webp';
import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { Donut } from '../components/Donut/Donut';
import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { getStage, stages, stagesById } from '../game/stages';
import { getReadyTrayPickupOrders, getStars, selectDonut, expandTray, matchTray, pickupTray } from '../game/engine';
import type { GameState } from '../game/types';
import type { GameAction } from '../game/reducer';
import { useOrderPatience } from '../hooks/useOrderPatience';
import { playSound } from '../effects/sound';
import { createEffects } from '../effects/turnEffects';

const TRAY_PICKUP_DELAY = 200;
const PICKUP_INTERVAL = 200;

interface Props { soundEnabled: boolean; state: GameState; dispatch: (action: GameAction) => void; onStages: () => void; onNext: () => void }
export function GamePage({ state, dispatch, onStages, onNext, soundEnabled }: Props) {
  const root = useRef<HTMLElement>(null);
  const latest = useRef(state);
  const matchTimers = useRef(new Set<ReturnType<typeof setTimeout>>());
  useLayoutEffect(() => { latest.current = state; }, [state]);
  const activeEffects = useRef(new Set<ReturnType<typeof createEffects>>());
  const mounted = useRef(true);
  const [readyOrders, setReadyOrders] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const { remainingMs, resetPatience } = useOrderPatience(state.status === 'playing', state.orders, readyOrders,
    orderIds => dispatch({ type: 'EXPIRE_ORDERS', orderIds }));
  const nextPickupAt = useRef(new Map<string, number>());
  const onOrderReady = useCallback((id: string) => {
    setReadyOrders(previous => previous.includes(id) ? previous : [...previous, id]);
  }, []);
  const pickup = useEffectEvent(() => {
    const now = performance.now();
    const eligibleOrders = readyOrders.filter(id => (nextPickupAt.current.get(id) ?? 0) <= now);
    act({ type: 'PICKUP_TRAY', readyOrders: eligibleOrders, parallel: true });
  });
  useEffect(() => {
    if (state.status !== 'playing') return;
    const candidates = getReadyTrayPickupOrders(state, readyOrders);
    if (!candidates.length) return;
    const nextTime = Math.min(...candidates.map(id => nextPickupAt.current.get(id) ?? 0));
    const timer = setTimeout(() => pickup(), Math.max(0, Math.ceil(nextTime - performance.now())));
    return () => clearTimeout(timer);
  }, [state, readyOrders]);
  const [inFlight, setInFlight] = useState<ReadonlySet<string>>(new Set());
  useEffect(() => {
    mounted.current = true;
    const active = activeEffects.current;
    const timers = matchTimers.current;
    return () => { mounted.current = false; for (const effect of active) effect.cleanup(); active.clear(); for (const timer of timers) clearTimeout(timer); timers.clear(); };
  }, []);
  function act(action: GameAction) {
    if (action.type === 'RESTART') {
      for (const timer of matchTimers.current) clearTimeout(timer);
      matchTimers.current.clear();
      for (const effect of activeEffects.current) effect.cleanup();
      activeEffects.current.clear();
      setInFlight(new Set());
      setReadyOrders([]);
      setRound(previous => previous + 1);
      resetPatience();
      nextPickupAt.current.clear();
    }
    const current = latest.current;
    const currentStage = getStage(current.stageId);
    const committedAction: GameAction = action.type === 'SELECT_DONUT' ? { ...action, type: 'QUEUE_DONUT' } : action;
    const result = action.type === 'SELECT_DONUT'
      ? selectDonut(current, currentStage, action.queueIndex, action.expectedDonutId, true)
      : action.type === 'TRAY_READY' ? matchTray(current, currentStage, action.donutId, true)
      : action.type === 'PICKUP_TRAY' ? pickupTray(current, currentStage, action.readyOrders, action.parallel)
      : action.type === 'EXPAND_TRAY' ? expandTray(current, currentStage) : null;
    if (!result) { dispatch(action); return; }
    if (result.state === current || !root.current) return;
    if (action.type === 'TRAY_READY') {
      dispatch(action);
      return;
    }
    if (action.type === 'PICKUP_TRAY') {
      const unlockTime = performance.now() + PICKUP_INTERVAL;
      for (const event of result.events) {
        if (event.type === 'consumed') nextPickupAt.current.set(event.orderId, unlockTime);
        if (event.type === 'orderCompleted') nextPickupAt.current.delete(event.orderId);
      }
    }
    const effects = createEffects();
    activeEffects.current.add(effects);
    const moved = result.events.find(event => event.type === 'moved');
    if (soundEnabled) {
      if (moved) playSound('select');
      if (result.events.some(event => event.type === 'consumed')) playSound('delivery');
    }
    // Capture all geometry before the DOM changes, but commit the action immediately.
    const feedback = effects.play(root.current, current, result.events);
    flushSync(() => {
      if (moved && result.state.tray.some(token => token.id === moved.donutId)) {
        setInFlight(previous => new Set([...previous, moved.donutId]));
      }
      dispatch(committedAction);
    });
    void feedback.catch(() => undefined).finally(() => {
      if (!activeEffects.current.delete(effects)) return;
      if (!mounted.current || !moved || latest.current.stageId !== current.stageId) {
        effects.cleanup();
        return;
      }
      flushSync(() => setInFlight(previous => {
        const next = new Set(previous);
        next.delete(moved.donutId);
        return next;
      }));
      effects.cleanup();
      // Start the pickup delay when the real token becomes visible in the tray.
      const timer = setTimeout(() => {
        matchTimers.current.delete(timer);
        if (mounted.current && latest.current.stageId === current.stageId) act({ type: 'TRAY_READY', donutId: moved.donutId });
      }, TRAY_PICKUP_DELAY);
      matchTimers.current.add(timer);
    });
  }

  const resultHeading = useRef<HTMLHeadingElement>(null);
  const { status } = state;
  const playing = status === 'playing';
  const departures = state.departedOrderIds?.length ?? 0;
  const reachedDepartureLimit = departures >= CUSTOMER_DEPARTURE_LIMIT;
  const departureFailure = status === 'gameover' && (reachedDepartureLimit
    || (departures > 0 && state.completedOrders === 0 && state.orders.every(order => !order)));
  const showGoodbye = status === 'clear' || departureFailure;
  const resultTitles = {
    ready: '다시 도전해요',
    paused: '다시 도전해요',
    clear: 'Stage Clear!',
    blocked: '트레이가 가득 찼어요',
    gameover: departureFailure
      ? (reachedDepartureLimit ? `기다리다 떠난 손님 ${departures}명` : state.stageId === 0 ? '손님이 떠났어요' : '모든 손님이 떠났어요') : state.tray.length >= state.trayCapacity ? '트레이에 빈칸이 없어요' : '대기열의 메뉴를 모두 사용했어요',
  };
  const failed = status === 'blocked' || status === 'gameover';
  const compactResult = status === 'blocked' || departureFailure;
  const [presentedResult, setPresentedResult] = useState<GameState | null>(null);
  const waitingForGoodbye = showGoodbye && presentedResult !== state;
  const showResult = !playing && !waitingForGoodbye;
  const previousFeedback = useRef({ completed: state.completedOrders, departures, result: false });
  useEffect(() => {
    const previous = previousFeedback.current;
    previousFeedback.current = { completed: state.completedOrders, departures, result: showResult };
    if (!soundEnabled) return;
    if (showResult && !previous.result) {
      if (status === 'clear') playSound('clear');
      else if (status === 'gameover') playSound('failed');
      else if (status === 'blocked') playSound('blocked');
    } else if (status === 'playing') {
      if (departures > previous.departures) playSound('departure');
      else if (state.completedOrders > previous.completed) playSound('order');
    }
  }, [departures, showResult, soundEnabled, state.completedOrders, status]);
  const stars = status === 'clear' ? getStars(state) : 0;
  const lastStage = state.stageId === stages[stages.length - 1]?.id;
  useEffect(() => {
    if (!showGoodbye) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setPresentedResult(state), reduceMotion ? 0 : CUSTOMER_GOODBYE_MS);
    return () => clearTimeout(timer);
  }, [showGoodbye, state]);
  useEffect(() => {
    if (showResult) resultHeading.current?.focus();
  }, [showResult, status]);
  return <main className={`game-page game-status--${waitingForGoodbye ? 'playing' : status}`} ref={root}>
    {(!showResult || status !== 'clear') && <GameHeader stage={state.stageId} onBack={onStages} />}
    <p className="sr-only" role="status" aria-live="polite">주문 {state.completedOrders}개 완료. 트레이 {state.tray.length} / {state.trayCapacity}칸.</p>
    {showResult && <section className={`result-panel${compactResult ? ' result-panel--compact' : ''}`} aria-labelledby="result-heading">
      {status === 'clear' && <div className="result-stars" role="img" aria-label={`별 ${stars}개`}>
        {[0, 1, 2].map(index => <span key={index} className={index < stars ? 'result-star--earned' : 'star--unearned'}><img src={rewardStar} alt="" draggable={false} /></span>)}
      </div>}
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1} className={departureFailure || status === 'clear' ? 'result-display-title' : undefined} lang={departureFailure ? 'en' : undefined}>
        {departureFailure ? 'Failed' : status === 'clear' && lastStage ? 'All Stages Clear!' : resultTitles[status]}
      </h2>
      {departureFailure && <p>{resultTitles.gameover}</p>}
      {status === 'clear' && !!state.departedOrderIds?.length && <p>기다리다 떠난 손님 {state.departedOrderIds.length}명</p>}
      {status === 'clear' && <img className="result-desserts" src={clearDesserts} alt="" draggable={false} />}
      {failed && !departureFailure && state.tray.length > 0 && <div className="result-tray" aria-label={`트레이 ${state.tray.length} / ${state.trayCapacity}칸`}>
        {state.tray.slice(-6).map(donut => <Donut key={donut.id} type={donut.type} />)}
      </div>}
      {status === 'blocked' && <p>트레이를 확장하면<br />메뉴를 2개 더 담을 수 있어요!</p>}
      <div className="result-actions">
        {status === 'blocked' && <button type="button" className="primary-button stage-button expand-button" onClick={() => act({ type: 'EXPAND_TRAY' })}>2칸 늘리기</button>}
        {status === 'clear' && !lastStage && <button className="primary-button stage-button" onClick={onNext}><span>Stage {String(state.stageId + 1).padStart(2, '0')}</span><StageDifficultyRibbon difficulty={stagesById.get(state.stageId + 1)?.difficulty} /></button>}
        <button className={status === 'gameover' ? 'primary-button stage-button' : 'secondary-button'} onClick={() => act({ type: 'RESTART' })}><span lang="en">Retry</span></button>
        {status !== 'blocked' && <button className="secondary-button" onClick={onStages}>스테이지 선택</button>}
      </div>
    </section>}
    {(playing || waitingForGoodbye) && <div className="game-board">
    <OrderBoard key={round} orders={state.orders} remainingMs={remainingMs} departedOrderIds={state.departedOrderIds} stageId={state.stageId} onOrderReady={onOrderReady} />
    <DonutTray inFlight={inFlight} donuts={state.tray} capacity={state.trayCapacity} />
    <DonutQueue queues={state.queues} disabled={!playing || state.tray.length >= state.trayCapacity} onSelect={(queueIndex, expectedDonutId) => { void act({ type: 'SELECT_DONUT', queueIndex, expectedDonutId }); }} />
    </div>}
    {showResult && status === 'clear' && <div className="confetti" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span key={i} style={{ left: `${(i * 29) % 100}%`, background: ['#ed96a6', '#a8d8c8', '#f5c66b', '#af9aca'][i % 4], animationDelay: `${(i % 9) * 55}ms`, transform: `rotate(${i * 37}deg)` }} />)}</div>}
  </main>;
}
