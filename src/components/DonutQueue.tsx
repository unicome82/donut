import { useRef } from 'react';
import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { useMessages } from '../i18n/language';
import { HeartIcon } from './HeartIcon';
import { Icon } from './Icon';
export function DonutQueue({ queues, disabled, locked = false, returning, onSelect, onReject }: {
  queues: DonutToken[][]; disabled: boolean; locked?: boolean; returning: ReadonlySet<string>;
  onSelect: (queueIndex: number, expectedDonutId: string) => void;
  /** Called when a tap cannot pick anything: the tray is full or the column is empty. */
  onReject?: (queueIndex: number, element: HTMLElement) => void;
}) {
  const t = useMessages();
  const presses = useRef(new Map<number, number>());
  function selectColumn(column: number, element: HTMLElement) {
    if (disabled) return;
    const front = queues[column]?.[0];
    if (!locked && front) onSelect(column, front.id);
    else onReject?.(column, element);
  }

  const depth = Math.max(1, ...queues.map(queue => queue.length));
  return <section className="queue-section" aria-label={t.queueSection}>
    <div className="queue-grid">{queues.map((queue, i) => <button type="button" data-sfx="none" className={`queue-column${queue.some(donut => returning.has(donut.id)) ? ' queue-column--returning' : ''}`} key={i} data-queue-index={i}
      style={{ gridTemplateRows: depth === 1 ? 'var(--queue-head)' : `var(--queue-head) repeat(${depth - 1}, var(--queue-step))` }}
      disabled={disabled}
      aria-disabled={locked || !queue.length || undefined}
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
          selectColumn(i, event.currentTarget);
        }
      }}
      onClick={event => { if (event.detail === 0) selectColumn(i, event.currentTarget); }}
      aria-label={t.queueLabel(i + 1, queue[0] && t.items[queue[0].type], queue.length)}>
      {queue.map((donut, position) => <span
        className={position === 0 ? 'queue-front' : 'queue-back'}
        key={donut.id}
        data-token-id={donut.id}
        style={{ zIndex: position, visibility: returning.has(donut.id) ? 'hidden' : undefined }}>
        {donut.hidden && position > 0 ? <span className="donut donut--mystery">?</span> : <Donut type={donut.type} />}
        {donut.reward && <span className={`queue-reward queue-reward--${donut.reward}`} role="img"
          aria-label={t.rewardOnDessert(donut.reward === 'heart' ? t.rewardHeart : t.rewardTrayClear)}>
          {donut.reward === 'heart' ? <HeartIcon /> : <Icon name="basket" />}
        </span>}
      </span>)}
    </button>)}</div>
  </section>;
}
