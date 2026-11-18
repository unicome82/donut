import { Icon } from './Icon';
export function GameHeader({ level, onBack }: { level: number; onBack: () => void }) {
  return <header className="game-header">
    <button className="icon-button back-button" onClick={onBack} aria-label="레벨 선택으로 이동"><Icon name="back" /></button>
    <h1>Level {String(level).padStart(2, '0')}</h1>
  </header>;
}
