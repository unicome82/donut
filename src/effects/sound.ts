const preferenceKey = 'sweet-order-sound';

export function readSoundPreference() {
  try {
    return localStorage.getItem(preferenceKey) !== 'off';
  } catch {
    return true;
  }
}

const sounds = {
  // Start time, length, pitch, volume, and optional ending pitch.
  select: [[0, 0.075, 660, 0.10, 420]],
  order: [[0, 0.14, 659, 0.14], [0.085, 0.21, 880, 0.13]],
  departure: [[0, 0.19, 392, 0.13, 249]],
  clear: [[0, 0.18, 523, 0.13], [0.095, 0.2, 659, 0.13], [0.19, 0.22, 784, 0.13], [0.31, 0.29, 1047, 0.12]],
  failed: [[0, 0.21, 415, 0.13], [0.15, 0.31, 294, 0.12]],
  blocked: [[0, 0.12, 240, 0.13, 154]],
} satisfies Record<string, [number, number, number, number, number?][]>;

let audio: AudioContext | undefined;
let output: GainNode | undefined;
let selectedAt = -Infinity;

export function saveSoundPreference(enabled: boolean) {
  try {
    localStorage.setItem(preferenceKey, enabled ? 'on' : 'off');
  } catch {
    // The preference can still be changed for the current session.
  }
  if (audio && output) output.gain.setTargetAtTime(enabled ? 0.48 : 0, audio.currentTime, 0.008);
}

export function unlockSound() {
  try {
    if (!audio) {
      if (!window.AudioContext) return;
      audio = new AudioContext();
      output = audio.createGain();
      output.gain.value = 0.48;
      output.connect(audio.destination);
    }
    if (audio.state !== 'running') void audio.resume().catch(() => undefined);
  } catch {
    // Audio may be unavailable in the current browser or device.
  }
}

export function playSound(sound: keyof typeof sounds) {
  if (!audio || !output || audio.state !== 'running' || document.hidden) return;
  const now = audio.currentTime;
  if (sound === 'select') {
    if (now - selectedAt < 0.035) return;
    selectedAt = now;
  }

  for (const [delay, length, pitch, volume, endPitch] of sounds[sound]) {
    const start = now + delay;
    const end = start + length;
    const tone = audio.createOscillator();
    const envelope = audio.createGain();
    tone.type = sound === 'select' || sound === 'blocked' ? 'triangle' : 'sine';
    tone.frequency.setValueAtTime(pitch, start);
    if (endPitch) tone.frequency.exponentialRampToValueAtTime(endPitch, end);
    envelope.gain.setValueAtTime(0, start);
    envelope.gain.linearRampToValueAtTime(volume, start + 0.007);
    envelope.gain.exponentialRampToValueAtTime(0.001, end);
    tone.connect(envelope).connect(output);
    tone.start(start);
    tone.stop(end);
    tone.onended = () => { tone.disconnect(); envelope.disconnect(); };
  }
}
