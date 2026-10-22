import type { DivisionSlug } from "@/lib/divisions";

// One geometric mark per division, all drawn on the same 120-unit grid.
export default function DivisionGlyph({
  slug,
  className = "",
}: {
  slug: DivisionSlug;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        {glyphs[slug]}
      </g>
    </svg>
  );
}

const ring = (n: number, r: number, size: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((2 * Math.PI) / n) * i - Math.PI / 2;
    return (
      <circle
        key={`${r}-${i}`}
        cx={(60 + r * Math.cos(a)).toFixed(2)}
        cy={(60 + r * Math.sin(a)).toFixed(2)}
        r={size}
      />
    );
  });

const glyphs: Record<DivisionSlug, React.ReactNode> = {
  // Interlocking squares: the organisation as a coordinated structure.
  enterprise: (
    <>
      <rect x="30" y="30" width="60" height="60" />
      <rect x="30" y="30" width="60" height="60" transform="rotate(45 60 60)" />
      <circle cx="60" cy="60" r="12" />
      <circle cx="60" cy="60" r="42.5" strokeDasharray="2 4" />
    </>
  ),
  // Surya: a sun with long and short rays.
  energy: (
    <>
      <circle cx="60" cy="60" r="16" />
      <circle cx="60" cy="60" r="24" />
      {Array.from({ length: 24 }, (_, i) => (
        <line
          key={i}
          x1="60"
          y1={i % 2 ? 30 : 32}
          x2="60"
          y2={i % 2 ? 22 : 10}
          transform={`rotate(${i * 15} 60 60)`}
        />
      ))}
    </>
  ),
  // Stepwell: nested terraces descending to a centre.
  data: (
    <>
      {[48, 38, 28, 18, 8].map((s) => (
        <rect key={s} x={60 - s} y={60 - s} width={s * 2} height={s * 2} />
      ))}
      <path d="M12 12 52 52M108 12 68 52M12 108 52 68M108 108 68 68" />
    </>
  ),
  // Orbitals: the atom (anu) as three intersecting ellipses.
  qntm: (
    <>
      {[0, 60, 120].map((r) => (
        <ellipse key={r} cx="60" cy="60" rx="48" ry="17" transform={`rotate(${r} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="5" fill="currentColor" />
    </>
  ),
  // Lotus over coin rings: wealth with purpose.
  finance: (
    <>
      <circle cx="60" cy="60" r="48" />
      <circle cx="60" cy="60" r="40" strokeDasharray="1 3.5" />
      {ring(8, 22, 10)}
      <circle cx="60" cy="60" r="8" />
    </>
  ),
  // Rising arcs over an open page: knowledge unfolding.
  education: (
    <>
      {[14, 26, 38, 50].map((r) => (
        <path key={r} d={`M${60 - r} 84 A${r} ${r} 0 0 1 ${60 + r} 84`} />
      ))}
      <path d="M8 84H112M60 84V30" />
      <path d="M20 100Q40 92 60 100Q80 92 100 100" />
    </>
  ),
  // Seed of life: seven overlapping circles.
  life: (
    <>
      <circle cx="60" cy="60" r="18" />
      {ring(6, 18, 18)}
      <circle cx="60" cy="60" r="44" />
    </>
  ),
};
