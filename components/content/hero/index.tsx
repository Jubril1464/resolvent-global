import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA } from "@/components/content/nav/nav-config";

const SCHEDULE_CTA = {
  href: "/schedule-consultation",
  label: "Schedule Technical Consultation",
};

const GRID_SIZE = 80;

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] w-full items-center overflow-hidden bg-[#0C203A] text-white">
      <Image
        src="/images/hero-image.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #0C203AE6 0%, #0C203AE6 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering Solutions for Energy, Process Performance and
            Carbon-Conscious Industry.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-sans">
            Resolvent Global helps industrial and energy-sector clients solve
            process, water, environmental and sustainability challenges
            through practical engineering, technical advisory and project
            support.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={NAV_CTA.href}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-12 gap-2 px-8 text-base font-semibold",
              )}
            >
              {NAV_CTA.label}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={SCHEDULE_CTA.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-1 border-white/70 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white",
              )}
            >
              {SCHEDULE_CTA.label}
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
