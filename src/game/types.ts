export const DONUT_TYPES = ['strawberry', 'chocolate', 'vanilla', 'matcha', 'blueberry', 'caramel', 'lemon', 'sprinkle', 'mint', 'orange', 'raspberry', 'sesame', 'coconut', 'coffee', 'croissant', 'cake', 'pudding', 'cinnamonCroffle', 'matchaCroffle', 'chocolateCake', 'matchaPudding', 'raspberryMacaron', 'lemonMacaron', 'blueberryCupcake', 'chocolateCupcake', 'strawberryTart', 'blueberryTart', 'chocolateCroissant', 'chocolateCookie', 'whiteCookie', 'berryScone', 'matchaScone', 'vanillaIceCream', 'chocolateIceCream'] as const;
export type DonutType = typeof DONUT_TYPES[number];
export interface DonutToken { id: string; type: DonutType }
export interface OrderDefinition { id: string; sequence: number; items: Partial<Record<DonutType, number>> }
export interface ActiveOrder { patienceMs?: number; definitionId: string; sequence: number; remaining: Partial<Record<DonutType, number>> }
export type StageDifficulty = 'easy' | 'normal' | 'hard';
export interface StageDefinition {
  difficulty?: StageDifficulty;
  previewPatienceMs?: number;
  id: number; revision: number; donutTypes: DonutType[]; targetOrders: number;
  trayCapacity: number; queues: DonutToken[][]; orders: OrderDefinition[];
}
export type GameStatus = 'ready' | 'playing' | 'paused' | 'blocked' | 'clear' | 'gameover';
export interface GameState {
  stageId: number; stageRevision: number; status: GameStatus;
  orders: Array<ActiveOrder | null>; nextOrderIndex: number;
  queues: DonutToken[][]; tray: DonutToken[]; trayCapacity: number;
  pendingMatchIds?: string[];
  departedOrderIds?: string[];
  completedOrders: number; expandUsed: boolean; transitionId: number;
}
