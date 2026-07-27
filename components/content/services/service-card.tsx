import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { Service } from "./services-config"

export function ServiceCard({ icon: Icon, title, bullets, href }: Service) {
  return (
    <article className="flex flex-col border border-border bg-[#F4F6F9] p-8">
      <div className="flex size-10 items-center justify-center bg-[#132438] rounded-sm">
        <Icon aria-hidden className="size-4 text-emerald-200" />
      </div>

      <h3 className="mt-8 text-xl font-semibold text-foreground">{title}</h3>

      <ul className="mt-4 flex-1 space-y-2 text-foreground/70">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden className="text-foreground/40">
              •
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Learn more
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </article>
  )
}
