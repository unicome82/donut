import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { ShopArt } from '../components/ShopArt';
import { ShopAwning } from '../components/ShopAwning';
import { Icon } from '../components/Icon';
import { Donut } from '../components/Donut/Donut';
import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { getLevel, levels } from '../game/levels';
import { getStars, selectDonut, expandTray, matchTray } from '../game/engine';
import type { GameState } from '../game/types';
import type { GameAction } from '../game/reducer';
import { MOVE_DURATION, createEffects } from '../effects/turnEffects';

interface Props { state: GameState; dispatch: (action: GameAction) => void; onLevels: () => void; onNext: () => void }
export function GamePage({ state, dispatch, onLevels, onNext }: Props) {
  const level = getLevel(state.levelId);
  const root = useRef<HTMLElement>(null);
  const latest = useRef(state);
  const matchTimers = useRef(new Set<ReturnType<typeof setTimeout>>());
  useLayoutEffect(() => { latest.current = state; }, [state]);
  const activeEffects = useRef(new Set<ReturnType<typeof createEffects>>());
  const mounted = useRef(true);
  const [inFlight, setInFlight] = useState<ReadonlySet<string>>(new Set());
  useEffect(() => {
    mounted.current = true;
    const active = activeEffects.current;
    const timers = matchTimers.current;
    return () => { mounted.current = false; for (const effect of active) effect.cleanup(); active.clear(); for (const timer of timers) clearTimeout(timer); timers.clear(); };
  }, []);
  function act(action: GameAction) {
    if (action.type === 'RESTART') { for (const timer of matchTimers.current) clearTimeout(timer); matchTimers.current.clear(); }
    const current = latest.current;
    const currentLevel = getLevel(current.levelId);
    const committedAction: GameAction = action.type === 'SELECT_DONUT' ? { ...action, type: 'QUEUE_DONUT' } : action;
    const result = action.type === 'SELECT_DONUT'
      ? selectDonut(current, currentLevel, action.queueIndex, action.expectedDonutId, true)
      : action.type === 'MATCH_TRAY' ? matchTray(current, currentLevel, action.donutId)
      : action.type === 'EXPAND_TRAY' ? expandTray(current, currentLevel) : null;
    if (!result) { dispatch(action); return; }
    if (result.state === current || !root.current) return;
    const effects = createEffects();
    activeEffects.current.add(effects);
    const moved = result.events.find(event => event.type === 'moved');
    // Capture all geometry before the DOM changes, but commit the action immediately.
    const feedback = effects.play(root.current, current, result.events);
    flushSync(() => {
      if (moved && result.state.tray.some(token => token.id === moved.donutId)) {
        setInFlight(previous => new Set([...previous, moved.donutId]));
      }
      dispatch(committedAction);
    });
    if (moved) {
      const timer = setTimeout(() => { matchTimers.current.delete(timer); if (mounted.current) act({ type: 'MATCH_TRAY', donutId: moved.donutId }); }, MOVE_DURATION + 200);
      matchTimers.current.add(timer);
    }
    void feedback.catch(() => undefined).finally(() => {
      if (mounted.current && moved) flushSync(() => setInFlight(previous => {
        const next = new Set(previous); next.delete(moved.donutId); return next;
      }));
      effects.cleanup();
      activeEffects.current.delete(effects);
    });
  }

  const resultHeading = useRef<HTMLHeadingElement>(null);
  const { status } = state;
  const playing = status === 'playing';
  const resultTitles = {
    ready: '다시 도전해요',
    paused: '다시 도전해요',
    clear: '레벨 클리어!',
    blocked: '트레이가 가득 찼어요',
    gameover: state.tray.length >= state.trayCapacity ? '트레이에 빈칸이 없어요' : '대기열의 도넛을 모두 사용했어요',
  };
  const failed = status === 'blocked' || status === 'gameover';
  const [presentedClear, setPresentedClear] = useState<GameState | null>(null);
  const waitingForGoodbye = status === 'clear' && presentedClear !== state;
  const showResult = !playing && !waitingForGoodbye;
  const illustratedResult = showResult && (failed || status === 'clear');
  const stars = status === 'clear' ? getStars(state) : 0;
  const lastLevel = state.levelId === levels[levels.length - 1]?.id;
  useEffect(() => {
    if (state.status !== 'clear') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setPresentedClear(state), reduceMotion ? 0 : CUSTOMER_GOODBYE_MS);
    return () => clearTimeout(timer);
  }, [state]);
  useEffect(() => {
    if (showResult) resultHeading.current?.focus();
  }, [showResult, status]);
  return <main className={`game-page game-status--${waitingForGoodbye ? 'playing' : status}`} ref={root}>
    {illustratedResult && <ShopAwning />}
    <GameHeader level={state.levelId} completed={state.completedOrders} target={level.targetOrders} onBack={onLevels} />
    <p className="sr-only" role="status" aria-live="polite">주문 {state.completedOrders}개 완료. 트레이 {state.tray.length} / {state.trayCapacity}칸.</p>
    {showResult && <section className="result-panel" aria-labelledby="result-heading">
      {status === 'clear' && <div className="result-stars" role="img" aria-label={`별 ${stars}개`}>
        {[0, 1, 2].map(index => <span key={index} className={index < stars ? 'result-star--earned' : ''}><Icon name="star" /></span>)}
      </div>}
      {failed && <ShopArt art={status === 'blocked' ? 'tray-full' : 'try-again'} className="result-character" />}
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1}>{status === 'clear' && lastLevel ? '전체 클리어!' : resultTitles[status]}</h2>
      {status === 'clear' && <>
        <ShopArt art="order-complete" className="result-box" />
        <p className="result-order-count">주문 완료 <strong>{state.completedOrders} / {level.targetOrders}</strong></p>
      </>}
      {failed && <div className="result-tray" aria-label={`트레이 ${state.tray.length} / ${state.trayCapacity}칸`}>
        {state.tray.slice(-6).map(donut => <Donut key={donut.id} type={donut.type} />)}
      </div>}
      {status === 'blocked' && <p>트레이를 확장하면<br />도넛을 2개 더 담을 수 있어요!</p>}
      <div className="result-actions">
        {status === 'blocked' && <button className="primary-button" onClick={() => act({ type: 'EXPAND_TRAY' })}>트레이 확장 +2</button>}
        {status === 'clear' && !lastLevel && <button className="primary-button" onClick={onNext}>다음 레벨 <Icon name="arrow" /></button>}
        <button className="secondary-button" onClick={() => act({ type: 'RESTART' })}><Icon name="retry" />다시 하기</button>
        {status !== 'blocked' && <button className="secondary-button" onClick={onLevels}><Icon name="grid" />레벨 선택</button>}
      </div>
    </section>}
    {(playing || waitingForGoodbye) && <div className="game-board">
    <OrderBoard orders={state.orders} definitions={level.orders} />
    <DonutTray inFlight={inFlight} donuts={state.tray} capacity={state.trayCapacity} expandUsed={state.expandUsed} disabled={!playing} onExpand={() => { void act({ type: 'EXPAND_TRAY' }); }} />
    <DonutQueue queues={state.queues} disabled={!playing || state.tray.length >= state.trayCapacity} onSelect={(queueIndex, expectedDonutId) => { void act({ type: 'SELECT_DONUT', queueIndex, expectedDonutId }); }} />
    </div>}
    {showResult && status === 'clear' && <div className="confetti" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span key={i} style={{ left: `${(i * 29) % 100}%`, background: ['#ed96a6', '#a8d8c8', '#f5c66b', '#af9aca'][i % 4], animationDelay: `${(i % 9) * 55}ms`, transform: `rotate(${i * 37}deg)` }} />)}</div>}
  </main>;
}
