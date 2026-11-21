import { useLayoutEffect, useRef } from 'react';
import popupCat from '../assets/game/popup-cat.webp';
import { describeHearts, formatWait, type Hearts } from '../game/hearts';
import { useNow } from '../hooks/useNow';
import { useMessages } from '../i18n/language';
import { HeartIcon } from './HeartIcon';

export function NoHeartsDialog({ hearts, onClose }: { hearts: Hearts; onClose: () => void }) {
  const t = useMessages();
  const now = useNow();
  const dialog = useRef<HTMLDialogElement>(null);
  useLayoutEffect(() => {
    const element = dialog.current;
    if (element && !element.open) element.showModal();
  }, []);
  const { nextInMs, available } = describeHearts(hearts, now);
  // Close on its own once a heart has refilled.
  useLayoutEffect(() => { if (available > 0) onClose(); }, [available, onClose]);
  return <dialog className="glass-popup tray-full-dialog no-hearts-dialog" ref={dialog} aria-labelledby="no-hearts-heading" onCancel={event => { event.preventDefault(); onClose(); }}>
    <img className="popup-cat" src={popupCat} alt="" draggable={false} />
    <h2 id="no-hearts-heading"><HeartIcon className="heart-icon--empty" /><span>{t.noHearts}</span></h2>
    {nextInMs !== null && <p className="no-hearts-wait">{t.nextHeart(formatWait(nextInMs))}</p>}
    <div className="result-actions">
      <button type="button" className="primary-button popup-primary-button" onClick={onClose}>{t.ok}</button>
    </div>
  </dialog>;
}
