import { practiceLevel } from './practice';
import { level01 } from './level01';
import { level02 } from './level02';
import { level03 } from './level03';
import { level04 } from './level04';
import { level05 } from './level05';
export { practiceLevel };
export const levels = [level01, level02, level03, level04, level05];
export const levelNames: Record<number, string> = { 1: '처음 한 입', 2: '달콤한 리듬', 3: '새로운 맛', 4: '차곡차곡', 5: '도넛 마스터' };
export function getLevel(id: number) {
  if (id === practiceLevel.id) return practiceLevel;
  const level = levels.find(candidate => candidate.id === id);
  if (!level) throw new Error('존재하지 않는 레벨입니다.');
  return level;
}
