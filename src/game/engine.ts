import { ORDER_SLOTS, TRAY_EXPANSION } from './constants';
import { DONUT_TYPES, type ActiveOrder, type GameState, type StageDefinition } from './types';
import { validateStage } from './validation';

export type GameEvent =
  | { type: 'moved'; donutId: string; queueIndex: number }
  | { type: 'consumed'; donutId: string; orderId: string }
  | { type: 'orderCompleted'; orderId: string }
  | { type: 'orderAdded'; orderId: string; slot: number }
  | { type: 'trayExpanded' }
  | { type: 'stageCleared' };
export interface TransitionResult { state: GameState; events: GameEvent[] }

function orderFrom(stage: StageDefinition, index: number): ActiveOrder | null {
  const order = stage.orders[index];
  return order ? { definitionId: order.id, sequence: order.sequence, remaining: { ...order.items } } : null;
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
    expandUsed: false, transitionId: 0,
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

// Find the oldest matchable token. An older token with no active order can wait in the tray.
function firstPickup(state: GameState) {
  const orders = state.orders.filter((order): order is ActiveOrder => order !== null)
    .sort((a, b) => a.sequence - b.sequence);
  for (const [index, token] of state.tray.entries()) {
    const order = orders.find(candidate => (candidate.remaining[token.type] ?? 0) > 0);
    if (order) return { index, token, order };
  }
}

function updateStatus(state: GameState, stage: StageDefinition, events: GameEvent[]) {
  if (state.completedOrders === stage.targetOrders) {
    state.status = 'clear';
    events.push({ type: 'stageCleared' });
  } else if (state.pendingMatchIds?.length || firstPickup(state)) {
    state.status = 'playing';
  } else if (state.queues.every(queue => queue.length === 0)) {
    state.status = 'gameover';
  } else if (state.tray.length >= state.trayCapacity) {
    state.status = state.expandUsed ? 'gameover' : 'blocked';
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

export function pickupTray(state: GameState, stage: StageDefinition, readyOrders: readonly string[]): TransitionResult {
  const pickup = state.status === 'playing' && state.stageId === stage.id ? firstPickup(state) : undefined;
  if (!pickup || state.pendingMatchIds?.includes(pickup.token.id) || !readyOrders.includes(pickup.order.definitionId)) {
    return { state, events: [] };
  }

  const next = structuredClone(state);
  const slot = state.orders.indexOf(pickup.order);
  const order = next.orders[slot]!;
  const { token, index } = pickup;
  next.tray.splice(index, 1);
  order.remaining[token.type] = (order.remaining[token.type] ?? 0) - 1;
  next.transitionId += 1;
  const events: GameEvent[] = [{ type: 'consumed', donutId: token.id, orderId: order.definitionId }];

  if (!Object.values(order.remaining).some(count => count > 0)) {
    next.completedOrders += 1;
    events.push({ type: 'orderCompleted', orderId: order.definitionId });
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

export function expandTray(state: GameState, stage: StageDefinition): TransitionResult {
  if ((state.status !== 'playing' && state.status !== 'blocked') || state.expandUsed || state.stageId !== stage.id) return { state, events: [] };
  const next = structuredClone(state);
  next.expandUsed = true;
  next.trayCapacity += TRAY_EXPANSION;
  next.transitionId += 1;
  const events: GameEvent[] = [{ type: 'trayExpanded' }];
  settle(next, stage, events);
  return { state: next, events };
}

export function getStars(state: GameState): number {
  if (state.status !== 'clear') return 0;
  return state.tray.length === 0 ? 3 : state.tray.length <= 2 ? 2 : 1;
}
