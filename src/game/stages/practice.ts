import { BASE_TRAY_CAPACITY, QUEUE_COUNT } from '../constants';
import type { StageDefinition } from '../types';

export const practiceStage: StageDefinition = {
  id: 0,
  revision: 2,
  donutTypes: ['strawberryDonut', 'chocolateDonut'],
  targetOrders: 1,
  trayCapacity: BASE_TRAY_CAPACITY,
  queues: Array.from({ length: QUEUE_COUNT }, (_, column) =>
    column === 3
      ? [{ id: 'practice-dessert', type: 'strawberryDonut' }]
      : Array.from({ length: 8 }, (_, index) => ({
        id: `practice-extra-${column}-${index}`,
        type: 'chocolateDonut',
      })),
  ),
  orders: [{ id: 'practice-order', sequence: 1, items: { strawberryDonut: 1 } }],
};
