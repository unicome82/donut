import { getTimeStars } from '../game/stageTime';

export function StageClock({ remainingMs, limitMs }: { remainingMs: number; limitMs: number }) {
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const clock = `${Math.floor(remainingSeconds / 60)}:${String(remainingSeconds % 60).padStart(2, '0')}`;
  const stars = getTimeStars(remainingMs, limitMs);
  return <div className="stage-clock" role="progressbar" aria-label="스테이지 남은 시간"
    aria-valuemin={0} aria-valuemax={limitMs / 1000} aria-valuenow={remainingSeconds}
    aria-valuetext={`${clock} 남음, 별 ${stars}개 기준`}>
    <span className="stage-clock-stars" aria-hidden="true">{'★'.repeat(stars)}{'☆'.repeat(3 - stars)}</span>
    <span className="stage-clock-track" aria-hidden="true">
      <span className={`stage-clock-fill stage-clock-fill--${stars}`} style={{ width: `${remainingMs / limitMs * 100}%` }} />
    </span>
    <span className="stage-clock-time" aria-hidden="true">{clock}</span>
  </div>;
}
