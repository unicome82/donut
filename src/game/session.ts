import { createGame, getStars } from './engine';
import { getStage, isBonusStage, isStageId, practiceStage, prepareBonusStage, STAGE_COUNT } from './stages';
import { reduceGame, type GameAction } from './reducer';
import { addHeart, fullHearts, refillHearts, spendHeart, totalHearts, type HeartSource, type Hearts } from './hearts';
import type { DonutType, GameState } from './types';

const POINTS_PER_ORDER = 100;

export interface SessionState {
  screen: 'start' | 'stages' | 'game';
  game: GameState;
  stars: Record<number, number>;
  score: number;
  unlockAllStages: boolean;
  /** Tray clears carried between stages; each stage clear earns one more. */
  trayClears: number;
  hearts: Hearts;
  /** Which pool paid for the attempt in play, so a clear can give the heart back; unset when it was free. */
  heartPaidFrom?: HeartSource;
  /** The bonus stage in play and the campaign stage it leads on to. */
  bonus?: { dessert: DonutType; nextStageId: number };
}
export type SessionAction =
  | { type: 'HOME' }
  | { type: 'STAGES' }
  | { type: 'START'; stageId: number; now?: number }
  | { type: 'START_BONUS'; dessert: DonutType; nextStageId: number }
  | { type: 'GAME'; action: GameAction; now?: number };

export function createSession(unlockAllStages = false): SessionState {
  return { screen: 'start', game: createGame(getStage(1)), stars: {}, score: 0, unlockAllStages, trayClears: STARTING_TRAY_CLEARS, hearts: fullHearts() };
}
// Tray clears are a single pool: three at the very start, +1 per stage clear, never refilled otherwise.
export const STARTING_TRAY_CLEARS = 3;
function createSessionGame(stageId: number, trayClears: number): GameState {
  const game = createGame(getStage(stageId));
  return stageId === practiceStage.id ? game : { ...game, trayClearsLeft: trayClears };
}
/** Practice and bonus stages cost no heart. */
export const isFreeStage = (id: number) => id === practiceStage.id || isBonusStage(id);
/** Whether a paid attempt can start now. */
export function canAffordAttempt(state: SessionState, stageId: number, now = Date.now()): boolean {
  return isFreeStage(stageId) || totalHearts(refillHearts(state.hearts, now)) >= 1;
}
/** Pays one heart for an attempt at a campaign stage; null when no heart is left. */
function payForAttempt(state: SessionState, stageId: number, now: number): Pick<SessionState, 'hearts' | 'heartPaidFrom'> | null {
  if (isFreeStage(stageId)) return { hearts: state.hearts, heartPaidFrom: undefined };
  const paid = spendHeart(state.hearts, now);
  return paid ? { hearts: paid.hearts, heartPaidFrom: paid.from } : null;
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
    case 'HOME': return { ...state, screen: 'start', bonus: undefined };
    case 'STAGES': return { ...state, screen: 'stages', bonus: undefined };
    case 'START': {
      if (!isUnlocked(action.stageId, state.stars, state.unlockAllStages)) return state;
      const payment = payForAttempt(state, action.stageId, action.now ?? Date.now());
      if (!payment) return state;
      return { ...state, ...payment, bonus: undefined, screen: 'game', game: createSessionGame(action.stageId, state.trayClears) };
    }
    case 'START_BONUS': {
      const game = createGame(prepareBonusStage(action.dessert));
      return { ...state, screen: 'game', heartPaidFrom: undefined, bonus: { dessert: action.dessert, nextStageId: action.nextStageId },
        game: { ...game, trayClearsLeft: state.trayClears } };
    }
    case 'GAME': {
      if (state.screen !== 'game') return state;
      const now = action.now ?? Date.now();
      const restart = action.action.type === 'RESTART';
      const payment = restart ? payForAttempt(state, state.game.stageId, now) : null;
      if (restart && !payment) return state;
      let game = reduceGame(state.game, action.action, getStage(state.game.stageId));
      if (game === state.game) return state;
      if (game.stageId === practiceStage.id) return { ...state, game };
      if (restart) game = { ...game, trayClearsLeft: state.trayClears };
      const newlyCleared = game.status === 'clear' && state.game.status !== 'clear';
      if (isBonusStage(game.stageId)) {
        // A bonus clear adds a heart that may go past the usual five; it leaves stars and tray clears alone.
        return { ...state, game, trayClears: game.trayClearsLeft, hearts: newlyCleared ? addHeart(state.hearts, now, 'bonus') : state.hearts };
      }
      const paid = payment ?? { hearts: state.hearts, heartPaidFrom: state.heartPaidFrom };
      const refund = newlyCleared && paid.heartPaidFrom
        ? { hearts: addHeart(paid.hearts, now, paid.heartPaidFrom), heartPaidFrom: undefined }
        : paid;
      const trayClears = game.trayClearsLeft + (newlyCleared ? 1 : 0);
      const stars = game.status === 'clear'
        ? { ...state.stars, [game.stageId]: Math.max(state.stars[game.stageId] ?? 0, getStars(game)) }
        : state.stars;
      const completed = Math.max(0, game.completedOrders - state.game.completedOrders);
      return { ...state, ...refund, game, stars, trayClears, score: state.score + completed * POINTS_PER_ORDER };
    }
  }
}
