import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"

export function ServiceCard({ service }: { service: Service }) {
  const Icon = resolveIcon(service.icon)

  return (
    <article className="group flex flex-col border border-border bg-[#F4F6F9] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-sm">
      <div className="flex size-10 items-center justify-center bg-[#132438] rounded-sm transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden className="size-4 text-emerald-200" />
      </div>

      <h3 className="mt-8 text-xl font-semibold text-foreground">{service.title}</h3>

      <ul className="mt-4 flex-1 space-y-2 text-foreground/70">
        {service.bullets.map((bullet) => (
          <li key={bullet.id ?? bullet.value} className="flex gap-2">
            <span aria-hidden className="text-foreground/40">
              •
            </span>
            <span>{bullet.value}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Learn more
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </article>
  )
}
