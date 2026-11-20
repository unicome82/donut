export function Icon({ name }: { name: 'basket' | 'grid' | 'back' | 'current-location' | 'pause' | 'arrow' | 'star' | 'lock' | 'check' | 'play' | 'retry' | 'list' | 'sound' | 'sound-off' }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'basket' && <path d="M3 10h18l-2 10H5L3 10Zm4 0 3-6m7 6-3-6M9 14v3m6-3v3" />}
    {name === 'grid' && <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" fill="currentColor" />}
    {name === 'back' && <path d="m14 6-6 6 6 6" />}
    {name === 'current-location' && <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" fill="currentColor" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>}
    {name === 'pause' && <><path d="M9 5v14M15 5v14" /></>}
    {name === 'arrow' && <path d="M5 12h14m-5-5 5 5-5 5" />}
    {name === 'star' && <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />}
    {name === 'lock' && <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>}
    {name === 'play' && <path d="m8 5 12 7-12 7Z" fill="currentColor" />}
    {name === 'retry' && <path d="M20 11a8 8 0 1 0-2 6M20 5v6h-6" />}
    {name === 'list' && <path d="M9 6h11M9 12h11M9 18h11M4 6h.1M4 12h.1M4 18h.1" />}
    {(name === 'sound' || name === 'sound-off') && <path d="M3 9h4l5-4v14l-5-4H3Z" />}
    {name === 'sound' && <path d="M16 9a4 4 0 0 1 0 6m2.8-9a8 8 0 0 1 0 12" />}
    {name === 'sound-off' && <path d="m16 9 5 6m0-6-5 6" />}
    {name === 'check' && <path d="m5 12 4 4L19 6" />}
  </svg>;
}
