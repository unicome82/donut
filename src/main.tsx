import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './styles/main.scss';
const root = document.getElementById('root');
if (!root) throw new Error('앱 루트 요소가 없습니다.');
createRoot(root).render(<StrictMode><App /></StrictMode>);
