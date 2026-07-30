import { Check, CheckCircle } from "lucide-react"

import type { ScopeItem } from "./service-detail-page-config"

export function ServiceScopeGrid({ scope }: { scope: ScopeItem[] }) {
  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">
          Service Scope
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        This Service Covers
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {scope.map(({ title, description }) => (
            <div
              key={title}
              className="flex items-start gap-3 border border-border bg-background p-6"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-brand">
                <CheckCircle aria-hidden className="size-3 text-white" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
