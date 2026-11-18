import { Donut } from '../components/Donut/Donut';
import { Icon } from '../components/Icon';
import { ShopArt } from '../components/ShopArt';
import { ShopAwning } from '../components/ShopAwning';

export function StartPage({ onGame, onLevels }: { onGame: () => void; onLevels: () => void }) {
  return <main className="start-page shop-screen">
    <ShopAwning />
    <div className="start-content">
      <div className="start-brand">
        <Donut type="strawberry" />
        <h1 aria-label="도넛 퍼즐">Donut <span>Puzzle</span></h1>
      </div>
      <ShopArt art="storefront" className="storefront-art" />
      <div className="start-actions">
        <button className="primary-button" onClick={onGame}><Icon name="play" />게임 시작</button>
        <button className="secondary-button" onClick={onLevels}><Icon name="grid" />레벨 선택</button>
      </div>
    </div>
  </main>;
}
