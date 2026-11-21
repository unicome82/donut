// iOS Safari can still zoom on a quick double tap (for example over a briefly disabled
// queue button or the gaps between columns). Cancelling the second touchend stops the
// zoom; queue taps use pointer events, which fire before touchend, so they still register.
const doubleTapMs = 350;

export function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', event => {
    const now = event.timeStamp;
    const target = event.target as HTMLElement | null;
    const typing = target?.closest('input, textarea, select');
    if (!typing && now - lastTouchEnd < doubleTapMs) event.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });
}
