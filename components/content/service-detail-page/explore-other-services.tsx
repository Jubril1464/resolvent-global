import Link from "next/link"

import { cn } from "@/lib/utils"
import type { ServiceDetailItem } from "@/components/content/service-detail/service-detail-config"

export function ExploreOtherServices({
  items,
}: {
  items: ServiceDetailItem[]
}) {
  if (items.length === 0) return null

  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Explore Other Service Platforms
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map(({ slug, icon: Icon, title, tagline, headerClassName }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="flex items-start gap-4 border border-border bg-background p-6 transition-colors hover:bg-muted"
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center",
                  headerClassName
                )}
              >
                <Icon aria-hidden className="size-5 text-white" strokeWidth={1.75} />
              </span>
              <div>
                <p
                  className={cn(
                    "text-xs font-semibold tracking-wide uppercase",
                    headerClassName.replace("bg-", "text-")
                  )}
                >
                  {tagline}
                </p>
                <p className="mt-1 font-semibold text-foreground">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
