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
}
export type SessionAction =
  | { type: 'HOME' }
  | { type: 'STAGES' }
  | { type: 'START'; stageId: number }
  | { type: 'GAME'; action: GameAction };

export function createSession(): SessionState {
  return { screen: 'start', game: createGame(getStage(1)), stars: {}, score: 0 };
}
export function isUnlocked(id: number, stars: Record<number, number>): boolean {
  if (id === practiceStage.id) return true;
  return stagesById.has(id) && (id === 1 || (stars[id - 1] ?? 0) > 0);
}
export function getCurrentStage(stars: Record<number, number>): number {
  return stages.find(stage => isUnlocked(stage.id, stars) && !stars[stage.id])?.id ?? stages.at(-1)?.id ?? 1;
}

export function reduceSession(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'HOME': return { ...state, screen: 'start' };
    case 'STAGES': return { ...state, screen: 'stages' };
    case 'START': return isUnlocked(action.stageId, state.stars)
      ? { ...state, screen: 'game', game: createGame(getStage(action.stageId)) } : state;
    case 'GAME': {
      if (state.screen !== 'game') return state;
      const game = reduceGame(state.game, action.action, getStage(state.game.stageId));
      if (game === state.game) return state;
      if (game.stageId === practiceStage.id) return { ...state, game };
      const stars = game.status === 'clear'
        ? { ...state.stars, [game.stageId]: Math.max(state.stars[game.stageId] ?? 0, getStars(game)) }
        : state.stars;
      const completed = Math.max(0, game.completedOrders - state.game.completedOrders);
      return { ...state, game, stars, score: state.score + completed * POINTS_PER_ORDER };
    }
  }
}
