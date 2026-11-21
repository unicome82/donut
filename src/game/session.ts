import { createGame, getStars } from './engine';
import { getStage, stages, stagesById, practiceStage } from './stages';
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
  return { screen: 'start', game: createGame(getStage(1)), stars: {}, score: 0, unlockAllStages, trayClears: 1 };
}
// A stage attempt always starts with at least one clear so play can never get stuck.
function startingClears(trayClears: number) { return Math.max(1, trayClears); }
function createSessionGame(stageId: number, trayClears: number): GameState {
  const game = createGame(getStage(stageId));
  return stageId === practiceStage.id ? game : { ...game, trayClearsLeft: startingClears(trayClears) };
}
export function isUnlocked(id: number, stars: Record<number, number>, unlockAllStages = false): boolean {
  if (id === practiceStage.id) return true;
  return stagesById.has(id) && (unlockAllStages || id === 1 || (stars[id - 1] ?? 0) > 0);
}
export function getCurrentStage(stars: Record<number, number>): number {
  return stages.find(stage => isUnlocked(stage.id, stars) && !stars[stage.id])?.id ?? stages.at(-1)?.id ?? 1;
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
      if (action.action.type === 'RESTART') game = { ...game, trayClearsLeft: startingClears(state.trayClears) };
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
