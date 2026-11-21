import type { CSSProperties } from 'react';
import type { DonutToken, StageDifficulty } from '../game/types';
import { StageDifficultyRibbon } from './StageDifficultyRibbon';
import { BASE_TRAY_CAPACITY } from '../game/constants';
import { Donut } from './Donut/Donut';
import { useMessages } from '../i18n/language';
import { Icon } from './Icon';
type TrayLevel = 'calm' | 'warn' | 'danger';
function getTrayLevel(used: number, capacity: number): TrayLevel {
  if (capacity - used <= 1) return 'danger';
  return used / capacity >= 0.7 ? 'warn' : 'calm';
}

export function DonutTray({ donuts, capacity, difficulty, inFlight, clearsLeft, canClear, onClear }: { donuts: DonutToken[]; capacity: number; difficulty?: StageDifficulty; inFlight?: ReadonlySet<string>; clearsLeft: number; canClear: boolean; onClear: () => void }) {
  const t = useMessages();
  const level = getTrayLevel(donuts.length, capacity);
  const columns = Math.min(capacity, BASE_TRAY_CAPACITY);
  return <div className={`tray-row tray-row--${level}`}>
    <div className="tray-meta">
      <StageDifficultyRibbon difficulty={difficulty} />
      <span className="tray-count" aria-hidden="true"><strong>{donuts.length}</strong> / {capacity}</span>
    </div>
    <section className={`tray-section tray-section--${level}`} style={{ '--tray-width-ratio': columns / BASE_TRAY_CAPACITY } as CSSProperties} aria-label={t.tray(donuts.length, capacity)}>
    <div className="tray"><ol className="tray-slots" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>{Array.from({ length: capacity }, (_, i) => <li key={i} data-tray-slot={i} data-token-id={donuts[i]?.id} aria-label={donuts[i] ? t.items[donuts[i].type] : t.emptySlot(i + 1)}>{donuts[i] ? <span className="tray-donut" style={{ visibility: inFlight?.has(donuts[i].id) ? 'hidden' : undefined }}><Donut type={donuts[i].type} /></span> : null}</li>)}</ol></div>
  </section>
    <button type="button" className="tray-clear-shortcut" onClick={onClear} disabled={!canClear || clearsLeft <= 0} aria-label={t.clearTrayLabel(clearsLeft)}>
      <Icon name="basket" /><span className="tray-clear-shortcut-count" aria-hidden="true">{clearsLeft}</span>
    </button>
  </div>;
}
