import { cn } from "@/lib/utils"

/**
 * Animated hero process diagram. Two variants:
 *
 *  - "linear" (P-series): a vertical flow of hexagonal stage nodes joined
 *    by a dashed spine, with a bright pulse travelling downstream.
 *  - "cycle" (O-series): stages arranged around a rotating ring with a
 *    central hub label — a cycle rather than a sequence, which also suits
 *    the circular-materials subject and keeps the visual high-level, per
 *    the content pack's confidentiality rule.
 *
 * Deliberately a Server Component built from HTML + CSS rather than SVG:
 * stage labels are real, wrapping, selectable text (SVG <text> does not
 * wrap), and all motion is CSS so there is no JS and no hydration risk.
 * Shapes come from clip-path; keyframes live in globals.css and are fully
 * disabled under prefers-reduced-motion.
 */

const NODE_TRACK_PX = 76

function StageNode({ index, label }: { index: number; label: string }) {
  return (
    <li
      className="pdiagram-stage relative flex items-center gap-4"
      style={{ ["--pdiagram-i" as string]: index }}
    >
      <span
        className={cn(
          "pdiagram-hex pdiagram-node relative z-10 flex size-11 shrink-0 items-center justify-center bg-[#D9A441] text-sm font-bold text-[#0C203A]"
        )}
      >
        {index + 1}
      </span>
      <span className="pdiagram-plate flex-1 border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm">
        {label}
      </span>
    </li>
  )
}

function LinearDiagram({ stages }: { stages: string[] }) {
  const trackHeight = Math.max(0, (stages.length - 1) * NODE_TRACK_PX)

  return (
    <div className="pdiagram-linear relative w-full max-w-sm">
      {/* Dashed spine behind the nodes, offset to sit under their centres. */}
      <div
        aria-hidden
        className="absolute top-5 left-[21px] w-0.5 overflow-hidden"
        style={{ height: trackHeight }}
      >
        <div
          className="pdiagram-spine size-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.45) 0 8px, transparent 8px 24px)",
            backgroundSize: "100% 24px",
          }}
        />
        <div
          className="pdiagram-pulse absolute top-0 left-1/2 h-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D9A441] to-transparent"
          style={{ ["--pdiagram-track" as string]: `${trackHeight}px` }}
        />
      </div>

      <ol className="relative flex flex-col gap-8">
        {stages.map((label, index) => (
          <StageNode key={label} index={index} label={label} />
        ))}
      </ol>
    </div>
  )
}

function CycleDiagram({
  stages,
  centerLabel,
}: {
  stages: string[]
  centerLabel: string
}) {
  const radius = 40 // percent of the container half-size

  return (
    <div className="pdiagram-cycle relative aspect-square w-full max-w-[26rem]">
      {/* Two counter-rotating dashed rings. */}
      <div
        aria-hidden
        className="pdiagram-ring absolute inset-[12%] rounded-full border-2 border-dashed border-white/20"
      />
      <div
        aria-hidden
        className="pdiagram-ring-reverse absolute inset-[22%] rounded-full border border-dashed border-[#D9A441]/40"
      />

      {/* Central hub */}
      <div className="pdiagram-hub absolute inset-[30%] flex flex-col items-center justify-center rounded-full border border-white/15 bg-[#0C203A]/80 p-4 text-center backdrop-blur-sm">
        <span aria-hidden className="mb-1.5 block h-0.5 w-6 bg-[#D9A441]" />
        <span className="text-xs font-semibold leading-tight text-white">
          {centerLabel}
        </span>
      </div>

      {/* Stage nodes positioned around the ring */}
      <ul className="absolute inset-0">
        {stages.map((label, index) => {
          // Start at 12 o'clock and go clockwise.
          const angle = (index / stages.length) * 2 * Math.PI - Math.PI / 2
          const left = 50 + radius * Math.cos(angle)
          const top = 50 + radius * Math.sin(angle)

          return (
            <li
              key={label}
              className="pdiagram-stage absolute flex w-28 flex-col items-center gap-1.5 text-center"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: "translate(-50%, -50%)",
                ["--pdiagram-i" as string]: index,
              }}
            >
              <span className="pdiagram-hex pdiagram-node flex size-9 items-center justify-center bg-[#D9A441] text-xs font-bold text-[#0C203A]">
                {index + 1}
              </span>
              <span className="text-[11px] leading-tight font-medium text-white/85">
                {label}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function ProcessDiagram({
  stages,
  variant,
  centerLabel,
}: {
  stages: string[]
  variant: "linear" | "cycle"
  centerLabel?: string
}) {
  if (stages.length === 0) return null

  return (
    <div className="flex size-full items-center justify-center p-8 sm:p-10">
      {variant === "cycle" ? (
        <CycleDiagram stages={stages} centerLabel={centerLabel ?? "Ongoing Development"} />
      ) : (
        <LinearDiagram stages={stages} />
      )}
    </div>
  )
}
