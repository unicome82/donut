import { Icon } from '../components/Icon';
import { levels } from '../game/levels';
import { isUnlocked } from '../game/session';
export function LevelSelectPage({ onBack, onGame, stars }: { onBack: () => void; onGame: (id: number) => void; stars: Record<number, number> }) {
  return <main className="level-page">
    <header className="header-row"><button className="icon-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button><span className="wordmark">도넛 퍼즐</span><span className="header-spacer" /></header>
    <h1>레벨 선택</h1>
    <div className="level-list">{levels.map(level => {
      const unlocked = isUnlocked(level.id, stars);
      const score = stars[level.id] ?? 0;
      return <button key={level.id} className={'level-option ' + (unlocked ? 'level-option--active' : '')} onClick={() => onGame(level.id)} disabled={!unlocked}>
        <span className="level-index">{String(level.id).padStart(2, '0')}</span><span className="level-details"><strong>레벨 {level.id}</strong><small>도넛 {level.donutTypes.length}종 · 주문 {level.targetOrders}개</small></span>
        {unlocked ? <span className="level-preview-label">{score ? <span aria-label={score + '성'}>{'★'.repeat(score)}</span> : ''}<Icon name="arrow" /></span> : <Icon name="lock" />}
      </button>;
    })}</div>
    <p className="level-footnote">새로고침 시 기록이 초기화됩니다.</p>
  </main>;
}
