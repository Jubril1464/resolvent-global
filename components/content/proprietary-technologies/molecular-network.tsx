const HEXES = [
  { cx: 168, cy: 92, r: 34, glyph: true },
  { cx: 108, cy: 58, r: 22 },
  { cx: 110, cy: 138, r: 26 },
  { cx: 214, cy: 156, r: 18 },
  { cx: 60, cy: 100, r: 15 },
]

const LINKS = [
  { from: 1, to: 0 },
  { from: 2, to: 0 },
  { from: 3, to: 0 },
  { from: 4, to: 1 },
  { from: 4, to: 2 },
]

/** Flat-top hexagon path around a centre. */
function hexPath(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    const x = Math.round((cx + r * Math.cos(angle)) * 100) / 100
    const y = Math.round((cy + r * Math.sin(angle)) * 100) / 100
    return `${i === 0 ? "M" : "L"}${x},${y}`
  }).join(" ") + " Z"
}

/**
 * Hero motif: a hexagonal molecular network, per the handover's visual
 * reference. Hexagons draw themselves in, links draw between them, and a
 * charge travels the network on a loop.
 *
 * High-level by design — it reads as "science and protected innovation"
 * without depicting any actual chemistry, route or equipment, which the
 * handover's disclosure rules require.
 *
 * Motion lives in globals.css (`.ptech-*`) behind a reduced-motion guard.
 */
export function MolecularNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 280 220"
      className="size-full text-white"
    >
      {LINKS.map((link, i) => {
        const a = HEXES[link.from]
        const b = HEXES[link.to]
        return (
          <g key={i} style={{ ["--ptech-i" as string]: i }}>
            <line
              className="ptech-link"
              x1={a.cx}
              y1={a.cy}
              x2={b.cx}
              y2={b.cy}
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeDasharray="300"
            />
            <circle
              className="ptech-charge"
              cx={a.cx}
              cy={a.cy}
              r="2.6"
              fill="#D9A441"
              style={{
                ["--ptech-dx" as string]: `${b.cx - a.cx}px`,
                ["--ptech-dy" as string]: `${b.cy - a.cy}px`,
              }}
            />
          </g>
        )
      })}

      {HEXES.map((hex, i) => (
        <g key={i} style={{ ["--ptech-i" as string]: i }}>
          <path
            className="ptech-hex"
            d={hexPath(hex.cx, hex.cy, hex.r)}
            fill="currentColor"
            fillOpacity="0.04"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeDasharray="260"
          />
          {hex.glyph ? <LeafGlyph cx={hex.cx} cy={hex.cy} /> : null}
          {!hex.glyph ? (
            <circle
              className="ptech-node"
              cx={hex.cx}
              cy={hex.cy}
              r="3"
              fill="currentColor"
              fillOpacity="0.7"
            />
          ) : null}
        </g>
      ))}
    </svg>
  )
}

/** Small leaf inside the largest hexagon, echoing the visual reference. */
function LeafGlyph({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g
      className="ptech-glyph"
      transform={`translate(${cx - 11} ${cy - 11})`}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M4 18C4 9 11 4 20 4c0 9-5 16-14 16H4Z" />
      <path d="M4 18C7 14 11 11 16 9" />
    </g>
  )
}
