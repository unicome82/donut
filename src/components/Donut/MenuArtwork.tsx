const desserts = {
  croissant: <g strokeLinejoin="round">
    <path d="M9 69Q3 45 25 27Q50 8 75 27Q97 45 91 69L76 81 67 69Q65 52 50 49Q35 52 33 69L24 81Z" fill="#efa647" stroke="#965021" strokeWidth="4" />
    <path d="M25 27 34 63M42 20 44 50M58 20 56 50M75 27 66 63" fill="none" stroke="#bd6a2f" strokeWidth="4" />
    <path d="M15 52Q25 34 40 30M60 30Q75 34 85 52" fill="none" stroke="#ffe7a0" strokeWidth="5" strokeLinecap="round" />
  </g>,
  cake: <g stroke="#a85f53" strokeWidth="3" strokeLinejoin="round">
    <path d="M11 51 69 24 89 47V79L11 91Z" fill="#f7ce8d" />
    <path d="m11 62 78-13v11L11 75Z" fill="#fff8e5" />
    <path d="m11 51 58-27 20 23-78 13Z" fill="#ffc6ce" />
    <path d="M60 35C38 20 50 12 57 16Q65 6 73 16Q79 23 60 35Z" fill="#ed4261" />
    <path d="m59 16 1-7 7 3" fill="none" stroke="#478044" strokeLinecap="round" />
  </g>,
  pudding: <g strokeWidth="3">
    <ellipse cx="50" cy="81" rx="41" ry="11" fill="#f9e2f3" stroke="#a9709b" />
    <path d="m25 31-9 43q34 22 68 0l-9-43Z" fill="#ffe08c" stroke="#a86134" />
    <path d="M25 31q25-17 50 0l4 15q-11 7-19 0-7-8-16 1-10 7-22-1Z" fill="#9e4820" />
    <ellipse cx="50" cy="31" rx="25" ry="9" fill="#c46b31" />
    <path d="m32 53-4 16" stroke="#fff7d2" strokeWidth="5" strokeLinecap="round" />
  </g>,
};

const icedDrinks = {
  americano: { base: '#6b3828', top: '#8e5436', ice: '#ebc6a2', straw: '#43b7a5' },
  latte: { base: '#fff1d7', top: '#bd835e', ice: '#fff9e9', straw: '#826bd2' },
  strawberryMilk: { base: '#ffc3d7', top: '#ed78a3', ice: '#fff1f8', straw: '#dc496d' },
};

function IcedDrink({ base, top, ice, straw }: typeof icedDrinks[keyof typeof icedDrinks]) {
  return <g strokeLinejoin="round">
    <path d="M62 35 70 9 82 6" fill="none" stroke={straw} strokeWidth="6" strokeLinecap="round" />
    <path d="m19 30 9 58q22 10 44 0l9-58Z" fill="#dff8ff" fillOpacity=".65" stroke="#557a89" strokeWidth="3" />
    <path d="m24 43 8 43q18 7 36 0l8-43Z" fill={base} />
    <path d="m24 42 3 19q12 7 24 1t22-3l3-17Z" fill={top} />
    <ellipse cx="50" cy="42" rx="26" ry="6" fill={top} />
    <g fill={ice} fillOpacity=".86" stroke="#fff" strokeOpacity=".78" strokeWidth="2">
      <rect x="30" y="44" width="14" height="13" rx="3" transform="rotate(-17 37 50)" />
      <rect x="47" y="39" width="15" height="14" rx="3" transform="rotate(19 54 46)" />
      <rect x="53" y="56" width="14" height="12" rx="3" transform="rotate(-16 60 62)" />
    </g>
    <path d="m25 39 7 40" fill="none" stroke="#fff" strokeOpacity=".77" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="50" cy="30" rx="32" ry="7" fill="#edfbff" fillOpacity=".62" stroke="#557a89" strokeWidth="3" />
    <path d="m63 31 7-22" fill="none" stroke={straw} strokeWidth="5" strokeLinecap="round" />
  </g>;
}

export function MenuArtwork({ type }: { type: keyof typeof desserts | keyof typeof icedDrinks }) {
  const drink = icedDrinks[type as keyof typeof icedDrinks];
  return drink ? <IcedDrink {...drink} /> : desserts[type as keyof typeof desserts];
}
