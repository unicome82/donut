import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
export function DonutQueue({ queues, disabled, onSelect }: { queues: DonutToken[][]; disabled: boolean; onSelect: (queueIndex: number, expectedDonutId: string) => void }) {
  const depth = Math.max(1, ...queues.map(queue => queue.length));
  return <section className="queue-section" aria-label="도넛 대기열 — 세로줄 어디서나 맨 위 도넛 선택">
    <div className="queue-grid">{queues.map((queue, i) => <button type="button" className="queue-column" key={i}
      style={{ gridTemplateRows: depth === 1 ? '24px' : `24px repeat(${depth - 1}, minmax(0, 14px))` }}
      disabled={disabled || !queue.length} onClick={() => { const front = queue[0]; if (front) onSelect(i, front.id); }}
      aria-label={`${i + 1}번 대기열, ${queue[0] ? `${donutThemes[queue[0].type].name} 도넛 선택, ${queue.length}개 남음` : '비어 있음'}`}>
      {queue.map((donut, position) => <span className={position === 0 ? 'queue-front' : 'queue-back'} key={donut.id} data-token-id={donut.id}><Donut type={donut.type} /></span>)}
      {queue.length === 0 && <span className="queue-empty">—</span>}
    </button>)}</div>
  </section>;
}
