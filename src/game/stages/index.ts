import { stages as generatedStages } from './generated.json';
import type { DonutType, StageDefinition } from '../types';
import { practiceStage } from './practice';
import { stage01 } from './stage01';
import { stage02 } from './stage02';
import { stage03 } from './stage03';
import { stage04 } from './stage04';
import { stage05 } from './stage05';
export { practiceStage };
export const authoredStages = [stage01, stage02, stage03, stage04, stage05];
const generated: StageDefinition[] = generatedStages.map(stage => ({
  ...stage,
  donutTypes: stage.donutTypes as DonutType[],
  queues: stage.queues.map((queue, column) => queue.map((menuIndex, index) => ({
    id: `s${stage.id}-q${column}-${index}`,
    type: stage.donutTypes[menuIndex] as DonutType,
  }))),
}));
export const stages: StageDefinition[] = [...authoredStages, ...generated];
export const stagesById = new Map(stages.map(stage => [stage.id, stage]));
export const stageNames: Record<number, string> = { 1: '처음 한 입', 2: '달콤한 리듬', 3: '새로운 맛', 4: '차곡차곡', 5: '도넛 마스터' };
export function getStage(id: number) {
  if (id === practiceStage.id) return practiceStage;
  const stage = stagesById.get(id);
  if (!stage) throw new Error('존재하지 않는 스테이지입니다.');
  return stage;
}
