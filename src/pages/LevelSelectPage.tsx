import { Icon } from '../components/Icon';
import { levels, levelNames } from '../game/levels';
import { isUnlocked } from '../game/session';
export function LevelSelectPage({ onBack, onGame, stars }: { onBack: () => void; onGame: (id: number) => void; stars: Record<number, number> }) {
  return <main className="level-page">
    <header className="header-row"><button className="icon-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button><span className="wordmark">donut<span>·</span>puzzle</span><span className="header-spacer" /></header>
    <div className="level-intro"><p className="eyebrow">ONE SWEET STEP AT A TIME</p><h1>오늘은 어디까지?</h1><p>작은 한 수부터, 차근차근 시작해요.</p></div>
    <div className="level-list">{levels.map(level => {
      const unlocked = isUnlocked(level.id, stars);
      const score = stars[level.id] ?? 0;
      return <button key={level.id} className={'level-option ' + (unlocked ? 'level-option--active' : '')} onClick={() => onGame(level.id)} disabled={!unlocked}>
        <span className="level-index">{String(level.id).padStart(2, '0')}</span><span className="level-details"><strong>{levelNames[level.id]}</strong><small>도넛 {level.donutTypes.length}종 · 주문 {level.targetOrders}개</small></span>
        {unlocked ? <span className="level-preview-label">{score ? <span aria-label={score + '성'}>{'★'.repeat(score)}</span> : '도전하기'}<Icon name="arrow" /></span> : <Icon name="lock" />}
      </button>;
    })}</div>
    <p className="level-footnote">앞 레벨을 클리어하면 다음 레벨이 열려요.<br />현재 기록은 이 페이지를 새로고침하면 초기화됩니다.</p>
  </main>;
}
