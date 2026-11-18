import { DONUT_TYPES, type DonutType, type StageDefinition } from './types';
import { BASE_TRAY_CAPACITY, QUEUE_COUNT, MAX_ORDER_QUANTITY } from './constants';
export function validateStage(stage: StageDefinition): string[] {
  const errors: string[] = [];
  const validPositive = (n: number) => Number.isInteger(n) && n > 0;
  if (!Number.isInteger(stage.id) || stage.id < 0 || !validPositive(stage.revision)) errors.push('스테이지 ID는 0 이상의 정수이고 revision은 양의 정수여야 합니다.');
  if (!validPositive(stage.targetOrders) || stage.orders.length !== stage.targetOrders) errors.push('목표 주문 수가 일치하지 않습니다.');
  if (stage.queues.length !== QUEUE_COUNT) errors.push(`대기열은 ${QUEUE_COUNT}개여야 합니다.`);
  if (stage.trayCapacity !== BASE_TRAY_CAPACITY) errors.push(`기본 트레이는 ${BASE_TRAY_CAPACITY}칸이어야 합니다.`);
  if (!stage.donutTypes.length || new Set(stage.donutTypes).size !== stage.donutTypes.length || stage.donutTypes.some(t => !DONUT_TYPES.includes(t))) errors.push('도넛 종류 설정이 올바르지 않습니다.');
  const ids = new Set<string>();
  const supply: Partial<Record<DonutType, number>> = {};
  const demand: Partial<Record<DonutType, number>> = {};
  for (const token of stage.queues.flat()) {
    if (!token.id || ids.has(token.id)) errors.push('도넛 ID가 비어 있거나 중복됩니다.');
    ids.add(token.id);
    if (!stage.donutTypes.includes(token.type)) errors.push('허용하지 않은 도넛입니다.');
    supply[token.type] = (supply[token.type] ?? 0) + 1;
  }
  const orderIds = new Set<string>();
  stage.orders.forEach((order, i) => {
    if (!order.id || orderIds.has(order.id)) errors.push('주문 ID가 비어 있거나 중복됩니다.');
    orderIds.add(order.id);
    if (order.sequence !== i + 1) errors.push('주문 순번이 올바르지 않습니다.');
    const items = Object.entries(order.items);
    if (Object.values(order.items).reduce((sum, count) => sum + count, 0) > MAX_ORDER_QUANTITY) errors.push('주문 총수량은 16개 이하여야 합니다.');
    if (items.length < 1 || items.length > 3) errors.push('주문은 1~3종이어야 합니다.');
    for (const [key, count] of items) {
      const type = key as DonutType;
      if (!stage.donutTypes.includes(type) || !validPositive(count) || count > MAX_ORDER_QUANTITY) errors.push('주문 종류 또는 수량이 올바르지 않습니다.');
      demand[type] = (demand[type] ?? 0) + count;
    }
  });
  for (const type of DONUT_TYPES) if ((supply[type] ?? 0) < (demand[type] ?? 0)) errors.push(`${type} 공급이 부족합니다.`);
  return errors;
}
