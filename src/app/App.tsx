import { useState } from 'react';
import { LanguageContext, readLanguagePreference, saveLanguagePreference } from '../i18n/language';
import { readSoundPreference, saveSoundPreference, unlockSound } from '../effects/sound';
import { getCurrentStage } from '../game/session';
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
  }
  const { screen, game, stars } = session;
  const currentStage = getCurrentStage(stars);
  return <LanguageContext value={language}><div className="app-shell" lang={language} onPointerUpCapture={soundEnabled ? unlockSound : undefined} onClickCapture={soundEnabled ? unlockSound : undefined}>
    {screen === 'start'
      ? <StartPage stage={currentStage} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} onGame={() => dispatch({ type: 'START', stageId: currentStage })} onStages={() => dispatch({ type: 'STAGES' })} />
      : screen === 'stages'
        ? <StageSelectPage stars={stars} onToggleLanguage={toggleLanguage} soundEnabled={soundEnabled} onToggleSound={toggleSound} unlockAllStages={session.unlockAllStages} onGame={stageId => dispatch({ type: 'START', stageId })} />
        : <GamePage key={game.stageId} soundEnabled={soundEnabled} onToggleSound={toggleSound} state={game} dispatch={action => dispatch({ type: 'GAME', action })} onStages={() => dispatch({ type: 'STAGES' })} onNext={() => dispatch({ type: 'START', stageId: game.stageId + 1 })} />
    }
  </div></LanguageContext>;
}
