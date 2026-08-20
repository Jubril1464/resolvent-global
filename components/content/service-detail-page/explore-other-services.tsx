import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { RevealGroup } from "@/components/ui/reveal-group"
import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"

/**
 * Corner route lines that extend on hover — a "go this way" cue matching the
 * cross-link purpose of these cards.
 */
function RouteMark({ color }: { color: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 80"
      className="pointer-events-none absolute -bottom-2 -right-2 size-28 opacity-40 transition-opacity duration-500 group-hover/xs:opacity-100"
      style={{ color }}
    >
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="xs-route"
          d={`M${8 + i * 14},78 L${8 + i * 14},${52 - i * 12} L78,${52 - i * 12}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="140"
          style={{ ["--xs-i" as string]: i }}
        />
      ))}
    </svg>
  )
}

export function ExploreOtherServices({ items }: { items: Service[] }) {
  if (items.length === 0) return null

  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Explore Other Service Platforms
        </h2>
        <span aria-hidden className="mt-4 block h-0.5 w-12 bg-brand" />

        <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((service, index) => {
            const Icon = resolveIcon(service.icon)

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="sq-card group/xs relative flex items-start gap-4 overflow-hidden border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ ["--sq-i" as string]: index }}
              >
                <RouteMark color={service.accentColor} />

                {/* Accent bar sweeping in along the top edge. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/xs:scale-x-100"
                  style={{ backgroundColor: service.accentColor }}
                />

                <span
                  className="relative flex size-10 shrink-0 items-center justify-center transition-transform duration-500 group-hover/xs:scale-110 group-hover/xs:rotate-6"
                  style={{ backgroundColor: service.accentColor }}
                >
                  <Icon aria-hidden className="size-5 text-white" strokeWidth={1.75} />
                </span>

                <div className="relative">
                  <p
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: service.accentColor }}
                  >
                    {service.tagline}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{service.fullTitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View platform
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover/xs:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
