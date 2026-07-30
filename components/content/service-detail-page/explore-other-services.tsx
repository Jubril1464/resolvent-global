import Link from "next/link"

import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"

export function ExploreOtherServices({ items }: { items: Service[] }) {
  if (items.length === 0) return null

  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Explore Other Service Platforms
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((service) => {
            const Icon = resolveIcon(service.icon)

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-4 border border-border bg-background p-6 transition-colors hover:bg-muted"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center"
                  style={{ backgroundColor: service.accentColor }}
                >
                  <Icon aria-hidden className="size-5 text-white" strokeWidth={1.75} />
                </span>
                <div>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: service.accentColor }}
                  >
                    {service.tagline}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{service.fullTitle}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
