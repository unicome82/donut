import { useState } from 'react';
import { readSoundPreference, saveSoundPreference, unlockSound } from '../effects/sound';
import { getCurrentStage } from '../game/session';
import { useGame } from '../hooks/useGame';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { StageSelectPage } from '../pages/StageSelectPage';

export function App() {
  const { session, dispatch } = useGame();
  const [soundEnabled, setSoundEnabled] = useState(readSoundPreference);
  function toggleSound() {
    const enabled = !soundEnabled;
    if (enabled) unlockSound();
    saveSoundPreference(enabled);
    setSoundEnabled(enabled);
  }
  const { screen, game, stars } = session;
  const currentStage = getCurrentStage(stars);
  return <div className="app-shell" onPointerUpCapture={soundEnabled ? unlockSound : undefined} onClickCapture={soundEnabled ? unlockSound : undefined}>
    {screen === 'start'
      ? <StartPage stage={currentStage} soundEnabled={soundEnabled} onToggleSound={toggleSound} onGame={() => dispatch({ type: 'START', stageId: currentStage })} onStages={() => dispatch({ type: 'STAGES' })} />
      : screen === 'stages'
        ? <StageSelectPage stars={stars} soundEnabled={soundEnabled} onToggleSound={toggleSound} unlockAllStages={session.unlockAllStages} onBack={() => dispatch({ type: 'HOME' })} onGame={stageId => dispatch({ type: 'START', stageId })} />
        : <GamePage key={game.stageId} soundEnabled={soundEnabled} state={game} dispatch={action => dispatch({ type: 'GAME', action })} onStages={() => dispatch({ type: 'STAGES' })} onNext={() => dispatch({ type: 'START', stageId: game.stageId + 1 })} />
    }
  </div>;
}
