import poster from '../assets/home/lavender.webp';

export function StartPage({ level, onGame, onLevels }: { level: number; onGame: () => void; onLevels: () => void }) {
  return <main className="start-page">
    <h1 className="sr-only">달콤한 주문, Sweet Order</h1>
    <img className="start-poster" src={poster} alt="" draggable={false} fetchPriority="high" />
    <div className="start-actions">
      <button className="primary-button" onClick={onGame}>Level {String(level).padStart(2, '0')}</button>
      <button className="secondary-button" onClick={onLevels}>레벨 선택</button>
    </div>
  </main>;
}
