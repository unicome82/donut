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
  /** A free clear granted to this attempt because none were carried; it is not given again on retry. */
  freeClearLeft?: number;
}
export type SessionAction =
  | { type: 'HOME' }
  | { type: 'STAGES' }
  | { type: 'START'; stageId: number }
  | { type: 'GAME'; action: GameAction };

export function createSession(unlockAllStages = false): SessionState {
  return { screen: 'start', game: createGame(getStage(1)), stars: {}, score: 0, unlockAllStages, trayClears: 1 };
}
// Entering a stage grants one free clear when none were carried; a retry only gets the carried ones.
function freeClearsFor(trayClears: number) { return trayClears > 0 ? 0 : 1; }
function createSessionGame(stageId: number, trayClears: number): GameState {
  const game = createGame(getStage(stageId));
  return stageId === practiceStage.id ? game : { ...game, trayClearsLeft: trayClears + freeClearsFor(trayClears) };
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
      ? {
        ...state, screen: 'game', game: createSessionGame(action.stageId, state.trayClears),
        freeClearLeft: action.stageId === practiceStage.id ? 0 : freeClearsFor(state.trayClears),
      } : state;
    case 'GAME': {
      if (state.screen !== 'game') return state;
      let game = reduceGame(state.game, action.action, getStage(state.game.stageId));
      if (game === state.game) return state;
      if (game.stageId === practiceStage.id) return { ...state, game };
      if (action.action.type === 'RESTART') {
        game = { ...game, trayClearsLeft: state.trayClears };
        return { ...state, game, freeClearLeft: 0 };
      }
      // The free clear is spent first; any left unused is kept when the stage is cleared.
      const used = Math.max(0, state.game.trayClearsLeft - game.trayClearsLeft);
      const freeClearLeft = Math.max(0, (state.freeClearLeft ?? 0) - used);
      const newlyCleared = game.status === 'clear' && state.game.status !== 'clear';
      const trayClears = newlyCleared ? game.trayClearsLeft + 1 : game.trayClearsLeft - freeClearLeft;
      const stars = game.status === 'clear'
        ? { ...state.stars, [game.stageId]: Math.max(state.stars[game.stageId] ?? 0, getStars(game)) }
        : state.stars;
      const completed = Math.max(0, game.completedOrders - state.game.completedOrders);
      return { ...state, game, stars, trayClears, freeClearLeft: newlyCleared ? 0 : freeClearLeft, score: state.score + completed * POINTS_PER_ORDER };
    }
  }
}
