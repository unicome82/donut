import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { itemNames } from './Donut/donutThemes';
export function DonutTray({ donuts, capacity, inFlight }: { donuts: DonutToken[]; capacity: number; inFlight?: ReadonlySet<string> }) {
  const remaining = capacity - donuts.length;
  const nearFull = remaining <= 2;
  return <section className={`tray-section${nearFull ? ' tray-section--near-full' : ''}`} aria-label="트레이">
    {nearFull && <span className="tray-warning">{remaining}칸 남음</span>}
    <div className="tray"><ol className="tray-slots">{Array.from({ length: capacity }, (_, i) => <li key={i} data-tray-slot={i} data-token-id={donuts[i]?.id} aria-label={donuts[i] ? `${itemNames[donuts[i].type]}` : `빈칸 ${i + 1}`}>{donuts[i] ? <span className="tray-donut" style={{ visibility: inFlight?.has(donuts[i].id) ? 'hidden' : undefined }}><Donut type={donuts[i].type} /></span> : null}</li>)}</ol></div>
  </section>;
}
