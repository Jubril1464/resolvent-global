import { RevealGroup } from "@/components/ui/reveal-group"
import type { Service } from "@/payload-types"

const R = 13
const CIRC = 2 * Math.PI * R

/**
 * Scope card marker: a ring that sweeps closed around a tick, so each item
 * reads as "covered" being confirmed rather than just listed. A quadrant
 * sweep is a shape family not used elsewhere on the site.
 */
function ScopeMark({ index }: { index: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className="size-9 shrink-0 text-brand"
      style={{ ["--sq-i" as string]: index }}
    >
      <circle
        cx="16"
        cy="16"
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <circle
        className="sq-arc"
        cx="16"
        cy="16"
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={CIRC}
        transform="rotate(-90 16 16)"
        style={{ ["--sq-len" as string]: CIRC, ["--sq-i" as string]: index }}
      />
      <path
        d="M11 16.5 L14.5 20 L21 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ServiceScopeGrid({ scope }: { scope: Service["scope"] }) {
  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This Service Covers
        </h2>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {scope.map((item, index) => (
            <article
              key={item.id ?? item.title}
              className="sq-card group/sq relative flex items-start gap-4 overflow-hidden border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
              style={{ ["--sq-i" as string]: index }}
            >
              {/* Left rail that fills on hover. */}
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-500 ease-out group-hover/sq:scale-y-100"
              />

              <ScopeMark index={index} />

              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{item.description}</p>
              </div>

              {/* Faint index in the corner. */}
              <span
                aria-hidden
                className="absolute right-4 bottom-3 text-2xl font-bold tabular-nums text-foreground/[0.05] transition-colors duration-300 group-hover/sq:text-brand/15"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
