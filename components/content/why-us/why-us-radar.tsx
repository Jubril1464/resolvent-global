const VB = 240
const C = VB / 2
const R = 100
const RINGS = [0.3, 0.55, 0.78, 1]

/** How far along each axis the capability polygon sits (0–1). */
const REACH = [0.9, 0.74, 0.86, 0.68, 0.8, 0.76]

/**
 * Radar sweep for the Why Resolvent Global band: one axis per proof point,
 * a capability polygon that plots itself, and a wedge beam rotating
 * continuously with blips pulsing as it passes.
 *
 * `axes` drives the geometry, so the dial always matches however many proof
 * points the CMS holds. Purely decorative — the cards carry the real content.
 */
export function WhyUsRadar({
  axes,
  className,
}: {
  axes: number
  className?: string
}) {
  const count = Math.max(axes, 3)

  const point = (i: number, reach: number) => {
    const a = (i / count) * 2 * Math.PI - Math.PI / 2
    return {
      x: C + R * reach * Math.cos(a),
      y: C + R * reach * Math.sin(a),
    }
  }

  const vertices = Array.from({ length: count }, (_, i) =>
    point(i, REACH[i % REACH.length])
  )

  const shape =
    vertices.map((v, i) => `${i === 0 ? "M" : "L"}${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" ") + " Z"

  // Over-estimate of the polygon perimeter, used as the initial dash offset.
  const perimeter = Math.ceil(2 * Math.PI * R) + 200

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VB} ${VB}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Beam fades out along its trailing edge. */}
        <linearGradient id="wu-beam-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9A441" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#D9A441" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Concentric rings */}
      {RINGS.map((f, i) => (
        <circle
          key={f}
          className="wu-ring"
          cx={C}
          cy={C}
          r={R * f}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.16"
          style={{ ["--wu-i" as string]: i }}
        />
      ))}

      {/* Axis spokes */}
      {Array.from({ length: count }, (_, i) => {
        const outer = point(i, 1)
        return (
          <line
            key={`spoke-${i}`}
            x1={C}
            y1={C}
            x2={outer.x}
            y2={outer.y}
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.12"
          />
        )
      })}

      {/* Rotating beam */}
      <g className="wu-beam">
        <path
          d={`M${C},${C} L${C + R},${C} A${R},${R} 0 0 0 ${C + R * Math.cos(-0.7)},${C + R * Math.sin(-0.7)} Z`}
          fill="url(#wu-beam-grad)"
        />
        <line x1={C} y1={C} x2={C + R} y2={C} stroke="#D9A441" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Capability polygon — fill fades in after the outline plots. */}
      <path className="wu-fill" d={shape} fill="#0B7A53" opacity="0.18" />
      <path
        className="wu-shape"
        d={shape}
        fill="none"
        stroke="#D9A441"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeDasharray={perimeter}
        style={{ ["--wu-len" as string]: perimeter }}
      />

      {/* Blips at each vertex */}
      {vertices.map((v, i) => (
        <circle
          key={`blip-${i}`}
          className="wu-blip"
          cx={v.x}
          cy={v.y}
          r="3.5"
          fill="#D9A441"
          style={{ ["--wu-i" as string]: i }}
        />
      ))}

      <circle cx={C} cy={C} r="3" fill="#ffffff" opacity="0.5" />
    </svg>
  )
}
