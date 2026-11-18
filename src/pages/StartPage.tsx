import { useState, type CSSProperties } from 'react';
import { Icon } from '../components/Icon';

const posters = import.meta.glob<string>('../assets/home/*.webp', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

const themes = [
  { name: 'berry', button: '#a63126' },
  { name: 'bakery', button: '#594587' },
  { name: 'honey', button: '#975008' },
  { name: 'rose', button: '#a52c55' },
  { name: 'matcha', button: '#51601c' },
  { name: 'sky', button: '#255981' },
  { name: 'peach', button: '#a44429' },
  { name: 'night', button: '#463e72' },
  { name: 'shop', button: '#9e4818' },
  { name: 'lavender', button: '#56418b' },
] as const;

export function StartPage({ level, onGame, onLevels }: { level: number; onGame: () => void; onLevels: () => void }) {
  const [theme] = useState(() => themes[Math.floor(Math.random() * themes.length)]!);
  const poster = posters[`../assets/home/${theme.name}.webp`];

  return <main className="start-page" style={{ '--start-button': theme.button, '--start-poster': `url("${poster}")` } as CSSProperties}>
    <h1 className="sr-only">달콤한 주문, Sweet Order</h1>
    <img className="start-poster" src={poster} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button" onClick={onGame}>Level {String(level).padStart(2, '0')} <Icon name="play" /></button>
      <button className="secondary-button" onClick={onLevels}><Icon name="grid" />레벨 선택</button>
    </div>
  </main>;
}
