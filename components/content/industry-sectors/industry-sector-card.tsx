import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { IndustrySector } from "./industry-sectors-config"

export function IndustrySectorCard({
  icon: Icon,
  title,
  description,
  capabilities,
}: IndustrySector) {
  return (
    <article className="grid grid-cols-1 border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-sm sm:grid-cols-[240px_1fr]">
      <div className="flex flex-col items-center justify-center gap-4 bg-[#E2E6F2] p-8 text-center">
        <div className="flex size-14 items-center justify-center rounded-md bg-[#0C203A]">
          <Icon aria-hidden className="size-6 text-emerald-200" strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>

      <div className="p-8">
        <p className="text-foreground/70">{description}</p>

        <p className="mt-6 text-xs font-bold tracking-wide text-foreground uppercase">
          How we can help:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/70"
            >
              {capability}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Discuss a project in this sector
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
