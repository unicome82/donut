import rewardStar from '../assets/game/reward-star.webp';
import { getTimeStars } from '../game/stageTime';

export function StageClock({ remainingMs, limitMs }: { remainingMs: number; limitMs: number }) {
  const remainingPercent = remainingMs / limitMs * 100;
  const stars = getTimeStars(remainingMs, limitMs);
  return <div className="stage-clock" role="progressbar" aria-label="스테이지 남은 시간"
    aria-valuemin={0} aria-valuemax={100} aria-valuenow={remainingPercent}
    aria-valuetext={`별 ${stars}개 기준`}>
    <span className="stage-clock-stars" aria-hidden="true">
      {[0, 1, 2].map(index => <span key={index} className={index >= stars ? 'star--unearned' : undefined}>
        <img src={rewardStar} width={20} height={20} alt="" draggable={false} />
      </span>)}
    </span>
    <span className="stage-clock-track" aria-hidden="true">
      <span className={`stage-clock-fill stage-clock-fill--${stars}`} style={{ width: `${remainingPercent}%` }} />
    </span>
  </div>;
}
