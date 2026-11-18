import { Icon } from '../components/Icon';
import { ShopAwning } from '../components/ShopAwning';
import { levels } from '../game/levels';
import { isUnlocked } from '../game/session';

export function LevelSelectPage({ onBack, onGame, stars }: { onBack: () => void; onGame: (id: number) => void; stars: Record<number, number> }) {
  const nextLevel = levels.find(level => isUnlocked(level.id, stars) && !stars[level.id]);
  return <main className="level-page shop-screen">
    <ShopAwning />
    <header className="header-row">
      <button className="icon-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button>
      <h1>레벨 선택</h1>
      <span className="header-spacer" />
    </header>
    <div className="level-list">{levels.map(level => {
      const unlocked = isUnlocked(level.id, stars);
      const score = stars[level.id] ?? 0;
      const next = level.id === nextLevel?.id;
      const description = unlocked ? (next ? '도전 가능' : `별 ${score}개`) : '잠김';
      return <button key={level.id} className={`level-option${next ? ' level-option--next' : ''}`}
        aria-label={`레벨 ${level.id}, ${description}`} onClick={() => onGame(level.id)} disabled={!unlocked}>
        <span className="level-index">{level.id}</span>
        {unlocked ? <span className="level-stars" aria-hidden="true">{'★'.repeat(score)}<span>{'★'.repeat(3 - score)}</span></span> : <Icon name="lock" />}
      </button>;
    })}</div>
  </main>;
}
