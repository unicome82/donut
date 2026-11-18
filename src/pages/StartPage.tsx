import { useState } from 'react';

const posters = Object.values(import.meta.glob<string>('../assets/home/*.webp', {
  eager: true, import: 'default', query: '?url&no-inline',
}));

export function StartPage({ level, onGame, onLevels }: { level: number; onGame: () => void; onLevels: () => void }) {
  const [poster] = useState(() => posters[Math.floor(Math.random() * posters.length)]);

  return <main className="start-page">
    <h1 className="sr-only">Sweet Order</h1>
    <img className="start-poster" src={poster} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button level-button" onClick={onGame}><span>Level {String(level).padStart(2, '0')}</span></button>
      <button className="secondary-button" onClick={onLevels}>레벨 선택</button>
    </div>
  </main>;
}
