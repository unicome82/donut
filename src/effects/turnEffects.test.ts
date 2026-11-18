import { afterEach, describe, expect, it, vi } from 'vitest';
import { createEffects, MATCH_DURATION, MOVE_DURATION } from './turnEffects';
import { createGame } from '../game/engine';
import { stage01 } from '../game/stages/stage01';

function scene(reduced = false) {
  const calls: KeyframeAnimationOptions[] = [];
  const lifecycle: string[] = [];
  const overlays: FakeElement[] = [];
  class FakeElement {
    className = '';
    style = { visibility: '', left: '', top: '', width: '', height: '', cssText: '' };
    dataset: Record<string, string> = {};
    children: unknown[] = [];
    removed = false;
    append(child: unknown) { this.children.push(child); }
    remove() { this.removed = true; lifecycle.push('remove'); }
    setAttribute() { /* Presentation-only attributes do not affect this scene. */ }
    cloneNode() { return new FakeElement(); }
    getBoundingClientRect() { return { x: 10, y: 20, width: 18, height: 19 }; }
    querySelector(selector: string): FakeElement | null { return selector === 'img, svg' ? new FakeElement() : null; }
    animate(_frames: Keyframe[], options: KeyframeAnimationOptions) {
      calls.push(options);
      return { finished: Promise.resolve(), cancel() { lifecycle.push('cancel'); }, finish() { /* already finished */ } };
    }
  }
  const state = createGame(stage01);
  const source = new FakeElement(); source.dataset.tokenId = state.queues[0]?.[0]?.id ?? '';
  const tray = new FakeElement();
  const order = new FakeElement();
  const root = {
    querySelectorAll: () => [source],
    querySelector: (selector: string) => selector.includes('data-tray-slot') ? tray : selector.includes('data-order-slot') ? order : null,
  } as unknown as HTMLElement;
  vi.stubGlobal('window', { matchMedia: () => ({ matches: reduced }) });
  vi.stubGlobal('document', {
    visibilityState: 'visible',
    createElement: () => new FakeElement(),
    body: { append: (element: FakeElement) => overlays.push(element) },
    addEventListener: vi.fn(), removeEventListener: vi.fn(),
  });
  return { state, source, root, calls, lifecycle, overlays };
}
afterEach(() => vi.unstubAllGlobals());
describe('빠른 이동과 깜빡임 방지', () => {
  it('미매칭 도넛은 이동 후 도착 위치를 유지하며 정리 전에는 취소하지 않는다', async () => {
    const s = scene(); const effects = createEffects();
    await effects.play(s.root, s.state, [{ type: 'moved', donutId: s.source.dataset.tokenId ?? '', queueIndex: 0 }]);
    expect(s.calls).toHaveLength(1);
    expect(s.calls[0]).toMatchObject({ duration: MOVE_DURATION, fill: 'both' });
    expect(s.source.style.visibility).toBe('');
    expect(s.lifecycle).toEqual([]);
    effects.cleanup();
    expect(s.lifecycle).toEqual(['remove', 'cancel']);
    expect(s.source.style.visibility).toBe('');
  });
  it('바로 매칭되는 도넛도 복제 하나로 160ms 안에 트레이를 거쳐 주문으로 이동한다', async () => {
    const s = scene(); const effects = createEffects();
    await effects.play(s.root, s.state, [
      { type: 'moved', donutId: s.source.dataset.tokenId ?? '', queueIndex: 0 },
      { type: 'consumed', donutId: s.source.dataset.tokenId ?? '', orderId: s.state.orders[0]?.definitionId ?? '' },
    ]);
    expect(s.overlays.filter(element => element.className === 'flying-donut')).toHaveLength(1);
    expect(Math.max(...s.calls.map(call => Number(call.duration)))).toBe(MATCH_DURATION);
    effects.cleanup();
    expect(s.overlays.every(element => element.removed)).toBe(true);
  });
  it('모션 감소 설정에서는 원본을 숨기거나 이동 대기를 만들지 않는다', async () => {
    const s = scene(true); const effects = createEffects();
    await effects.play(s.root, s.state, [{ type: 'moved', donutId: s.source.dataset.tokenId ?? '', queueIndex: 0 }]);
    expect(s.calls).toEqual([]);
    expect(s.source.style.visibility).toBe('');
    effects.cleanup();
  });
});
