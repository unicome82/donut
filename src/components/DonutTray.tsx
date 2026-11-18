import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
export function DonutTray({ donuts, capacity, expandUsed, disabled, onExpand, inFlight }: { donuts: DonutToken[]; capacity: number; expandUsed: boolean; disabled: boolean; onExpand: () => void; inFlight?: ReadonlySet<string> }) {
  const remaining = capacity - donuts.length;
  const nearFull = remaining <= 2;
  return <section className={`tray-section${nearFull ? ' tray-section--near-full' : ''}`} aria-label="도넛 트레이">
    <div className="tray-toolbar"><span className="tray-count" aria-label={`트레이 ${capacity}칸 중 ${donuts.length}칸 사용`}>트레이 <strong>{donuts.length} / {capacity}</strong></span>{nearFull && <span className="tray-warning">{remaining}칸 남음</span>}<button className="expand-button" disabled={disabled || expandUsed} onClick={onExpand} aria-label={expandUsed ? '트레이 확장 사용 완료' : '트레이 2칸 확장'}>{expandUsed ? '확장 완료' : '＋ 2칸'}</button></div>
    <div className={`tray ${expandUsed ? 'tray--expanded' : ''}`}><ol className="tray-slots">{Array.from({ length: capacity }, (_, i) => <li key={i} data-tray-slot={i} data-token-id={donuts[i]?.id} aria-label={donuts[i] ? `${donutThemes[donuts[i].type].name} 도넛` : `빈칸 ${i + 1}`}>{donuts[i] ? <span className="tray-donut" style={{ visibility: inFlight?.has(donuts[i].id) ? 'hidden' : undefined }}><Donut type={donuts[i].type} /></span> : null}</li>)}</ol></div>
  </section>;
}
