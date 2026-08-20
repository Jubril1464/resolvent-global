/**
 * Decorative "technical drawing that plots itself" for the About section —
 * dimension lines with arrow ticks, a measurement scale, a slowly rotating
 * compass rose, and a plotter head that sweeps across on a long loop.
 *
 * Chosen over another dash-flow so this section reads distinctly from the
 * hero orbit and the workflow chain elsewhere on the page.
 *
 * Each drawn path carries `--bp-len` (an over-estimate of its own length)
 * used as the initial dash offset, so one keyframe plots every line. Purely
 * decorative: nothing here hides content when motion is off.
 */

const STROKE = "currentColor"

/** Measurement ticks along the bottom scale. */
const TICKS = Array.from({ length: 13 }, (_, i) => 20 + i * 24)

export function CourseBlueprint({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 340 260"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Outer frame */}
      <rect
        className="bp-line"
        x="16"
        y="16"
        width="308"
        height="228"
        fill="none"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="1080"
        style={{ ["--bp-len" as string]: 1080, ["--bp-i" as string]: 0 }}
      />

      {/* Inner detail box */}
      <rect
        className="bp-line"
        x="52"
        y="56"
        width="150"
        height="108"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeDasharray="520"
        style={{ ["--bp-len" as string]: 520, ["--bp-i" as string]: 1 }}
      />

      {/* Diagonal construction line */}
      <line
        className="bp-line"
        x1="52"
        y1="164"
        x2="202"
        y2="56"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="185"
        style={{ ["--bp-len" as string]: 185, ["--bp-i" as string]: 2 }}
      />

      {/* Dimension line with end ticks */}
      <g style={{ ["--bp-i" as string]: 3 }}>
        <line
          className="bp-line"
          x1="52"
          y1="192"
          x2="202"
          y2="192"
          stroke={STROKE}
          strokeWidth="1"
          strokeDasharray="150"
          style={{ ["--bp-len" as string]: 150, ["--bp-i" as string]: 3 }}
        />
        <line x1="52" y1="186" x2="52" y2="198" stroke={STROKE} strokeWidth="1.5" />
        <line x1="202" y1="186" x2="202" y2="198" stroke={STROKE} strokeWidth="1.5" />
      </g>

      {/* Rotating compass rose */}
      <g className="bp-compass" style={{ transformOrigin: "262px 104px" }}>
        <circle cx="262" cy="104" r="34" fill="none" stroke={STROKE} strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="262" cy="104" r="20" fill="none" stroke={STROKE} strokeWidth="1" />
        <line x1="262" y1="66" x2="262" y2="142" stroke={STROKE} strokeWidth="1" />
        <line x1="224" y1="104" x2="300" y2="104" stroke={STROKE} strokeWidth="1" />
        <circle cx="262" cy="104" r="3" fill={STROKE} />
      </g>

      {/* Measurement scale */}
      <line x1="16" y1="222" x2="324" y2="222" stroke={STROKE} strokeWidth="1" opacity="0.5" />
      {TICKS.map((x, i) => (
        <line
          key={x}
          className="bp-tick"
          x1={x}
          y1="222"
          x2={x}
          y2={i % 4 === 0 ? 212 : 217}
          stroke={STROKE}
          strokeWidth="1"
          style={{ ["--bp-i" as string]: i }}
        />
      ))}

      {/* Plotter head sweeping across the drawing */}
      <g className="bp-scan" style={{ ["--bp-sweep" as string]: "292px" }}>
        <line x1="18" y1="18" x2="18" y2="242" stroke="#D9A441" strokeWidth="1.5" opacity="0.7" />
        <circle cx="18" cy="18" r="3.5" fill="#D9A441" />
      </g>
    </svg>
  )
}
