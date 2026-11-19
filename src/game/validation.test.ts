import { describe, expect, it } from 'vitest';
import { stage01 } from './stages/stage01';
import { stages } from './stages';
import { validateStage } from './validation';
describe('고정 스테이지 데이터 계약', () => {
  it.each([['easy', 8, 20], ['normal', 14, 15], ['hard', 30, 8]] as const)(
    '%s는 종류별 준비량과 주문량이 같고 지정된 트레이를 사용한다', (difficulty, variety, capacity) => {
      for (const stage of stages.filter(stage => stage.difficulty === difficulty)) {
        expect(validateStage(stage)).toEqual([]);
        expect(new Set(stage.queues.flat().map(token => token.type)).size).toBe(variety);
        expect(new Set(stage.orders.flatMap(order => Object.keys(order.items))).size).toBe(variety);
        expect(stage.trayCapacity).toBe(capacity);
      }
    },
  );
  it('스테이지1의 구조와 종류별 공급량이 유효하다', () => expect(validateStage(stage01)).toEqual([]));
  it('중복 토큰 ID와 공급 부족을 감지한다', () => {
    const invalid = structuredClone(stage01);
    invalid.queues = Array.from({ length: 8 }, () => [{ id: 'duplicate', type: 'vanillaIceCream' as const }]);
    expect(validateStage(invalid)).toContain('도넛 ID가 비어 있거나 중복됩니다.');
    expect(validateStage(invalid)).toContain('croissant 공급이 부족합니다.');
  });
  it('총수량 16개를 넘는 주문을 거부한다', () => {
    const invalid = structuredClone(stage01);
    invalid.orders[0] = { id: 'oversized', sequence: 1, items: { croissant: 16, chocolateIceCream: 1 } };
    expect(validateStage(invalid)).toContain('주문 총수량은 16개 이하여야 합니다.');
  });
  it('잘못된 주문 수량과 순번을 감지한다', () => {
    const invalid = structuredClone(stage01);
    invalid.orders[0] = { id: 'invalid', sequence: 7, items: { croissant: 0 } };
    expect(validateStage(invalid)).toContain('주문 순번이 올바르지 않습니다.');
    expect(validateStage(invalid)).toContain('주문 종류 또는 수량이 올바르지 않습니다.');
  });
});
