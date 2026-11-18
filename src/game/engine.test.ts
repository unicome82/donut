import { describe, expect, it } from 'vitest';
import { createGame, expandTray, getStars, selectDonut, matchTray } from './engine';
import { reduceGame } from './reducer';
import { createSession, isUnlocked, reduceSession } from './session';
import { levels } from './levels';
import { solutions } from './levels/solutions';
import { BASE_TRAY_CAPACITY, TRAY_EXPANSION, QUEUE_COUNT } from './constants';
import { validateLevel } from './validation';
import type { DonutType, GameState, LevelDefinition, OrderDefinition } from './types';

function fixture(items: OrderDefinition['items'][]): LevelDefinition {
  const types: DonutType[] = ['strawberry', 'chocolate', 'vanilla'];
  return {
    id: 1, revision: 1, donutTypes: types, targetOrders: items.length, trayCapacity: BASE_TRAY_CAPACITY,
    orders: items.map((item, i) => ({ id: 'o' + i, sequence: i + 1, items: item })),
    queues: Array.from({ length: QUEUE_COUNT }, (_, q) => Array.from({ length: 20 }, (_, i) => ({ id: q + '-' + i, type: types[q % 3] ?? 'vanilla' }))),
  };
}
function select(state: GameState, level: LevelDefinition, queue: number) {
  const front = state.queues[queue]?.[0];
  if (!front) throw new Error('빈 대기열');
  return selectDonut(state, level, queue, front.id);
}
function tray(type: DonutType, count: number) {
  return Array.from({ length: count }, (_, i) => ({ id: 'tray-' + i, type }));
}

describe('자동 매칭과 상태 전이', () => {
  it('주문 도넛도 먼저 트레이에 남고 준비 완료 후에만 소비한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const queued = selectDonut(createGame(level), level, 0, '0-0', true).state;
    expect(queued.tray.map(token => token.id)).toEqual(['0-0']);
    expect(queued.orders[0]?.remaining.strawberry).toBe(2);
    const matched = matchTray(queued, level, '0-0').state;
    expect(matched.tray).toHaveLength(0);
    expect(matched.orders[0]?.remaining.strawberry).toBe(1);
  });
  it('두 번 연속 올린 도넛은 각각 준비 완료된 뒤 소비한다', () => {
    const level = fixture([{ strawberry: 2 }, { vanilla: 3 }]);
    const first = selectDonut(createGame(level), level, 0, '0-0', true).state;
    const second = selectDonut(first, level, 0, '0-1', true).state;
    expect(second.tray).toHaveLength(2);
    const readyFirst = matchTray(second, level, '0-0').state;
    expect(readyFirst.tray.map(token => token.id)).toEqual(['0-1']);
    expect(readyFirst.orders[0]?.remaining.strawberry).toBe(1);
    const readySecond = matchTray(readyFirst, level, '0-1').state;
    expect(readySecond.tray).toHaveLength(0);
    expect(readySecond.completedOrders).toBe(1);
  });
  it('40칸이 차도 준비 중인 도넛이 있으면 실패 판정을 기다린다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const initial = createGame(level);
    initial.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const queued = selectDonut(initial, level, 0, '0-0', true).state;
    expect(queued.tray).toHaveLength(40);
    expect(queued.status).toBe('playing');
    expect(selectDonut(queued, level, 0, '0-1', true).state).toBe(queued);
    const matched = matchTray(queued, level, '0-0').state;
    expect(matched.status).toBe('playing');
    expect(matched.tray).toHaveLength(39);
  });
  it('마지막 준비 도넛도 주문에 없으면 가득 찬 트레이의 확장 기회를 제공한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const initial = createGame(level);
    initial.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const queued = selectDonut(initial, level, 2, '2-0', true).state;
    expect(queued.status).toBe('playing');
    expect(matchTray(queued, level, '2-0').state.status).toBe('blocked');
  });
  it('재시작 후 이전 도넛의 준비 완료 액션은 무시한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const initial = createGame(level);
    expect(matchTray(initial, level, '0-0').state).toBe(initial);
  });

  it('연속 두 입력은 새 맨 앞 ID로 각각 처리하고 이전 ID 중복만 무시한다', () => {
    const level = fixture([{ strawberry: 16 }]);
    const initial = createGame(level);
    const first = select(initial, level, 2).state;
    const second = select(first, level, 2).state;
    expect(second.tray.map(token => token.id)).toEqual(['2-0', '2-1']);
    expect(second.queues[2]?.[0]?.id).toBe('2-2');
    expect(selectDonut(second, level, 2, '2-1').state).toBe(second);
  });

  it('선택한 토큰은 대기열에서 제거되고 한 번만 소비된다', () => {
    const level = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const original = createGame(level);
    const snapshot = structuredClone(original);
    const result = select(original, level, 0);
    expect(original).toEqual(snapshot);
    expect(result.state.queues[0]).toHaveLength(19);
    expect(result.state.orders[0]?.remaining.strawberry).toBe(1);
    expect(result.state.orders[1]?.remaining.strawberry).toBe(2);
    expect(result.state.tray).toHaveLength(0);
    expect(result.events.filter(e => e.type === 'consumed')).toHaveLength(1);
    expect(selectDonut(result.state, level, 0, '0-0').state).toBe(result.state);
  });
  it('화면 슬롯과 무관하게 주문 번호가 낮은 순서로 배정한다', () => {
    const level = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const state = createGame(level);
    [state.orders[0], state.orders[1]] = [state.orders[1] ?? null, state.orders[0] ?? null];
    const next = select(state, level, 0).state;
    expect(next.orders[1]?.remaining.strawberry).toBe(1);
    expect(next.orders[0]?.remaining.strawberry).toBe(2);
  });
  it('필요하지 않은 도넛은 트레이에 남는다', () => {
    const level = fixture([{ strawberry: 1 }]);
    const next = select(createGame(level), level, 2).state;
    expect(next.tray[0]?.type).toBe('vanilla');
    expect(next.completedOrders).toBe(0);
  });
  it('동시 완료 후 새 주문과 남은 트레이를 연쇄 매칭한다', () => {
    const level = fixture([{ strawberry: 1 }, { chocolate: 1 }, { strawberry: 1 }, { chocolate: 1 }, { vanilla: 1 }, { vanilla: 1 }]);
    const state = createGame(level);
    state.tray = [
      { id: 'a', type: 'strawberry' }, { id: 'b', type: 'chocolate' },
      { id: 'c', type: 'strawberry' }, { id: 'd', type: 'chocolate' },
      { id: 'e', type: 'vanilla' },
    ];
    const result = select(state, level, 2);
    expect(result.state.status).toBe('clear');
    expect(result.state.completedOrders).toBe(6);
    expect(result.state.nextOrderIndex).toBe(6);
    expect(result.state.orders).toEqual([null, null, null, null]);
    expect(result.events.filter(e => e.type === 'orderCompleted')).toHaveLength(6);
    expect(result.events.filter(e => e.type === 'orderAdded')).toHaveLength(2);
  });
  it('트레이가 차도 매칭 후 공간이 생기면 실패하지 않는다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const next = select(state, level, 0).state;
    expect(next.status).toBe('playing');
    expect(next.tray).toHaveLength(BASE_TRAY_CAPACITY - 1);
  });
  it('가득 찬 트레이는 확장 기회를 제공하고 선택을 차단한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, level, 2).state;
    expect(blocked.status).toBe('blocked');
    expect(select(blocked, level, 0).state).toBe(blocked);
    const expanded = expandTray(blocked, level).state;
    expect(expanded.status).toBe('playing');
    expect(expanded.trayCapacity).toBe(BASE_TRAY_CAPACITY + TRAY_EXPANSION);
    expect(expanded.expandUsed).toBe(true);
    expect(expandTray(expanded, level).state).toBe(expanded);
    const nine = select(expanded, level, 2).state;
    const ten = select(nine, level, 2).state;
    expect(ten.status).toBe('gameover');
  });
  it('확장 거절과 비정상 액션을 안전하게 처리한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, level, 2).state;
    expect(reduceGame(blocked, { type: 'DECLINE_EXPAND' }, level).status).toBe('gameover');
    for (const index of [-1, 0.5, QUEUE_COUNT, NaN]) expect(selectDonut(state, level, index, 'bad').state).toBe(state);
    expect(selectDonut(state, level, 0, '0-1').state).toBe(state);
    expect(selectDonut({ ...state, status: 'clear' }, level, 0, '0-0').events).toEqual([]);
  });
  it('클리어를 트레이 용량과 대기열 소진보다 먼저 판정한다', () => {
    const level = fixture([{ strawberry: 1 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, level, 0).state.status).toBe('clear');
  });
  it('목표 미달에서 대기열 소진 시 실패한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, level, 0).state.status).toBe('gameover');
  });
  it('일시정지·재개·재시작은 입력을 제어하고 레벨 원본을 보존한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const initial = createGame(level);
    const paused = reduceGame(initial, { type: 'PAUSE' }, level);
    expect(select(paused, level, 0).state).toBe(paused);
    expect(expandTray(paused, level).state).toBe(paused);
    expect(reduceGame(paused, { type: 'RESUME' }, level).status).toBe('playing');
    const played = select(initial, level, 0).state;
    const restarted = reduceGame(played, { type: 'RESTART' }, level);
    expect(restarted).toEqual({ ...initial, transitionId: played.transitionId + 1 });
    expect(level.queues[0]).toHaveLength(20);
  });
  it('동일 입력에는 동일한 상태와 이벤트를 반환한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    expect(select(state, level, 0)).toEqual(select(state, level, 0));
  });
  it.each([[0, 3], [1, 2], [2, 2], [3, 1]])('잔여량 %i의 별점은 %i이다', (count, expected) => {
    const state = createGame(fixture([{ strawberry: 1 }]));
    state.status = 'clear';
    state.tray = tray('vanilla', count);
    expect(getStars(state)).toBe(expected);
    expect(getStars({ ...state, status: 'gameover' })).toBe(0);
  });
});

describe('레벨 1~5 해법과 게임 불변식', () => {
  for (const level of levels) {
    it('레벨 ' + level.id + '는 확장 없이 클리어할 수 있다', () => {
      expect(validateLevel(level)).toEqual([]);
      const original = structuredClone(level);
      let state = createGame(level);
      const solution = solutions[level.id];
      if (!solution) throw new Error('해법 누락');
      for (const queue of solution) {
        expect(state.status).toBe('playing');
        state = select(state, level, queue).state;
        expect(state.tray.length).toBeLessThan(BASE_TRAY_CAPACITY);
        expect(state.expandUsed).toBe(false);
      }
      expect(state.status).toBe('clear');
      expect(state.completedOrders).toBe(level.targetOrders);
      expect(level).toEqual(original);
    });
    it('레벨 ' + level.id + '는 트레이 대기 후 매칭하는 실제 플레이 경로에서도 클리어한다', () => {
      let state = createGame(level);
      for (const q of solutions[level.id] ?? []) {
        const front = state.queues[q]?.[0];
        if (!front) throw new Error('해법의 대기열이 비었습니다.');
        state = selectDonut(state, level, q, front.id, true).state;
        expect(state.tray.some(token => token.id === front.id)).toBe(true);
        state = matchTray(state, level, front.id).state;
      }
      expect(state.status).toBe('clear');
    });
    it('레벨 ' + level.id + '는 다양한 종류가 연속 묶음으로 쌓이고 40칸을 사용한다', () => {
      expect(level.donutTypes).toHaveLength(8);
      expect(level.trayCapacity).toBe(40);
      expect(level.queues).toHaveLength(QUEUE_COUNT);
      const quantities = level.orders.flatMap(order => Object.values(order.items));
      expect(Math.max(...quantities)).toBeLessThanOrEqual(16);
      expect(Math.max(...level.orders.map(order => Object.values(order.items).reduce((sum, n) => sum + n, 0)))).toBeLessThanOrEqual(16);
      expect(new Set(quantities).size).toBeGreaterThanOrEqual(4);
      expect(new Set(level.queues.flat().map(token => token.type)).size).toBe(level.donutTypes.length);
      expect(new Set(level.orders.flatMap(order => Object.keys(order.items))).size).toBe(level.donutTypes.length);
      expect(level.queues.every(queue => queue.some((token, index) => index >= 2 && token.type === queue[index - 1]?.type && token.type === queue[index - 2]?.type))).toBe(true);
    });
    it('레벨 ' + level.id + '의 여러 선택 경로에서 토큰과 주문 수량을 보존한다', () => {
      for (let seed = 1; seed <= 20; seed += 1) {
        let n = seed;
        let state = createGame(level);
        const total = level.queues.flat().length;
        let consumed = 0;
        for (let turn = 0; turn <= total; turn += 1) {
          if (state.status === 'blocked') state = expandTray(state, level).state;
          if (state.status !== 'playing') break;
          const choices = state.queues.map((q, i) => q.length ? i : -1).filter(i => i >= 0);
          n = (n * 1664525 + 1013904223) >>> 0;
          const q = choices[n % choices.length];
          if (q === undefined) break;
          const result = select(state, level, q);
          consumed += result.events.filter(e => e.type === 'consumed').length;
          state = result.state;
          const tokens = [...state.queues.flat(), ...state.tray];
          expect(tokens.length + consumed).toBe(total);
          expect(new Set(tokens.map(t => t.id)).size).toBe(tokens.length);
          expect(state.tray.length).toBeLessThanOrEqual(state.trayCapacity);
          expect(state.completedOrders + state.orders.filter(Boolean).length).toBe(state.nextOrderIndex);
          expect(state.nextOrderIndex).toBeLessThanOrEqual(level.targetOrders);
          for (const order of state.orders) for (const count of Object.values(order?.remaining ?? {})) expect(count).toBeGreaterThanOrEqual(0);
        }
        expect(['clear', 'gameover']).toContain(state.status);
      }
    });
  }
});

describe('세션 진행', () => {
  it('게임 시작 직후 첫 주문과 대기열 선두에 크루아상과 초코 아이스크림가 있다', () => {
    const { game } = reduceSession(createSession(), { type: 'START', levelId: 1 });
    expect(game.orders[0]?.remaining).toMatchObject({ croissant: 2, chocolateIceCream: 1 });
    expect(game.queues.map(queue => queue[0]?.type)).toEqual(expect.arrayContaining(['croissant', 'chocolateIceCream']));
  });

  it('잠긴 레벨과 범위 밖 레벨 진입을 막는다', () => {
    const session = createSession();
    expect(reduceSession(session, { type: 'START', levelId: 5 })).toBe(session);
    expect(isUnlocked(6, { 5: 3 })).toBe(false);
  });
  it('클리어 시 별점을 기록하고 다음 레벨을 연다', () => {
    let session = reduceSession(createSession(), { type: 'START', levelId: 1 });
    for (const q of solutions[1] ?? []) {
      const front = session.game.queues[q]?.[0];
      if (!front) throw new Error('해법 불일치');
      session = reduceSession(session, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex: q, expectedDonutId: front.id } });
    }
    expect(session.stars[1]).toBeGreaterThan(0);
    expect(session.score).toBe(session.game.completedOrders * 100);
    const restarted = reduceSession(session, { type: 'GAME', action: { type: 'RESTART' } });
    expect(restarted.score).toBe(session.score);
    expect(reduceSession(session, { type: 'START', levelId: 2 }).score).toBe(session.score);
    expect(isUnlocked(2, session.stars)).toBe(true);
    expect(reduceSession(session, { type: 'START', levelId: 2 }).game.levelId).toBe(2);
  });
});
