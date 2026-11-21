// Android browsers expose the Vibration API. iOS Safari does not, but since iOS 18 a tap on a
// switch-style checkbox label plays a system haptic, which works only during a user gesture.
type Pattern = number | number[];

const patterns = {
  select: 8,
  denied: [24, 40, 24],
  order: 18,
  blocked: [50, 40, 50],
  clear: [30, 50, 30, 50, 60],
  failed: 120,
} satisfies Record<string, Pattern>;

export type HapticName = keyof typeof patterns;

let iosSwitch: HTMLLabelElement | undefined;

function iosFallback() {
  if (iosSwitch) return iosSwitch;
  if (typeof document === 'undefined' || !/iP(hone|ad|od)/.test(navigator.userAgent)) return undefined;
  const label = document.createElement('label');
  label.setAttribute('aria-hidden', 'true');
  label.style.cssText = 'position:fixed;left:-100px;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.setAttribute('switch', '');
  input.tabIndex = -1;
  label.append(input);
  document.body.append(label);
  iosSwitch = label;
  return label;
}

export function haptic(name: HapticName) {
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(patterns[name]);
      return;
    }
    iosFallback()?.click();
  } catch {
    // Haptics are optional feedback.
  }
}
