import type { DonutToken } from '../game/types';
import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
export function DonutTray({ donuts, capacity }: { donuts: DonutToken[]; capacity: number }) {
  return <section className="tray-section" aria-labelledby="tray-title">
    <div className="section-heading"><h2 id="tray-title">도넛 트레이 <span className="info-dot" title="선택한 도넛이 머무는 공간">i</span></h2><span className="tray-count">{donuts.length}<span> / {capacity}</span></span></div>
    <div className={`tray ${capacity > 8 ? 'tray--expanded' : ''}`}><ol className="tray-slots">{Array.from({ length: capacity }, (_, i) => <li key={i} aria-label={donuts[i] ? `${donutThemes[donuts[i].type].name} 도넛` : `빈칸 ${i + 1}`}>{donuts[i] ? <Donut type={donuts[i].type} /> : <span className="slot-dot" />}</li>)}</ol></div>
    <div className="tray-footer"><p>필요한 도넛은 주문에 쏙!</p><button className="expand-button" disabled><span>＋</span> 트레이 확장 <small>+2</small></button></div>
  </section>;
}
