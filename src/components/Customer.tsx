const looks = [
  { skin: '#f2bf92', hair: '#694339', shirt: '#ed96a6', hat: '#ed96a6' },
  { skin: '#c88d65', hair: '#332b35', shirt: '#88baa7', hat: '#a8d8c8' },
  { skin: '#f5d1ae', hair: '#b47948', shirt: '#b5a0cc', hat: '#b5a0cc' },
  { skin: '#dba67e', hair: '#483a30', shirt: '#e9b956', hat: '#f5c66b' },
];
export function Customer({ sequence }: { sequence: number }) {
  const look = looks[(sequence - 1) % looks.length] ?? looks[0]!;
  return <svg className="customer" viewBox="0 0 64 76" aria-hidden="true">
    <path d="M6 76V65c0-14 11-21 26-21s26 7 26 21v11" fill={look.shirt} />
    <path d="M25 47v9q7 9 14 0v-9" fill={look.skin} />
    <ellipse cx="32" cy="28" rx="22" ry="25" fill={look.hair} />
    <circle cx="12" cy="32" r="4" fill={look.skin} /><circle cx="52" cy="32" r="4" fill={look.skin} />
    <path d="M13 25q0-18 19-18t19 18v11c0 13-9 19-19 19S13 49 13 36Z" fill={look.skin} />
    <path d="M12 27Q9 1 32 2t21 24q-12-1-18-13-6 13-23 14" fill={look.hair} />
    {(sequence % 3 === 0) && <path d="M8 15q1-16 24-15t24 15Z" fill={look.hat} />}
    <circle cx="24" cy="32" r="2" fill="#40352f" /><circle cx="41" cy="32" r="2" fill="#40352f" />
    <path d="M27 41q5 5 10 0" fill="none" stroke="#754a3c" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="19" cy="39" rx="4" ry="2" fill="#e98e84" opacity=".55" /><ellipse cx="45" cy="39" rx="4" ry="2" fill="#e98e84" opacity=".55" />
    {sequence % 2 === 0 && <g fill="none" stroke={look.hair} strokeWidth="1.7"><rect x="17" y="27" width="13" height="10" rx="4" /><rect x="35" y="27" width="13" height="10" rx="4" /><path d="M30 30h5" /></g>}
  </svg>;
}
