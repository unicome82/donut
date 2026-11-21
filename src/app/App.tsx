import { useCallback, useEffect, useState } from 'react';
import { LanguageContext, readLanguagePreference, saveLanguagePreference } from '../i18n/language';
import type { MouseEvent } from 'react';
import { playSound, readSoundPreference, saveSoundPreference, setMusicScene, unlockSound } from '../effects/sound';
import { canAffordAttempt, getCurrentStage } from '../game/session';
import { isBonusStage, isStageId, isStageLoaded, loadStage, practiceStage, preloadStage } from '../game/stages';
import { randomBonusDessert } from '../game/stages/bonus';
import { BONUS_AT_STAGE_00_FOR_TESTING } from '../game/constants';
import { NoHeartsDialog } from '../components/NoHeartsDialog';
import { useGame } from '../hooks/useGame';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { StageSelectPage } from '../pages/StageSelectPage';

const BONUS_CHANCE = 0.15;
const BONUS_FIRST_AFTER = 3;

export function App() {
  const { session, dispatch } = useGame();
  const [soundEnabled, setSoundEnabled] = useState(readSoundPreference);
  const [language, setLanguage] = useState(readLanguagePreference);
  function toggleLanguage() {
    const next = language === 'ko' ? 'en' : 'ko';
    saveLanguagePreference(next);
    setLanguage(next);
  }
  function toggleSound() {
    const enabled = !soundEnabled;
    if (enabled) unlockSound();
    saveSoundPreference(enabled);
    setSoundEnabled(enabled);
    if (enabled) playSound('tap');
  }
  // Every button taps softly unless it plays its own cue (data-sfx="none").
  function onClickCapture(event: MouseEvent) {
    if (!soundEnabled) return;
    unlockSound();
    const button = (event.target as Element).closest?.('button');
    if (button && !button.disabled && button.dataset.sfx !== 'none') playSound('tap');
  }
  const { screen, game, stars } = session;
  useEffect(() => setMusicScene(screen === 'game' ? 'game' : 'menu'), [screen]);
  const currentStage = getCurrentStage(stars);
  const [loadingStage, setLoadingStage] = useState<number>();
  const [outOfHearts, setOutOfHearts] = useState(false);
  const closeOutOfHearts = useCallback(() => setOutOfHearts(false), []);
  // Stage data arrives in 100-stage chunks; fetch the one a START needs before entering it.
  function start(stageId: number) {
    if (BONUS_AT_STAGE_00_FOR_TESTING && stageId === practiceStage.id) {
      dispatch({ type: 'START_BONUS', dessert: randomBonusDessert(), nextStageId: currentStage });
      return;
    }
    if (!canAffordAttempt(session, stageId)) { setOutOfHearts(true); return; }
    if (isStageLoaded(stageId)) { dispatch({ type: 'START', stageId }); return; }
    setLoadingStage(stageId);
    loadStage(stageId).then(() => dispatch({ type: 'START', stageId }), () => undefined)
      .finally(() => setLoadingStage(previous => previous === stageId ? undefined : previous));
  }
  // After a campaign clear a bonus stage sometimes appears on the way to the next stage; it can't be picked from the list.
  function next() {
    const target = isBonusStage(game.stageId) ? session.bonus?.nextStageId ?? currentStage : game.stageId + 1;
    if (!isBonusStage(game.stageId) && isStageId(game.stageId) && game.stageId >= BONUS_FIRST_AFTER && Math.random() < BONUS_CHANCE) {
      dispatch({ type: 'START_BONUS', dessert: randomBonusDessert(), nextStageId: target });
      return;
    }
    start(target);
  }
  // Warm the chunks the player is likely to open next.
  useEffect(() => preloadStage(currentStage), [currentStage]);
  useEffect(() => { if (screen === 'game') preloadStage(game.stageId + 1); }, [screen, game.stageId]);
  return <LanguageContext value={language}><div className="app-shell" lang={language} onPointerUpCapture={soundEnabled ? unlockSound : undefined} onClickCapture={onClickCapture}>
    {screen === 'start'
      ? <StartPage stage={currentStage} hearts={session.hearts} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} onGame={() => start(currentStage)} onStages={() => dispatch({ type: 'STAGES' })} />
      : screen === 'stages'
        ? <StageSelectPage stars={stars} hearts={session.hearts} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} unlockAllStages={session.unlockAllStages} onGame={start} />
        : <GamePage key={game.stageId} soundEnabled={soundEnabled} onToggleSound={toggleSound} state={game} dispatch={action => dispatch({ type: 'GAME', action, now: Date.now() })} onStages={() => dispatch({ type: 'STAGES' })} onNext={next}
          canRestart={() => canAffordAttempt(session, game.stageId)} onOutOfHearts={() => setOutOfHearts(true)} />
    }
    {outOfHearts && <NoHeartsDialog hearts={session.hearts} onClose={closeOutOfHearts} />}
    {loadingStage !== undefined && <p className="stage-loading" role="status">Loading…</p>}
  </div></LanguageContext>;
}
