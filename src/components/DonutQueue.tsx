import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
export function DonutQueue({ queues, disabled, onSelect }: { queues: DonutToken[][]; disabled: boolean; onSelect: (queueIndex: number, expectedDonutId: string) => void }) {
  const depth = Math.max(1, ...queues.map(queue => queue.length));
  const rows = `44px repeat(${Math.max(0, depth - 1)}, minmax(0, 22px))`;
  return <section className="queue-section" aria-label="도넛 대기열 — 맨 앞 도넛 선택">
    <div className="queue-grid">{queues.map((queue, i) => <div className="queue-column" key={i} style={{ gridTemplateRows: depth === 1 ? '44px' : rows }}>
      {queue.map((donut, depth) => depth === 0 ? <button className="queue-front" key={donut.id} disabled={disabled} onClick={() => onSelect(i, donut.id)} aria-label={`${i + 1}번 대기열 ${donutThemes[donut.type].name} 도넛 선택`}><Donut type={donut.type} /></button> : <div className={`queue-back queue-back--${depth}`} key={donut.id}><Donut type={donut.type} /></div>)}
      {queue.length === 0 && <span className="queue-empty" aria-label={`${i + 1}번 대기열 비어 있음`}>—</span>}
    </div>)}</div>
  </section>;
}
