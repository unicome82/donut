import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Customer } from './Customer';

describe('손님 외형', () => {
  it('30개 연속 주문에 서로 다른 손님을 제공한다', () => {
    const faces = Array.from({ length: 30 }, (_, i) => renderToStaticMarkup(createElement(Customer, { sequence: i + 1 })));
    const sources = faces.map(html => html.match(/<img[^>]+src="([^"]+)"/)?.[1]);
    expect(sources.every(src => src?.includes('.webp'))).toBe(true);
    expect(new Set(sources).size).toBe(30);
  });
  it('같은 주문의 외형은 수량 갱신과 관계없이 재현된다', () => {
    expect(renderToStaticMarkup(createElement(Customer, { sequence: 9 }))).toBe(renderToStaticMarkup(createElement(Customer, { sequence: 9 })));
  });
});
