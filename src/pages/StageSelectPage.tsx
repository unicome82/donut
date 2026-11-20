import { useLayoutEffect, useRef, useState } from 'react';
import rewardStar from '../assets/game/reward-star.webp';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
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
  const scrollArea = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ top: currentRow * rowHeight, height: 0 });
  const firstRow = Math.min(rowCount - 1, Math.max(0, Math.floor(viewport.top / rowHeight) - overscan));
  const lastRow = Math.max(firstRow + 1, Math.min(rowCount, Math.ceil((viewport.top + viewport.height) / rowHeight) + overscan));

  useLayoutEffect(() => {
    const element = scrollArea.current;
    if (!element) return;
    const measure = () => setViewport({
      top: element.scrollTop,
      height: element.clientHeight,
    });
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    return () => observer.disconnect();
  }, []);

  const endPadding = Math.max(0, (viewport.height - rowHeight) / 2);
  useLayoutEffect(() => {
    if (scrollArea.current) scrollArea.current.scrollTop = currentRow * rowHeight - endPadding;
  }, [currentRow, endPadding]);

  function goToProgress() {
    const element = scrollArea.current;
    if (!element) return;
    element.scrollTop = currentRow * rowHeight - endPadding;
    element.focus({ preventScroll: true });
  }

  return <main className="stage-page">
    <nav className="stage-navigation" aria-label="스테이지 선택 메뉴">
      <button type="button" className="secondary-button navigation-icon-button back-button" onClick={onBack} aria-label="시작 화면으로 돌아가기"><Icon name="back" /></button>
      <button type="button" className="secondary-button navigation-icon-button" onClick={goToProgress} aria-label="내 진행 위치"><Icon name="current-location" /></button>
    </nav>
    <div className="stage-hero" aria-hidden="true" />
    <div className="stage-list-frame" data-scrolled={viewport.top > 0}>
      <div ref={scrollArea} className="stage-scroll" tabIndex={0} aria-label="스테이지 목록" role="region"
        onScroll={event => setViewport({ top: event.currentTarget.scrollTop, height: event.currentTarget.clientHeight })}>
        <div className="stage-list"
          style={{ gridAutoRows: rowHeight, paddingTop: firstRow * rowHeight, paddingBottom: (rowCount - lastRow) * rowHeight + endPadding }}>
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
      </div>
    </div>
  </main>;
}
