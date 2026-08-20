/**
 * Decorative moving SVG for the dark footer CTA: streams of dashes travelling
 * along curved paths, with pulsing junction nodes.
 *
 * `preserveAspectRatio="none"` lets the field stretch to any band width, and
 * `vectorEffect="non-scaling-stroke"` keeps the stroke weight even once it
 * does. Motion is CSS (globals.css `.psvg-*`) so it stays a Server Component
 * and is disabled under prefers-reduced-motion.
 */

const PATHS = [
  "M0,34 C160,4 320,74 520,30 C660,0 740,44 800,26",
  "M0,72 C140,52 300,104 480,70 C640,40 720,86 800,64",
  "M0,110 C180,86 340,138 500,108 C650,80 730,120 800,100",
  "M0,150 C150,128 330,172 510,144 C670,120 740,158 800,140",
]

/** Junction nodes, placed near path crossings. */
const NODES = [
  { x: 160, y: 18 },
  { x: 320, y: 74 },
  { x: 480, y: 70 },
  { x: 500, y: 108 },
  { x: 660, y: 42 },
  { x: 730, y: 120 },
]

export function FlowField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 180"
      preserveAspectRatio="none"
      className={className}
    >
      {PATHS.map((d, i) => (
        <g
          key={d}
          className="psvg-layer"
          style={{ ["--psvg-i" as string]: i }}
        >
          {/* Static faint rail. */}
          <path
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {/* Travelling dashes on top. */}
          <path
            className="psvg-stream"
            d={d}
            fill="none"
            stroke={i % 2 === 0 ? "rgba(217,164,65,0.55)" : "rgba(16,148,104,0.55)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="3 26"
            vectorEffect="non-scaling-stroke"
            style={{ ["--psvg-i" as string]: i }}
          />
        </g>
      ))}

      {NODES.map((n, i) => (
        <circle
          key={`${n.x}-${n.y}`}
          className="psvg-node"
          cx={n.x}
          cy={n.y}
          r="2.5"
          fill="#D9A441"
          style={{ ["--psvg-i" as string]: i }}
        />
      ))}
    </svg>
  )
}
