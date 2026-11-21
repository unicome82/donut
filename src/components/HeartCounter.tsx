import { describeHearts, formatWait, type Hearts } from '../game/hearts';
import { useNow } from '../hooks/useNow';
import { useMessages } from '../i18n/language';
import { HeartIcon } from './HeartIcon';

// Regular hearts are counted beside the heart, bonus hearts in a red badge on the box's top right,
// and the refill countdown follows while there are fewer than five.
// With onCharge it becomes a button whenever bonus hearts can top the regular hearts up.
export function HeartCounter({ hearts, className = '', onCharge }: { hearts: Hearts; className?: string; onCharge?: () => void }) {
  const t = useMessages();
  const now = useNow();
  const { count, bonus, nextInMs, chargeable } = describeHearts(hearts, now);
  const wait = nextInMs === null ? undefined : formatWait(nextInMs);
  const label = t.heartsLabel(count, bonus, wait);
  const content = <>
    <HeartIcon />
    <span className="heart-counter-count" lang="en" aria-hidden="true">{count}</span>
    {wait && <span className="heart-counter-timer" lang="en" aria-hidden="true">{wait}</span>}
    {bonus > 0 && <span className="heart-counter-bonus" lang="en" aria-hidden="true">{bonus}</span>}
  </>;
  return onCharge && chargeable > 0
    ? <button type="button" className={`heart-counter heart-counter--chargeable ${className}`} onClick={onCharge} aria-label={`${label}. ${t.chargeHearts}`}>{content}</button>
    : <div className={`heart-counter ${className}`} role="status" aria-label={label}>{content}</div>;
}
