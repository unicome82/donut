import { Icon } from '../components/Icon';
import { stagesById } from '../game/stages';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import { useState } from 'react';
import { useMessages } from '../i18n/language';
import { LanguageButton } from '../components/LanguageButton';

const posterSources = import.meta.glob<string>('../assets/home/*.webp', {
  eager: true, import: 'default', query: '?url&no-inline',
});
const posterBackgrounds: Record<string, string> = {
  bakery: 'linear-gradient(#c4affb, #f6c4d2)',
  berry: 'linear-gradient(#fbbbc3, #f7b8c2)',
  honey: 'linear-gradient(#fece61, #fdd06f)',
  lavender: 'linear-gradient(#cdb5fb, #b796ef)',
  night: 'linear-gradient(#28478f, #9185d0)',
  rose: 'linear-gradient(#fcbfe3, #fdbfe4)',
  shop: 'linear-gradient(#fed9c1, #f8a18a)',
  sky: 'linear-gradient(#5cb2f8, #90b735)',
};
const posters = Object.entries(posterSources).map(([path, src]) => ({
  src,
  background: posterBackgrounds[path.split('/').at(-1)?.replace('.webp', '') ?? ''],
}));

export function StartPage({ stage, onGame, onStages, soundEnabled, onToggleSound, onToggleLanguage }: {
  stage: number; onGame: () => void; onStages: () => void; soundEnabled: boolean; onToggleSound: () => void; onToggleLanguage: () => void;
}) {
  const t = useMessages();
  const [poster] = useState(() => posters[Math.floor(Math.random() * posters.length)]);
  return <main className="start-page" style={{ backgroundImage: poster?.background }}>
    <h1 className="sr-only">Sweet Order</h1>
    <img className="start-poster" src={poster?.src} width={800} height={1800} alt="" draggable={false} fetchPriority="high" />
    <div className="top-actions">
      <LanguageButton onToggle={onToggleLanguage} />
      <button type="button" className="icon-button" onClick={onToggleSound} aria-label={t.sound} aria-pressed={soundEnabled}>
        <Icon name={soundEnabled ? 'sound' : 'sound-off'} />
      </button>
    </div>
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span><StageDifficultyRibbon difficulty={stagesById.get(stage)?.difficulty} /></button>
      <button className="secondary-button" onClick={onStages}>{t.stageSelect}</button>
    </div>
  </main>;
}
