import { getCurrentStage } from '../game/session';
import { useGame } from '../hooks/useGame';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { StageSelectPage } from '../pages/StageSelectPage';

export function App() {
  const { session, dispatch } = useGame();
  const { screen, game, stars } = session;
  const currentStage = getCurrentStage(stars);
  return <div className="app-shell">
    {screen === 'start'
      ? <StartPage stage={currentStage} onGame={() => dispatch({ type: 'START', stageId: currentStage })} onStages={() => dispatch({ type: 'STAGES' })} />
      : screen === 'stages'
        ? <StageSelectPage stars={stars} onBack={() => dispatch({ type: 'HOME' })} onGame={stageId => dispatch({ type: 'START', stageId })} />
        : <GamePage key={game.stageId} state={game} dispatch={action => dispatch({ type: 'GAME', action })} onStages={() => dispatch({ type: 'STAGES' })} onNext={() => dispatch({ type: 'START', stageId: game.stageId + 1 })} />
    }
  </div>;
}
