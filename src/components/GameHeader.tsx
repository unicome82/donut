import { Icon } from './Icon';
export function GameHeader({ stage, onBack, onPause, canPause, soundEnabled, onToggleSound }: { stage: number; onBack: () => void; onPause?: () => void; canPause?: boolean; soundEnabled?: boolean; onToggleSound?: () => void }) {
  return <header className="game-header">
    <button type="button" className="icon-button back-button" onClick={onBack} aria-label="스테이지 선택으로 이동"><Icon name="back" /></button>
    <h1>Stage {String(stage).padStart(2, '0')}</h1>
    {onToggleSound && <button type="button" className="icon-button header-sound-button" onClick={onToggleSound} aria-label="게임 소리" aria-pressed={soundEnabled}><Icon name={soundEnabled ? 'sound' : 'sound-off'} /></button>}
    {onPause && <button type="button" className="icon-button pause-button" onClick={onPause} disabled={!canPause} aria-label="일시정지"><Icon name="pause" /></button>}
  </header>;
}
