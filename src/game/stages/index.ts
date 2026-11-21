import { stages as generatedStages } from './generated.json';
import type { DonutType, StageDefinition, StageDifficulty } from '../types';
import { practiceStage } from './practice';
import { stage01 } from './stage01';
export { practiceStage };
export const authoredStages = [stage01];
const generated: StageDefinition[] = generatedStages.map(entry => {
  // Hidden dessert positions per queue are stored apart from the menu indexes.
  const { hidden = [], ...stage } = entry as typeof entry & { hidden?: number[][] };
  return {
    ...stage,
    difficulty: stage.difficulty as StageDifficulty,
    donutTypes: stage.donutTypes as DonutType[],
    queues: stage.queues.map((queue, column) => {
      const covered = new Set(hidden[column]);
      return queue.map((menuIndex, index) => ({
        id: `s${stage.id}-q${column}-${index}`,
        type: stage.donutTypes[menuIndex] as DonutType,
        ...(covered.has(index) ? { hidden: true } : {}),
      }));
    }),
  };
});
export const stages: StageDefinition[] = [...authoredStages, ...generated];
export const stagesById = new Map(stages.map(stage => [stage.id, stage]));
export const stageNames: Record<number, string> = { 1: '처음 한 입', 2: '달콤한 리듬', 3: '새로운 맛', 4: '차곡차곡', 5: '도넛 마스터' };
export function getStage(id: number) {
  if (id === practiceStage.id) return practiceStage;
  const stage = stagesById.get(id);
  if (!stage) throw new Error('존재하지 않는 스테이지입니다.');
  return stage;
}
