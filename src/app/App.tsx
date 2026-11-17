import { useState } from 'react';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { LevelSelectPage } from '../pages/LevelSelectPage';
type Screen = 'start' | 'levels' | 'game';
export function App() {
  const [screen, setScreen] = useState<Screen>('start');
  return <div className="app-shell" key={screen}>{screen === 'start' ? <StartPage onGame={() => setScreen('game')} onLevels={() => setScreen('levels')} /> : screen === 'levels' ? <LevelSelectPage onBack={() => setScreen('start')} onGame={() => setScreen('game')} /> : <GamePage onBack={() => setScreen('start')} />}</div>;
}
