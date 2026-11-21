import { BONUS_STAGE_ID, QUEUE_COUNT } from '../constants';
import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import { DONUT_TYPES, type DonutType, type StageDefinition } from '../types';

// Every customer orders the same dessert, so every tap is a hit: a long, can't-lose tapping run.
const PER_QUEUE = 15;
const ORDER_COUNT = 10;
const PER_ORDER = QUEUE_COUNT * PER_QUEUE / ORDER_COUNT;

export const isBonusStage = (id: number) => id === BONUS_STAGE_ID;

export function randomBonusDessert(random = Math.random): DonutType {
  return DONUT_TYPES[Math.floor(random() * DONUT_TYPES.length)]!;
}

export function createBonusStage(type: DonutType): StageDefinition {
  return {
    id: BONUS_STAGE_ID, revision: 1, difficulty: 'easy', donutTypes: [type], targetOrders: ORDER_COUNT,
    trayCapacity: TRAY_CAPACITY_BY_DIFFICULTY.easy,
    queues: Array.from({ length: QUEUE_COUNT }, (_, column) =>
      Array.from({ length: PER_QUEUE }, (_, index) => ({ id: `bonus-q${column}-${index}`, type }))),
    orders: Array.from({ length: ORDER_COUNT }, (_, index) => ({ id: `bonus-o${index + 1}`, sequence: index + 1, items: { [type]: PER_ORDER } })),
  };
}
