import { Icon } from './Icon';
export function GameHeader({ level, completed, target, onBack, onPause, canPause }: { level: number; completed: number; target: number; onBack: () => void; onPause: () => void; canPause: boolean }) {
  return <header className="game-header">
    <button className="icon-button" onClick={onBack} aria-label="레벨 선택으로 이동"><Icon name="back" /></button>
    <h1>LEVEL {String(level).padStart(2, '0')}</h1>
    <span className="progress-count" aria-label={`주문 ${target}개 중 ${completed}개 완료`}><strong>{completed}</strong> / {target}</span>
    <button className="icon-button" disabled={!canPause} onClick={onPause} aria-label="일시정지"><Icon name="pause" /></button>
  </header>;
}
