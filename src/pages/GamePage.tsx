import { GameHeader } from '../components/GameHeader';
import { OrderBoard } from '../components/OrderBoard';
import { DonutTray } from '../components/DonutTray';
import { DonutQueue } from '../components/DonutQueue';
import { mockGame } from '../game/mock';
import { level01 } from '../game/levels/level01';
export function GamePage({ onBack }: { onBack: () => void }) {
  return <main className="game-page"><GameHeader level={mockGame.levelId} completed={mockGame.completedOrders} target={level01.targetOrders} onBack={onBack} />
    <div className="preview-note"><span className="status-dot" /> 기본 화면 미리보기 <span>게임 조작은 준비 중이에요</span></div>
    <OrderBoard orders={mockGame.orders} /><DonutTray donuts={mockGame.tray} capacity={mockGame.trayCapacity} /><DonutQueue queues={mockGame.queues} />
    <footer className="game-footer">A LITTLE PUZZLE, A LITTLE JOY.</footer>
  </main>;
}
