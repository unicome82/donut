import type { DonutType } from '../../game/types';

interface DonutTheme {
  name: string;
  icing: string;
  topping: string;
  pattern: 'sprinkles' | 'chunks' | 'drizzle' | 'leaves' | 'stars' | 'rings' | 'crosses' | 'chevrons' | 'dots';
}

export const menuNames = {
  chocolate: '초코 도넛',
  strawberry: '딸기 도넛',
  cinnamonCroffle: '시나몬 크러플',
  matchaCroffle: '말차 크러플',
  cake: '딸기 케이크',
  chocolateCake: '초코 케이크',
  pudding: '캐러멜 푸딩',
  matchaPudding: '말차 푸딩',
  raspberryMacaron: '라즈베리 마카롱',
  lemonMacaron: '레몬 마카롱',
  blueberryCupcake: '블루베리 컵케이크',
  chocolateCupcake: '초코 컵케이크',
  strawberryTart: '딸기 타르트',
  blueberryTart: '블루베리 타르트',
  croissant: '플레인 크루아상',
  chocolateCroissant: '초코 크루아상',
  chocolateCookie: '초코칩 쿠키',
  whiteCookie: '화이트 초콜릿 쿠키',
  berryScone: '베리 스콘',
  matchaScone: '말차 스콘',
  vanillaIceCream: '바닐라 아이스크림',
  chocolateIceCream: '초코 아이스크림',
};

export const donutThemes: Record<Exclude<DonutType, keyof typeof menuNames> | 'strawberry', DonutTheme> = {
  strawberry: { name: '딸기', icing: '#ff70ae', topping: '#fff4eb', pattern: 'sprinkles' },
  vanilla: { name: '바닐라', icing: '#fff6e9', topping: '#683e30', pattern: 'drizzle' },
  matcha: { name: '말차', icing: '#668c27', topping: '#eff8a4', pattern: 'leaves' },
  blueberry: { name: '블루베리', icing: '#6256c7', topping: '#faf0ff', pattern: 'stars' },
  lemon: { name: '레몬', icing: '#ffe331', topping: '#8d530c', pattern: 'rings' },
  mint: { name: '민트', icing: '#73e5dc', topping: '#00695c', pattern: 'crosses' },
  orange: { name: '오렌지', icing: '#fb6418', topping: '#fff7d4', pattern: 'chevrons' },
  caramel: { name: '캐러멜', icing: '#dba66c', topping: '#996332', pattern: 'drizzle' },
  raspberry: { name: '라즈베리', icing: '#c5446c', topping: '#fff0c9', pattern: 'dots' },
  sesame: { name: '흑임자', icing: '#68717c', topping: '#e5dfcd', pattern: 'sprinkles' },
  coconut: { name: '코코넛', icing: '#f5f1ec', topping: '#a5ccd7', pattern: 'chunks' },
  coffee: { name: '커피', icing: '#785044', topping: '#f5d0a0', pattern: 'dots' },
  sprinkle: { name: '스프링클', icing: '#f7edde', topping: '#ed8b9f', pattern: 'sprinkles' },
};

export const itemNames = {
  ...Object.fromEntries(Object.entries(donutThemes).map(([type, theme]) => [type, `${theme.name} 도넛`])),
  ...menuNames,
} as Record<DonutType, string>;
