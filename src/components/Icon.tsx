export function Icon({ name }: { name: 'back' | 'pause' | 'arrow' | 'star' | 'lock' | 'check' }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'back' && <path d="m14 6-6 6 6 6" />}
    {name === 'pause' && <><path d="M9 5v14M15 5v14" /></>}
    {name === 'arrow' && <path d="M5 12h14m-5-5 5 5-5 5" />}
    {name === 'star' && <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />}
    {name === 'lock' && <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>}
    {name === 'check' && <path d="m5 12 4 4L19 6" />}
  </svg>;
}
