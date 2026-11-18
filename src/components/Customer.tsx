const skins = ['#f2bf92', '#b97d58', '#f6d6b8', '#dca67e', '#8d5a42', '#e5b69e'];
const hairColors = ['#694339', '#302b36', '#b47948', '#6b5d50', '#d29b63', '#ded9d1'];
const clothes = ['#ed96a6', '#88baa7', '#b5a0cc', '#e9b956', '#77accb', '#cf8662', '#8d9cc9', '#b4bf74'];
const hairstyles = ['bob', 'curly', 'spiky', 'bun', 'side', 'long', 'cap', 'bald'] as const;
export function Customer({ sequence }: { sequence: number }) {
  const id = Math.max(0, sequence - 1);
  const skin = skins[id % skins.length];
  const hair = hairColors[(id * 5 + Math.floor(id / 4)) % hairColors.length];
  const shirt = clothes[(id * 3) % clothes.length];
  const style = hairstyles[id % hairstyles.length];
  const accessory = id % 6;
  return <svg className="customer" viewBox="0 0 64 76" aria-hidden="true">
    {style === 'long' && <path d="M9 25q0-25 23-25t23 25v40H9Z" fill={hair} />}
    {style === 'bun' && <circle cx="44" cy="10" r="10" fill={hair} />}
    <path d="M6 76V65c0-14 11-21 26-21s26 7 26 21v11" fill={shirt} />
    <path d="M25 47v9q7 9 14 0v-9" fill={skin} />
    <circle cx="12" cy="32" r="4" fill={skin} /><circle cx="52" cy="32" r="4" fill={skin} />
    <path d="M13 25q0-18 19-18t19 18v11c0 13-9 19-19 19S13 49 13 36Z" fill={skin} />
    {style === 'bob' && <path d="M10 40V22Q10 1 32 1t22 21v18l-6-7V22H16v11Z" fill={hair} />}
    {style === 'curly' && <g fill={hair}>{[15, 24, 34, 44, 51].map((x, i) => <circle key={x} cx={x} cy={i % 2 ? 11 : 16} r="9" />)}</g>}
    {style === 'spiky' && <path d="m11 27-2-16 10 4 2-13 9 9 8-11 5 13 12-6-3 20-10-9-17 2Z" fill={hair} />}
    {(style === 'side' || style === 'bun' || style === 'long') && <path d="M11 28Q8 2 32 2t22 25Q35 27 28 13q-3 10-17 15" fill={hair} />}
    {style === 'cap' && <g fill={shirt}><path d="M10 23Q10 2 32 2t22 21Z" /><rect x="7" y="20" width="53" height="6" rx="3" /></g>}
    {style === 'bald' && <path d="M14 19q-6 4-5 15l6 2m35-17q6 4 5 15l-6 2" fill={hair} />}
    <circle cx="24" cy="32" r="2" fill="#40352f" /><circle cx="41" cy="32" r="2" fill="#40352f" />
    <path d="M27 41q5 5 10 0" fill="none" stroke="#754a3c" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="19" cy="39" rx="4" ry="2" fill="#e98e84" opacity=".55" /><ellipse cx="45" cy="39" rx="4" ry="2" fill="#e98e84" opacity=".55" />
    {accessory === 1 && <g fill="none" stroke={hair} strokeWidth="1.6"><circle cx="24" cy="32" r="7" /><circle cx="41" cy="32" r="7" /><path d="M31 31h3" /></g>}
    {accessory === 2 && <g fill="#7a453d"><circle cx="18" cy="38" r="1" /><circle cx="22" cy="39" r="1" /><circle cx="43" cy="39" r="1" /><circle cx="47" cy="38" r="1" /></g>}
    {accessory === 3 && <g fill="none" stroke="#ddab46" strokeWidth="2"><circle cx="11" cy="39" r="3" /><circle cx="53" cy="39" r="3" /></g>}
    {accessory === 4 && <path d="M23 40q5-8 9-2 4-6 9 2-9 5-9-1-2 6-9 1" fill={hair} />}
    {accessory === 5 && <g fill={shirt}><path d="m17 14-9-7v16Zm0 0 9-7v16Z" /><circle cx="17" cy="15" r="3" /></g>}
    {id % 3 === 0 && <path d="M18 63h28m-25 6h22" stroke="#ffffff66" strokeWidth="3" />}
    {id % 3 === 1 && <path d="M24 56v20m16-20v20" stroke="#ffffff88" strokeWidth="3" />}
  </svg>;
}
