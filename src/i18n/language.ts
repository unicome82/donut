import { createContext, useContext } from 'react';
import { messages, type Language, type Messages } from './messages';

const preferenceKey = 'sweet-order-language';

export function readLanguagePreference(): Language {
  try {
    const saved = localStorage.getItem(preferenceKey);
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {
    // Fall back to the browser language.
  }
  return typeof navigator !== 'undefined' && !navigator.language.toLowerCase().startsWith('ko') ? 'en' : 'ko';
}

export function saveLanguagePreference(language: Language) {
  try {
    localStorage.setItem(preferenceKey, language);
  } catch {
    // The choice still applies for the current session.
  }
  document.documentElement.lang = language;
}

export const LanguageContext = createContext<Language>('ko');

export function useMessages(): Messages {
  return messages[useContext(LanguageContext)];
}
