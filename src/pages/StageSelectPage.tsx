import { useLayoutEffect, useRef, useState } from 'react';
import rewardStar from '../assets/game/reward-star.webp';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import { Icon } from '../components/Icon';
import { practiceStage, STAGE_COUNT, stageDifficulty } from '../game/stages';
import { unlockedThrough } from '../game/session';
import { useMessages } from '../i18n/language';
import { LanguageButton } from '../components/LanguageButton';
import { SoundButton } from '../components/SoundControls';

const columns = 3;
const rowHeight = 146;
const overscan = 2;
// Practice first, then every stage id; tiles need only the id, so no stage data is loaded here.
const optionCount = STAGE_COUNT + 1;
const rowCount = Math.ceil(optionCount / columns);
const optionId = (index: number) => index === 0 ? practiceStage.id : index;

export function StageSelectPage({ onGame, stars, unlockAllStages, soundEnabled, onToggleSound, onToggleLanguage }: { onGame: (id: number) => void; stars: Record<number, number>; unlockAllStages: boolean; soundEnabled: boolean; onToggleSound: () => void; onToggleLanguage: () => void }) {
  const t = useMessages();
  const openThrough = unlockedThrough(stars, unlockAllStages);
  const currentStage = unlockedThrough(stars);
  const currentRow = Math.floor(currentStage / columns);
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

  return <main className="stage-page">
    <nav className="stage-navigation" aria-label={t.stageMenu}>
      <LanguageButton onToggle={onToggleLanguage} />
      <SoundButton soundEnabled={soundEnabled} onToggleSound={onToggleSound} />
    </nav>
    <div className="stage-hero" aria-hidden="true" />
    <div className="stage-list-frame" data-scrolled={viewport.top > 0}>
      <div ref={scrollArea} className="stage-scroll" tabIndex={0} aria-label={t.stageList} role="region"
        onScroll={event => setViewport({ top: event.currentTarget.scrollTop, height: event.currentTarget.clientHeight })}>
        <div className="stage-list"
          style={{ gridAutoRows: rowHeight, paddingTop: firstRow * rowHeight, paddingBottom: (rowCount - lastRow) * rowHeight + endPadding }}>
          {Array.from({ length: Math.min(optionCount, lastRow * columns) - firstRow * columns }, (_, offset) => {
            const id = optionId(firstRow * columns + offset);
            const stage = { id, difficulty: id === practiceStage.id ? practiceStage.difficulty : stageDifficulty(id) };
            const practice = id === practiceStage.id;
            const unlocked = practice || id <= openThrough;
            const score = stars[stage.id] ?? 0;
            const current = stage.id === currentStage;
            const description = unlocked ? (score ? t.starsCount(score) : t.available) : t.locked;
            return <button type="button" key={stage.id} className={`stage-option${current ? ' stage-option--next' : ''}`}
              aria-current={current ? 'step' : undefined} aria-label={practice ? t.practiceLabel : t.stageLabel(stage.id, stage.difficulty ?? '', description)}
              onClick={() => onGame(stage.id)} disabled={!unlocked}>
              <span className="stage-index" lang="en">
                <span className="stage-index-label">Stage</span>
                <span className="stage-index-number">{String(stage.id).padStart(2, '0')}</span>
              </span>
              <StageDifficultyRibbon difficulty={stage.difficulty} />
              {practice ? <span className="stage-practice-label">{t.practice}</span> : unlocked ? <span className="stage-stars" aria-hidden="true">
                {[0, 1, 2].map(index => <span key={index} className={index < score ? undefined : 'star--unearned'}><img src={rewardStar} alt="" draggable={false} /></span>)}
              </span> : <span className="stage-lock"><Icon name="lock" /></span>}
            </button>;
          })}
        </div>
      </div>
    </div>
  </main>;
}
