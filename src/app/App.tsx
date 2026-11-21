import { useEffect, useState } from 'react';
import { LanguageContext, readLanguagePreference, saveLanguagePreference } from '../i18n/language';
import type { MouseEvent } from 'react';
import { playSound, readSoundPreference, saveSoundPreference, setMusicScene, unlockSound } from '../effects/sound';
import { getCurrentStage } from '../game/session';
import { isStageLoaded, loadStage, preloadStage } from '../game/stages';
import { useGame } from '../hooks/useGame';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { StageSelectPage } from '../pages/StageSelectPage';

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
  // Stage data arrives in 100-stage chunks; fetch the one a START needs before entering it.
  function start(stageId: number) {
    if (isStageLoaded(stageId)) { dispatch({ type: 'START', stageId }); return; }
    setLoadingStage(stageId);
    loadStage(stageId).then(() => dispatch({ type: 'START', stageId }), () => undefined)
      .finally(() => setLoadingStage(previous => previous === stageId ? undefined : previous));
  }
  // Warm the chunks the player is likely to open next.
  useEffect(() => preloadStage(currentStage), [currentStage]);
  useEffect(() => { if (screen === 'game') preloadStage(game.stageId + 1); }, [screen, game.stageId]);
  return <LanguageContext value={language}><div className="app-shell" lang={language} onPointerUpCapture={soundEnabled ? unlockSound : undefined} onClickCapture={onClickCapture}>
    {screen === 'start'
      ? <StartPage stage={currentStage} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} onGame={() => start(currentStage)} onStages={() => dispatch({ type: 'STAGES' })} />
      : screen === 'stages'
        ? <StageSelectPage stars={stars} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} unlockAllStages={session.unlockAllStages} onGame={start} />
        : <GamePage key={game.stageId} soundEnabled={soundEnabled} onToggleSound={toggleSound} state={game} dispatch={action => dispatch({ type: 'GAME', action })} onStages={() => dispatch({ type: 'STAGES' })} onNext={() => start(game.stageId + 1)} />
    }
    {loadingStage !== undefined && <p className="stage-loading" role="status">Loading…</p>}
  </div></LanguageContext>;
}
