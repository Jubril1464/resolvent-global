import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"
import { ServiceHexField } from "./service-hex-field"

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service
  index?: number
}) {
  const Icon = resolveIcon(service.icon)

  return (
    <article
      className={cn(
        "sc-card group/svc relative flex flex-col overflow-hidden border border-border bg-[#F4F6F9] p-8",
        "transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:bg-white hover:shadow-lg"
      )}
      style={{ ["--sc-i" as string]: index }}
    >
      {/* Accent bar that sweeps in along the top edge on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand via-brand to-[#D9A441] transition-transform duration-500 ease-out group-hover/svc:scale-x-100"
      />

      {/* Honeycomb field in the top-right corner. */}
      <ServiceHexField className="pointer-events-none absolute -top-6 -right-6 size-36 text-brand transition-colors duration-500 group-hover/svc:text-brand" />

      {/* Large index numeral. */}
      <span
        aria-hidden
        className="absolute top-6 right-7 text-4xl font-bold tabular-nums text-foreground/[0.06] transition-colors duration-500 group-hover/svc:text-brand/15"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon tile with hover ripples. */}
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        {[0, 1].map((r) => (
          <span
            key={r}
            aria-hidden
            className="sc-ripple absolute size-12 rounded-sm bg-brand/30"
            style={{ ["--sc-r" as string]: r }}
          />
        ))}
        <span className="relative flex size-12 items-center justify-center rounded-sm bg-gradient-to-br from-[#132438] to-[#0B7A53] transition-transform duration-500 group-hover/svc:scale-110 group-hover/svc:rotate-6">
          <Icon aria-hidden className="size-5 text-emerald-200" strokeWidth={1.75} />
        </span>
      </div>

      <h3 className="relative mt-7 text-xl font-semibold text-foreground">
        {service.title}
      </h3>

      {/* Gold rule that extends on hover. */}
      <span
        aria-hidden
        className="relative mt-3 block h-0.5 w-8 bg-[#D9A441] transition-all duration-500 group-hover/svc:w-20"
      />

      <ul className="relative mt-5 flex-1 space-y-2.5">
        {service.bullets.map((bullet, j) => (
          <li
            key={bullet.id ?? bullet.value}
            className="sc-bullet flex items-start gap-2.5 text-foreground/70"
            style={{ ["--sc-j" as string]: j }}
          >
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brand transition-transform duration-300 group-hover/svc:rotate-[135deg]"
            />
            <span>{bullet.value}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Learn more
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover/svc:translate-x-1.5"
        />
      </Link>
    </article>
  )
}
