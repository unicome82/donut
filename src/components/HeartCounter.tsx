import { describeHearts, formatWait, type Hearts } from '../game/hearts';
import { useNow } from '../hooks/useNow';
import { useMessages } from '../i18n/language';
import { HeartIcon } from './HeartIcon';

// "♥ 4  12:34" while refilling, "♥ 5" when full, "♥ 5+1" with bonus hearts on top.
export function HeartCounter({ hearts }: { hearts: Hearts }) {
  const t = useMessages();
  const now = useNow();
  const { count, extra, nextInMs } = describeHearts(hearts, now);
  return <div className="heart-counter" role="status" aria-label={t.heartsLabel(count + extra, nextInMs === null ? undefined : formatWait(nextInMs))}>
    <HeartIcon />
    <span className="heart-counter-count" lang="en">{count}{extra > 0 && <span className="heart-counter-extra">+{extra}</span>}</span>
    {nextInMs !== null && <span className="heart-counter-timer" lang="en">{formatWait(nextInMs)}</span>}
  </div>;
}
