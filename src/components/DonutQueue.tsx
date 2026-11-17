import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
export function DonutQueue({ queues, disabled, onSelect }: { queues: DonutToken[][]; disabled: boolean; onSelect: (queueIndex: number, expectedDonutId: string) => void }) {
  return <section className="queue-section" aria-labelledby="queue-title">
    <div className="section-heading"><h2 id="queue-title">다음 도넛은?</h2><span>맨 앞 도넛부터 골라요</span></div>
    <div className="queue-grid">{queues.map((queue, i) => <div className="queue-column" key={i}><span className="queue-number">{String(i + 1).padStart(2, '0')}</span>{queue.slice(0, 4).map((donut, depth) => depth === 0 ? <button className="queue-front" key={donut.id} disabled={disabled} onClick={() => onSelect(i, donut.id)} aria-label={`${i + 1}번 대기열 ${donutThemes[donut.type].name} 도넛 선택`}><Donut type={donut.type} /><span className="front-marker" /></button> : <div className={`queue-back queue-back--${depth}`} key={donut.id}><Donut type={donut.type} /></div>)}</div>)}</div>
    <div className="queue-hint"><span>♡</span> 서두르지 않아도 괜찮아요. 달콤한 한 수를 찾아보세요.</div>
  </section>;
}
