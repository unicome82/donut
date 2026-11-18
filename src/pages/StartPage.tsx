import { useState } from 'react';

const posterSources = import.meta.glob<string>('../assets/home/*.webp', {
  eager: true, import: 'default', query: '?url&no-inline',
});
const topEdgeColors: Record<string, string> = {
  bakery: '#d3bcfc',
  berry: '#fcccce',
  honey: '#fddb8d',
  lavender: '#d7c5fc',
  night: '#2a478c',
  rose: '#fdc3e5',
  shop: '#fda6a9',
  sky: '#8bc9fc',
};
const posters = Object.entries(posterSources).map(([path, src]) => ({
  src,
  topColor: topEdgeColors[path.split('/').at(-1)?.replace('.webp', '') ?? ''],
}));

export function StartPage({ stage, onGame, onStages }: { stage: number; onGame: () => void; onStages: () => void }) {
  const [poster] = useState(() => posters[Math.floor(Math.random() * posters.length)]);

  return <main className="start-page" style={{ backgroundColor: poster?.topColor }}>
    <h1 className="sr-only">Sweet Order</h1>
    <img className="start-poster" src={poster?.src} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span></button>
      <button className="secondary-button" onClick={onStages}>스테이지 선택</button>
    </div>
  </main>;
}
