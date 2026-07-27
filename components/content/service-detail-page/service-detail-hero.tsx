import Link from "next/link"
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NAV_CTA } from "@/components/content/nav/nav-config"

const GRID_SIZE = 80

export function ServiceDetailHero({
  icon: Icon,
  title,
  intro,
  accentColor,
}: {
  icon: LucideIcon
  title: string
  intro: string
  accentColor: string
}) {
  return (
    <section
      className="relative overflow-hidden py-16 text-white"
      style={{
        background: `linear-gradient(135deg, ${accentColor} 0%, #0C203A 65%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
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

        <h1 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-white/80">{intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={NAV_CTA.href}
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
