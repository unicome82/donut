export const DONUT_TYPES = ['strawberry', 'chocolate', 'vanilla', 'matcha', 'blueberry', 'caramel', 'lemon', 'sprinkle', 'mint', 'orange', 'raspberry', 'sesame', 'coconut', 'coffee'] as const;
export type DonutType = typeof DONUT_TYPES[number];
export interface DonutToken { id: string; type: DonutType }
export interface OrderDefinition { id: string; sequence: number; items: Partial<Record<DonutType, number>> }
export interface ActiveOrder { definitionId: string; sequence: number; remaining: Partial<Record<DonutType, number>> }
export interface LevelDefinition {
  id: number; revision: number; donutTypes: DonutType[]; targetOrders: number;
  trayCapacity: number; queues: DonutToken[][]; orders: OrderDefinition[];
}
export type GameStatus = 'ready' | 'playing' | 'paused' | 'blocked' | 'clear' | 'gameover';
export interface GameState {
  levelId: number; levelRevision: number; status: GameStatus;
  orders: Array<ActiveOrder | null>; nextOrderIndex: number;
  queues: DonutToken[][]; tray: DonutToken[]; trayCapacity: number;
  completedOrders: number; expandUsed: boolean; transitionId: number;
}
