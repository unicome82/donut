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
    <p className="play-guide">맨 앞 도넛을 누르면 주문에 자동으로 담겨요.</p>
    <p className="sr-only" role="status" aria-live="polite">주문 {state.completedOrders}개 완료. 트레이 {state.tray.length} / {state.trayCapacity}칸.</p>
    {!playing && <section className="result-panel" aria-labelledby="result-heading">
      <p className="eyebrow">{state.status === 'clear' ? 'SWEET SUCCESS' : state.status === 'blocked' ? 'A LITTLE MORE ROOM' : state.status === 'paused' ? 'TAKE A BREAK' : 'TRY ANOTHER WAY'}</p>
      <h2 id="result-heading" ref={resultHeading} tabIndex={-1}>{state.status === 'clear' ? (lastLevel ? '모든 레벨을 완성했어요!' : '주문을 모두 완성했어요!') : state.status === 'blocked' ? '트레이가 가득 찼어요' : state.status === 'paused' ? '잠깐 쉬어가요' : '이번 도전은 여기까지'}</h2>
      {state.status === 'clear' && <p className="result-stars" aria-label={getStars(state) + '성'}>{'★'.repeat(getStars(state))}{'☆'.repeat(3 - getStars(state))}</p>}
      <p>{state.status === 'clear' ? '트레이에 남은 도넛 ' + state.tray.length + '개 · 새로운 한 수에 도전해요.' : state.status === 'blocked' ? '무료로 2칸을 더하고 계속할 수 있어요. 레벨당 한 번만 사용할 수 있습니다.' : state.status === 'paused' ? '계속하거나 처음부터 다시 도전할 수 있어요.' : state.queues.every(q => q.length === 0) ? '대기열의 도넛을 모두 사용했어요.' : '주문에 사용할 수 있는 도넛이 없고 트레이가 가득 찼어요.'}</p>
      <div className="result-actions">
        {state.status === 'blocked' ? <><button className="primary-button" onClick={() => dispatch({ type: 'EXPAND_TRAY' })}>무료로 2칸 확장</button><button className="secondary-button" onClick={() => dispatch({ type: 'DECLINE_EXPAND' })}>확장 없이 종료</button></>
        : <>{state.status === 'paused' && <button className="primary-button" onClick={() => dispatch({ type: 'RESUME' })}>계속하기</button>}
          {state.status === 'clear' && !lastLevel && <button className="primary-button" onClick={onNext}>다음 레벨</button>}
          <button className={state.status === 'gameover' ? 'primary-button' : 'secondary-button'} onClick={() => dispatch({ type: 'RESTART' })}>처음부터 다시 하기</button>
          <button className="secondary-button" onClick={onLevels}>레벨 선택{state.status === 'paused' ? ' · 현재 판 종료' : ''}</button>
        </>}
      </div>
    </section>}
    <OrderBoard orders={state.orders} />
    <DonutTray donuts={state.tray} capacity={state.trayCapacity} expandUsed={state.expandUsed} disabled={!playing} onExpand={() => dispatch({ type: 'EXPAND_TRAY' })} />
    <DonutQueue queues={state.queues} disabled={!playing} onSelect={(queueIndex, expectedDonutId) => dispatch({ type: 'SELECT_DONUT', queueIndex, expectedDonutId })} />
    <footer className="game-footer">A LITTLE PUZZLE, A LITTLE JOY.</footer>
  </main>;
}
