import { useState } from 'react';

const posters = Object.values(import.meta.glob<string>('../assets/home/*.webp', {
  eager: true, import: 'default', query: '?url&no-inline',
}));

export function StartPage({ stage, onGame, onStages }: { stage: number; onGame: () => void; onStages: () => void }) {
  const [poster] = useState(() => posters[Math.floor(Math.random() * posters.length)]);

  return <main className="start-page" style={{ backgroundImage: `url("${poster}")` }}>
    <h1 className="sr-only">Sweet Order</h1>
    <div className="start-backdrop" aria-hidden="true" />
    <img className="start-poster" src={poster} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span></button>
      <button className="secondary-button" onClick={onStages}>스테이지 선택</button>
    </div>
  </main>;
}
