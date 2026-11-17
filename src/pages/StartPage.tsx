import { Donut } from '../components/Donut/Donut';
import { Icon } from '../components/Icon';
export function StartPage({ onGame, onLevels }: { onGame: () => void; onLevels: () => void }) {
  return <main className="start-page"><div className="start-top"><span className="wordmark">donut<span>·</span>puzzle</span><span className="edition">BAKED WITH LOVE</span></div>
    <div className="hero"><p className="eyebrow">A FRESH LITTLE CHALLENGE</p><div className="hero-donuts"><Donut type="chocolate" /><Donut type="strawberry" /><Donut type="vanilla" /><span className="spark spark--one">✧</span><span className="spark spark--two">✧</span></div><h1>달콤한 한 수,<br />도넛 퍼즐<span>!</span></h1><p className="hero-copy">하나씩 고르고, 차곡차곡 채우고.<br />작은 도넛으로 완성하는 기분 좋은 퍼즐.</p>
    <button className="primary-button" onClick={onGame}>플레이 시작 <Icon name="arrow" /></button><button className="secondary-button" onClick={onLevels}>레벨 둘러보기</button><p className="start-preview">레벨 1~5 · 시간제한 없는 도넛 퍼즐</p></div>
    <div className="start-features"><span><b>6</b>개의 대기열</span><span><b>8</b>칸의 트레이</span><span><b>∞</b>여유로운 시간</span></div><footer className="start-footer">오늘도, 한 입의 작은 행복.</footer>
  </main>;
}
