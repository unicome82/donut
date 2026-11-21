import type { DonutType, StageDefinition, StageDifficulty } from '../types';
import { practiceStage } from './practice';
import { CHUNK_SIZE, STAGE_COUNT, chunkOf, difficultyForStage, isStageId } from './schedule';
import { stage01 } from './stage01';
export { practiceStage, STAGE_COUNT, isStageId };

// Stored layouts use menu indexes; hidden dessert positions per queue are kept apart from them.
interface StoredStage {
  id: number; revision: number; difficulty: string; donutTypes: string[]; targetOrders: number;
  trayCapacity: number; queues: number[][]; orders: StageDefinition['orders']; hidden?: number[][];
}

// Each 100-stage chunk is its own lazily loaded module, so only the chunks a player reaches are downloaded.
const chunkLoaders = import.meta.glob<StoredStage[]>('./chunks/*.json', { import: 'stages' });
const chunkPath = (chunk: number) => `./chunks/${String(chunk).padStart(4, '0')}.json`;

function toStage({ hidden = [], ...stage }: StoredStage): StageDefinition {
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
}

const loaded = new Map<number, StageDefinition>([[stage01.id, stage01]]);
const loadingChunks = new Map<number, Promise<void>>();

function loadChunk(chunk: number): Promise<void> {
  let pending = loadingChunks.get(chunk);
  if (!pending) {
    const loader = chunkLoaders[chunkPath(chunk)];
    if (!loader) return Promise.reject(new Error(`Stage chunk ${chunk} is missing.`));
    pending = loader().then(stages => {
      for (const stage of stages) loaded.set(stage.id, toStage(stage));
    });
    // A failed download can be retried on the next request.
    pending.catch(() => loadingChunks.delete(chunk));
    loadingChunks.set(chunk, pending);
  }
  return pending;
}

export function isStageLoaded(id: number): boolean {
  return id === practiceStage.id || loaded.has(id);
}

/** Loads the chunk holding a stage; resolves at once when it is already in memory. */
export async function loadStage(id: number): Promise<StageDefinition> {
  if (!isStageLoaded(id)) {
    if (!isStageId(id)) throw new Error('존재하지 않는 스테이지입니다.');
    await loadChunk(chunkOf(id));
  }
  return getStage(id);
}

/** Starts downloading a stage's chunk in the background, ignoring failures. */
export function preloadStage(id: number): void {
  if (isStageId(id) && !isStageLoaded(id)) loadStage(id).catch(() => undefined);
}

/** Every stage, for tests and tools; the app itself loads chunks on demand. */
export async function loadAllStages(): Promise<StageDefinition[]> {
  await Promise.all(Array.from({ length: Math.ceil(STAGE_COUNT / CHUNK_SIZE) }, (_, index) => loadChunk(index + 1)));
  return Array.from({ length: STAGE_COUNT }, (_, index) => getStage(index + 1));
}

// Difficulty follows the fixed schedule, so menus can show it without loading stage data.
export const stageDifficulty = (id: number): StageDifficulty => difficultyForStage(id);

export const authoredStages = [stage01];
export const stageNames: Record<number, string> = { 1: '처음 한 입', 2: '달콤한 리듬', 3: '새로운 맛', 4: '차곡차곡', 5: '도넛 마스터' };
export function getStage(id: number) {
  if (id === practiceStage.id) return practiceStage;
  const stage = loaded.get(id);
  if (!stage) throw new Error('존재하지 않는 스테이지입니다.');
  return stage;
}
