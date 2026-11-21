import { Icon } from './Icon';
import { useMessages } from '../i18n/language';
export function GameHeader({ stage, onPause, canPause, soundEnabled, onToggleSound }: { stage: number; onPause?: () => void; canPause?: boolean; soundEnabled?: boolean; onToggleSound?: () => void }) {
  const t = useMessages();
  return <header className="game-header">
    <h1>Stage {String(stage).padStart(2, '0')}</h1>
    {onToggleSound && <button type="button" className="icon-button header-sound-button" onClick={onToggleSound} aria-label={t.sound} aria-pressed={soundEnabled}><Icon name={soundEnabled ? 'sound' : 'sound-off'} /></button>}
    {onPause && <button type="button" className="icon-button pause-button" onClick={onPause} disabled={!canPause} aria-label={t.pause}><Icon name="pause" /></button>}
  </header>;
}
