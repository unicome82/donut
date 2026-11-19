import { useRef } from 'react';
import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { itemNames } from './Donut/donutThemes';
export function DonutQueue({ queues, disabled, onSelect }: { queues: DonutToken[][]; disabled: boolean; onSelect: (queueIndex: number, expectedDonutId: string) => void }) {
  const presses = useRef(new Map<number, number>());
  function selectColumn(column: number) {
    const front = queues[column]?.[0];
    if (!disabled && front) onSelect(column, front.id);
  }

  const depth = Math.max(1, ...queues.map(queue => queue.length));
  return <section className="queue-section" aria-label="메뉴 대기열 — 세로줄 어디서나 맨 위 메뉴 선택">
    <div className="queue-grid">{queues.map((queue, i) => <button type="button" className="queue-column" key={i}
      style={{ gridTemplateRows: depth === 1 ? 'var(--queue-head)' : `var(--queue-head) repeat(${depth - 1}, var(--queue-step))` }}
      disabled={disabled || !queue.length}
      onPointerDown={event => {
        if (event.button !== 0) return;
        presses.current.set(event.pointerId, i);
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onLostPointerCapture={event => presses.current.delete(event.pointerId)}
      onPointerCancel={event => presses.current.delete(event.pointerId)}
      onPointerUp={event => {
        const column = presses.current.get(event.pointerId);
        presses.current.delete(event.pointerId);
        const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
        if (column === i && event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom) {
          selectColumn(i);
        }
      }}
      onClick={event => { if (event.detail === 0) selectColumn(i); }}
      aria-label={`${i + 1}번 대기열, ${queue[0] ? `${itemNames[queue[0].type]} 선택, ${queue.length}개 남음` : '비어 있음'}`}>
      {queue.map((donut, position) => <span
        className={position === 0 ? 'queue-front' : 'queue-back'}
        key={donut.id}
        data-token-id={donut.id}
        style={{ zIndex: position }}>
        <Donut type={donut.type} />
      </span>)}
    </button>)}</div>
  </section>;
}
