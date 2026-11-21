import { useEffect, useReducer } from 'react';
import { createSession, reduceSession } from '../game/session';
import { UNLOCK_ALL_STAGES_FOR_TESTING } from '../game/constants';
import { stagesById } from '../game/stages';

const progressKey = 'sweet-order-progress-v1';

function loadSession() {
  const session = createSession(UNLOCK_ALL_STAGES_FOR_TESTING);
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) ?? 'null');
    if (!saved || typeof saved.stars !== 'object' || !saved.stars) return session;
    for (const [key, stars] of Object.entries(saved.stars)) {
      const id = Number(key);
      if (stagesById.has(id) && typeof stars === 'number' && Number.isInteger(stars) && stars >= 1 && stars <= 3) {
        session.stars[id] = stars;
      }
    }
    if (Number.isSafeInteger(saved.score) && saved.score >= 0) session.score = saved.score;
    // Saves from before the three-clear start (no clearsVersion) begin again with the new pool.
    if (saved.clearsVersion === 2 && Number.isSafeInteger(saved.trayClears) && saved.trayClears >= 0) session.trayClears = saved.trayClears;
  } catch {
    return session;
  }
  return session;
}

export function useGame() {
  const [session, dispatch] = useReducer(reduceSession, undefined, loadSession);
  const { stars, score, trayClears } = session;
  useEffect(() => {
    try {
      localStorage.setItem(progressKey, JSON.stringify({ stars, score, trayClears, clearsVersion: 2 }));
    } catch {
      // Play can continue when browser storage is unavailable.
    }
  }, [stars, score, trayClears]);
  return { session, dispatch };
}
