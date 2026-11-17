import { describe, expect, it } from 'vitest';
import { level01 } from './levels/level01';
import { validateLevel } from './validation';
describe('고정 레벨 데이터 계약', () => {
  it('레벨1의 구조와 종류별 공급량이 유효하다', () => expect(validateLevel(level01)).toEqual([]));
  it('중복 토큰 ID와 공급 부족을 감지한다', () => {
    const invalid = structuredClone(level01);
    invalid.queues = Array.from({ length: 6 }, () => [{ id: 'duplicate', type: 'vanilla' as const }]);
    expect(validateLevel(invalid)).toContain('도넛 ID가 비어 있거나 중복됩니다.');
    expect(validateLevel(invalid)).toContain('strawberry 공급이 부족합니다.');
  });
  it('잘못된 주문 수량과 순번을 감지한다', () => {
    const invalid = structuredClone(level01);
    invalid.orders[0] = { id: 'invalid', sequence: 7, items: { strawberry: 0 } };
    expect(validateLevel(invalid)).toContain('주문 순번이 올바르지 않습니다.');
    expect(validateLevel(invalid)).toContain('주문 종류 또는 수량이 올바르지 않습니다.');
  });
});
