import { Icon } from './Icon';
export function GameHeader({ level, completed, target, onBack }: { level: number; completed: number; target: number; onBack: () => void }) {
  return <header className="game-header">
    <div className="header-row"><button className="icon-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button><span className="wordmark">donut<span>·</span>puzzle</span><button className="icon-button" disabled aria-label="일시정지 — 다음 단계에서 제공"><Icon name="pause" /></button></div>
    <div className="level-row"><div><p className="eyebrow">FRESHLY BAKED</p><h1>Level {String(level).padStart(2, '0')}<span className="level-tag">처음 한 입</span></h1></div><div className="progress-count"><strong>{completed}</strong><span> / {target}</span><small>완료한 주문</small></div></div>
    <progress value={completed} max={target} aria-label="주문 완료 진행률" />
  </header>;
}
