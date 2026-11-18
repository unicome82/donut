import { Icon } from './Icon';
export function GameHeader({ level, score, onBack }: { level: number; score: number; onBack: () => void }) {
  return <header className="game-header">
    <button className="icon-button" onClick={onBack} aria-label="레벨 선택으로 이동"><Icon name="back" /></button>
    <h1>Lv. {level}</h1>
    <span className="score-count"><Icon name="star" /><strong>{score.toLocaleString('ko-KR')}</strong></span>
  </header>;
}
