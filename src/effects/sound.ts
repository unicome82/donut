import musicUrl from '../assets/audio/bgm-bossa-antigua.mp3?url';

export const MUSIC_CREDIT = '"Bossa Antigua" Kevin MacLeod (incompetech.com) · CC BY 4.0';

const preferenceKey = 'sweet-order-sound';
const volumeKeys = { sfx: 'sweet-order-sfx-volume', music: 'sweet-order-music-volume' } as const;
const defaultVolumes = { sfx: 0.8, music: 0.45 } as const;
const masterVolume = 0.6;
const silence = 0.0001;

export type VolumeKind = keyof typeof volumeKeys;
export type MusicMood = 'normal' | 'dim' | 'urgent';

export function readSoundPreference() {
  try {
    return localStorage.getItem(preferenceKey) !== 'off';
  } catch {
    return true;
  }
}

function readVolume(kind: VolumeKind) {
  try {
    const saved = Number.parseFloat(localStorage.getItem(volumeKeys[kind]) ?? '');
    if (Number.isFinite(saved)) return Math.min(1, Math.max(0, saved));
  } catch {
    // Fall back to the default level.
  }
  return defaultVolumes[kind];
}

// A tone is one pitched voice; partials add the bell/marimba colour on top of the body pitch.
type Overtone = readonly [ratio: number, weight: number, tail: number];
interface Tone {
  at: number; freq: number; dur: number; level: number;
  attack?: number; to?: number; wave?: OscillatorType; partials?: readonly Overtone[];
}
// A noise burst is filtered white noise: clicks, knocks, whooshes.
interface Noise {
  at: number; freq: number; dur: number; level: number;
  attack?: number; to?: number; q?: number; filter?: BiquadFilterType;
}
interface Cue { tones?: Tone[]; noises?: Noise[]; echo?: boolean }

const bell: readonly Overtone[] = [[1, 1, 1], [2, 0.22, 0.52], [2.76, 0.09, 0.28]];
const marimba: readonly Overtone[] = [[1, 1, 1], [4, 0.14, 0.22], [9.2, 0.03, 0.08]];
const pure: readonly Overtone[] = [[1, 1, 1]];

// Rising pentatonic steps: consecutive deliveries climb so a streak sounds like progress.
const deliverySteps = [392, 440, 493.88, 587.33, 659.25, 783.99, 880, 987.77];
const semitone = 2 ** (1 / 12);

const cueBuilders = {
  // Bubbly "pop": a short downward pitch glide with a crisp contact click.
  select: (): Cue => {
    const pitch = 820 * (0.96 + Math.random() * 0.08);
    return {
      tones: [
        { at: 0, freq: pitch, to: pitch * 0.62, dur: 0.09, level: 0.34, attack: 0.0015, partials: pure },
        { at: 0, freq: pitch * 2.02, to: pitch * 1.3, dur: 0.045, level: 0.07, attack: 0.001, wave: 'triangle', partials: pure },
      ],
      noises: [{ at: 0, freq: 3200, dur: 0.014, level: 0.16, attack: 0.0005, q: 0.9 }],
    };
  },
  // Wooden contact plus a marimba note that climbs with the delivery streak.
  delivery: (step: number): Cue => ({
    tones: [{ at: 0.004, freq: deliverySteps[Math.min(step, deliverySteps.length - 1)]!, dur: 0.3, level: 0.16, attack: 0.002, partials: marimba }],
    noises: [{ at: 0, freq: 310, dur: 0.05, level: 0.5, attack: 0.0015 }, { at: 0, freq: 1120, dur: 0.016, level: 0.22, attack: 0.0006 }],
  }),
  order: (step: number): Cue => {
    const lift = semitone ** (Math.min(step, 6) * 2);
    return {
      tones: [
        { at: 0.03, freq: 523.25 * lift, dur: 0.24, level: 0.13, partials: bell },
        { at: 0.03, freq: 659.25 * lift, dur: 0.24, level: 0.09, partials: bell },
        { at: 0.03, freq: 783.99 * lift, dur: 0.27, level: 0.07, partials: bell },
        { at: 0.09, freq: 2093 * lift, dur: 0.18, level: 0.025, partials: pure },
      ],
      noises: [{ at: 0, freq: 1800, dur: 0.08, level: 0.075, attack: 0.015 }],
    };
  },
  // Short, dull thunk: clearly "not now" without sounding like a failure.
  denied: (): Cue => ({
    tones: [{ at: 0, freq: 190, to: 120, dur: 0.11, level: 0.3, attack: 0.002, partials: pure }],
    noises: [{ at: 0, freq: 420, dur: 0.045, level: 0.3, attack: 0.001, filter: 'lowpass', q: 0.7 }],
  }),
  // Happy customer walking off: soft whoosh and a tiny two-note sparkle for the hearts.
  departure: (): Cue => ({
    tones: [
      { at: 0.02, freq: 1567.98, dur: 0.16, level: 0.05, partials: pure },
      { at: 0.09, freq: 2093, dur: 0.2, level: 0.045, partials: pure },
    ],
    noises: [{ at: 0, freq: 1700, to: 430, dur: 0.24, level: 0.22, attack: 0.05 }],
  }),
  // Interface buttons: a soft, dry tock.
  tap: (): Cue => ({
    tones: [{ at: 0, freq: 640, to: 470, dur: 0.06, level: 0.22, attack: 0.001, partials: pure }],
    noises: [{ at: 0, freq: 2000, dur: 0.012, level: 0.1, attack: 0.0005 }],
  }),
  // Tray emptied: a falling swish followed by plates clinking away.
  clearTray: (): Cue => ({
    tones: [
      { at: 0.06, freq: 2637, dur: 0.09, level: 0.07, partials: bell },
      { at: 0.12, freq: 2349.3, dur: 0.09, level: 0.065, partials: bell },
      { at: 0.18, freq: 1975.5, dur: 0.12, level: 0.065, partials: bell },
    ],
    noises: [{ at: 0, freq: 2600, to: 420, dur: 0.3, level: 0.34, attack: 0.02, q: 0.8 }],
  }),
  pause: (): Cue => ({
    tones: [
      { at: 0, freq: 659.25, dur: 0.16, level: 0.11, partials: bell },
      { at: 0.08, freq: 523.25, dur: 0.22, level: 0.1, partials: bell },
    ],
  }),
  resume: (): Cue => ({
    tones: [
      { at: 0, freq: 523.25, dur: 0.14, level: 0.1, partials: bell },
      { at: 0.07, freq: 783.99, dur: 0.2, level: 0.11, partials: bell },
    ],
  }),
  // Last seconds: a clock tick, brighter with a low pulse in the final three seconds.
  tick: (): Cue => ({
    tones: [{ at: 0, freq: 1250, dur: 0.035, level: 0.12, attack: 0.001, partials: pure }],
    noises: [{ at: 0, freq: 2600, dur: 0.01, level: 0.09, attack: 0.0005 }],
  }),
  tickUrgent: (): Cue => ({
    tones: [
      { at: 0, freq: 1568, dur: 0.05, level: 0.16, attack: 0.001, partials: pure },
      { at: 0, freq: 220, to: 160, dur: 0.12, level: 0.2, attack: 0.002, partials: pure },
    ],
    noises: [{ at: 0, freq: 3000, dur: 0.012, level: 0.1, attack: 0.0005 }],
  }),
  // A star slips away: a falling glassy arpeggio.
  starLost: (): Cue => ({
    tones: [
      { at: 0, freq: 1567.98, dur: 0.32, level: 0.09, partials: bell },
      { at: 0.09, freq: 1174.66, dur: 0.34, level: 0.085, partials: bell },
      { at: 0.18, freq: 880, dur: 0.5, level: 0.09, partials: bell },
    ],
    noises: [{ at: 0, freq: 3200, to: 900, dur: 0.36, level: 0.06, attack: 0.03 }],
  }),
  blocked: (): Cue => ({
    tones: [
      { at: 0, freq: 146.83, dur: 0.86, level: 0.15, attack: 0.04, partials: bell },
      { at: 0, freq: 220, dur: 0.78, level: 0.11, attack: 0.04, partials: bell },
      { at: 0.055, freq: 349.23, dur: 0.63, level: 0.16, attack: 0.025, partials: bell },
      { at: 0.34, freq: 293.66, dur: 0.81, level: 0.16, attack: 0.035, partials: bell },
    ],
    noises: [{ at: 0, freq: 330, dur: 0.1, level: 0.19, attack: 0.012 }],
    echo: true,
  }),
  failed: (): Cue => ({
    tones: [
      { at: 0, freq: 130.81, dur: 1.3, level: 0.14, attack: 0.055, partials: bell },
      { at: 0, freq: 196, dur: 1.25, level: 0.095, attack: 0.055, partials: bell },
      { at: 0.035, freq: 523.25, dur: 0.87, level: 0.14, attack: 0.03, partials: bell },
      { at: 0.32, freq: 466.16, dur: 0.85, level: 0.13, attack: 0.032, partials: bell },
      { at: 0.66, freq: 392, dur: 1.1, level: 0.15, attack: 0.04, partials: bell },
      { at: 0.66, freq: 164.81, dur: 1.06, level: 0.115, attack: 0.06, partials: bell },
      { at: 0.66, freq: 261.63, dur: 1.02, level: 0.085, attack: 0.055, partials: bell },
    ],
    echo: true,
  }),
  clear: (): Cue => ({
    tones: [
      { at: 0, freq: 440, dur: 0.54, level: 0.115, attack: 0.012, partials: bell },
      { at: 0.14, freq: 554.37, dur: 0.62, level: 0.12, attack: 0.015, partials: bell },
      { at: 0.29, freq: 329.63, dur: 0.86, level: 0.1, attack: 0.045, partials: bell },
      { at: 0.29, freq: 554.37, dur: 0.85, level: 0.085, attack: 0.035, partials: bell },
      { at: 0.29, freq: 659.25, dur: 0.88, level: 0.15, attack: 0.02, partials: bell },
      { at: 0.29, freq: 880, dur: 0.77, level: 0.075, attack: 0.024, partials: bell },
    ],
    echo: true,
  }),
} satisfies Record<string, (step: number) => Cue>;

export type SoundName = keyof typeof cueBuilders;
export const soundNames = Object.keys(cueBuilders) as SoundName[];

// How long a pause between deliveries may be before the rising streak starts over.
const STREAK_GAP = 1.4;
const minimumGap: Partial<Record<SoundName, number>> = { select: 0.035, denied: 0.18, tap: 0.04 };

let audio: AudioContext | undefined;
let output: GainNode | undefined;
let sfxBus: GainNode | undefined;
let musicBus: GainNode | undefined;
let moodGain: GainNode | undefined;
let music: HTMLAudioElement | undefined;
let musicRouted = false;
let noise: AudioBuffer | undefined;
let resuming: Promise<void> | undefined;
let soundEnabled = readSoundPreference();
const volumes: Record<VolumeKind, number> = { sfx: readVolume('sfx'), music: readVolume('music') };
let mood: MusicMood = 'normal';
const lastPlayed = new Map<SoundName, number>();
let streak = 0;
let streakAt = -Infinity;

export function readVolumes(): Record<VolumeKind, number> {
  return { ...volumes };
}

function ramp(param: AudioParam, value: number, smoothing = 0.02) {
  if (audio) param.setTargetAtTime(value, audio.currentTime, smoothing);
}

function musicLevel() {
  return volumes.music * (mood === 'dim' ? 0.35 : 1);
}

function syncMusic() {
  if (!music) return;
  const wanted = soundEnabled && volumes.music > 0 && !document.hidden;
  // Without Web Audio routing, fall back to the element volume (ignored on iOS).
  if (!musicRouted) music.volume = Math.min(1, musicLevel() * masterVolume);
  music.playbackRate = mood === 'urgent' ? 1.06 : 1;
  if (wanted && music.paused) void music.play().catch(() => undefined);
  else if (!wanted && !music.paused) music.pause();
}

export function saveSoundPreference(enabled: boolean) {
  soundEnabled = enabled;
  try {
    localStorage.setItem(preferenceKey, enabled ? 'on' : 'off');
  } catch {
    // The preference can still be changed for the current session.
  }
  if (output) ramp(output.gain, enabled ? masterVolume : 0, 0.008);
  syncMusic();
}

export function setVolume(kind: VolumeKind, value: number) {
  volumes[kind] = Math.min(1, Math.max(0, value));
  try {
    localStorage.setItem(volumeKeys[kind], String(volumes[kind]));
  } catch {
    // The level still applies for the current session.
  }
  if (kind === 'sfx' && sfxBus) ramp(sfxBus.gain, volumes.sfx);
  if (kind === 'music' && musicBus) ramp(musicBus.gain, volumes.music);
  syncMusic();
}

// Dim the music under pause and result popups; speed it up slightly in the last seconds.
export function setMusicMood(next: MusicMood) {
  if (mood === next) return;
  mood = next;
  if (moodGain) ramp(moodGain.gain, next === 'dim' ? 0.35 : 1, 0.25);
  syncMusic();
}

function startMusic(context: AudioContext) {
  if (music || typeof Audio === 'undefined') return;
  music = new Audio(musicUrl);
  music.loop = true;
  music.preload = 'auto';
  music.preservesPitch = true;
  try {
    moodGain = context.createGain();
    moodGain.gain.value = mood === 'dim' ? 0.35 : 1;
    context.createMediaElementSource(music).connect(moodGain).connect(musicBus!);
    musicRouted = true;
  } catch {
    musicRouted = false;
  }
  document.addEventListener('visibilitychange', syncMusic);
}

export function unlockSound() {
  try {
    if (!audio) {
      const Context = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Context) return;
      audio = new Context();
      output = audio.createGain();
      output.gain.value = soundEnabled ? masterVolume : 0;
      const limiter = audio.createDynamicsCompressor();
      limiter.threshold.value = -6;
      limiter.ratio.value = 8;
      output.connect(limiter).connect(audio.destination);
      sfxBus = audio.createGain();
      sfxBus.gain.value = volumes.sfx;
      sfxBus.connect(output);
      musicBus = audio.createGain();
      musicBus.gain.value = volumes.music;
      musicBus.connect(output);
    }
    if (audio.state !== 'running' && !resuming) {
      resuming = audio.resume().catch(() => undefined).finally(() => { resuming = undefined; });
    }
    // Media playback must start inside the user gesture that called this.
    startMusic(audio);
    syncMusic();
  } catch {
    // Audio may be unavailable in the current browser or device.
  }
}

function envelope(context: AudioContext, target: AudioNode, start: number, end: number, level: number, attack: number) {
  const node = context.createGain();
  node.gain.setValueAtTime(0, start);
  node.gain.linearRampToValueAtTime(level, start + attack);
  node.gain.exponentialRampToValueAtTime(silence, end);
  node.connect(target);
  return node;
}

function playTone(context: AudioContext, target: AudioNode, time: number, voice: Tone) {
  const { at, freq, dur, level, attack = 0.002, to, wave = 'sine', partials = bell } = voice;
  const start = time + at;
  for (const [ratio, weight, tail] of partials) {
    const end = start + dur * tail;
    const tone = context.createOscillator();
    const gain = envelope(context, target, start, end, level * weight, Math.min(attack, dur * tail * 0.5));
    tone.type = wave;
    tone.frequency.setValueAtTime(freq * ratio, start);
    if (to !== undefined) tone.frequency.exponentialRampToValueAtTime(to * ratio, end);
    tone.connect(gain);
    tone.start(start);
    tone.stop(end + 0.01);
    tone.onended = () => { tone.disconnect(); gain.disconnect(); };
  }
}

function playNoise(context: AudioContext, target: AudioNode, time: number, voice: Noise) {
  const { at, freq, dur, level, attack = 0.002, to, q = 0.65, filter: kind = 'bandpass' } = voice;
  if (!noise) {
    noise = context.createBuffer(1, Math.ceil(context.sampleRate * 0.5), context.sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1;
  }
  const start = time + at;
  const end = start + dur;
  const source = context.createBufferSource();
  source.buffer = noise;
  const filter = context.createBiquadFilter();
  filter.type = kind;
  filter.frequency.setValueAtTime(freq, start);
  if (to !== undefined) filter.frequency.exponentialRampToValueAtTime(to, end);
  filter.Q.value = q;
  const gain = envelope(context, target, start, end, level, attack);
  source.connect(filter).connect(gain);
  source.start(start);
  source.stop(end + 0.01);
  source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
}

/** Schedules a cue on any context; also used to render previews offline. */
export function renderCue(context: BaseAudioContext, target: AudioNode, sound: SoundName, start: number, step = 0) {
  const cue = cueBuilders[sound](step);
  for (const voice of cue.tones ?? []) {
    playTone(context as AudioContext, target, start, voice);
    if (cue.echo) {
      playTone(context as AudioContext, target, start, { ...voice, at: voice.at + 0.13, dur: voice.dur * 0.86, level: voice.level * 0.16 });
      playTone(context as AudioContext, target, start, { ...voice, at: voice.at + 0.29, dur: voice.dur * 0.74, level: voice.level * 0.085 });
    }
  }
  for (const voice of cue.noises ?? []) playNoise(context as AudioContext, target, start, voice);
}

function nextStep(sound: SoundName, now: number) {
  if (sound !== 'delivery' && sound !== 'order') return 0;
  streak = now - streakAt < STREAK_GAP ? streak + 1 : 0;
  streakAt = now;
  return streak;
}

export function playSound(sound: SoundName, delayMs = 0) {
  if (!soundEnabled || !audio || !output || !sfxBus || document.hidden) return;
  if (audio.state !== 'running') {
    const pendingResume = resuming;
    if (pendingResume) void pendingResume.then(() => {
      if (audio?.state === 'running') playSound(sound, delayMs);
    });
    return;
  }
  const now = audio.currentTime;
  const gap = minimumGap[sound];
  if (gap !== undefined) {
    if (now - (lastPlayed.get(sound) ?? -Infinity) < gap) return;
    lastPlayed.set(sound, now);
  }
  try {
    renderCue(audio, sfxBus, sound, now + delayMs / 1000, nextStep(sound, now));
  } catch {
    // Playback can fail when the browser suspends or loses its audio device.
  }
}
