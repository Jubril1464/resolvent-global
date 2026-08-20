import {
  ArrowRight,
  CircleCheck,
  Droplets,
  Gauge,
  Globe,
  Leaf,
  Settings2,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * "At a glance" overview for the About page: what we work across → how we
 * work → what clients gain.
 *
 * The copy is a faithful condensation of this page's own CompanyOverview
 * paragraphs, so the graphic summarises the page rather than introducing
 * new claims. Kept as local constants to match its neighbours on this page
 * (CompanyOverview, TechnicalFoundation), which are also local.
 *
 * Server Component; all motion is CSS (see globals.css `.glance-*`) and is
 * disabled under prefers-reduced-motion, where it degrades to a static —
 * and still complete — diagram.
 */

const DOMAINS: { icon: LucideIcon; label: string }[] = [
  { icon: Settings2, label: "Process Engineering" },
  { icon: Zap, label: "Energy Systems" },
  { icon: Leaf, label: "Carbon Management" },
  { icon: Droplets, label: "Water & Wastewater" },
  { icon: Globe, label: "Environmental Performance" },
  { icon: Gauge, label: "Process Optimisation" },
]

const HOW_WE_WORK = [
  "Global standards, indigenous relevance",
  "Data-driven analysis",
  "Practical project support",
]

const OUTCOMES = [
  "Improved efficiency",
  "Lower operational risk",
  "Stronger compliance",
  "Optimised energy use",
  "Cleaner, lower-carbon operations",
]

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-wide text-foreground/50 uppercase">
      {children}
    </p>
  )
}

/** Animated dashed connector — horizontal on desktop, vertical on mobile. */
function Connector({ direction }: { direction: "x" | "y" }) {
  const horizontal = direction === "x"

  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden",
        horizontal ? "hidden h-0.5 w-full lg:block" : "mx-auto h-10 w-0.5 lg:hidden"
      )}
    >
      <div
        className={cn("size-full", horizontal ? "glance-conn-x" : "glance-conn-y")}
        style={
          horizontal
            ? {
                backgroundImage:
                  "repeating-linear-gradient(to right, var(--brand) 0 8px, transparent 8px 22px)",
                backgroundSize: "22px 100%",
              }
            : {
                backgroundImage:
                  "repeating-linear-gradient(to bottom, var(--brand) 0 8px, transparent 8px 22px)",
                backgroundSize: "100% 22px",
              }
        }
      />
    </div>
  )
}

export function AtAGlance() {
  return (
    <section className="border-b border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            At a Glance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Resolvent Global Does
          </h2>
          <p className="mt-4 text-foreground/60">
            Technical advisory and engineering services — from the disciplines we
            work across, through how we work, to the outcomes clients take away.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_0.9fr_auto_1fr]">
          {/* 1 — Disciplines */}
          <div>
            <ColumnLabel>What we work across</ColumnLabel>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {DOMAINS.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className="glance-item glance-plate flex items-center gap-3 border border-border bg-[#F4F6F9] p-3"
                  style={{ ["--glance-i" as string]: i }}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#0C203A]">
                    <Icon aria-hidden className="size-4 text-emerald-200" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <Connector direction="x" />
          <Connector direction="y" />

          {/* 2 — Hub */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center">
              <span
                aria-hidden
                className="glance-hub-ring absolute size-32 rounded-full border-2 border-dashed border-[#D9A441]/50"
              />
              <span className="glance-hex relative flex size-24 items-center justify-center bg-[#0C203A] px-2">
                <span className="text-xs leading-tight font-bold text-white">
                  Resolvent
                  <br />
                  Global
                </span>
              </span>
            </div>

            <ColumnLabel>
              <span className="mt-6 block">How we work</span>
            </ColumnLabel>
            <ul className="mt-4 space-y-2">
              {HOW_WE_WORK.map((item, i) => (
                <li
                  key={item}
                  className="glance-item text-sm text-foreground/70"
                  style={{ ["--glance-i" as string]: i + DOMAINS.length }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Connector direction="x" />
          <Connector direction="y" />

          {/* 3 — Outcomes */}
          <div>
            <ColumnLabel>What clients gain</ColumnLabel>
            <ul className="mt-5 space-y-2.5">
              {OUTCOMES.map((item, i) => (
                <li
                  key={item}
                  className="glance-tick flex items-start gap-2.5"
                  style={{ ["--glance-i" as string]: i }}
                >
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Across industrial and energy-sector operations
              <ArrowRight aria-hidden className="size-4" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
