import type { TrainingCourse } from "@/payload-types"

/** viewBox is 200×200; all radii below are in those units. */
const VB = 200
const C = VB / 2
const R_OUTER = 94
const R_ARC = 86
const R_NODES = 78
const NODE_R = 9
const ARC_CIRCUMFERENCE = 2 * Math.PI * R_ARC

/**
 * Circular hero visual: the course video in the centre, with one SVG node
 * per module orbiting it. Node count is course-specific (5–12), so it
 * doubles as an at-a-glance read of how substantial the course is.
 *
 * Server Component — positions are computed here and all motion is CSS
 * (globals.css `.ch-*`), disabled under prefers-reduced-motion.
 */
export function ModuleOrbit({
  modules,
  videoSrc,
  poster = "/images/hero-image.png",
  accent = "#D9A441",
}: {
  modules: TrainingCourse["curriculum"]
  videoSrc: string
  poster?: string
  accent?: string
}) {
  const count = modules.length

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[24rem] lg:max-w-[27rem]">
      {/* Video core. Circular via overflow-hidden + rounded-full so it works
          even where clip-path on a <video> is unreliable. */}
      <div className="ch-video absolute inset-[24%] overflow-hidden rounded-full border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
          className="size-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Slight tint so the white node numbers stay legible against it. */}
        <div aria-hidden className="absolute inset-0 bg-[#0C203A]/25" />
      </div>

      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="absolute inset-0 size-full overflow-visible"
        role="img"
        aria-label={`${count} course modules`}
      >
        {/* Outer dashed ring, slow rotation. */}
        <circle
          className="ch-ring-slow"
          cx={C}
          cy={C}
          r={R_OUTER}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Inner ring, counter-rotating. */}
        <circle
          className="ch-ring-fast"
          cx={C}
          cy={C}
          r={R_NODES - 16}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />

        {/* Accent arc that draws itself around the orbit. */}
        <circle
          className="ch-arc"
          cx={C}
          cy={C}
          r={R_ARC}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={ARC_CIRCUMFERENCE}
          transform={`rotate(-90 ${C} ${C})`}
          style={{ ["--ch-arc" as string]: ARC_CIRCUMFERENCE }}
        />

        {modules.map((module, i) => {
          // Start at 12 o'clock, go clockwise.
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2
          const x = C + R_NODES * Math.cos(angle)
          const y = C + R_NODES * Math.sin(angle)
          const style = { ["--ch-i" as string]: i }

          return (
            <g key={module.id ?? module.number}>
              {/* Expanding halo. */}
              <circle
                className="ch-halo"
                cx={x}
                cy={y}
                r={NODE_R}
                fill={accent}
                style={style}
              />
              <g className="ch-node" style={style}>
                <circle
                  cx={x}
                  cy={y}
                  r={NODE_R}
                  fill="#0C203A"
                  stroke={accent}
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#ffffff"
                  fontSize="8.5"
                  fontWeight="700"
                >
                  {module.number}
                </text>
              </g>
            </g>
          )
        })}
      </svg>

      <p className="absolute inset-x-0 -bottom-2 text-center text-xs font-semibold tracking-wide text-white/40 uppercase">
        {`${count} Modules`}
      </p>
    </div>
  )
}
