import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import { useLayoutEffect, useRef, useState } from 'react';
import rewardStar from '../assets/game/reward-star.webp';
import { Icon } from '../components/Icon';
import { stages, practiceStage } from '../game/stages';
import { getCurrentStage, isUnlocked } from '../game/session';

const columns = 3;
const rowHeight = 96;
const overscan = 2;
const stageOptions = [practiceStage, ...stages];
const rowCount = Math.ceil(stageOptions.length / columns);

export function StageSelectPage({ onBack, onGame, stars, unlockAllStages }: { onBack: () => void; onGame: (id: number) => void; stars: Record<number, number>; unlockAllStages: boolean }) {
  const currentStage = getCurrentStage(stars);
  const currentRow = Math.floor(stageOptions.findIndex(stage => stage.id === currentStage) / columns);
  const list = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ top: currentRow * rowHeight, height: 0 });
  const firstRow = Math.min(rowCount - 1, Math.max(0, Math.floor(viewport.top / rowHeight) - overscan));
  const lastRow = Math.max(firstRow + 1, Math.min(rowCount, Math.ceil((viewport.top + viewport.height) / rowHeight) + overscan));

  useLayoutEffect(() => {
    const element = list.current;
    if (!element) return;
    const measure = () => setViewport({
      top: -element.getBoundingClientRect().top,
      height: window.innerHeight,
    });
    const rowTop = window.scrollY + element.getBoundingClientRect().top + currentRow * rowHeight;
    window.scrollTo(0, rowTop - (window.innerHeight - rowHeight) / 2);
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      window.scrollTo(0, 0);
    };
  }, [currentRow]);

  function goToProgress() {
    const element = list.current;
    if (!element) return;
    const rowTop = window.scrollY + element.getBoundingClientRect().top + currentRow * rowHeight;
    window.scrollTo(0, rowTop - (window.innerHeight - rowHeight) / 2);
    element.focus({ preventScroll: true });
  }

  return <main className="stage-page">
    <div className="stage-back">
      <button className="icon-button back-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button>
    </div>
    <header className="stage-hero">
      <h1 lang="en">Stage Select</h1>
    </header>
    <div className="stage-navigation">
      <button type="button" className="secondary-button" onClick={goToProgress}>내 진행 위치</button>
    </div>
    <div ref={list} className="stage-list" tabIndex={-1} aria-label="스테이지 목록" role="region"
      style={{ gridAutoRows: rowHeight, paddingTop: firstRow * rowHeight, paddingBottom: (rowCount - lastRow) * rowHeight }}>
        {stageOptions.slice(firstRow * columns, lastRow * columns).map(stage => {
          const practice = stage.id === practiceStage.id;
          const unlocked = isUnlocked(stage.id, stars, unlockAllStages);
          const score = stars[stage.id] ?? 0;
          const current = stage.id === currentStage;
          const description = unlocked ? (score ? `별 ${score}개` : '도전 가능') : '잠김';
          return <button type="button" key={stage.id} className={`stage-option${current ? ' stage-option--next' : ''}`}
            aria-current={current ? 'step' : undefined} aria-label={practice ? '스테이지 0, 연습' : `스테이지 ${stage.id}, ${stage.difficulty}, ${description}`}
            onClick={() => onGame(stage.id)} disabled={!unlocked}>
            <span className="stage-index" lang="en">Stage {String(stage.id).padStart(2, '0')}</span>
            <StageDifficultyRibbon difficulty={stage.difficulty} />
            {practice ? <span className="stage-practice-label">연습</span> : unlocked ? <span className="stage-stars" aria-hidden="true">
              {[0, 1, 2].map(index => <span key={index} className={index < score ? undefined : 'star--unearned'}><img src={rewardStar} alt="" draggable={false} /></span>)}
            </span> : <span className="stage-lock"><Icon name="lock" /></span>}
          </button>;
        })}
    </div>
  </main>;
}
