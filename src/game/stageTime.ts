import type { StageDefinition } from './types';

const limitByDifficulty = { easy: 120_000, normal: 150_000, hard: 180_000 } as const;

export function getStageTimeLimit(stage: StageDefinition): number {
  return stage.id === 0 ? 10_000 : limitByDifficulty[stage.difficulty ?? 'easy'];
}

export function getTimeStars(remainingMs: number, limitMs: number): number {
  if (remainingMs <= 0) return 0;
  if (remainingMs * 2 >= limitMs) return 3;
  return remainingMs * 4 >= limitMs ? 2 : 1;
}
