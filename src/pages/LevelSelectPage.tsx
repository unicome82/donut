import { Icon } from '../components/Icon';
import { levels } from '../game/levels';
import { isUnlocked } from '../game/session';

export function LevelSelectPage({ onBack, onGame, stars }: { onBack: () => void; onGame: (id: number) => void; stars: Record<number, number> }) {
  const nextLevel = levels.find(level => isUnlocked(level.id, stars) && !stars[level.id]);
  return <main className="level-page">
    <header className="level-hero">
      <button className="icon-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button>
      <h1 lang="en">Level Select</h1>
    </header>
    <div className="level-list">{levels.map(level => {
      const unlocked = isUnlocked(level.id, stars);
      const score = stars[level.id] ?? 0;
      const next = level.id === nextLevel?.id;
      const description = unlocked ? (next ? '도전 가능' : `별 ${score}개`) : '잠김';
      return <button key={level.id} className={`level-option${next ? ' level-option--next' : ''}`}
        aria-label={`레벨 ${level.id}, ${description}`} onClick={() => onGame(level.id)} disabled={!unlocked}>
        <span className="level-index" lang="en">Level {String(level.id).padStart(2, '0')}</span>
        {unlocked ? <span className="level-stars" aria-hidden="true">
          {[0, 1, 2].map(index => <span key={index} className={index < score ? 'level-star--earned' : undefined}><Icon name="star" /></span>)}
        </span> : <span className="level-lock"><Icon name="lock" /></span>}
      </button>;
    })}</div>
  </main>;
}
