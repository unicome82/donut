import { useEffect, useRef } from 'react';
import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { getLevel, levels } from '../game/levels';
import { getStars } from '../game/engine';
import type { GameState } from '../game/types';
import type { GameAction } from '../game/reducer';

interface Props { state: GameState; dispatch: (action: GameAction) => void; onLevels: () => void; onNext: () => void }
export function GamePage({ state, dispatch, onLevels, onNext }: Props) {
  const level = getLevel(state.levelId);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const playing = state.status === 'playing';
  const lastLevel = state.levelId === levels[levels.length - 1]?.id;
  useEffect(() => {
    if (state.status !== 'playing') resultHeading.current?.focus();
  }, [state.status]);
  return <main className="game-page">
    <GameHeader level={state.levelId} completed={state.completedOrders} target={level.targetOrders} onBack={() => playing ? dispatch({ type: 'PAUSE' }) : onLevels()} onPause={() => dispatch({ type: 'PAUSE' })} canPause={playing} />
    <p className="sr-only" role="status" aria-live="polite">주문 {state.completedOrders}개 완료. 트레이 {state.tray.length} / {state.trayCapacity}칸.</p>
    {!playing ? <section className="result-panel" aria-labelledby="result-heading">
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1}>{state.status === 'clear' ? (lastLevel ? '전체 클리어!' : '레벨 클리어!') : state.status === 'blocked' ? '트레이가 가득 찼어요' : state.status === 'paused' ? '잠깐 쉬어가요' : '다시 도전해요'}</h2>
      {state.status === 'clear' && <p className="result-stars" aria-label={getStars(state) + '성'}>{'★'.repeat(getStars(state))}{'☆'.repeat(3 - getStars(state))}</p>}
      {state.status === 'blocked' && <p>무료 +2칸 확장해 계속할 수 있어요.</p>}
      <div className="result-actions">
        {state.status === 'blocked' ? <><button className="primary-button" onClick={() => dispatch({ type: 'EXPAND_TRAY' })}>무료 +2칸 확장</button><button className="secondary-button" onClick={() => dispatch({ type: 'DECLINE_EXPAND' })}>종료</button></>
        : <>{state.status === 'paused' && <button className="primary-button" onClick={() => dispatch({ type: 'RESUME' })}>계속하기</button>}
          {state.status === 'clear' && !lastLevel && <button className="primary-button" onClick={onNext}>다음 레벨</button>}
          <button className={state.status === 'gameover' ? 'primary-button' : 'secondary-button'} onClick={() => dispatch({ type: 'RESTART' })}>다시 하기</button>
          <button className="secondary-button" onClick={onLevels}>레벨 선택</button>
        </>}
      </div>
    </section> : <div className="game-board">
    <OrderBoard orders={state.orders} />
    <DonutTray donuts={state.tray} capacity={state.trayCapacity} expandUsed={state.expandUsed} disabled={!playing} onExpand={() => dispatch({ type: 'EXPAND_TRAY' })} />
    <DonutQueue queues={state.queues} disabled={!playing} onSelect={(queueIndex, expectedDonutId) => dispatch({ type: 'SELECT_DONUT', queueIndex, expectedDonutId })} />
    </div>}
  </main>;
}
