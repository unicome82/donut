import type { StageDifficulty } from '../game/types';

export function StageDifficultyRibbon({ difficulty }: { difficulty?: StageDifficulty }) {
  if (!difficulty) return null;
  return <span className={`stage-difficulty stage-difficulty--${difficulty}`} lang="en">{difficulty}</span>;
}
