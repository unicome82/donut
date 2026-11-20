import { Icon } from '../components/Icon';
import { stagesById } from '../game/stages';
import { StageDifficultyRibbon } from '../components/StageDifficultyRibbon';
import { useEffect, useRef, useState } from 'react';
import { previewSound, stopSoundPreview } from '../effects/sound';

const soundSamples = [
  { cue: 'delivery', label: '디저트 전달' },
  { cue: 'blocked', label: '트레이 가득 참' },
  { cue: 'failed', label: '스테이지 실패' },
  { cue: 'clear', label: '스테이지 성공' },
] as const;

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
  const [sample, setSample] = useState(0);
  const [alternate, setAlternate] = useState(false);
  const [previewUnavailable, setPreviewUnavailable] = useState(false);
  useEffect(() => stopSoundPreview, []);

  async function listen() {
    const cue = soundSamples[sample]?.cue;
    if (cue) setPreviewUnavailable(!(await previewSound(cue, alternate)));
  }

  return <main className="start-page" style={{ backgroundImage: poster?.background }}>
    <h1 className="sr-only">Sweet Order</h1>
    <img className="start-poster" src={poster?.src} width={800} height={1800} alt="" draggable={false} fetchPriority="high" />
    <button type="button" className="icon-button sound-button" onClick={() => soundDialog.current?.showModal()}
      aria-label="게임 소리 설정" aria-haspopup="dialog">
      <Icon name={soundEnabled ? 'sound' : 'sound-off'} />
    </button>
    <dialog ref={soundDialog} className="sound-dialog" aria-labelledby="sound-dialog-title" onClose={stopSoundPreview}>
      <div className="sound-dialog-header">
        <h2 id="sound-dialog-title">효과음</h2>
        <form method="dialog"><button type="submit" className="secondary-button">닫기</button></form>
      </div>
      <label className="sound-toggle">
        <span>게임 소리</span>
        <input type="checkbox" checked={soundEnabled} onChange={onToggleSound} />
      </label>
      <div className="sound-samples">
        <label>효과음 선택
          <select value={sample} onChange={event => { stopSoundPreview(); setSample(event.currentTarget.selectedIndex); }}>
            {soundSamples.map(({ cue, label }, index) => <option key={cue} value={index}>{label}</option>)}
          </select>
        </label>
        <label>버전
          <select value={alternate ? 'b' : 'a'} onChange={event => { stopSoundPreview(); setAlternate(event.currentTarget.value === 'b'); }}>
            <option value="a">A · 게임 적용본</option>
            <option value="b">B · 다른 후보</option>
          </select>
        </label>
      </div>
      <button type="button" className="primary-button" onClick={() => { void listen(); }}>샘플 듣기</button>
      {previewUnavailable && <p role="status">이 기기에서 소리를 재생할 수 없어요.</p>}
    </dialog>
    <div className="start-actions">
      <button className="primary-button stage-button" onClick={onGame}><span>Stage {String(stage).padStart(2, '0')}</span><StageDifficultyRibbon difficulty={stagesById.get(stage)?.difficulty} /></button>
      <button className="secondary-button" onClick={onStages}>스테이지 선택</button>
    </div>
  </main>;
}
