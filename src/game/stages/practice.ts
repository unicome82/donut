import { BASE_TRAY_CAPACITY, QUEUE_COUNT } from '../constants';
import type { StageDefinition } from '../types';

export const practiceStage: StageDefinition = {
  id: 0,
  revision: 2,
  donutTypes: ['strawberry', 'chocolate'],
  targetOrders: 1,
  trayCapacity: BASE_TRAY_CAPACITY,
  queues: Array.from({ length: QUEUE_COUNT }, (_, column) =>
    column === 3
      ? [{ id: 'practice-dessert', type: 'strawberry' }]
      : Array.from({ length: 8 }, (_, index) => ({
        id: `practice-extra-${column}-${index}`,
        type: 'chocolate',
      })),
  ),
  orders: [{ id: 'practice-order', sequence: 1, items: { strawberry: 1 } }],
};
