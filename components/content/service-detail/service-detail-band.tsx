import Link from "next/link"
import { CircleCheck } from "lucide-react"

import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"

export function ServiceDetailBand({ service }: { service: Service }) {
  const Icon = resolveIcon(service.icon)

  return (
    <article>
      <Link
        href={`/services/${service.slug}`}
        className="block transition-opacity hover:opacity-95"
      >
        <header
          className="py-12"
          style={{ backgroundColor: service.accentColor }}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 lg:px-8">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#0C203A] md:size-18">
              <Icon
                aria-hidden
                className="size-8 text-emerald-200"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {service.fullTitle}
            </h2>
          </div>
        </header>

        <div className="bg-background py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
            <p className="text-lg leading-relaxed text-foreground/70">
              {service.intro}
            </p>

            <div>
              <p className="text-xs font-bold tracking-wide text-foreground uppercase">
                This service includes:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                {service.checklist.map((item) => (
                  <li key={item.id ?? item.value} className="flex items-start gap-2">
                    <CircleCheck
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand"
                    />
                    <span className="text-foreground/70">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
