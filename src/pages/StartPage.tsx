import { Icon } from '../components/Icon';
import { stagesById } from '../game/stages';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import { useRef, useState } from 'react';
import { soundSampleGroups } from '../effects/soundSamples';

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

export function StartPage({ stage, onGame, onStages, soundEnabled, onToggleSound }: {
  stage: number; onGame: () => void; onStages: () => void; soundEnabled: boolean; onToggleSound: () => void;
}) {
  const [poster] = useState(() => posters[Math.floor(Math.random() * posters.length)]);
  const soundDialog = useRef<HTMLDialogElement>(null);
  const [{ group, sample }, setSelection] = useState({ group: 0, sample: 0 });
  const samples = soundSampleGroups[group]?.samples ?? soundSampleGroups[0].samples;
  const selected = samples[sample] ?? samples[0];

  return <main className="start-page" style={{ backgroundImage: poster?.background }}>
    <h1 className="sr-only">Sweet Order</h1>
    <img className="start-poster" src={poster?.src} width={800} height={1800} alt="" draggable={false} fetchPriority="high" />
    <button type="button" className="icon-button sound-button" onClick={() => soundDialog.current?.showModal()}
      aria-label="게임 소리 설정" aria-haspopup="dialog">
      <Icon name={soundEnabled ? 'sound' : 'sound-off'} />
    </button>
    <dialog ref={soundDialog} className="sound-dialog" aria-labelledby="sound-dialog-title">
      <div className="sound-dialog-header">
        <h2 id="sound-dialog-title">효과음</h2>
        <form method="dialog"><button type="submit" className="secondary-button">닫기</button></form>
      </div>
      <label className="sound-toggle">
        <span>게임 소리</span>
        <input type="checkbox" checked={soundEnabled} onChange={onToggleSound} />
      </label>
      <div className="sound-samples">
        <label>효과음 종류
          <select value={group} onChange={event => setSelection({ group: event.currentTarget.selectedIndex, sample: 0 })}>
            {soundSampleGroups.map(({ label }, index) => <option key={label} value={index}>{label}</option>)}
          </select>
        </label>
        <label>Pixabay 샘플
          <select value={sample} onChange={event => setSelection({ group, sample: event.currentTarget.selectedIndex })}>
            {samples.map(([title, path], index) => <option key={path} value={index}>{index + 1}. {title}</option>)}
          </select>
        </label>
      </div>
      <a className="primary-button sound-sample-link" href={`https://pixabay.com/sound-effects/${selected[1]}/`}
        target="_blank" rel="noopener noreferrer">Pixabay에서 듣기 (새 탭)</a>
    </dialog>
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span><StageDifficultyRibbon difficulty={stagesById.get(stage)?.difficulty} /></button>
      <button className="secondary-button" onClick={onStages}>스테이지 선택</button>
    </div>
  </main>;
}
