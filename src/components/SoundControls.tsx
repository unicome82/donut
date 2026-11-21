import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Icon } from './Icon';
import { useMessages } from '../i18n/language';
import { musicCredit, musicTracks, playSound, readMusicTrack, readVolumes, setMusicTrack, setVolume, type MusicTrackId, type VolumeKind } from '../effects/sound';

interface Props { soundEnabled: boolean; onToggleSound: () => void }

/** Mute switch plus separate sliders for sound effects and background music. */
export function SoundControls({ soundEnabled, onToggleSound }: Props) {
  const t = useMessages();
  const [levels, setLevels] = useState(readVolumes);
  const [track, setTrack] = useState(readMusicTrack);
  function change(kind: VolumeKind, percent: number) {
    setVolume(kind, percent / 100);
    setLevels(readVolumes());
  }
  const sliders: Array<[VolumeKind, string]> = [['sfx', t.sfxVolume], ['music', t.musicVolume]];
  return <div className="sound-controls">
    <button type="button" data-sfx="none" className="secondary-button sound-mute-button" onClick={onToggleSound} aria-pressed={!soundEnabled}>
      <Icon name={soundEnabled ? 'sound' : 'sound-off'} />{soundEnabled ? t.soundOff : t.soundOn}
    </button>
    {sliders.map(([kind, label]) => <label key={kind} className="sound-slider">
      <span>{label}</span>
      <input type="range" min={0} max={100} step={5} value={Math.round(levels[kind] * 100)} disabled={!soundEnabled}
        style={{ '--fill': `${levels[kind] * 100}%` } as CSSProperties}
        onChange={event => change(kind, Number(event.currentTarget.value))}
        onPointerUp={() => { if (kind === 'sfx') playSound('select'); }}
        onKeyUp={() => { if (kind === 'sfx') playSound('select'); }} />
      <output>{Math.round(levels[kind] * 100)}</output>
    </label>)}
    <label className="sound-slider sound-track">
      <span>{t.musicTrack}</span>
      <select value={track} disabled={!soundEnabled} onChange={event => {
        const id = event.currentTarget.value as MusicTrackId;
        setMusicTrack(id);
        setTrack(id);
      }}>
        {musicTracks.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
      </select>
    </label>
    <p className="sound-credit" lang="en">{t.musicCredit} {musicCredit(track)}</p>
  </div>;
}

/** Sound settings popup for the start and stage screens. */
export function SoundButton(props: Props) {
  const t = useMessages();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    else if (!open && element.open) element.close();
  }, [open]);
  return <>
    <button type="button" className="icon-button" onClick={() => setOpen(true)} aria-label={t.soundSettings} aria-haspopup="dialog">
      <Icon name={props.soundEnabled ? 'sound' : 'sound-off'} />
    </button>
    <dialog ref={dialog} className="glass-popup tray-full-dialog sound-dialog" aria-labelledby="sound-heading"
      onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <h2 id="sound-heading">{t.soundSettings}</h2>
      <SoundControls {...props} />
      <div className="result-actions"><button type="button" className="primary-button popup-primary-button" onClick={() => setOpen(false)}>{t.close}</button></div>
    </dialog>
  </>;
}
