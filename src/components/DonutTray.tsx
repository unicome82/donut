import type { CSSProperties } from 'react';
import type { DonutToken } from '../game/types';
import { BASE_TRAY_CAPACITY } from '../game/constants';
import { Donut } from './Donut/Donut';
import { itemNames } from './Donut/donutThemes';
import { Icon } from './Icon';
export function DonutTray({ donuts, capacity, inFlight, clearsLeft, canClear, onClear }: { donuts: DonutToken[]; capacity: number; inFlight?: ReadonlySet<string>; clearsLeft: number; canClear: boolean; onClear: () => void }) {
  const remaining = capacity - donuts.length;
  const nearFull = remaining <= 2;
  const columns = Math.min(capacity, BASE_TRAY_CAPACITY);
  return <div className="tray-row"><section className={`tray-section${nearFull ? ' tray-section--near-full' : ''}`} style={{ '--tray-width-ratio': columns / BASE_TRAY_CAPACITY } as CSSProperties} aria-label="트레이">
    <div className="tray"><ol className="tray-slots" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>{Array.from({ length: capacity }, (_, i) => <li key={i} data-tray-slot={i} data-token-id={donuts[i]?.id} aria-label={donuts[i] ? `${itemNames[donuts[i].type]}` : `빈칸 ${i + 1}`}>{donuts[i] ? <span className="tray-donut" style={{ visibility: inFlight?.has(donuts[i].id) ? 'hidden' : undefined }}><Donut type={donuts[i].type} /></span> : null}</li>)}</ol></div>
  </section>
    <button type="button" className="tray-clear-shortcut" onClick={onClear} disabled={!canClear || clearsLeft <= 0} aria-label={`트레이 비우기, 남은 횟수 ${clearsLeft}`}>
      <Icon name="basket" /><span className="tray-clear-shortcut-count" aria-hidden="true">{clearsLeft}</span>
    </button>
  </div>;
}
