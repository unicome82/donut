import { isUnlocked } from '../game/session';
import { levels } from '../game/levels';
import { useGame } from '../hooks/useGame';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { LevelSelectPage } from '../pages/LevelSelectPage';

export function App() {
  const { session, dispatch } = useGame();
  const { screen, game, stars } = session;
  const currentLevel = levels.filter(level => isUnlocked(level.id, stars)).at(-1)?.id ?? 1;
  return <div className="app-shell">
    {screen === 'start'
      ? <StartPage level={currentLevel} onGame={() => dispatch({ type: 'START', levelId: currentLevel })} onLevels={() => dispatch({ type: 'LEVELS' })} />
      : screen === 'levels'
        ? <LevelSelectPage stars={stars} onBack={() => dispatch({ type: 'HOME' })} onGame={levelId => dispatch({ type: 'START', levelId })} />
        : <GamePage state={game} dispatch={action => dispatch({ type: 'GAME', action })} onLevels={() => dispatch({ type: 'LEVELS' })} onNext={() => dispatch({ type: 'START', levelId: game.levelId + 1 })} />
    }
  </div>;
}
