import { createGame, expandTray, expireOrders, selectDonut, matchTray, pickupTray } from './engine';
import type { GameState, StageDefinition } from './types';

export type GameAction =
  | { type: 'SELECT_DONUT'; queueIndex: number; expectedDonutId: string }
  | { type: 'QUEUE_DONUT'; queueIndex: number; expectedDonutId: string }
  | { type: 'MATCH_TRAY'; donutId: string }
  | { type: 'TRAY_READY'; donutId: string }
  | { type: 'PICKUP_TRAY'; readyOrders: readonly string[] }
  | { type: 'EXPIRE_ORDERS'; orderIds: readonly string[] }
  | { type: 'EXPAND_TRAY' }
  | { type: 'DECLINE_EXPAND' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'RESTART' };

export function reduceGame(state: GameState, action: GameAction, stage: StageDefinition): GameState {
  switch (action.type) {
    case 'SELECT_DONUT': return selectDonut(state, stage, action.queueIndex, action.expectedDonutId).state;
    case 'QUEUE_DONUT': return selectDonut(state, stage, action.queueIndex, action.expectedDonutId, true).state;
    case 'MATCH_TRAY': return matchTray(state, stage, action.donutId).state;
    case 'TRAY_READY': return matchTray(state, stage, action.donutId, true).state;
    case 'PICKUP_TRAY': return pickupTray(state, stage, action.readyOrders).state;
    case 'EXPIRE_ORDERS': return expireOrders(state, stage, action.orderIds);
    case 'EXPAND_TRAY': return expandTray(state, stage).state;
    case 'DECLINE_EXPAND': return state.status === 'blocked' ? { ...state, status: 'gameover' } : state;
    case 'PAUSE': return state.status === 'playing' ? { ...state, status: 'paused' } : state;
    case 'RESUME': return state.status === 'paused' ? { ...state, status: 'playing' } : state;
    case 'RESTART': return { ...createGame(stage), transitionId: state.transitionId + 1 };
  }
}
