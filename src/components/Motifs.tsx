// ===================================================================
// IndGo heritage motif kit — cusped arch, jali, mandala, logo mark.
// All pure SVG, currentColor-driven so they inherit brand tokens.
// ===================================================================

/* ---- Logo mark: a cusped Mughal arch cradling an ascending swift ---- */
export function Logo({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      {/* arch body */}
      <path
        d="M24 3c8 0 14 5 14 14v27H10V17C10 8 16 3 24 3Z"
        fill="var(--color-indigo)"
      />
      {/* cusp notch at apex */}
      <path
        d="M24 3c-2.4 3.2-2.4 6 0 8.4C26.4 9 26.4 6.2 24 3Z"
        fill="var(--color-paper)"
      />
      {/* ascending swift / paper plane */}
      <path
        d="M17 30l14-8-5 12-2.6-4.4L17 30Z"
        fill="var(--color-sky)"
      />
      {/* gold keyline base */}
      <rect x="10" y="41" width="28" height="3" rx="1.5" fill="var(--color-marigold)" />
    </svg>
  );
}

/* ---- Cusped arch keyline — frames hero art / feature blocks ---- */
export function ArchKeyline({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 300 380" fill="none" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M6 374V150C6 78 63 22 150 22c-14 12-14 26 0 40 14-14 14-28 0-40 87 0 144 56 144 128v224"
        stroke="var(--color-marigold)"
        strokeWidth="1.5"
        className={draw ? "arch-draw" : ""}
      />
    </svg>
  );
}

/* ---- Arch clip-path def (place once per page that uses .arch-clip) ---- */
export function ArchClipDef() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <clipPath id="archClip" clipPathUnits="objectBoundingBox">
          <path d="M0.02,1 V0.42 C0.02,0.19 0.24,0.03 0.5,0.03 C0.45,0.08 0.45,0.13 0.5,0.18 C0.55,0.13 0.55,0.08 0.5,0.03 C0.76,0.03 0.98,0.19 0.98,0.42 V1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ---- Jali lattice tile — a single perforated-screen unit, tiled via CSS bg elsewhere,
        used here as a crisp decorative panel ---- */
export function JaliPanel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <pattern id="jaliUnit" width="30" height="30" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d="M15 0 L30 15 L15 30 L0 15 Z" />
            <circle cx="15" cy="15" r="4.2" />
            <path d="M0 0 L6 6 M30 0 L24 6 M0 30 L6 24 M30 30 L24 24" />
          </g>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#jaliUnit)" />
    </svg>
  );
}

/* ---- Rangoli / mandala medallion — fine radial line-art accent ---- */
export function Mandala({ className = "", spin = false }: { className?: string; spin?: boolean }) {
  const petals = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 200 200" className={`${className} ${spin ? "spinslow" : ""}`} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1">
        <circle cx="100" cy="100" r="88" opacity="0.5" />
        <circle cx="100" cy="100" r="66" opacity="0.7" />
        <circle cx="100" cy="100" r="30" />
        {petals.map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x1 = 100 + Math.cos(a) * 30;
          const y1 = 100 + Math.sin(a) * 30;
          const x2 = 100 + Math.cos(a) * 66;
          const y2 = 100 + Math.sin(a) * 66;
          const mx = 100 + Math.cos(a + 0.19) * 50;
          const my = 100 + Math.sin(a + 0.19) * 50;
          const mx2 = 100 + Math.cos(a - 0.19) * 50;
          const my2 = 100 + Math.sin(a - 0.19) * 50;
          return (
            <g key={i}>
              <path d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`} />
              <path d={`M${x1} ${y1} Q${mx2} ${my2} ${x2} ${y2}`} />
            </g>
          );
        })}
        {petals.map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x = 100 + Math.cos(a) * 88;
          const y = 100 + Math.sin(a) * 88;
          return <circle key={`d${i}`} cx={x} cy={y} r="2" fill="currentColor" stroke="none" />;
        })}
      </g>
    </svg>
  );
}

/* ---- Small paper-plane glyph ---- */
export function Plane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M2 12l19-8-7 18-3.2-6.4L2 12Z" />
    </svg>
  );
}
