import { Donut } from './Donut/Donut';
import type { DonutType } from '../game/types';
export function DonutBox({ types, received, total }: { types: DonutType[]; received: number; total: number }) {
  const filled = total > 0 ? Math.ceil(received / total * 6) : 0;
  return <div className="donut-box" aria-label={`도넛 박스 ${total}개 중 ${received}개 받음`}>
    <span className="box-lid" />
    <div className="box-inside">{Array.from({ length: 6 }, (_, i) => <span key={i} className="box-donut" style={{ opacity: i < filled ? 1 : 0 }}>{types[i % types.length] && <Donut type={types[i % types.length]!} />}</span>)}</div>
    <span className="box-front">♡</span>
  </div>;
}
