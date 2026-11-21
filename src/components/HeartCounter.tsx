import { describeHearts, formatWait, type Hearts } from '../game/hearts';
import { useNow } from '../hooks/useNow';
import { useMessages } from '../i18n/language';
import { HeartIcon } from './HeartIcon';

// Regular hearts are counted beside the heart, bonus hearts in a red badge on the box's top right,
// and the refill countdown follows while there are fewer than five.
export function HeartCounter({ hearts, className = '' }: { hearts: Hearts; className?: string }) {
  const t = useMessages();
  const now = useNow();
  const { count, bonus, nextInMs } = describeHearts(hearts, now);
  const wait = nextInMs === null ? undefined : formatWait(nextInMs);
  return <div className={`heart-counter ${wait ? '' : 'heart-counter--full'} ${className}`} role="status" aria-label={t.heartsLabel(count, bonus, wait)}>
    <HeartIcon />
    <span className="heart-counter-count" lang="en" aria-hidden="true">{count}</span>
    {wait && <span className="heart-counter-timer" lang="en" aria-hidden="true">{wait}</span>}
    {bonus > 0 && <span className="heart-counter-bonus" lang="en" aria-hidden="true">{bonus}</span>}
  </div>;
}
