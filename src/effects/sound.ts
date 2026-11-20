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
type Strike = [offset: number, pitch: number, decay: number, level: number];
type Texture = [offset: number, center: number, decay: number, level: number];

const cues = {
  select: { strikes: [], texture: [[0, 1550, 0.025, 0.08]] },
  delivery: { strikes: [[0, 280, 0.055, 0.35]], texture: [[0, 1350, 0.033, 0.28]] },
  order: { strikes: [[0.035, 587.33, 0.19, 0.15], [0.105, 880, 0.25, 0.14]], texture: [] },
  departure: { strikes: [[0, 293.66, 0.18, 0.19], [0.09, 220, 0.2, 0.11]], texture: [] },
  blocked: {
    strikes: [[0, 174.61, 0.10, 0.26], [0.105, 146.83, 0.17, 0.22]],
    texture: [[0, 820, 0.038, 0.15], [0.105, 690, 0.042, 0.12]],
  },
  failed: {
    strikes: [[0, 392, 0.26, 0.18], [0.12, 311.13, 0.29, 0.16], [0.27, 261.63, 0.4, 0.17], [0.27, 130.81, 0.41, 0.11]],
    texture: [[0, 710, 0.06, 0.10]],
  },
  clear: {
    strikes: [
      [0, 523.25, 0.26, 0.18], [0.075, 659.25, 0.24, 0.16], [0.15, 783.99, 0.29, 0.17],
      [0.26, 523.25, 0.43, 0.10], [0.26, 659.25, 0.40, 0.09], [0.26, 1046.5, 0.46, 0.19],
      [0.34, 1567.98, 0.29, 0.055],
    ],
    texture: [[0.26, 3200, 0.09, 0.055]],
  },
} satisfies Record<string, { strikes: Strike[]; texture: Texture[] }>;

type SoundName = keyof typeof cues;
type Cue = { strikes: Strike[]; texture: Texture[] };

const alternateCues: Partial<Record<SoundName, Cue>> = {
  delivery: { strikes: [[0, 445, 0.064, 0.25]], texture: [[0, 2350, 0.024, 0.23]] },
  blocked: {
    strikes: [[0, 130.81, 0.19, 0.26], [0.045, 196, 0.18, 0.12]],
    texture: [[0, 560, 0.05, 0.19]],
  },
  failed: {
    strikes: [[0, 349.23, 0.25, 0.18], [0.115, 293.66, 0.30, 0.16], [0.23, 220, 0.42, 0.16], [0.23, 261.63, 0.37, 0.085]],
    texture: [],
  },
  clear: {
    strikes: [[0, 659.25, 0.24, 0.18], [0.085, 880, 0.27, 0.17], [0.17, 1108.73, 0.33, 0.16],
      [0.27, 440, 0.34, 0.10], [0.27, 880, 0.38, 0.12], [0.27, 1318.51, 0.41, 0.15]],
    texture: [[0.27, 3600, 0.12, 0.075]],
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

function envelope(context: AudioContext, target: GainNode, start: number, end: number, level: number) {
  const node = context.createGain();
  node.gain.setValueAtTime(0, start);
  node.gain.linearRampToValueAtTime(level, start + 0.002);
  node.gain.exponentialRampToValueAtTime(silence, end);
  node.connect(target);
  return node;
}

function strike(context: AudioContext, target: GainNode, time: number, [offset, pitch, decay, level]: Strike) {
  const start = time + offset;
  for (const [ratio, weight, tail] of [[1, 1, 1], [2, 0.22, 0.52], [2.76, 0.09, 0.28]] as const) {
    const end = start + decay * tail;
    const tone = context.createOscillator();
    const gain = envelope(context, target, start, end, level * weight);
    tone.frequency.value = pitch * ratio;
    tone.connect(gain);
    tone.start(start);
    tone.stop(end);
    tone.onended = () => { tone.disconnect(); gain.disconnect(); };
  }
}

function texture(context: AudioContext, target: GainNode, time: number, [offset, center, decay, level]: Texture) {
  if (!noise) {
    noise = context.createBuffer(1, Math.ceil(context.sampleRate * 0.12), context.sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1;
  }
  const start = time + offset;
  const end = start + decay;
  const source = context.createBufferSource();
  source.buffer = noise;
  const filter = context.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = center;
  filter.Q.value = 0.65;
  const gain = envelope(context, target, start, end, level);
  source.connect(filter).connect(gain);
  source.start(start);
  source.stop(end);
  source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
}

function playCue(context: AudioContext, target: GainNode, cue: Cue, repetitions: number, spacing: number) {
  const now = context.currentTime;
  for (let index = 0; index < repetitions; index += 1) {
    const start = now + index * spacing;
    for (const voice of cue.strikes) strike(context, target, start, voice);
    for (const voice of cue.texture) texture(context, target, start, voice);
  }
}

export function playSound(sound: SoundName, deliveries = 1) {
  if (!audio || !output || audio.state !== 'running' || document.hidden) return;
  const now = audio.currentTime;
  if (sound === 'select') {
    if (now - selectedAt < 0.035) return;
    selectedAt = now;
  }

  playCue(audio, output, cues[sound], sound === 'delivery' ? deliveries : 1, 0.029);
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
  playCue(context, preview, cue, sound === 'delivery' ? 2 : 1, 0.2);
  return true;
}
