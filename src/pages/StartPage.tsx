import { useState, type CSSProperties } from 'react';
import { Icon } from '../components/Icon';

const posters = import.meta.glob<string>('../assets/home/*.webp', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

const themes = [
  { name: 'berry', button: '#a63126', backdrop: 'linear-gradient(#fcd5d5, #f9c0c3)' },
  { name: 'bakery', button: '#594587', backdrop: 'linear-gradient(#d7bdfa, #facfd9)' },
  { name: 'honey', button: '#975008', backdrop: 'linear-gradient(#fde5b2, #fed57f)' },
  { name: 'rose', button: '#a52c55', backdrop: 'linear-gradient(#fec9e4, #fdc1de)' },
  { name: 'matcha', button: '#51601c', backdrop: 'linear-gradient(#dae4ba, #c9d5a5)' },
  { name: 'sky', button: '#255981', backdrop: 'linear-gradient(#8ac8fc, #9dbb49)' },
  { name: 'peach', button: '#a44429', backdrop: 'linear-gradient(#ffd9c4, #fcaa8b)' },
  { name: 'night', button: '#463e72', backdrop: 'linear-gradient(#29478c, #9588ca)' },
  { name: 'shop', button: '#9e4818', backdrop: 'linear-gradient(#fd8494, #fdb093)' },
  { name: 'lavender', button: '#56418b', backdrop: 'linear-gradient(#d7c5fd, #c4a0f3)' },
] as const;

export function StartPage({ level, onGame, onLevels }: { level: number; onGame: () => void; onLevels: () => void }) {
  const [theme] = useState(() => themes[Math.floor(Math.random() * themes.length)]!);
  const poster = posters[`../assets/home/${theme.name}.webp`];

  return <main className="start-page" style={{ '--start-button': theme.button, '--start-backdrop': theme.backdrop } as CSSProperties}>
    <h1 className="sr-only">달콤한 주문, Sweet Order</h1>
    <img className="start-poster" src={poster} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button" onClick={onGame}>Level {String(level).padStart(2, '0')} <Icon name="play" /></button>
      <button className="secondary-button" onClick={onLevels}><Icon name="grid" />레벨 선택</button>
    </div>
  </main>;
}
