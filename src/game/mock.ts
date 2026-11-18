import { ORDER_SLOTS } from './constants';
import { stage01 } from './stages/stage01';
import type { GameState } from './types';
import { validateStage } from './validation';
const errors = validateStage(stage01);
if (errors.length) throw new Error(errors.join('\n'));
// UI 제작용 초기 스냅샷. 엔진 및 플레이 상태 변경은 다음 작업 묶음에서 연결한다.
export const mockGame: GameState = {
  stageId: stage01.id, stageRevision: stage01.revision, status: 'ready',
  orders: stage01.orders.slice(0, ORDER_SLOTS).map(o => ({ definitionId: o.id, sequence: o.sequence, remaining: { ...o.items } })),
  nextOrderIndex: ORDER_SLOTS, queues: structuredClone(stage01.queues), tray: [],
  trayCapacity: stage01.trayCapacity, completedOrders: 0, expandUsed: false, transitionId: 0,
};
