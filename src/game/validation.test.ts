import { describe, expect, it } from 'vitest';
import { stage01 } from './stages/stage01';
import { validateStage } from './validation';
describe('고정 스테이지 데이터 계약', () => {
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
