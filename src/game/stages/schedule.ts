import type { StageDifficulty } from '../types';

// Stages 1–8 alternate easy and normal so the first hard stage arrives at stage 11.
const opening: StageDifficulty[] = ['easy', 'easy', 'normal', 'easy', 'normal', 'easy', 'normal', 'easy'];
// From stage 9 the same eight-stage cadence repeats, with hard stages mixed in.
const cadence: StageDifficulty[] = ['normal', 'easy', 'hard', 'normal', 'easy', 'normal', 'hard', 'easy'];
const campaignEnd = 101;

export function difficultyForStage(id: number): StageDifficulty {
  return id <= opening.length ? opening[id - 1]! : cadence[(id - opening.length - 1) % cadence.length]!;
}

// 0 at stage 1 and 1 from the end of the campaign; generator targets tighten along it.
export function campaignProgress(id: number): number {
  return Math.min(1, Math.max(0, (id - 1) / (campaignEnd - 1)));
}

// Covered ("?") desserts appear only in hard stages after stage 20.
export const hiddenDessertsAfterStage = 20;
export function hasHiddenDesserts(id: number, difficulty: StageDifficulty): boolean {
  return difficulty === 'hard' && id > hiddenDessertsAfterStage;
}
