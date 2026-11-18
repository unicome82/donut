import { Donut } from './Donut/Donut';
import type { DonutType } from '../game/types';
export function DonutBox({ types, received, total }: { types: DonutType[]; received: number; total: number }) {
  const filled = total > 0 ? Math.ceil(received / total * 6) : 0;
  return <div className="donut-box" aria-label={`도넛 박스 ${total}개 중 ${received}개 받음`}>
    <svg className="box-art" viewBox="0 0 100 65" preserveAspectRatio="none" aria-hidden="true">
      <path className="box-lid" d="M14 33 18 8 92 11 94 37Z" fill="#ffc9cd" stroke="#dc8995" strokeWidth="2" strokeLinejoin="round" />
      <path className="box-lid" d="m22 13 65 3 1 15-70-4Z" fill="#ffe3df" />
      <path d="m14 29 80 5-12 15-78-5Z" fill="#fff1df" stroke="#e9999e" strokeWidth="2" strokeLinejoin="round" />
      <path d="m4 43 78 6 12-15-3 19-10 9-74-6Z" fill="#f59dae" />
      <path d="m82 49 12-15-3 19-10 9Z" fill="#e47d96" />
      <path d="m9 45 67 6" stroke="#ffd8da" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <div className="box-inside">{Array.from({ length: 6 }, (_, i) => <span key={i} className="box-donut" style={{ opacity: i < filled ? 1 : 0 }}>{types[i % types.length] && <Donut type={types[i % types.length]!} />}</span>)}</div>
  </div>;
}
