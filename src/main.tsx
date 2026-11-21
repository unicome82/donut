import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { syncStandaloneViewport } from './app/standaloneViewport';
import '@fontsource/jua';
import './styles/main.scss';
import { readLanguagePreference } from './i18n/language';

syncStandaloneViewport();
document.documentElement.lang = readLanguagePreference();
const root = document.getElementById('root');
if (!root) throw new Error('앱 루트 요소가 없습니다.');
createRoot(root).render(<StrictMode><App /></StrictMode>);
