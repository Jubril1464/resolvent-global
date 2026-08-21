import Image from "next/image"
import { Lock } from "lucide-react"

import { RevealGroup } from "@/components/ui/reveal-group"
import { cn } from "@/lib/utils"
import { IP_STATUS_BADGE } from "@/lib/proprietary-technologies"
import type { ProprietaryTechnology } from "@/payload-types"
import { TechnologyMotif } from "./technology-motif"

/**
 * The IP portfolio cards. Each carries only a name, an IP status badge and one
 * line of approved public positioning — the handover is explicit that no
 * further technology description may be added here.
 *
 * Consistent badge styling per status is a stated requirement, so it comes
 * from the shared `IP_STATUS_BADGE` map rather than being written per card.
 */
export function IpPortfolio({
  heading,
  note,
  technologies,
}: {
  heading: string
  note?: string | null
  technologies: ProprietaryTechnology[]
}) {
  if (technologies.length === 0) return null

  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {heading}
            </h2>
            <span aria-hidden className="mt-4 block h-0.5 w-12 bg-brand" />
          </div>

          {/* NDA reminder sits with the portfolio itself, as required. */}
          {note ? (
            <p className="flex items-center gap-2 text-sm text-foreground/60">
              <Lock aria-hidden className="size-4 shrink-0 text-brand" strokeWidth={1.8} />
              {note}
            </p>
          ) : null}
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {technologies.map((technology, index) => {
            const image =
              typeof technology.image === "object" && technology.image?.url
                ? technology.image
                : null

            return (
              <article
                key={technology.id}
                className="tech-card group/tech relative flex gap-5 overflow-hidden border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lg"
                style={{ ["--tech-i" as string]: index }}
              >
                {/* Accent bar sweeping in along the top edge. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-[#D9A441] transition-transform duration-500 ease-out group-hover/tech:scale-x-100"
                />

                {/* Uploaded photography when it exists, abstract motif until
                    then — neither can carry technical detail. */}
                <div className="relative size-24 shrink-0 overflow-hidden">
                  {image?.url ? (
                    <Image
                      src={image.url}
                      alt={image.alt ?? technology.title}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-500 group-hover/tech:scale-110"
                    />
                  ) : (
                    <TechnologyMotif
                      motif={technology.motif}
                      className="transition-transform duration-500 group-hover/tech:scale-110"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{technology.title}</h3>

                  <span
                    className={cn(
                      "mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold",
                      IP_STATUS_BADGE[technology.ipStatus]
                    )}
                  >
                    {technology.ipStatus}
                  </span>

                  <span
                    aria-hidden
                    className="mt-4 block h-px w-full bg-border transition-colors duration-300 group-hover/tech:bg-brand/30"
                  />

                  <p className="mt-4 text-sm text-foreground/60">{technology.positioning}</p>
                </div>
              </article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
