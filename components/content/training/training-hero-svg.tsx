/**
 * Decorative moving SVG for the /training hero: an ascending "learning path"
 * of connected nodes, echoing the module progression the page is about.
 *
 * The route draws itself on load, then dashes travel along it continuously.
 * `--thero-len` is the path length used as the initial dash offset — it only
 * needs to be >= the true length for the draw-on effect to read correctly.
 *
 * Purely decorative: no content depends on it, so with motion disabled it
 * simply renders as a static path.
 */

/** Ascending route across the panel, in viewBox units. */
const NODES = [
  { x: 40, y: 260 },
  { x: 130, y: 210 },
  { x: 220, y: 226 },
  { x: 300, y: 156 },
  { x: 386, y: 168 },
  { x: 470, y: 92 },
  { x: 556, y: 104 },
  { x: 640, y: 40 },
]

const ROUTE = NODES.map((n, i) => `${i === 0 ? "M" : "L"}${n.x},${n.y}`).join(" ")

/** Generous over-estimate of the path length for the draw-on animation. */
const ROUTE_LENGTH = 1200

export function TrainingHeroSvg({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 700 300"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="thero-drift">
        {/* Faint full route underneath. */}
        <path
          d={ROUTE}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Route drawing itself in gold. */}
        <path
          className="thero-route"
          d={ROUTE}
          fill="none"
          stroke="rgba(217,164,65,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={ROUTE_LENGTH}
          style={{ ["--thero-len" as string]: ROUTE_LENGTH }}
        />

        {/* Dashes travelling along the same route. */}
        <path
          className="thero-stream"
          d={ROUTE}
          fill="none"
          stroke="#D9A441"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 34"
        />

        {/* Vertical drop lines, giving the route a chart-like base. */}
        {NODES.map((n) => (
          <line
            key={`drop-${n.x}`}
            x1={n.x}
            y1={n.y}
            x2={n.x}
            y2={296}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        ))}

        {/* Nodes pulsing in sequence along the climb. */}
        {NODES.map((n, i) => (
          <circle
            key={`node-${n.x}`}
            className="thero-node"
            cx={n.x}
            cy={n.y}
            r="4"
            fill="#D9A441"
            style={{ ["--thero-i" as string]: i }}
          />
        ))}

        {/* Rings radiating from the summit. */}
        {[0, 1, 2].map((i) => (
          <circle
            key={`ring-${i}`}
            className="thero-ring"
            cx={NODES[NODES.length - 1].x}
            cy={NODES[NODES.length - 1].y}
            r="8"
            fill="none"
            stroke="#D9A441"
            style={{ ["--thero-i" as string]: i }}
          />
        ))}
      </g>
    </svg>
  )
}
