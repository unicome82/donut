import { ORDER_SLOTS } from './constants';
import { level01 } from './levels/level01';
import type { GameState } from './types';
import { validateLevel } from './validation';
const errors = validateLevel(level01);
if (errors.length) throw new Error(errors.join('\n'));
// UI 제작용 초기 스냅샷. 엔진 및 플레이 상태 변경은 다음 작업 묶음에서 연결한다.
export const mockGame: GameState = {
  levelId: level01.id, levelRevision: level01.revision, status: 'ready',
  orders: level01.orders.slice(0, ORDER_SLOTS).map(o => ({ definitionId: o.id, sequence: o.sequence, remaining: { ...o.items } })),
  nextOrderIndex: ORDER_SLOTS, queues: structuredClone(level01.queues), tray: [],
  trayCapacity: level01.trayCapacity, completedOrders: 0, expandUsed: false, transitionId: 0,
};
