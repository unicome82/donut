import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { getLevel, levels } from '../game/levels';
import { getStars, selectDonut, expandTray } from '../game/engine';
import type { GameState } from '../game/types';
import type { GameAction } from '../game/reducer';
import { createEffects } from '../effects/turnEffects';

interface Props { state: GameState; dispatch: (action: GameAction) => void; onLevels: () => void; onNext: () => void }
export function GamePage({ state, dispatch, onLevels, onNext }: Props) {
  const level = getLevel(state.levelId);
  const root = useRef<HTMLElement>(null);
  const running = useRef<ReturnType<typeof createEffects> | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => () => { running.current?.cleanup(); running.current = null; }, []);
  async function act(action: GameAction) {
    if (running.current) return;
    const result = action.type === 'SELECT_DONUT'
      ? selectDonut(state, level, action.queueIndex, action.expectedDonutId)
      : action.type === 'EXPAND_TRAY' ? expandTray(state, level) : null;
    if (!result) { dispatch(action); return; }
    if (result.state === state || !root.current) return;
    const effects = createEffects();
    running.current = effects;
    setBusy(true);
    try { await effects.play(root.current, state, result.events); }
    catch { /* A presentation failure must not discard the valid game action. */ }
    finally {
      if (running.current === effects) {
        // Commit the destination first; only then remove the overlay and reveal real tokens.
        flushSync(() => { dispatch(action); setBusy(false); });
        running.current = null;
      }
      effects.cleanup();
    }
  }

  const resultHeading = useRef<HTMLHeadingElement>(null);
  const playing = state.status === 'playing';
  const lastLevel = state.levelId === levels[levels.length - 1]?.id;
  useEffect(() => {
    if (state.status !== 'playing') resultHeading.current?.focus();
  }, [state.status]);
  return <main className={`game-page game-status--${state.status}`} ref={root} aria-busy={busy}>
    <GameHeader level={state.levelId} completed={state.completedOrders} target={level.targetOrders} onBack={() => { if (!busy) { if (playing) dispatch({ type: 'PAUSE' }); else onLevels(); } }} onPause={() => dispatch({ type: 'PAUSE' })} canPause={playing && !busy} />
    <p className="sr-only" role="status" aria-live="polite">주문 {state.completedOrders}개 완료. 트레이 {state.tray.length} / {state.trayCapacity}칸.</p>
    {!playing ? <section className="result-panel" aria-labelledby="result-heading">
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1}>{state.status === 'clear' ? (lastLevel ? '전체 클리어!' : '레벨 클리어!') : state.status === 'blocked' ? '트레이가 가득 찼어요' : state.status === 'paused' ? '잠깐 쉬어가요' : '다시 도전해요'}</h2>
      {state.status === 'clear' && <p className="result-stars" aria-label={getStars(state) + '성'}>{'★'.repeat(getStars(state))}{'☆'.repeat(3 - getStars(state))}</p>}
      {state.status === 'blocked' && <p>무료 +2칸 확장해 계속할 수 있어요.</p>}
      <div className="result-actions">
        {state.status === 'blocked' ? <><button className="primary-button" disabled={busy} onClick={() => { void act({ type: 'EXPAND_TRAY' }); }}>무료 +2칸 확장</button><button className="secondary-button" disabled={busy} onClick={() => dispatch({ type: 'DECLINE_EXPAND' })}>종료</button></>
        : <>{state.status === 'paused' && <button className="primary-button" onClick={() => dispatch({ type: 'RESUME' })}>계속하기</button>}
          {state.status === 'clear' && !lastLevel && <button className="primary-button" onClick={onNext}>다음 레벨</button>}
          <button className={state.status === 'gameover' ? 'primary-button' : 'secondary-button'} onClick={() => dispatch({ type: 'RESTART' })}>다시 하기</button>
          <button className="secondary-button" onClick={onLevels}>레벨 선택</button>
        </>}
      </div>
    </section> : <div className="game-board">
    <OrderBoard orders={state.orders} />
    <DonutTray donuts={state.tray} capacity={state.trayCapacity} expandUsed={state.expandUsed} disabled={!playing || busy} onExpand={() => { void act({ type: 'EXPAND_TRAY' }); }} />
    <DonutQueue queues={state.queues} disabled={!playing || busy} onSelect={(queueIndex, expectedDonutId) => { void act({ type: 'SELECT_DONUT', queueIndex, expectedDonutId }); }} />
    </div>}
    {state.status === 'clear' && <div className="confetti" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span key={i} style={{ left: `${(i * 29) % 100}%`, background: ['#ed96a6', '#a8d8c8', '#f5c66b', '#af9aca'][i % 4], animationDelay: `${(i % 9) * 55}ms`, transform: `rotate(${i * 37}deg)` }} />)}</div>}
  </main>;
}
