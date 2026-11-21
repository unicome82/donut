import { useLayoutEffect, useRef } from 'react';
import { chargeAmount, type Hearts } from '../game/hearts';
import { useMessages } from '../i18n/language';
import { useNow } from '../hooks/useNow';
import { HeartIcon } from './HeartIcon';

/** Asks before moving bonus hearts into the regular hearts (up to five). */
export function ChargeHeartsDialog({ hearts, onCharge, onClose }: { hearts: Hearts; onCharge: () => void; onClose: () => void }) {
  const t = useMessages();
  const dialog = useRef<HTMLDialogElement>(null);
  useLayoutEffect(() => {
    const element = dialog.current;
    if (element && !element.open) element.showModal();
  }, []);
  const amount = chargeAmount(hearts, useNow());
  return <dialog className="glass-popup tray-full-dialog no-hearts-dialog" ref={dialog} aria-labelledby="charge-hearts-heading"
    onCancel={event => { event.preventDefault(); onClose(); }}>
    <h2 id="charge-hearts-heading"><HeartIcon /><span>{t.chargeHearts}</span></h2>
    <p className="no-hearts-wait">{t.chargeHeartsDetail(amount, hearts.bonus)}</p>
    <div className="result-actions charge-hearts-actions">
      <button type="button" className="secondary-button" onClick={onClose}>{t.no}</button>
      <button type="button" className="primary-button popup-primary-button" onClick={onCharge}>{t.yes}</button>
    </div>
  </dialog>;
}
