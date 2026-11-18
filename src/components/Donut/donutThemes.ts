import type { DonutType } from '../../game/types';
interface DonutTheme { name: string; icing: string; topping: string; pattern: 'sprinkles' | 'chunks' | 'drizzle' | 'dots' | 'berries' }
export const donutThemes: Record<DonutType, DonutTheme> = {
  strawberry: { name: '딸기', icing: '#ee91a3', topping: '#fff1d9', pattern: 'sprinkles' },
  chocolate: { name: '초콜릿', icing: '#795044', topping: '#422e28', pattern: 'chunks' },
  vanilla: { name: '바닐라', icing: '#f5e3b9', topping: '#b57b4e', pattern: 'drizzle' },
  matcha: { name: '말차', icing: '#a2c19a', topping: '#537c48', pattern: 'dots' },
  blueberry: { name: '블루베리', icing: '#afa0cc', topping: '#675381', pattern: 'berries' },
  caramel: { name: '캐러멜', icing: '#dba66c', topping: '#996332', pattern: 'drizzle' },
  lemon: { name: '레몬', icing: '#efd17d', topping: '#fff9e5', pattern: 'chunks' },
  mint: { name: '민트', icing: '#54c7bd', topping: '#244d47', pattern: 'chunks' },
  orange: { name: '오렌지', icing: '#ed873d', topping: '#fff3c4', pattern: 'drizzle' },
  raspberry: { name: '라즈베리', icing: '#c5446c', topping: '#fff0c9', pattern: 'dots' },
  sesame: { name: '흑임자', icing: '#68717c', topping: '#e5dfcd', pattern: 'sprinkles' },
  coconut: { name: '코코넛', icing: '#f5f1ec', topping: '#a5ccd7', pattern: 'chunks' },
  coffee: { name: '커피', icing: '#ad795c', topping: '#f5d0a0', pattern: 'berries' },
  sprinkle: { name: '스프링클', icing: '#f7edde', topping: '#ed8b9f', pattern: 'sprinkles' },
};
