import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MolecularNetwork } from "./molecular-network"

const GRID_SIZE = 80

/**
 * Hero for the Proprietary Technologies page.
 *
 * Green/deep-teal rather than the navy used by the other page heroes — the
 * handover asks specifically for "a premium green, white and deep-teal visual
 * system with gold accents", and it usefully sets this page apart as its own
 * major section rather than a Projects or Services sub-page.
 *
 * The visual reference pairs the copy with laboratory photography. There is no
 * approved image for this page yet, so the right-hand side carries the
 * hexagonal network motif from the same reference instead — which also avoids
 * any imagery that could imply a specific process or installation.
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
    <section className="vhero-shape relative isolate overflow-hidden py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(115deg, #06231C 0%, #0A4030 45%, #0B7A53 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      {/* Network motif, right-aligned and out of the copy's way. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -z-10 hidden h-[min(70vh,440px)] w-[46%] -translate-y-1/2 lg:block"
      >
        <MolecularNetwork />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
