// Hearts gate stage attempts: each attempt costs one and a clear gives it back. Regular hearts
// refill one every 30 minutes while there are fewer than five. Bonus hearts, earned in bonus
// stages, sit apart from them, never refill, and are only spent once the regular ones run out.
export const MAX_HEARTS = 5;
export const HEART_REFILL_MS = 30 * 60_000;

/** count: regular hearts (0–5). bonus: extra hearts. refillFrom: when the running refill started (only used below five). */
export interface Hearts { count: number; bonus: number; refillFrom: number }
export type HeartSource = 'regular' | 'bonus';

export const fullHearts = (): Hearts => ({ count: MAX_HEARTS, bonus: 0, refillFrom: 0 });

export function refillHearts(hearts: Hearts, now: number): Hearts {
  if (hearts.count >= MAX_HEARTS) return hearts;
  // A clock set backwards restarts the wait instead of granting hearts.
  if (now < hearts.refillFrom) return { ...hearts, refillFrom: now };
  const gained = Math.floor((now - hearts.refillFrom) / HEART_REFILL_MS);
  if (gained <= 0) return hearts;
  const count = Math.min(MAX_HEARTS, hearts.count + gained);
  return { ...hearts, count, refillFrom: hearts.refillFrom + gained * HEART_REFILL_MS };
}

export const totalHearts = (hearts: Hearts) => hearts.count + hearts.bonus;

/** Takes one heart for an attempt, regular hearts first; null when none is left. */
export function spendHeart(hearts: Hearts, now: number): { hearts: Hearts; from: HeartSource } | null {
  const current = refillHearts(hearts, now);
  if (current.count > 0) {
    // Dropping below five starts the 30-minute refill clock.
    const refillFrom = current.count >= MAX_HEARTS ? now : current.refillFrom;
    return { hearts: { ...current, count: current.count - 1, refillFrom }, from: 'regular' };
  }
  if (current.bonus > 0) return { hearts: { ...current, bonus: current.bonus - 1 }, from: 'bonus' };
  return null;
}

/** Gives a heart back to where it came from (a cleared attempt), or adds a bonus heart. */
export function addHeart(hearts: Hearts, now: number, to: HeartSource): Hearts {
  const current = refillHearts(hearts, now);
  return to === 'bonus'
    ? { ...current, bonus: current.bonus + 1 }
    : { ...current, count: Math.min(MAX_HEARTS, current.count + 1) };
}

/** What the counter shows: regular hearts, the bonus badge, and the wait for the next refill. */
export function describeHearts(hearts: Hearts, now: number) {
  const current = refillHearts(hearts, now);
  return {
    count: current.count,
    bonus: current.bonus,
    nextInMs: current.count < MAX_HEARTS ? Math.max(0, HEART_REFILL_MS - (now - current.refillFrom)) : null,
    available: totalHearts(current),
  };
}

/** Reads saved hearts; older saves kept one count where anything above five was bonus. */
export function parseHearts(saved: unknown): Hearts | null {
  if (!saved || typeof saved !== 'object') return null;
  const { count, bonus = 0, refillFrom } = saved as Record<string, unknown>;
  const valid = (n: unknown): n is number => Number.isSafeInteger(n) && (n as number) >= 0 && (n as number) <= 999;
  if (!valid(count) || !valid(bonus) || !Number.isFinite(refillFrom)) return null;
  return { count: Math.min(count, MAX_HEARTS), bonus: bonus + Math.max(0, count - MAX_HEARTS), refillFrom: refillFrom as number };
}

export function formatWait(ms: number): string {
  const seconds = Math.ceil(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
