import { RevealGroup } from "@/components/ui/reveal-group"

/** Column heights for the deliverables bars (viewBox units). */
const BARS = [16, 26, 34, 44, 56]

/** Rising trend points for the outcomes line. */
const TREND = [
  { x: 8, y: 54 },
  { x: 30, y: 44 },
  { x: 52, y: 48 },
  { x: 74, y: 30 },
  { x: 96, y: 20 },
  { x: 118, y: 8 },
]

const TREND_PATH = TREND.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ")
/** Over-estimate of the polyline length, used as the initial dash offset. */
const TREND_LENGTH = 220

/**
 * Deliverables = tangible outputs, so growing bars. Outcomes = improvement,
 * so a rising trend line. Both shape families are new to the site, and each
 * maps onto the meaning of its own column rather than being generic
 * decoration.
 */
function DeliverablesChart() {
  return (
    <svg aria-hidden viewBox="0 0 128 64" className="h-16 w-32 text-brand">
      <line x1="0" y1="62" x2="128" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {BARS.map((h, i) => (
        <rect
          key={i}
          className="do-bar"
          x={6 + i * 24}
          y={62 - h}
          width="13"
          height={h}
          fill="currentColor"
          opacity={0.35 + i * 0.13}
          style={{ ["--do-i" as string]: i }}
        />
      ))}
    </svg>
  )
}

function OutcomesChart() {
  return (
    <svg aria-hidden viewBox="0 0 128 64" className="h-16 w-32 text-[#D9A441]">
      <line x1="0" y1="62" x2="128" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path
        className="do-trend"
        d={TREND_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={TREND_LENGTH}
        style={{ ["--do-len" as string]: TREND_LENGTH }}
      />
      {TREND.map((p, i) => (
        <circle
          key={i}
          className="do-blip"
          cx={p.x}
          cy={p.y}
          r="2.5"
          fill="currentColor"
          style={{ ["--do-i" as string]: i }}
        />
      ))}
    </svg>
  )
}

export function DeliverablesOutcomes({
  deliverables,
  outcomes,
}: {
  deliverables: string
  outcomes: string
}) {
  return (
    <section className="bg-background py-24">
      <RevealGroup className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <article
          className="sq-card group/do relative overflow-hidden border border-border bg-[#F4F6F9] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-md"
          style={{ ["--sq-i" as string]: 0 }}
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover/do:scale-x-100"
          />
          <DeliverablesChart />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            What You Receive
          </h2>
          <span
            aria-hidden
            className="mt-3 block h-0.5 w-10 bg-brand transition-all duration-500 group-hover/do:w-20"
          />
          <p className="mt-5 text-foreground/70">{deliverables}</p>
        </article>

        <article
          className="sq-card group/do relative overflow-hidden border border-border bg-[#F4F6F9] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/50 hover:bg-white hover:shadow-md"
          style={{ ["--sq-i" as string]: 1 }}
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#D9A441] transition-transform duration-500 ease-out group-hover/do:scale-x-100"
          />
          <OutcomesChart />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            What You Gain
          </h2>
          <span
            aria-hidden
            className="mt-3 block h-0.5 w-10 bg-[#D9A441] transition-all duration-500 group-hover/do:w-20"
          />
          <p className="mt-5 text-foreground/70">{outcomes}</p>
        </article>
      </RevealGroup>
    </section>
  )
}
