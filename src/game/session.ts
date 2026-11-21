import { createGame, getStars } from './engine';
import { getStage, isStageId, practiceStage, STAGE_COUNT } from './stages';
import { reduceGame, type GameAction } from './reducer';
import type { GameState } from './types';

const POINTS_PER_ORDER = 100;

export interface SessionState {
  screen: 'start' | 'stages' | 'game';
  game: GameState;
  stars: Record<number, number>;
  score: number;
  unlockAllStages: boolean;
  /** Tray clears carried between stages; each stage clear earns one more. */
  trayClears: number;
}
export type SessionAction =
  | { type: 'HOME' }
  | { type: 'STAGES' }
  | { type: 'START'; stageId: number }
  | { type: 'GAME'; action: GameAction };

export function createSession(unlockAllStages = false): SessionState {
  return { screen: 'start', game: createGame(getStage(1)), stars: {}, score: 0, unlockAllStages, trayClears: STARTING_TRAY_CLEARS };
}
// Tray clears are a single pool: three at the very start, +1 per stage clear, never refilled otherwise.
export const STARTING_TRAY_CLEARS = 3;
function createSessionGame(stageId: number, trayClears: number): GameState {
  const game = createGame(getStage(stageId));
  return stageId === practiceStage.id ? game : { ...game, trayClearsLeft: trayClears };
}
/** The highest stage id that has stars; 0 before the first clear. */
export function highestCleared(stars: Record<number, number>): number {
  let highest = 0;
  for (const [key, count] of Object.entries(stars)) if (count > 0) highest = Math.max(highest, Number(key));
  return highest;
}
/** Stages 1 through this id are open: everything cleared so far plus the next stage. */
export function unlockedThrough(stars: Record<number, number>, unlockAllStages = false): number {
  return unlockAllStages ? STAGE_COUNT : Math.min(STAGE_COUNT, highestCleared(stars) + 1);
}
export function isUnlocked(id: number, stars: Record<number, number>, unlockAllStages = false): boolean {
  if (id === practiceStage.id) return true;
  return isStageId(id) && id <= unlockedThrough(stars, unlockAllStages);
}
/** The stage in progress: the one after the highest clear. */
export function getCurrentStage(stars: Record<number, number>): number {
  return unlockedThrough(stars);
}

export function reduceSession(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'HOME': return { ...state, screen: 'start' };
    case 'STAGES': return { ...state, screen: 'stages' };
    case 'START': return isUnlocked(action.stageId, state.stars, state.unlockAllStages)
      ? { ...state, screen: 'game', game: createSessionGame(action.stageId, state.trayClears) } : state;
    case 'GAME': {
      if (state.screen !== 'game') return state;
      let game = reduceGame(state.game, action.action, getStage(state.game.stageId));
      if (game === state.game) return state;
      if (game.stageId === practiceStage.id) return { ...state, game };
      if (action.action.type === 'RESTART') game = { ...game, trayClearsLeft: state.trayClears };
      const newlyCleared = game.status === 'clear' && state.game.status !== 'clear';
      const trayClears = game.trayClearsLeft + (newlyCleared ? 1 : 0);
      const stars = game.status === 'clear'
        ? { ...state.stars, [game.stageId]: Math.max(state.stars[game.stageId] ?? 0, getStars(game)) }
        : state.stars;
      const completed = Math.max(0, game.completedOrders - state.game.completedOrders);
      return { ...state, game, stars, trayClears, score: state.score + completed * POINTS_PER_ORDER };
    }
  }
}
