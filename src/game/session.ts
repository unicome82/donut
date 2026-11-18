import { createGame, getStars } from './engine';
import { getLevel, levels } from './levels';
import { reduceGame, type GameAction } from './reducer';
import type { GameState } from './types';

const POINTS_PER_ORDER = 100;

export interface SessionState {
  screen: 'start' | 'levels' | 'game';
  game: GameState;
  stars: Record<number, number>;
  score: number;
}
export type SessionAction =
  | { type: 'HOME' }
  | { type: 'LEVELS' }
  | { type: 'START'; levelId: number }
  | { type: 'GAME'; action: GameAction };

export function createSession(): SessionState {
  return { screen: 'start', game: createGame(getLevel(1)), stars: {}, score: 0 };
}
export function isUnlocked(id: number, stars: Record<number, number>): boolean {
  return levels.some(level => level.id === id) && (id === 1 || (stars[id - 1] ?? 0) > 0);
}
export function reduceSession(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'HOME': return { ...state, screen: 'start' };
    case 'LEVELS': return { ...state, screen: 'levels' };
    case 'START': return isUnlocked(action.levelId, state.stars)
      ? { ...state, screen: 'game', game: createGame(getLevel(action.levelId)) } : state;
    case 'GAME': {
      if (state.screen !== 'game') return state;
      const game = reduceGame(state.game, action.action, getLevel(state.game.levelId));
      if (game === state.game) return state;
      const stars = game.status === 'clear'
        ? { ...state.stars, [game.levelId]: Math.max(state.stars[game.levelId] ?? 0, getStars(game)) }
        : state.stars;
      const completed = Math.max(0, game.completedOrders - state.game.completedOrders);
      return { ...state, game, stars, score: state.score + completed * POINTS_PER_ORDER };
    }
  }
}
