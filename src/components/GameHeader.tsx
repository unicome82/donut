import { Donut } from './Donut/Donut';
import { Icon } from './Icon';
export function GameHeader({ level, completed, target, onBack }: { level: number; completed: number; target: number; onBack: () => void }) {
  return <header className="game-header">
    <button className="icon-button" onClick={onBack} aria-label="레벨 선택으로 이동"><Icon name="back" /></button>
    <h1>Lv. {level}</h1>
    <span className="progress-count" aria-label={`주문 ${target}개 중 ${completed}개 완료`}><Donut type="strawberry" /><span>목표</span><strong>{completed} / {target}</strong></span>
  </header>;
}
