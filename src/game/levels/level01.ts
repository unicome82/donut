import type { DonutType, LevelDefinition } from '../types';
const layouts: DonutType[][] = [
  ['strawberry', 'vanilla', 'chocolate', 'strawberry', 'vanilla'],
  ['chocolate', 'strawberry', 'vanilla', 'chocolate', 'strawberry'],
  ['vanilla', 'chocolate', 'strawberry', 'vanilla', 'chocolate'],
  ['strawberry', 'chocolate', 'vanilla', 'strawberry', 'chocolate'],
  ['vanilla', 'strawberry', 'chocolate', 'vanilla', 'strawberry'],
  ['chocolate', 'vanilla', 'strawberry', 'chocolate', 'vanilla'],
];
export const level01: LevelDefinition = {
  id: 1, revision: 1, donutTypes: ['strawberry', 'chocolate', 'vanilla'],
  targetOrders: 8, trayCapacity: 8,
  queues: layouts.map((queue, q) => queue.map((type, p) => ({ id: `l1-q${q}-p${p}`, type }))),
  orders: [
    { id: 'l1-o1', sequence: 1, items: { strawberry: 2, vanilla: 1 } },
    { id: 'l1-o2', sequence: 2, items: { chocolate: 2 } },
    { id: 'l1-o3', sequence: 3, items: { vanilla: 2, chocolate: 1 } },
    { id: 'l1-o4', sequence: 4, items: { strawberry: 1, chocolate: 1 } },
    { id: 'l1-o5', sequence: 5, items: { vanilla: 2, strawberry: 1 } },
    { id: 'l1-o6', sequence: 6, items: { chocolate: 2, strawberry: 1 } },
    { id: 'l1-o7', sequence: 7, items: { strawberry: 2, vanilla: 1 } },
    { id: 'l1-o8', sequence: 8, items: { vanilla: 2, chocolate: 1 } },
  ],
};
