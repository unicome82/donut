import { useId } from 'react';
import type { DonutType } from '../../game/types';
import { donutThemes } from './donutThemes';
const decorations = [[27, 27, -20], [48, 18, 20], [73, 28, 50], [81, 49, -15], [71, 73, 40], [47, 81, -20], [25, 68, 30], [18, 47, 65]] as const;
export function Donut({ type, className = '' }: { type: DonutType; className?: string }) {
  const theme = donutThemes[type];
  const glaze = useId();
  return <svg className={`donut ${className}`} viewBox="0 0 100 104" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={glaze} x2="0%" y2="100%">
        <stop stopColor="#fff" stopOpacity=".4" />
        <stop offset=".5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#662431" stopOpacity=".28" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="95" rx="31" ry="5" fill="#6c4230" opacity=".09" />
    <path d="M50 5a45 45 0 1 1 0 90 45 45 0 0 1 0-90m0 31a14 14 0 1 0 0 28 14 14 0 0 0 0-28" fill="#d89e60" fillRule="evenodd" />
    <path d="M50 6C74 6 92 23 93 46S76 90 51 90 8 74 7 49 25 6 50 6m0 29a15 15 0 1 0 0 30 15 15 0 0 0 0-30" fill="#edbc7f" fillRule="evenodd" />
    <path d="M50 9C62 7 68 14 77 19S85 34 89 43 86 59 82 69 64 80 54 84 37 78 26 75 19 60 13 51 16 34 21 25 37 12 50 9m0 25c-10 0-16 7-16 16s7 16 16 16 16-7 16-16-6-16-16-16" fill={theme.icing} fillRule="evenodd" />
    <path d="M50 9C62 7 68 14 77 19S85 34 89 43 86 59 82 69 64 80 54 84 37 78 26 75 19 60 13 51 16 34 21 25 37 12 50 9m0 25c-10 0-16 7-16 16s7 16 16 16 16-7 16-16-6-16-16-16" fill={`url(#${glaze})`} fillRule="evenodd" />
    <path d="M23 34c4-9 13-16 24-17" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".3" />
    <g fill={theme.topping} stroke={theme.topping}>
      {decorations.map(([x, y, rotation], i) => theme.pattern === 'drizzle'
        ? <path key={i} d={`M${x-3} ${y-4}q7 3 5 9`} fill="none" strokeWidth="4" strokeLinecap="round" />
        : theme.pattern === 'chunks' ? <rect key={i} x={x-3} y={y-3} width="6" height="6" rx="1" transform={`rotate(${rotation} ${x} ${y})`} stroke="none" />
        : theme.pattern === 'dots' || theme.pattern === 'berries' ? <circle key={i} cx={x} cy={y} r={theme.pattern === 'berries' ? 5 : 3} stroke="none" />
        : <rect key={i} x={x-3} y={y-1.2} width="7" height="2.5" rx="1.25" transform={`rotate(${rotation} ${x} ${y})`} stroke="none" />)}
    </g>
  </svg>;
}
