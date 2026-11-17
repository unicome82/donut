import { Donut } from '../components/Donut/Donut';
export function StartPage({ onGame, onLevels }: { onGame: () => void; onLevels: () => void }) {
  return <main className="start-page">
    <div className="start-content"><Donut type="strawberry" /><h1>도넛 퍼즐</h1>
      <button className="primary-button" onClick={onGame}>시작</button>
      <button className="secondary-button" onClick={onLevels}>레벨 선택</button>
    </div>
  </main>;
}
