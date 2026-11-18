import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Customer } from './Customer';

describe('손님 외형', () => {
  it('16개 연속 주문에 서로 다른 손님을 제공한다', () => {
    const faces = Array.from({ length: 16 }, (_, i) => renderToStaticMarkup(createElement(Customer, { sequence: i + 1 })));
    expect(new Set(faces).size).toBe(16);
    expect(faces.every(svg => svg.includes('class="customer"'))).toBe(true);
  });
  it('같은 주문의 외형은 수량 갱신과 관계없이 재현된다', () => {
    expect(renderToStaticMarkup(createElement(Customer, { sequence: 9 }))).toBe(renderToStaticMarkup(createElement(Customer, { sequence: 9 })));
  });
});
