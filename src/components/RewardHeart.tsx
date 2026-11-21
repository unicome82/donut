import { useId } from 'react';

const heart = 'M12 21.2 10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.6 11.5L12 21.2Z';

/** A raised heart in the tray-clear button's pink: a darker base below, a gradient face and a gloss. */
export function RewardHeart() {
  const id = useId();
  return <svg className="reward-heart" viewBox="0 0 24 25" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-face`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ff9bb0" />
        <stop offset="1" stopColor="#ec6a86" />
      </linearGradient>
    </defs>
    <path d={heart} transform="translate(0 1.6)" fill="#cf4d6c" />
    <path d={heart} fill={`url(#${id}-face)`} stroke="#e88aa0" strokeWidth=".6" />
    <path d="M5.2 9.2c-.2-2.2 1.1-3.9 3-4.1" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;
}
