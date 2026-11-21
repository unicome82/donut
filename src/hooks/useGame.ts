import { useEffect, useReducer } from 'react';
import { createSession, reduceSession } from '../game/session';
import { UNLOCK_ALL_STAGES_FOR_TESTING } from '../game/constants';
import { isStageId } from '../game/stages';

const progressKey = 'sweet-order-progress-v1';

function loadSession() {
  const session = createSession(UNLOCK_ALL_STAGES_FOR_TESTING);
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) ?? 'null');
    if (!saved) return session;
    // v2 stores stars as one digit per stage ("3102…" = stage 1 has 3 stars); v1 used an id → stars object.
    const entries: Array<[number, unknown]> = typeof saved.stars === 'string'
      ? Array.from(saved.stars as string, (digit, index) => [index + 1, Number(digit)])
      : saved.stars && typeof saved.stars === 'object' ? Object.entries(saved.stars).map(([key, value]) => [Number(key), value]) : [];
    for (const [id, stars] of entries) {
      if (isStageId(id) && typeof stars === 'number' && Number.isInteger(stars) && stars >= 1 && stars <= 3) {
        session.stars[id] = stars;
      }
    }
    if (Number.isSafeInteger(saved.score) && saved.score >= 0) session.score = saved.score;
    // Saves from before the three-clear start (no clearsVersion) begin again with the new pool.
    const hearts = saved.hearts;
    if (hearts && Number.isSafeInteger(hearts.count) && hearts.count >= 0 && hearts.count <= 99 && Number.isFinite(hearts.refillFrom)) {
      session.hearts = { count: hearts.count, refillFrom: hearts.refillFrom };
    }
    if (saved.clearsVersion === 2 && Number.isSafeInteger(saved.trayClears) && saved.trayClears >= 0) session.trayClears = saved.trayClears;
  } catch {
    return session;
  }
  return session;
}

export function encodeStars(stars: Record<number, number>): string {
  const ids = Object.keys(stars).map(Number).filter(id => isStageId(id) && stars[id]! > 0);
  const length = ids.length ? Math.max(...ids) : 0;
  return Array.from({ length }, (_, index) => String(stars[index + 1] ?? 0)).join('');
}

export function useGame() {
  const [session, dispatch] = useReducer(reduceSession, undefined, loadSession);
  const { stars, score, trayClears, hearts } = session;
  useEffect(() => {
    try {
      localStorage.setItem(progressKey, JSON.stringify({ stars: encodeStars(stars), score, trayClears, hearts, clearsVersion: 2 }));
    } catch {
      // Play can continue when browser storage is unavailable.
    }
  }, [stars, score, trayClears, hearts]);
  return { session, dispatch };
}
