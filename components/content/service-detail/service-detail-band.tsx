import Image from "next/image"
import Link from "next/link"
import { CircleCheck } from "lucide-react"

import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"

export function ServiceDetailBand({ service }: { service: Service }) {
  const Icon = resolveIcon(service.icon)
  const image = typeof service.image === "object" ? service.image : null

  return (
    <article>
      <Link
        href={`/services/${service.slug}`}
        className="group/band block transition-opacity hover:opacity-95"
      >
        <header
          className="relative overflow-hidden"
          style={{ backgroundColor: service.accentColor }}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
            <div className="flex items-center gap-6 py-12">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#0C203A] md:size-18">
                <Icon
                  aria-hidden
                  className="size-8 text-emerald-200"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-3xl leading-tight font-semibold text-white md:text-4xl">
                {service.fullTitle}
              </h2>
            </div>

            {image?.url ? (
              /* Bleeds the full width of the band on mobile, then becomes the
                 right half of the band from lg up, where it can run the band's
                 full height. */
              <div className="relative -mx-6 h-44 lg:mx-0 lg:h-auto">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover/band:scale-[1.05]"
                />
                {/* Fades the photo into the accent colour so the two halves of
                    the band read as one surface rather than a pasted-in image.
                    Vertical on mobile (image sits below the title), horizontal
                    from lg up (image sits beside it). */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${service.accentColor} 0%, ${service.accentColor}00 60%)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 hidden lg:block"
                  style={{
                    background: `linear-gradient(to right, ${service.accentColor} 0%, ${service.accentColor}00 65%)`,
                  }}
                />
              </div>
            ) : null}
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
