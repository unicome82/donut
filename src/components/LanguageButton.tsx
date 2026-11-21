import { useMessages } from '../i18n/language';

export function LanguageButton({ onToggle, className = '' }: { onToggle: () => void; className?: string }) {
  const t = useMessages();
  return <button type="button" className={`icon-button language-button ${className}`} onClick={onToggle} aria-label={t.languageToggle}>
    <span aria-hidden="true">{t.languageShort}</span>
  </button>;
}
