import { Icon } from '../components/Icon';
import popupRibbon from '../assets/game/popup-ribbon.webp';
import popupCat from '../assets/game/popup-cat.webp';
import clearDesserts from '../assets/game/clear-desserts.webp';
import rewardStar from '../assets/game/reward-star.webp';
import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { getStage, isBonusStage, practiceStage, STAGE_COUNT } from '../game/stages';
import { HeartIcon } from '../components/HeartIcon';
import { getReadyTrayPickupOrders, getStars, selectDonut, clearTray, matchTray, pickupTray } from '../game/engine';
import type { DonutType, GameState } from '../game/types';
import type { GameAction } from '../game/reducer';
import { getStageTimeLimit, getTimeStars } from '../game/stageTime';
import { StageClock } from '../components/StageClock';
import { playSound, setMusicMood } from '../effects/sound';
import { haptic } from '../effects/haptics';
import { useMessages } from '../i18n/language';
import { createEffects } from '../effects/turnEffects';
import { SoundControls } from '../components/SoundControls';

// Keep the standard pickup cadence independent of visual effect duration.
const TRAY_READY_DELAY = 235;
const PICKUP_INTERVAL = 100;
const BONUS_INTRO_MS = 1800;

interface Delivery { orderId: string; type: DonutType }

interface Props {
  soundEnabled: boolean; onToggleSound: () => void; state: GameState; dispatch: (action: GameAction) => void; onStages: () => void; onNext: () => void;
  /** Whether a heart is available for another attempt; when not, onOutOfHearts runs instead of the restart. */
  canRestart: () => boolean; onOutOfHearts: () => void;
}
export function GamePage({ state, dispatch, onStages, onNext, soundEnabled, onToggleSound, canRestart, onOutOfHearts }: Props) {
  const t = useMessages();
  const root = useRef<HTMLElement>(null);
  const latest = useRef(state);
  const matchTimers = useRef(new Set<ReturnType<typeof setTimeout>>());
  const deferredMatches = useRef<string[]>([]);
  useLayoutEffect(() => { latest.current = state; }, [state]);
  const activeEffects = useRef(new Set<ReturnType<typeof createEffects>>());
  const mounted = useRef(true);
  const [readyOrders, setReadyOrders] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const timeLimit = getStageTimeLimit(getStage(state.stageId));
  const [deadline, setDeadline] = useState(() => performance.now() + timeLimit);
  const [pausedTimeMs, setPausedTimeMs] = useState<number>();
  const [remainingTimeMs, setRemainingTimeMs] = useState(timeLimit);
  const timerRunning = timeLimit > 0 && state.status === 'playing';
  const showClock = timerRunning || (timeLimit > 0 && (state.status === 'blocked' || state.status === 'paused'));
  const expireStage = useEffectEvent(() => dispatch({ type: 'TIME_EXPIRED' }));
  useLayoutEffect(() => {
    if (!timerRunning) return;
    const updateClock = () => {
      const remaining = Math.max(0, deadline - performance.now());
      setRemainingTimeMs(remaining);
      if (remaining === 0) expireStage();
    };
    const interval = setInterval(updateClock, 100);
    const deadlineTimer = setTimeout(updateClock, Math.max(0, Math.ceil(deadline - performance.now())));
    return () => { clearInterval(interval); clearTimeout(deadlineTimer); };
  }, [deadline, timerRunning]);
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
    let timer: ReturnType<typeof setTimeout>;
    const runPickup = () => {
      const remaining = Math.ceil(nextTime - performance.now());
      if (remaining > 0) {
        timer = setTimeout(runPickup, remaining);
        return;
      }
      pickup();
    };
    timer = setTimeout(runPickup, Math.max(0, Math.ceil(nextTime - performance.now())));
    return () => clearTimeout(timer);
  }, [state, readyOrders]);
  const [pendingDeliveries, setPendingDeliveries] = useState<Delivery[]>([]);
  const [returning, setReturning] = useState<ReadonlySet<string>>(new Set());
  const [inFlight, setInFlight] = useState<ReadonlySet<string>>(new Set());
  useEffect(() => {
    mounted.current = true;
    const active = activeEffects.current;
    const timers = matchTimers.current;
    return () => { mounted.current = false; for (const effect of active) effect.cleanup(); active.clear(); for (const timer of timers) clearTimeout(timer); timers.clear(); };
  }, []);
  function act(action: GameAction) {
    if (action.type === 'RESTART' && !canRestart()) { onOutOfHearts(); return; }
    if (action.type === 'RESTART') {
      for (const timer of matchTimers.current) clearTimeout(timer);
      matchTimers.current.clear();
      for (const effect of activeEffects.current) effect.cleanup();
      activeEffects.current.clear();
      setInFlight(new Set());
      setReturning(new Set());
      setPendingDeliveries([]);
      setReadyOrders([]);
      setRound(previous => previous + 1);
      setDeadline(performance.now() + timeLimit);
      setRemainingTimeMs(timeLimit);
      setPausedTimeMs(undefined);
      nextPickupAt.current.clear();
      deferredMatches.current = [];
    }
    const current = latest.current;
    const now = performance.now();
    const remaining = timeLimit > 0
      ? (current.status === 'blocked' || current.status === 'paused' ? pausedTimeMs : undefined) ?? Math.max(0, deadline - now)
      : undefined;
    if (action.type !== 'RESTART' && remaining === 0) {
      dispatch({ type: 'TIME_EXPIRED' });
      return;
    }
    if (action.type === 'TRAY_READY' && current.status === 'paused') {
      deferredMatches.current.push(action.donutId);
      return;
    }
    if (action.type === 'PAUSE') {
      if (current.status !== 'playing') return;
      setPausedTimeMs(remaining);
      if (soundEnabled) playSound('pause');
      dispatch(action);
      return;
    }
    if (action.type === 'RESUME') {
      if (current.status !== 'paused') return;
      if (soundEnabled) playSound('resume');
      if (remaining !== undefined) {
        setDeadline(now + remaining);
        setRemainingTimeMs(remaining);
      }
      setPausedTimeMs(undefined);
      const deferred = deferredMatches.current;
      deferredMatches.current = [];
      flushSync(() => dispatch(action));
      for (const donutId of deferred) act({ type: 'TRAY_READY', donutId });
      return;
    }
    const currentStage = getStage(current.stageId);
    const committedAction: GameAction = action.type === 'SELECT_DONUT' ? { ...action, type: 'QUEUE_DONUT' } : action;
    const result = action.type === 'SELECT_DONUT'
      ? selectDonut(current, currentStage, action.queueIndex, action.expectedDonutId, true)
      : action.type === 'TRAY_READY' ? matchTray(current, currentStage, action.donutId, true)
      : action.type === 'PICKUP_TRAY' ? pickupTray(current, currentStage, action.readyOrders, action.parallel)
      : action.type === 'CLEAR_TRAY' ? clearTray(current, currentStage) : null;
    if (!result) { dispatch(action); return; }
    if (result.state === current || !root.current) return;
    if (action.type === 'CLEAR_TRAY') {
      haptic('select');
      if (soundEnabled) playSound('clearTray');
    }
    if (result.state.status === 'blocked' && current.status !== 'blocked') {
      setPausedTimeMs(remaining);
    }
    if (action.type === 'TRAY_READY') {
      dispatch({ ...action, remainingTimeMs: remaining });
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
    const deliveries = result.events.flatMap(event => {
      if (event.type !== 'consumed') return [];
      const token = current.tray.find(donut => donut.id === event.donutId);
      return token ? [{ orderId: event.orderId, type: token.type }] : [];
    });
    const animateDelivery = document.visibilityState === 'visible' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealDeliveries = (orderId?: string) => {
      if (!deliveries.length) return;
      setPendingDeliveries(previous => previous.filter(delivery =>
        !deliveries.includes(delivery) || (orderId !== undefined && delivery.orderId !== orderId)));
    };
    // Capture all geometry before the DOM changes, but commit the action immediately.
    const returned = result.events.flatMap(event => event.type === 'returned' ? [event.donutId] : []);
    const completed = new Set(result.events.flatMap(event => event.type === 'orderCompleted' ? [event.orderId] : []));
    const feedback = effects.play(root.current, current, result.events, orderId => {
      flushSync(() => revealDeliveries(orderId));
      const orderDone = completed.delete(orderId);
      if (orderDone) haptic('order');
      if (soundEnabled) playSound(orderDone ? 'order' : 'delivery');
    });
    flushSync(() => {
      if (action.type === 'CLEAR_TRAY' && remaining !== undefined) {
        setDeadline(now + remaining);
        setRemainingTimeMs(remaining);
        setPausedTimeMs(undefined);
      }
      if (animateDelivery && returned.length) setReturning(new Set(returned));
      if (animateDelivery && deliveries.length) setPendingDeliveries(previous => [...previous, ...deliveries]);
      if (moved && result.state.tray.some(token => token.id === moved.donutId)) {
        setInFlight(previous => new Set([...previous, moved.donutId]));
      }
      dispatch({ ...committedAction, remainingTimeMs: remaining });
    });
    if (moved) haptic('select');
    if (soundEnabled && moved) playSound('select');
    if (moved) {
      const timer = setTimeout(() => {
        matchTimers.current.delete(timer);
        if (mounted.current && latest.current.stageId === current.stageId) act({ type: 'TRAY_READY', donutId: moved.donutId });
      }, TRAY_READY_DELAY);
      matchTimers.current.add(timer);
    }
    void feedback.catch(() => undefined).finally(() => {
      if (!activeEffects.current.delete(effects)) return;
      if (mounted.current && latest.current.stageId === current.stageId) {
        revealDeliveries();
        if (returned.length) flushSync(() => setReturning(new Set()));
        if (moved) flushSync(() => setInFlight(previous => {
          const next = new Set(previous);
          next.delete(moved.donutId);
          return next;
        }));
      }
      effects.cleanup();
    });
  }

  const trayDialog = useRef<HTMLDialogElement>(null);
  const pauseDialog = useRef<HTMLDialogElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const { status } = state;
  const playing = status === 'playing';
  useLayoutEffect(() => {
    const dialog = trayDialog.current;
    if (!dialog) return;
    if (status === 'blocked' && !dialog.open) dialog.showModal();
    else if (status !== 'blocked' && dialog.open) dialog.close();
    const pause = pauseDialog.current;
    if (!pause) return;
    if (status === 'paused' && !pause.open) pause.showModal();
    else if (status !== 'paused' && pause.open) pause.close();
  }, [status]);
  const showGoodbye = status === 'clear';
  const resultTitles = {
    ready: t.tryAgain,
    paused: t.tryAgain,
    clear: 'Stage Clear!',
    blocked: state.blockedReason === 'stuck' ? t.noMoves : t.trayFull,
    gameover: state.timeExpired ? t.timeUp : state.trayClearsLeft > 0 ? t.tryAgain : state.blockedReason === 'stuck' ? t.noMoves : t.trayFull,
  };
  const failed = status === 'gameover';
  const boardVisible = playing || status === 'blocked' || status === 'paused';
  const [presentedResult, setPresentedResult] = useState<GameState | null>(null);
  const waitingForGoodbye = showGoodbye && presentedResult !== state;
  const showResult = !boardVisible && !waitingForGoodbye;
  const playTrayFullSound = useEffectEvent(() => {
    haptic('blocked');
    if (soundEnabled) playSound('blocked');
  });
  useEffect(() => {
    if (status === 'blocked') playTrayFullSound();
  }, [status]);
  const resultWasShown = useRef(false);
  useEffect(() => {
    const newlyShown = showResult && !resultWasShown.current;
    resultWasShown.current = showResult;
    if (!newlyShown) return;
    if (status === 'clear') haptic('clear');
    else if (status === 'gameover') haptic('failed');
    if (!soundEnabled) return;
    if (status === 'clear') playSound('clear');
    else if (status === 'gameover') playSound('failed');
  }, [showResult, soundEnabled, status]);
  const stars = status === 'clear' ? getStars(state) : 0;
  const stage = getStage(state.stageId);
  const trayFull = state.tray.length >= state.trayCapacity;
  function rejectSelection(element: HTMLElement) {
    haptic('denied');
    if (soundEnabled) playSound('denied');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const shake = [{ translate: '0' }, { translate: '-3px' }, { translate: '3px' }, { translate: '-2px' }, { translate: '0' }];
    const target = trayFull ? root.current?.querySelector('.tray-section') ?? element : element;
    target.animate(shake, { duration: 220, easing: 'ease-out' });
  }
  const lastStage = state.stageId === STAGE_COUNT;
  const bonus = isBonusStage(state.stageId);
  // A bonus stage opens with its title in the middle; taps wait until it has gone.
  const [bonusIntro, setBonusIntro] = useState(bonus);
  // Every stage opens with a chime (practice excepted); bonus stages get a grander one.
  const playStartSound = useEffectEvent(() => {
    if (soundEnabled && state.stageId !== practiceStage.id) playSound(bonus ? 'bonusStart' : 'stageStart');
  });
  useEffect(() => { playStartSound(); }, [round]);
  useEffect(() => {
    if (!bonusIntro) return;
    const timer = setTimeout(() => setBonusIntro(false), BONUS_INTRO_MS);
    return () => clearTimeout(timer);
  }, [bonusIntro]);
  useEffect(() => {
    if (!showGoodbye) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setPresentedResult(state), reduceMotion ? 0 : CUSTOMER_GOODBYE_MS);
    return () => clearTimeout(timer);
  }, [showGoodbye, state]);
  useEffect(() => {
    if (showResult) resultHeading.current?.focus();
  }, [showResult, status]);
  // Red edge from one star left; in the last 10 seconds it shows and pulses whatever the stars.
  const timed = playing && !waitingForGoodbye && timeLimit > 0;
  const danger = timed && getTimeStars(remainingTimeMs, timeLimit) === 1;
  const urgent = timed && remainingTimeMs <= 10_000;
  // Tension cues: a falling chime when a star is lost, clock ticks through the last ten seconds.
  const timeStars = timeLimit > 0 ? getTimeStars(remainingTimeMs, timeLimit) : 0;
  const previousTimeStars = useRef(timeStars);
  const lastTickSecond = useRef<number>(undefined);
  useEffect(() => {
    const lostStar = timeStars < previousTimeStars.current;
    previousTimeStars.current = timeStars;
    if (!timed) { lastTickSecond.current = undefined; return; }
    if (lostStar && timeStars > 0) {
      if (soundEnabled) playSound('starLost');
      return;
    }
    // The 10-second practice stage would tick throughout, so ticks start only on longer stages.
    if (timeLimit < 30_000 || remainingTimeMs > 10_000 || remainingTimeMs <= 0) return;
    const second = Math.ceil(remainingTimeMs / 1000);
    if (lastTickSecond.current === undefined) { lastTickSecond.current = second; return; }
    if (second === lastTickSecond.current) return;
    lastTickSecond.current = second;
    if (soundEnabled) playSound(second <= 3 ? 'tickUrgent' : 'tick');
  }, [remainingTimeMs, soundEnabled, timeLimit, timeStars, timed]);
  useEffect(() => {
    setMusicMood(status === 'paused' || status === 'blocked' || showResult ? 'muted' : urgent ? 'urgent' : 'normal');
  }, [showResult, status, urgent]);
  useEffect(() => () => setMusicMood('normal'), []);
  return <main className={`game-page game-status--${waitingForGoodbye || status === 'paused' ? 'playing' : status}${danger ? ' game-page--danger' : ''}${urgent ? ' game-page--urgent' : ''}`} ref={root}>
    {!showResult && <GameHeader stage={state.stageId} title={bonus ? 'Bonus Stage' : undefined} onPause={() => act({ type: 'PAUSE' })} canPause={playing && !waitingForGoodbye} soundEnabled={soundEnabled} onToggleSound={onToggleSound} />}
    {(showClock || (timeLimit > 0 && waitingForGoodbye)) && <StageClock limitMs={timeLimit} remainingMs={pausedTimeMs ?? remainingTimeMs} />}
    <p className="sr-only" role="status" aria-live="polite">{t.status(state.completedOrders, state.tray.length, state.trayCapacity)} {returning.size > 0 && t.returned}</p>
    {showResult && <section className="glass-popup result-panel" aria-labelledby="result-heading">
      {status === 'clear' && <img className="popup-ribbon" src={popupRibbon} alt="" draggable={false} />}
      {status === 'clear' && bonus && <div className="result-heart" role="img" aria-label={t.heartGained}>
        <HeartIcon /><span lang="en">+1</span>
      </div>}
      {status === 'clear' && !bonus && <div className="result-stars" role="img" aria-label={t.starsCount(stars)}>
        {[0, 1, 2].map(index => <span key={index} className={index < stars ? 'result-star--earned' : 'star--unearned'}><img src={rewardStar} alt="" draggable={false} /></span>)}
      </div>}
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1} className={status === 'clear' ? 'result-display-title' : undefined}>
        {status === 'clear' && bonus ? 'Bonus Clear!' : status === 'clear' && lastStage ? 'All Stages Clear!' : resultTitles[status]}
      </h2>
      {status === 'clear' && <img className="result-desserts" src={clearDesserts} alt="" draggable={false} />}
      {failed && <div className="result-progress" role="img" aria-label={t.ordersDoneLabel(state.completedOrders, stage.targetOrders)}>
        <span className="result-progress-label" aria-hidden="true">{t.ordersDone} <strong>{state.completedOrders}</strong> / {stage.targetOrders}</span>
        <span className="result-progress-track" aria-hidden="true"><span style={{ width: `${state.completedOrders / stage.targetOrders * 100}%` }} /></span>
      </div>}
      <div className="result-actions">
        {status === 'clear' && !lastStage && <button type="button" className="primary-button popup-primary-button next-stage-button" onClick={onNext}>{t.nextStage}</button>}
        {/* A bonus stage pays out once, so its clear offers no replay. */}
        {!(bonus && status === 'clear') && <button type="button" className={failed ? 'primary-button popup-primary-button' : 'secondary-button'} onClick={() => act({ type: 'RESTART' })}><Icon name="retry" />{t.retry}</button>}
        <button type="button" className="secondary-button" onClick={onStages}><Icon name="grid" />{t.stageSelect}</button>
      </div>
    </section>}
    {(boardVisible || waitingForGoodbye) && <div className="game-board">
    <OrderBoard key={round} orders={pendingDeliveries.length ? state.orders.map(order => {
      if (!order) return null;
      const remaining = { ...order.remaining };
      for (const delivery of pendingDeliveries) {
        if (delivery.orderId === order.definitionId) remaining[delivery.type] = (remaining[delivery.type] ?? 0) + 1;
      }
      return { ...order, remaining };
    }) : state.orders} stageId={state.stageId} onOrderReady={onOrderReady} />
    <DonutTray inFlight={inFlight} donuts={state.tray} capacity={state.trayCapacity} difficulty={stage.difficulty} clearsLeft={state.trayClearsLeft}
      canClear={playing && !waitingForGoodbye && state.tray.length > 0 && !state.pendingMatchIds?.length && inFlight.size === 0 && returning.size === 0}
      onClear={() => act({ type: 'CLEAR_TRAY' })} />
    <DonutQueue queues={state.queues} returning={returning} disabled={!playing || waitingForGoodbye || returning.size > 0 || bonusIntro} locked={trayFull} onReject={(_, element) => rejectSelection(element)} onSelect={(queueIndex, expectedDonutId) => { void act({ type: 'SELECT_DONUT', queueIndex, expectedDonutId }); }} />
    </div>}
    <dialog className="glass-popup tray-full-dialog pause-dialog" ref={pauseDialog} aria-labelledby="pause-heading" onCancel={event => { event.preventDefault(); act({ type: 'RESUME' }); }}>
      <h2 id="pause-heading">{t.pause}</h2>
      <div className="result-actions">
        <button type="button" data-sfx="none" className="primary-button popup-primary-button" onClick={() => act({ type: 'RESUME' })}><Icon name="play" />{t.resume}</button>
        <button type="button" className="secondary-button" onClick={() => act({ type: 'RESTART' })}><Icon name="retry" />{t.retry}</button>
        <button type="button" className="secondary-button" onClick={onStages}><Icon name="grid" />{t.stageSelect}</button>
      </div>
      <SoundControls soundEnabled={soundEnabled} onToggleSound={onToggleSound} />
    </dialog>
    <dialog className="glass-popup tray-full-dialog" ref={trayDialog} aria-labelledby="tray-full-heading" onCancel={event => event.preventDefault()}>
      <img className="popup-cat" src={popupCat} alt="" draggable={false} />
      <h2 id="tray-full-heading">{resultTitles.blocked}</h2>
      <div className="result-actions">
        <button type="button" data-sfx="none" className="primary-button popup-primary-button tray-clear-button" onClick={() => act({ type: 'CLEAR_TRAY' })} aria-label={t.clearTrayLabel(state.trayClearsLeft)}>
          <Icon name="basket" />{t.clearTray} <span className="tray-clear-count" aria-hidden="true">{state.trayClearsLeft}</span>
        </button>
        <button type="button" className="secondary-button" onClick={() => act({ type: 'RESTART' })}><Icon name="retry" />{t.retry}</button>
        <button type="button" className="secondary-button" onClick={() => act({ type: 'GIVE_UP' })}>{t.giveUp}</button>
      </div>
    </dialog>
    {bonusIntro && <div className="bonus-intro" aria-hidden="true"><span>Bonus Stage!</span></div>}
    {showResult && status === 'clear' && <div className="confetti" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span key={i} style={{ left: `${(i * 29) % 100}%`, background: ['#ed96a6', '#a8d8c8', '#f5c66b', '#af9aca'][i % 4], animationDelay: `${(i % 9) * 55}ms`, transform: `rotate(${i * 37}deg)` }} />)}</div>}
  </main>;
}
