import { createGame, getStars } from './engine';
import { getStage, isBonusStage, isStageId, practiceStage, prepareBonusStage, STAGE_COUNT } from './stages';
import { reduceGame, type GameAction } from './reducer';
import { addHearts, fullHearts, MAX_HEARTS, refillHearts, spendHeart, type Hearts } from './hearts';
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
  /** Hearts held before paying for the attempt in play; a clear refunds up to this. Unset when the attempt was free. */
  heartsBeforeAttempt?: number;
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
  return isFreeStage(stageId) || refillHearts(state.hearts, now).count >= 1;
}
/** Pays one heart for an attempt at a campaign stage; null when no heart is left. */
function payForAttempt(state: SessionState, stageId: number, now: number): Pick<SessionState, 'hearts' | 'heartsBeforeAttempt'> | null {
  if (isFreeStage(stageId)) return { hearts: state.hearts, heartsBeforeAttempt: undefined };
  const before = refillHearts(state.hearts, now);
  const hearts = spendHeart(before, now);
  return hearts ? { hearts, heartsBeforeAttempt: before.count } : null;
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
      return { ...state, screen: 'game', heartsBeforeAttempt: undefined, bonus: { dessert: action.dessert, nextStageId: action.nextStageId },
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
        return { ...state, game, trayClears: game.trayClearsLeft, hearts: newlyCleared ? addHearts(state.hearts, now) : state.hearts };
      }
      const paid = payment ?? { hearts: state.hearts, heartsBeforeAttempt: state.heartsBeforeAttempt };
      const refund = newlyCleared && paid.heartsBeforeAttempt !== undefined
        ? { hearts: addHearts(paid.hearts, now, 1, Math.max(paid.heartsBeforeAttempt, MAX_HEARTS)), heartsBeforeAttempt: undefined }
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
