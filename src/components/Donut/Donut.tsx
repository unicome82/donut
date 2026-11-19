import { memo } from 'react';
import type { DonutType } from '../../game/types';

const narrowDesserts = new Set<DonutType>([
  'vanillaIceCream', 'chocolateIceCream', 'blueberryCupcake', 'chocolateCupcake', 'cake', 'chocolateCake',
]);
const menuImages = import.meta.glob<string>('../../assets/menu/*.webp', { eager: true, import: 'default', query: '?url&no-inline' });

export const Donut = memo(function Donut({ type, className = '' }: { type: DonutType; className?: string }) {
  const image = menuImages[`../../assets/menu/${type}.webp`];
  const shape = narrowDesserts.has(type) ? 'donut--widened' : '';
  return <img className={`donut ${shape} ${className}`} src={image} alt="" draggable={false} />;
});
