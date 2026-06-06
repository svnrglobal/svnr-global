import type { ReactNode } from "react";

// Claude-style line-art covers: a single dark doodle centred on a flat pastel
// panel. Each post maps to a (motif, bg) so every card is unique.
const MOTIFS: Record<string, ReactNode> = {
  spark: (
    <>
      <line x1="50" y1="10" x2="50" y2="90" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="22" y1="22" x2="78" y2="78" />
      <line x1="78" y1="22" x2="22" y2="78" />
    </>
  ),
  chat: (
    <>
      <rect x="15" y="20" width="70" height="48" rx="12" />
      <path d="M34 68 L29 82 L48 68" />
      <circle cx="38" cy="44" r="3.5" fill="#1c1b17" stroke="none" />
      <circle cx="50" cy="44" r="3.5" fill="#1c1b17" stroke="none" />
      <circle cx="62" cy="44" r="3.5" fill="#1c1b17" stroke="none" />
    </>
  ),
  doc: (
    <>
      <path d="M28 14 H62 L74 26 V86 H28 Z" />
      <path d="M62 14 V26 H74" />
      <line x1="36" y1="42" x2="66" y2="42" />
      <line x1="36" y1="54" x2="66" y2="54" />
      <line x1="36" y1="66" x2="56" y2="66" />
    </>
  ),
  network: (
    <>
      <line x1="50" y1="50" x2="22" y2="26" />
      <line x1="50" y1="50" x2="80" y2="30" />
      <line x1="50" y1="50" x2="28" y2="78" />
      <line x1="50" y1="50" x2="78" y2="74" />
      <circle cx="50" cy="50" r="8" fill="#1c1b17" stroke="none" />
      <circle cx="22" cy="26" r="6" />
      <circle cx="80" cy="30" r="6" />
      <circle cx="28" cy="78" r="6" />
      <circle cx="78" cy="74" r="6" />
    </>
  ),
  bars: (
    <>
      <line x1="16" y1="84" x2="88" y2="84" />
      <rect x="24" y="54" width="12" height="30" />
      <rect x="44" y="38" width="12" height="46" />
      <rect x="64" y="24" width="12" height="60" />
    </>
  ),
  orbit: (
    <>
      <ellipse cx="50" cy="50" rx="38" ry="20" />
      <circle cx="50" cy="50" r="7" fill="#1c1b17" stroke="none" />
      <circle cx="88" cy="50" r="5" fill="#1c1b17" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="28" y="46" width="44" height="36" rx="6" />
      <path d="M38 46 V36 a12 12 0 0 1 24 0 V46" />
      <circle cx="50" cy="62" r="4" fill="#1c1b17" stroke="none" />
    </>
  ),
  compass: (
    <>
      <circle cx="50" cy="50" r="36" />
      <polygon points="50,26 58,50 50,74 42,50" />
      <circle cx="50" cy="50" r="3" fill="#1c1b17" stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="44" cy="44" r="24" />
      <line x1="62" y1="62" x2="82" y2="82" />
    </>
  ),
  envelope: (
    <>
      <rect x="16" y="28" width="68" height="44" rx="4" />
      <path d="M16 32 L50 56 L84 32" />
    </>
  ),
  inbox: (
    <>
      <path d="M20 56 H36 L42 66 H58 L64 56 H80 V80 H20 Z" />
      <line x1="50" y1="20" x2="50" y2="46" />
      <path d="M40 36 L50 48 L60 36" />
    </>
  ),
  map: (
    <>
      <path d="M50 18 a24 24 0 0 1 24 24 c0 17 -24 40 -24 40 c0 0 -24 -23 -24 -40 a24 24 0 0 1 24 -24 Z" />
      <circle cx="50" cy="42" r="8" />
    </>
  ),
  signal: (
    <>
      <circle cx="50" cy="64" r="4" fill="#1c1b17" stroke="none" />
      <path d="M34 60 a18 18 0 0 1 32 0" />
      <path d="M26 54 a30 30 0 0 1 48 0" />
      <path d="M18 48 a42 42 0 0 1 64 0" />
    </>
  ),
  layers: (
    <>
      <polygon points="50,18 82,34 50,50 18,34" />
      <polyline points="18,48 50,64 82,48" />
      <polyline points="18,62 50,78 82,62" />
    </>
  ),
  building: (
    <>
      <rect x="30" y="20" width="40" height="64" />
      <rect x="39" y="32" width="8" height="8" fill="#1c1b17" stroke="none" />
      <rect x="53" y="32" width="8" height="8" fill="#1c1b17" stroke="none" />
      <rect x="39" y="48" width="8" height="8" fill="#1c1b17" stroke="none" />
      <rect x="53" y="48" width="8" height="8" fill="#1c1b17" stroke="none" />
      <rect x="45" y="66" width="10" height="18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="22" y="36" width="56" height="44" rx="5" />
      <path d="M40 36 V28 a4 4 0 0 1 4 -4 h12 a4 4 0 0 1 4 4 V36" />
      <line x1="22" y1="56" x2="78" y2="56" />
    </>
  ),
  columns: (
    <>
      <polygon points="50,16 22,34 78,34" />
      <line x1="32" y1="38" x2="32" y2="78" />
      <line x1="50" y1="38" x2="50" y2="78" />
      <line x1="68" y1="38" x2="68" y2="78" />
      <line x1="20" y1="82" x2="80" y2="82" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="50" cy="32" rx="26" ry="9" />
      <path d="M24 32 V50 a26 9 0 0 0 52 0 V32" />
      <path d="M24 50 V68 a26 9 0 0 0 52 0 V50" />
    </>
  ),
  target: (
    <>
      <circle cx="50" cy="50" r="34" />
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="50" r="6" fill="#1c1b17" stroke="none" />
    </>
  ),
  bricks: (
    <>
      <rect x="18" y="34" width="28" height="16" />
      <rect x="50" y="34" width="28" height="16" />
      <rect x="34" y="54" width="28" height="16" />
      <rect x="18" y="74" width="28" height="12" />
      <rect x="66" y="54" width="12" height="16" />
    </>
  ),
  globe: (
    <>
      <circle cx="50" cy="50" r="34" />
      <ellipse cx="50" cy="50" rx="14" ry="34" />
      <line x1="16" y1="50" x2="84" y2="50" />
      <path d="M22 34 H78" />
      <path d="M22 66 H78" />
    </>
  ),
  anchor: (
    <>
      <circle cx="50" cy="22" r="7" />
      <line x1="50" y1="29" x2="50" y2="80" />
      <line x1="34" y1="44" x2="66" y2="44" />
      <path d="M24 58 a26 26 0 0 0 52 0" />
    </>
  ),
  cart: (
    <>
      <path d="M16 24 H30 L40 64 H74 L82 36 H34" />
      <circle cx="44" cy="78" r="6" />
      <circle cx="70" cy="78" r="6" />
    </>
  ),
  star: <polygon points="50,16 60,40 86,40 65,56 73,82 50,66 27,82 35,56 14,40 40,40" />,
  bed: (
    <>
      <path d="M16 44 a6 6 0 0 1 6 -6 H78 a6 6 0 0 1 6 6 V60 H16 Z" />
      <rect x="24" y="44" width="22" height="12" rx="3" />
      <line x1="16" y1="60" x2="16" y2="76" />
      <line x1="84" y1="60" x2="84" y2="76" />
      <line x1="16" y1="64" x2="84" y2="64" />
    </>
  ),
  plane: (
    <>
      <path d="M16 28 L86 50 L16 72 L34 50 Z" />
      <path d="M34 50 L86 50" />
    </>
  ),
  frame: (
    <>
      <rect x="22" y="20" width="56" height="60" rx="3" />
      <rect x="32" y="30" width="36" height="40" />
      <path d="M34 64 L46 50 L54 58 L64 46" />
      <circle cx="58" cy="40" r="3" fill="#1c1b17" stroke="none" />
    </>
  ),
  gem: (
    <>
      <path d="M30 28 H70 L86 44 L50 84 L14 44 Z" />
      <path d="M14 44 H86" />
      <path d="M30 28 L42 44 M70 28 L58 44 M42 44 L50 84 M58 44 L50 84 M42 44 H58" />
    </>
  ),
  wine: (
    <>
      <path d="M34 18 H66 C66 40 54 46 54 56 V76 H46 V56 C46 46 34 40 34 18 Z" />
      <line x1="38" y1="82" x2="62" y2="82" />
      <line x1="50" y1="76" x2="50" y2="82" />
    </>
  ),
  cloud: <path d="M34 66 a15 15 0 0 1 3 -29 a19 19 0 0 1 35 5 a13 13 0 0 1 -2 24 Z" />,
  sofa: (
    <>
      <path d="M24 52 a8 8 0 0 1 15 0 V58 H61 V52 a8 8 0 0 1 15 0 V70 H24 Z" />
      <line x1="39" y1="58" x2="61" y2="58" />
      <line x1="28" y1="70" x2="28" y2="78" />
      <line x1="72" y1="70" x2="72" y2="78" />
    </>
  ),
};

export default function BlogCover({
  motif,
  bg,
  className = "",
}: {
  motif: string;
  bg: string;
  className?: string;
}) {
  const art = MOTIFS[motif] ?? MOTIFS.spark;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] h-[54%]"
        aria-hidden="true"
      >
        <g fill="none" stroke="#1c1b17" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
          {art}
        </g>
      </svg>
    </div>
  );
}
