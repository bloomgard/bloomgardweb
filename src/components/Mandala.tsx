// A line-drawn mandala, generated rather than imported so it stays crisp at any size.
const C = 300;

function petalRing(count: number, inner: number, outer: number, width: number, offset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i + offset;
    const mid = (inner + outer) / 2;
    return (
      <path
        key={`${count}-${inner}-${i}`}
        transform={`rotate(${angle} ${C} ${C})`}
        d={`M${C} ${C - inner} Q${C + width} ${C - mid} ${C} ${C - outer} Q${C - width} ${C - mid} ${C} ${C - inner}Z`}
      />
    );
  });
}

function dotRing(count: number, radius: number, r: number) {
  return Array.from({ length: count }, (_, i) => {
    const a = ((2 * Math.PI) / count) * i;
    return (
      <circle
        key={`dot-${radius}-${i}`}
        cx={(C + radius * Math.cos(a)).toFixed(2)}
        cy={(C + radius * Math.sin(a)).toFixed(2)}
        r={r}
        fill="currentColor"
        stroke="none"
      />
    );
  });
}

function spokes(count: number, from: number, to: number) {
  return Array.from({ length: count }, (_, i) => (
    <line
      key={`spoke-${from}-${i}`}
      x1={C}
      y1={C - from}
      x2={C}
      y2={C - to}
      transform={`rotate(${(360 / count) * i} ${C} ${C})`}
    />
  ));
}

export default function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.75">
        {[18, 34, 62, 96, 150, 196, 248, 290].map((r) => (
          <circle key={r} cx={C} cy={C} r={r} />
        ))}
        <circle cx={C} cy={C} r={4} fill="currentColor" />
        {petalRing(8, 18, 62, 14)}
        {petalRing(16, 62, 96, 9)}
        {petalRing(16, 62, 96, 9, 11.25)}
        {spokes(32, 96, 150)}
        {petalRing(24, 150, 196, 11)}
        {dotRing(48, 222, 1.6)}
        {petalRing(36, 248, 290, 9)}
        {petalRing(12, 96, 196, 26, 15)}
      </g>
    </svg>
  );
}
