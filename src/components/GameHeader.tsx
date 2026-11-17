import { Icon } from './Icon';
import { levelNames } from '../game/levels';
export function GameHeader({ level, completed, target, onBack, onPause, canPause }: { level: number; completed: number; target: number; onBack: () => void; onPause: () => void; canPause: boolean }) {
  return <header className="game-header">
    <div className="header-row"><button className="icon-button" onClick={onBack} aria-label="레벨 선택으로 이동"><Icon name="back" /></button><span className="wordmark">donut<span>·</span>puzzle</span><button className="icon-button" disabled={!canPause} onClick={onPause} aria-label="일시정지"><Icon name="pause" /></button></div>
    <div className="level-row"><div><p className="eyebrow">FRESHLY BAKED</p><h1>Level {String(level).padStart(2, '0')}<span className="level-tag">{levelNames[level]}</span></h1></div><div className="progress-count"><strong>{completed}</strong><span> / {target}</span><small>완료한 주문</small></div></div>
    <progress value={completed} max={target} aria-label="주문 완료 진행률" />
  </header>;
}
