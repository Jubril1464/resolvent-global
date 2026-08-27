import Link from "next/link"
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getNavigation } from "@/lib/get-navigation"

/** Used when a service has no `heroVideo` of its own. */
const FALLBACK_VIDEO = "/engineering-operations.mp4"

export async function ServiceDetailHero({
  icon: Icon,
  title,
  intro,
  accentColor,
  videoSrc,
  poster,
}: {
  icon: LucideIcon
  title: string
  intro: string
  accentColor: string
  /** Per-service hero footage; falls back to the shared engineering video. */
  videoSrc?: string | null
  /** Per-service still shown before the video paints. */
  poster?: string | null
}) {
  const navigation = await getNavigation()
  const video = videoSrc || FALLBACK_VIDEO

  return (
    <section className="vhero-shape relative isolate overflow-hidden py-20 text-white">
      {/* Video sits behind the accent wash. `poster` gives an instant first
          paint so the hero is never an empty box while it loads.

          Keyed by src: without this React reuses the same <video> element
          across service routes and keeps playing the previous file, because
          swapping a <source> child does not reload the media. */}
      <video
        key={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster ?? "/images/hero-image.png"}
        aria-hidden
        className="vhero-media absolute inset-0 -z-20 size-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Per-service accent wash, so each service keeps its own identity. The
          gradient stays near-opaque on the left, where the copy sits, and
          thins out to the right so the footage is actually visible — one flat
          95% wash hid it entirely on the service whose accent is the same
          navy as the base colour. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(115deg, ${accentColor}F0 0%, ${accentColor}D9 38%, rgba(12,32,58,0.60) 100%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Back to Services
        </Link>

        <div className="mt-6 flex size-14 items-center justify-center rounded-md border border-white/10 bg-white/5">
          <Icon
            aria-hidden
            className="size-7 text-emerald-200"
            strokeWidth={1.5}
          />
        </div>

        <h1 className="vhero-item mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl" style={{ ["--vhero-i" as string]: 0 }}>
          {title}
        </h1>
        <p className="vhero-item mt-6 max-w-3xl text-white/80" style={{ ["--vhero-i" as string]: 1 }}>{intro}</p>

        <div className="vhero-item mt-10 flex flex-wrap gap-4" style={{ ["--vhero-i" as string]: 2 }}>
          <Link
            href={navigation.ctaHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 gap-2 border-white bg-white px-8 text-base font-semibold text-[#0C203A] hover:bg-white/90 hover:text-[#0C203A]"
            )}
          >
            Request Proposal
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
