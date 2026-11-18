import { createGame, expandTray, selectDonut, matchTray, pickupTray } from './engine';
import type { GameState, LevelDefinition } from './types';

export type GameAction =
  | { type: 'SELECT_DONUT'; queueIndex: number; expectedDonutId: string }
  | { type: 'QUEUE_DONUT'; queueIndex: number; expectedDonutId: string }
  | { type: 'MATCH_TRAY'; donutId: string }
  | { type: 'TRAY_READY'; donutId: string }
  | { type: 'PICKUP_TRAY'; readyOrders: readonly string[] }
  | { type: 'EXPAND_TRAY' }
  | { type: 'DECLINE_EXPAND' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'RESTART' };

export function reduceGame(state: GameState, action: GameAction, level: LevelDefinition): GameState {
  switch (action.type) {
    case 'SELECT_DONUT': return selectDonut(state, level, action.queueIndex, action.expectedDonutId).state;
    case 'QUEUE_DONUT': return selectDonut(state, level, action.queueIndex, action.expectedDonutId, true).state;
    case 'MATCH_TRAY': return matchTray(state, level, action.donutId).state;
    case 'TRAY_READY': return matchTray(state, level, action.donutId, true).state;
    case 'PICKUP_TRAY': return pickupTray(state, level, action.readyOrders).state;
    case 'EXPAND_TRAY': return expandTray(state, level).state;
    case 'DECLINE_EXPAND': return state.status === 'blocked' ? { ...state, status: 'gameover' } : state;
    case 'PAUSE': return state.status === 'playing' ? { ...state, status: 'paused' } : state;
    case 'RESUME': return state.status === 'paused' ? { ...state, status: 'playing' } : state;
    case 'RESTART': return { ...createGame(level), transitionId: state.transitionId + 1 };
  }
}
