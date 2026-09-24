import Image from "next/image"

import type { LegalHeroMedia } from "@/lib/legal"
import { GlobeMotif } from "./globe-motif"

/**
 * Navy title band shared by the legal pages.
 *
 * Two backdrops, chosen per document: a photograph (given the same ken-burns
 * drift as the other media heroes on the site) or a drawn globe for a page
 * where no photograph carries the right meaning.
 *
 * Server Component; all motion is CSS (globals.css `.vhero-*` and `.lgl-*`)
 * and is disabled under prefers-reduced-motion, where the hero renders in its
 * final shape with nothing moving.
 */
export function LegalHero({
  title,
  subtitle,
  lead,
  tagline,
  media,
}: {
  title: string
  subtitle: string
  lead: string
  tagline: string[]
  media: LegalHeroMedia
}) {
  return (
    <section className="vhero-shape relative isolate overflow-hidden bg-[#0C203A] text-white">
      {media.variant === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="100vw"
          className="vhero-media -z-10 object-cover"
        />
      ) : (
        <GlobeMotif />
      )}

      {/* Legibility scrim — heaviest on the left, under the copy. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,32,58,0.96) 0%, rgba(12,32,58,0.9) 45%, rgba(12,32,58,0.4) 100%)",
        }}
      />

      {/* The extra bottom padding clears the angled edge `.vhero-shape` cuts
          out of the bottom-left corner. */}
      <div className="relative mx-auto flex w-full max-w-7xl items-end px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-32">
        <div className="max-w-2xl">
          <h1
            className="vhero-item text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ["--vhero-i" as string]: 0 }}
          >
            {title}
          </h1>

          <p
            className="vhero-item mt-4 text-lg text-white/80"
            style={{ ["--vhero-i" as string]: 1 }}
          >
            {subtitle}
          </p>

          <p
            className="vhero-item mt-3 max-w-xl leading-relaxed text-white/65"
            style={{ ["--vhero-i" as string]: 2 }}
          >
            {lead}
          </p>

          <span aria-hidden className="vhero-rule mt-8 block h-1 w-16 bg-brand" />
        </div>

        {/* Brand line-up, as in the design reference. Hidden on narrow screens
            where it would crowd the headline. */}
        <p
          className="vhero-item ml-auto hidden shrink-0 pb-2 text-right text-sm leading-7 font-medium tracking-[0.2em] text-white/70 uppercase lg:block"
          style={{ ["--vhero-i" as string]: 3 }}
        >
          {tagline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
