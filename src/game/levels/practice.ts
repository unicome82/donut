import { BASE_TRAY_CAPACITY, QUEUE_COUNT } from '../constants';
import type { LevelDefinition } from '../types';

export const practiceLevel: LevelDefinition = {
  id: 0,
  revision: 1,
  donutTypes: ['strawberry'],
  targetOrders: 1,
  trayCapacity: BASE_TRAY_CAPACITY,
  queues: Array.from({ length: QUEUE_COUNT }, (_, column) =>
    column === 3 ? [{ id: 'practice-dessert', type: 'strawberry' }] : [],
  ),
  orders: [{ id: 'practice-order', sequence: 1, items: { strawberry: 1 } }],
};
