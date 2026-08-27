import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MolecularNetwork } from "./molecular-network"

/**
 * Hero for the Proprietary Technologies page.
 *
 * Green/deep-teal rather than the navy used by the other page heroes — the
 * handover asks specifically for "a premium green, white and deep-teal visual
 * system with gold accents", and it usefully sets this page apart as its own
 * major section rather than a Projects or Services sub-page.
 *
 * The visual reference pairs the copy with laboratory footage, which now backs
 * the whole band. The hexagonal network motif from the same reference stays on
 * top of it at reduced strength — it was originally a stand-in for the missing
 * imagery, but it also carries the page's identity, so it layers over the video
 * the way the course hero's orbit does rather than being dropped.
 */
export function TechnologiesHero({
  title,
  caption,
  tagline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string
  caption: string
  tagline?: string | null
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}) {
  return (
    <section className="vhero-shape relative isolate flex min-h-[600px] w-full items-center overflow-hidden bg-[#06231C] py-20 text-white lg:min-h-[700px] lg:py-28">
      {/* The min-height is taller than the copy needs, so `object-cover` crops
          less of the video frame; `flex items-center` centres the copy in the
          extra space rather than leaving a gap beneath it, the same
          arrangement MediaHero uses for the other video heroes.

          The section's deep-green base doubles as the video's fallback: an
          unloaded video element is transparent, so the green shows through
          instead of black — no poster needed, and none of the site's stills
          suit a green hero. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="vhero-media absolute inset-0 -z-30 size-full object-cover"
      >
        <source src="/proprietary.mp4" type="video/mp4" />
      </video>

      {/* Same green identity as before, now translucent so the footage reads
          through it. Near-opaque on the left where the copy sits, thinning to
          72% on the right — the copy has to stay legible over moving video. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(115deg, #06231CF7 0%, #0A4030EB 45%, #0B7A53B8 100%)",
        }}
      />

      {/* Network motif, right-aligned and out of the copy's way. Softened now
          that it sits over footage rather than a flat gradient. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -z-10 hidden h-[min(70vh,440px)] w-[46%] -translate-y-1/2 opacity-60 lg:block"
      >
        <MolecularNetwork />
      </div>

      {/* w-full because this is now a flex item — without it the container
          shrinks to its content and the max-w-7xl centring stops working. */}
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1
            className="vhero-item text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ["--vhero-i" as string]: 0 }}
          >
            {title}
          </h1>

          <span aria-hidden className="vhero-rule mt-6 block h-1 w-20 bg-[#D9A441]" />

          <p
            className="vhero-item mt-6 text-lg leading-relaxed text-white/85"
            style={{ ["--vhero-i" as string]: 1 }}
          >
            {caption}
          </p>

          <div
            className="vhero-item mt-10 flex flex-wrap gap-4"
            style={{ ["--vhero-i" as string]: 2 }}
          >
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-12 gap-2 px-8 text-base font-semibold"
              )}
            >
              {primaryLabel}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {secondaryLabel}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>

        {tagline ? (
          <p
            className="vhero-item mt-14 max-w-xs text-sm font-semibold tracking-[0.22em] text-white/55 uppercase lg:absolute lg:right-8 lg:bottom-0 lg:mt-0 lg:text-right"
            style={{ ["--vhero-i" as string]: 3 }}
          >
            {tagline}
          </p>
        ) : null}
      </div>
    </section>
  )
}
