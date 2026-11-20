import { ORDER_SLOTS } from './constants';
import { DONUT_TYPES, type ActiveOrder, type GameState, type StageDefinition } from './types';
import { validateStage } from './validation';

export type GameEvent =
  | { type: 'moved'; donutId: string; queueIndex: number }
  | { type: 'consumed'; donutId: string; orderId: string }
  | { type: 'orderCompleted'; orderId: string }
  | { type: 'orderAdded'; orderId: string; slot: number }
  | { type: 'returned'; donutId: string; queueIndex: number }
  | { type: 'stageCleared' };
export interface TransitionResult { state: GameState; events: GameEvent[] }

function orderFrom(stage: StageDefinition, index: number): ActiveOrder | null {
  const order = stage.orders[index];
  if (!order) return null;
  return { definitionId: order.id, sequence: order.sequence, remaining: { ...order.items } };
}

export function createGame(stage: StageDefinition): GameState {
  const errors = validateStage(stage);
  if (errors.length) throw new Error(errors.join('\n'));
  return {
    stageId: stage.id, stageRevision: stage.revision, status: 'playing',
    orders: Array.from({ length: ORDER_SLOTS }, (_, i) => orderFrom(stage, i)),
    nextOrderIndex: Math.min(ORDER_SLOTS, stage.targetOrders),
    queues: stage.queues.map(queue => queue.map(token => ({ ...token }))),
    tray: [], trayCapacity: stage.trayCapacity, completedOrders: 0,
    trayClearsLeft: 1, transitionId: 0,
  };
}

// Only this private function mutates, and only a fresh copy owned by the transition.
function settle(state: GameState, stage: StageDefinition, events: GameEvent[]): void {
  while (true) {
    let changed = false;
    const ordered = state.orders.filter((o): o is ActiveOrder => o !== null).sort((a, b) => a.sequence - b.sequence);
    for (const order of ordered) {
      for (const type of DONUT_TYPES) {
        while ((order.remaining[type] ?? 0) > 0) {
          const index = state.tray.findIndex(token => token.type === type && !state.pendingMatchIds?.includes(token.id));
          if (index < 0) break;
          const [token] = state.tray.splice(index, 1);
          if (!token) break;
          order.remaining[type] = (order.remaining[type] ?? 0) - 1;
          events.push({ type: 'consumed', donutId: token.id, orderId: order.definitionId });
          changed = true;
        }
      }
    }
    // Finish the entire pass before refilling; new orders cannot jump the old ones.
    state.orders = state.orders.map(order => {
      if (!order || Object.values(order.remaining).some(count => count > 0)) return order;
      state.completedOrders += 1;
      events.push({ type: 'orderCompleted', orderId: order.definitionId });
      changed = true;
      return null;
    });
    for (let slot = 0; slot < ORDER_SLOTS; slot += 1) {
      if (state.orders[slot] || state.nextOrderIndex >= stage.targetOrders) continue;
      const order = orderFrom(stage, state.nextOrderIndex);
      if (!order) throw new Error('주문 데이터가 부족합니다.');
      state.orders[slot] = order;
      state.nextOrderIndex += 1;
      events.push({ type: 'orderAdded', orderId: order.definitionId, slot });
      changed = true;
    }
    if (!changed) break;
  }
  updateStatus(state, stage, events);
}

// Reserve each token for the oldest order that still needs its type.
function* trayPickups(state: GameState) {
  const orders = state.orders.filter((order): order is ActiveOrder => order !== null)
    .sort((a, b) => a.sequence - b.sequence);
  const seen = new Set<string>();
  for (const token of state.tray) {
    const order = orders.find(candidate => (candidate.remaining[token.type] ?? 0) > 0);
    if (!order || seen.has(order.definitionId)) continue;
    seen.add(order.definitionId);
    yield { token, order };
  }
}

function availablePickup(state: GameState, tokenId: string, orderId: string, readyOrders: readonly string[]) {
  return !state.pendingMatchIds?.includes(tokenId) && readyOrders.includes(orderId);
}

export function getReadyTrayPickupOrders(state: GameState, readyOrders: readonly string[]): string[] {
  return Array.from(trayPickups(state))
    .filter(({ token, order }) => availablePickup(state, token.id, order.definitionId, readyOrders))
    .map(({ order }) => order.definitionId);
}

function updateStatus(state: GameState, stage: StageDefinition, events: GameEvent[]) {
  if (state.completedOrders === stage.targetOrders) {
    state.status = 'clear';
    events.push({ type: 'stageCleared' });
  } else if (state.pendingMatchIds?.length || !trayPickups(state).next().done) {
    state.status = 'playing';
  } else if (state.tray.length >= state.trayCapacity) {
    state.status = state.trayClearsLeft > 0 ? 'blocked' : 'gameover';
  } else {
    state.status = 'playing';
  }
}

export function selectDonut(state: GameState, stage: StageDefinition, queueIndex: number, expectedDonutId: string, deferMatch = false): TransitionResult {
  const front = Number.isInteger(queueIndex) ? state.queues[queueIndex]?.[0] : undefined;
  if (state.status !== 'playing' || state.stageId !== stage.id || !front || front.id !== expectedDonutId || state.tray.length >= state.trayCapacity) return { state, events: [] };
  const events: GameEvent[] = [{ type: 'moved', donutId: front.id, queueIndex }];
  if (deferMatch) {
    const queues = state.queues.slice();
    queues[queueIndex] = queues[queueIndex]!.slice(1);
    return {
      state: {
        ...state,
        queues,
        tray: [...state.tray, front],
        transitionId: state.transitionId + 1,
        pendingMatchIds: [...(state.pendingMatchIds ?? []), front.id],
      },
      events,
    };
  }
  const next = structuredClone(state);
  next.queues[queueIndex]?.shift();
  next.tray.push({ ...front });
  next.transitionId += 1;
  settle(next, stage, events);
  return { state: next, events };
}

export function matchTray(state: GameState, stage: StageDefinition, donutId: string, deferPickup = false): TransitionResult {
  if (state.status !== 'playing' || !state.pendingMatchIds?.includes(donutId) || state.stageId !== stage.id) return { state, events: [] };
  const next = deferPickup ? { ...state } : structuredClone(state);
  next.pendingMatchIds = next.pendingMatchIds?.filter(id => id !== donutId);
  next.transitionId += 1;
  const events: GameEvent[] = [];
  if (deferPickup) updateStatus(next, stage, events);
  else settle(next, stage, events);
  return { state: next, events };
}

export function pickupTray(
  state: GameState, stage: StageDefinition, readyOrders: readonly string[], parallel = false,
): TransitionResult {
  if (state.status !== 'playing' || state.stageId !== stage.id) return { state, events: [] };
  const candidates = Array.from(trayPickups(state));
  const pickups = (parallel ? candidates : candidates.slice(0, 1))
    .filter(({ token, order }) => availablePickup(state, token.id, order.definitionId, readyOrders));
  if (!pickups.length) return { state, events: [] };

  const next = structuredClone(state);
  const pickedIds = new Set(pickups.map(({ token }) => token.id));
  next.tray = next.tray.filter(token => !pickedIds.has(token.id));
  next.transitionId += 1;
  const events: GameEvent[] = [];
  for (const { token, order } of pickups) {
    const slot = state.orders.indexOf(order);
    const active = next.orders[slot]!;
    active.remaining[token.type] = (active.remaining[token.type] ?? 0) - 1;
    events.push({ type: 'consumed', donutId: token.id, orderId: active.definitionId });

    if (Object.values(active.remaining).some(count => count > 0)) continue;
    next.completedOrders += 1;
    events.push({ type: 'orderCompleted', orderId: active.definitionId });
    const replacement = orderFrom(stage, next.nextOrderIndex);
    next.orders[slot] = replacement;
    if (replacement) {
      next.nextOrderIndex += 1;
      events.push({ type: 'orderAdded', orderId: replacement.definitionId, slot });
    }
  }
  updateStatus(next, stage, events);
  return { state: next, events };
}

export function clearTray(state: GameState, stage: StageDefinition): TransitionResult {
  if (state.status !== 'blocked' || state.trayClearsLeft <= 0 || state.stageId !== stage.id) return { state, events: [] };
  const sources = new Map(stage.queues.flatMap((queue, index) => queue.map(token => [token.id, index] as const)));
  const queues = state.queues.map(queue => [...queue]);
  const events: GameEvent[] = [];
  for (const token of state.tray) {
    const queueIndex = sources.get(token.id);
    if (queueIndex === undefined) return { state, events: [] };
    queues[queueIndex]!.push(token);
    events.push({ type: 'returned', donutId: token.id, queueIndex });
  }
  return {
    state: { ...state, queues, tray: [], trayClearsLeft: state.trayClearsLeft - 1, status: 'playing', transitionId: state.transitionId + 1 },
    events,
  };
}

export function getStars(state: GameState): number {
  if (state.status !== 'clear') return 0;
  if (state.clearStars !== undefined) return state.clearStars;
  return state.tray.length === 0 ? 3 : state.tray.length <= 2 ? 2 : 1;
}
