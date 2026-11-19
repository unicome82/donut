import { useState, type CSSProperties } from 'react';

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

  const posterStyle = {
    backgroundColor: poster?.topColor,
    '--poster-source': poster ? `url("${poster.src}")` : 'none',
  } as CSSProperties;

  return <main className="start-page" style={posterStyle}>
    <h1 className="sr-only">Sweet Order</h1>
    <div className="start-artwork" aria-hidden="true">
      <img className="start-poster" src={poster?.src} width={800} height={1200} alt="" draggable={false} fetchPriority="high" />
    </div>
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span></button>
      <button className="secondary-button" onClick={onStages}>스테이지 선택</button>
    </div>
  </main>;
}
