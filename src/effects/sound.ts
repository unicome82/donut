const preferenceKey = 'sweet-order-sound';
const masterVolume = 0.48;
const silence = 0.0001;

export function readSoundPreference() {
  try {
    return localStorage.getItem(preferenceKey) !== 'off';
  } catch {
    return true;
  }
}

// Each strike has a body pitch, a short decay, and a softer set of upper partials.
type Strike = [offset: number, pitch: number, decay: number, level: number, attack?: number];
type Texture = [
  offset: number, center: number, duration: number, level: number,
  attack?: number, endCenter?: number,
];

const cues = {
  select: { strikes: [], texture: [[0, 1550, 0.025, 0.08]] },
  // Two frequency bands share one attack to make a single unpitched contact sound.
  delivery: { strikes: [], texture: [[0, 680, 0.038, 0.46, 0.001], [0, 2400, 0.014, 0.34, 0.001]] },
  order: {
    strikes: [[0.03, 523.25, 0.22, 0.12], [0.03, 659.25, 0.22, 0.085], [0.03, 783.99, 0.25, 0.065]],
    texture: [[0, 1800, 0.08, 0.075, 0.015]],
  },
  departure: {
    strikes: [],
    texture: [[0, 1700, 0.22, 0.19, 0.048, 430]],
  },
  blocked: {
    strikes: [[0, 146.83, 0.86, 0.15, 0.04], [0, 220, 0.78, 0.11, 0.04],
      [0.055, 349.23, 0.63, 0.16, 0.025], [0.34, 293.66, 0.81, 0.16, 0.035]],
    texture: [[0, 330, 0.1, 0.19, 0.012]],
    ambience: true,
  },
  failed: {
    strikes: [
      [0, 130.81, 1.3, 0.14, 0.055], [0, 196, 1.25, 0.095, 0.055],
      [0.035, 523.25, 0.87, 0.14, 0.03], [0.32, 466.16, 0.85, 0.13, 0.032],
      [0.66, 392, 1.1, 0.15, 0.04], [0.66, 164.81, 1.06, 0.115, 0.06], [0.66, 261.63, 1.02, 0.085, 0.055],
    ],
    texture: [],
    ambience: true,
  },
  clear: {
    strikes: [
      [0, 130.81, 1.45, 0.13, 0.06], [0, 261.63, 1.33, 0.085, 0.06], [0, 392, 1.23, 0.092, 0.06],
      [0.075, 523.25, 0.85, 0.13, 0.027], [0.32, 659.25, 0.91, 0.13, 0.032], [0.6, 783.99, 0.96, 0.15, 0.037],
      [0.91, 523.25, 1.2, 0.11, 0.062], [0.91, 659.25, 1.11, 0.093, 0.065], [0.91, 1046.5, 1.05, 0.14, 0.045],
    ],
    texture: [[0.86, 1650, 0.34, 0.11, 0.13, 4800]],
    ambience: true,
  },
} satisfies Record<string, Cue>;

type SoundName = keyof typeof cues;
type Cue = { strikes: Strike[]; texture: Texture[]; ambience?: boolean };

const alternateCues: Partial<Record<SoundName, Cue>> = {
  delivery: { strikes: [], texture: [[0, 410, 0.043, 0.56, 0.001], [0, 1570, 0.018, 0.26, 0.001]] },
  blocked: {
    strikes: [[0, 164.81, 0.97, 0.13, 0.04], [0, 246.94, 0.91, 0.11, 0.045],
      [0.035, 329.63, 0.64, 0.17, 0.023], [0.29, 392, 0.87, 0.15, 0.044]],
    texture: [[0, 710, 0.105, 0.16, 0.015]],
    ambience: true,
  },
  failed: {
    strikes: [
      [0, 110, 1.35, 0.14, 0.055], [0, 220, 1.26, 0.10, 0.05], [0, 329.63, 1.14, 0.077, 0.06],
      [0.045, 493.88, 0.87, 0.14, 0.034], [0.34, 440, 0.92, 0.13, 0.036],
      [0.71, 329.63, 1.17, 0.14, 0.045], [0.71, 261.63, 1.12, 0.10, 0.055],
    ],
    texture: [],
    ambience: true,
  },
  clear: {
    strikes: [
      [0, 146.83, 1.48, 0.13, 0.056], [0, 220, 1.36, 0.085, 0.063], [0, 369.99, 1.34, 0.091, 0.067],
      [0.052, 587.33, 0.84, 0.132, 0.025], [0.29, 739.99, 0.91, 0.13, 0.031],
      [0.57, 880, 0.94, 0.14, 0.036], [0.88, 987.77, 1.09, 0.13, 0.041],
      [0.88, 587.33, 1.18, 0.095, 0.055], [0.88, 739.99, 1.13, 0.085, 0.06],
    ],
    texture: [[0.83, 2400, 0.36, 0.12, 0.12, 5700]],
    ambience: true,
  },
};

let audio: AudioContext | undefined;
let output: GainNode | undefined;
let noise: AudioBuffer | undefined;
let selectedAt = -Infinity;
let preview: GainNode | undefined;
let previewRequest = 0;

export function saveSoundPreference(enabled: boolean) {
  try {
    localStorage.setItem(preferenceKey, enabled ? 'on' : 'off');
  } catch {
    // The preference can still be changed for the current session.
  }
  if (audio && output) output.gain.setTargetAtTime(enabled ? masterVolume : 0, audio.currentTime, 0.008);
}

export function unlockSound() {
  try {
    if (!audio) {
      if (!window.AudioContext) return;
      audio = new AudioContext();
      output = audio.createGain();
      output.gain.value = readSoundPreference() ? masterVolume : 0;
      output.connect(audio.destination);
    }
    if (audio.state !== 'running') void audio.resume().catch(() => undefined);
  } catch {
    // Audio may be unavailable in the current browser or device.
  }
}

function envelope(context: AudioContext, target: GainNode, start: number, end: number, level: number, attack = 0.002) {
  const node = context.createGain();
  node.gain.setValueAtTime(0, start);
  node.gain.linearRampToValueAtTime(level, start + attack);
  node.gain.exponentialRampToValueAtTime(silence, end);
  node.connect(target);
  return node;
}

function strike(context: AudioContext, target: GainNode, time: number, [offset, pitch, decay, level, attack = 0.002]: Strike) {
  const start = time + offset;
  for (const [ratio, weight, tail] of [[1, 1, 1], [2, 0.22, 0.52], [2.76, 0.09, 0.28]] as const) {
    const end = start + decay * tail;
    const tone = context.createOscillator();
    const gain = envelope(context, target, start, end, level * weight, attack * tail);
    tone.frequency.value = pitch * ratio;
    tone.connect(gain);
    tone.start(start);
    tone.stop(end);
    tone.onended = () => { tone.disconnect(); gain.disconnect(); };
  }
}

function texture(context: AudioContext, target: GainNode, time: number, [offset, center, decay, level, attack, endCenter]: Texture) {
  if (!noise) {
    noise = context.createBuffer(1, Math.ceil(context.sampleRate * 0.5), context.sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1;
  }
  const start = time + offset;
  const end = start + decay;
  const source = context.createBufferSource();
  source.buffer = noise;
  const filter = context.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(center, start);
  if (endCenter !== undefined) filter.frequency.exponentialRampToValueAtTime(endCenter, end);
  filter.Q.value = 0.65;
  const gain = envelope(context, target, start, end, level, attack);
  source.connect(filter).connect(gain);
  source.start(start);
  source.stop(end);
  source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
}

function playCue(context: AudioContext, target: GainNode, cue: Cue) {
  const start = context.currentTime;
  for (const voice of cue.strikes) {
    strike(context, target, start, voice);
    if (cue.ambience) {
      const [offset, pitch, decay, level, attack] = voice;
      strike(context, target, start, [offset + 0.13, pitch, decay * 0.86, level * 0.16, attack]);
      strike(context, target, start, [offset + 0.29, pitch, decay * 0.74, level * 0.085, attack]);
    }
  }
  for (const voice of cue.texture) texture(context, target, start, voice);
}

export function playSound(sound: SoundName) {
  if (!audio || !output || audio.state !== 'running' || document.hidden) return;
  const now = audio.currentTime;
  if (sound === 'select') {
    if (now - selectedAt < 0.035) return;
    selectedAt = now;
  }

  playCue(audio, output, cues[sound]);
}

export function stopSoundPreview() {
  previewRequest += 1;
  preview?.disconnect();
  preview = undefined;
}

export async function previewSound(sound: SoundName, alternate: boolean) {
  stopSoundPreview();
  const request = previewRequest;
  unlockSound();
  const context = audio;
  if (!context) return false;
  try {
    if (context.state !== 'running') await context.resume();
  } catch {
    return false;
  }
  if (request !== previewRequest) return true;
  preview = context.createGain();
  preview.gain.value = masterVolume;
  preview.connect(context.destination);
  const cue = alternate ? alternateCues[sound] ?? cues[sound] : cues[sound];
  playCue(context, preview, cue);
  return true;
}
