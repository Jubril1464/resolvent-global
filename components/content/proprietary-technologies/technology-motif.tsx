import { cn } from "@/lib/utils"
import type { TechnologyMotif } from "@/lib/proprietary-technologies"

/**
 * Abstract visuals for the IP portfolio cards.
 *
 * Deliberately non-representational. The handover forbids publishing process
 * routes, operating windows, equipment design, drawings or specifications, so
 * each motif illustrates a *theme* — field energy, ion transport, selective
 * separation — at a level that discloses nothing. They are also the fallback
 * for cards with no photography uploaded yet.
 *
 * Motion lives in globals.css (`.mot-*`) behind a reduced-motion guard.
 */
export function TechnologyMotif({
  motif,
  className,
}: {
  motif: TechnologyMotif
  className?: string
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid slice"
      className={cn("size-full text-white", className)}
    >
      <rect width="120" height="120" fill="#072B23" />
      {motif === "waveform" ? <Waveform /> : null}
      {motif === "membrane-stack" ? <MembraneStack /> : null}
      {motif === "lattice" ? <Lattice /> : null}
    </svg>
  )
}

/** Field energy radiating from a source — reads as heating, not a cavity design. */
function Waveform() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          className="mot-ring"
          cx="26"
          cy="60"
          r={16 + i * 16}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ ["--mot-i" as string]: i }}
        />
      ))}
      <circle className="mot-core" cx="26" cy="60" r="6" fill="#D9A441" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="mot-wave"
          d={`M40,${44 + i * 16} q10,-9 20,0 t20,0 t20,0`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ ["--mot-i" as string]: i }}
        />
      ))}
    </>
  )
}

/** Stacked plates with charge carriers crossing — ion transport as a theme. */
function MembraneStack() {
  const plates = [30, 48, 66, 84]

  return (
    <>
      {plates.map((x, i) => (
        <rect
          key={x}
          className="mot-plate"
          x={x}
          y="24"
          width="5"
          height="72"
          fill="currentColor"
          fillOpacity={0.16 + i * 0.06}
          style={{ ["--mot-i" as string]: i }}
        />
      ))}
      {[36, 52, 68, 84].map((y, i) => (
        <circle
          key={y}
          className="mot-ion"
          cx="16"
          cy={y}
          r="3"
          fill={i % 2 === 0 ? "#D9A441" : "currentColor"}
          style={{ ["--mot-i" as string]: i }}
        />
      ))}
      <line
        x1="12"
        y1="14"
        x2="108"
        y2="14"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <line
        x1="12"
        y1="106"
        x2="108"
        y2="106"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
    </>
  )
}

/** A selective mesh: fine particles pass, coarse ones are retained. */
function Lattice() {
  const cells = []
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      cells.push({ x: 18 + col * 21, y: 26 + row * 18, i: row * 5 + col })
    }
  }

  return (
    <>
      {cells.map((cell) => (
        <path
          key={cell.i}
          className="mot-cell"
          d={`M${cell.x},${cell.y} l7,4 v8 l-7,4 l-7,-4 v-8 z`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="0.9"
          style={{ ["--mot-i" as string]: cell.i % 7 }}
        />
      ))}
      {[28, 60, 92].map((x, i) => (
        <circle
          key={x}
          className="mot-fall"
          cx={x}
          cy="10"
          r="2.6"
          fill={i === 1 ? "#D9A441" : "currentColor"}
          style={{ ["--mot-i" as string]: i }}
        />
      ))}
    </>
  )
}
