import { useState } from 'react';
import { Customer } from '../components/Customer';
import { Donut } from '../components/Donut/Donut';
import { Icon } from '../components/Icon';
import { ShopAwning } from '../components/ShopAwning';
import type { DonutType } from '../game/types';

const themes: ReadonlyArray<{
  name: string;
  guest: number;
  companion?: number;
  menu: readonly [DonutType, DonutType];
}> = [
  { name: 'berry', guest: 3, companion: 2, menu: ['chocolate', 'strawberry'] },
  { name: 'bakery', guest: 18, menu: ['cake', 'blueberryCupcake'] },
  { name: 'honey', guest: 10, menu: ['chocolate', 'lemonMacaron'] },
  { name: 'rose', guest: 17, menu: ['raspberryMacaron', 'cake'] },
  { name: 'matcha', guest: 15, menu: ['chocolate', 'matchaLatte'] },
  { name: 'sky', guest: 24, menu: ['strawberry', 'blueberryAde'] },
  { name: 'peach', guest: 6, menu: ['peachAde', 'chocolate'] },
  { name: 'night', guest: 20, menu: ['raspberryMacaron', 'cake'] },
  { name: 'shop', guest: 14, menu: ['strawberry', 'americano'] },
  { name: 'lavender', guest: 8, menu: ['chocolate', 'blueberryCupcake'] },
];

export function StartPage({ level, onGame, onLevels }: { level: number; onGame: () => void; onLevels: () => void }) {
  const [theme] = useState(() => themes[Math.floor(Math.random() * themes.length)]!);

  return <main className={`start-page start-theme--${theme.name}`}>
    {theme.name === 'shop' && <ShopAwning />}
    <div className="start-content">
      <div className="start-brand">
        <h1 aria-label="달콤한 주문, Sweet Order"><span>Sweet</span><span>Order</span></h1>
        <p>달콤한 주문</p>
      </div>
      <div className="start-scene" aria-hidden="true">
        <span className="start-sparkle">✦</span>
        <span className="start-sparkle start-sparkle--small">✧</span>
        {theme.companion && <Customer sequence={theme.companion} className="start-companion" />}
        <Customer sequence={theme.guest} className="start-guest" />
        <Donut type={theme.menu[0]} className="start-menu start-menu--left" />
        <Donut type={theme.menu[1]} className="start-menu start-menu--right" />
      </div>
      <div className="start-actions">
        <button className="primary-button" onClick={onGame}>Level {String(level).padStart(2, '0')} <Icon name="play" /></button>
        <button className="secondary-button" onClick={onLevels}><Icon name="grid" />레벨 선택</button>
      </div>
    </div>
  </main>;
}
