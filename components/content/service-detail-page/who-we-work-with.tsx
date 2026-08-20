import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { RevealGroup } from "@/components/ui/reveal-group"
import { cn } from "@/lib/utils"
import { getNavigation } from "@/lib/get-navigation"

/** Node positions for the engagement web (viewBox units). */
const NODES = [
  { x: 20, y: 22 },
  { x: 58, y: 12 },
  { x: 96, y: 26 },
  { x: 16, y: 62 },
  { x: 58, y: 78 },
  { x: 100, y: 64 },
]

/**
 * Engagement web: peripheral client nodes wiring into a single hub, drawn on
 * as the section is reached. Reads as "many clients, one delivery partner",
 * which is exactly what this section says in words.
 */
function EngagementWeb() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -top-8 -right-8 size-56 text-[#D9A441]"
    >
      {NODES.map((n, i) => (
        <line
          key={`l${i}`}
          className="ww-link"
          x1={n.x}
          y1={n.y}
          x2="58"
          y2="45"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="60"
          style={{ ["--ww-i" as string]: i }}
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={`n${i}`}
          className="ww-node"
          cx={n.x}
          cy={n.y}
          r="2.6"
          fill="currentColor"
          style={{ ["--ww-i" as string]: i }}
        />
      ))}
      <circle
        className="ww-hub-ring"
        cx="58"
        cy="45"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle className="ww-hub" cx="58" cy="45" r="4.5" fill="currentColor" />
    </svg>
  )
}

export async function WhoWeWorkWith({ description }: { description: string }) {
  const navigation = await getNavigation()

  return (
    <section className="bg-[#0C203A] py-24 text-white">
      <RevealGroup className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Who We Work With
          </h2>
          <span
            aria-hidden
            className="mt-4 block h-0.5 w-12 bg-[#D9A441]"
          />
          <p className="mt-6 max-w-2xl text-white/70">{description}</p>
        </div>

        <div className="ww-card group/ww relative overflow-hidden border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-[#D9A441]/40 hover:bg-white/10">
          <EngagementWeb />

          <p className="relative text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Ready to Start?
          </p>
          <p className="relative mt-4 text-white/80">
            Discuss an operational challenge, request a process review, or
            ask for a technical proposal.
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href={navigation.ctaHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 border-2 border-white bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Request Proposal
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-11 px-6 text-sm font-semibold"
              )}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </RevealGroup>
    </section>
  )
}
