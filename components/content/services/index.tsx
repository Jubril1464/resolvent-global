import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ServiceCard } from "./service-card"
import { SERVICES, SERVICES_CTA } from "./services-config"

/**
 * Home page service overview: three portfolio cards driven by SERVICES,
 * plus a link through to the full services listing.
 */
export function Services() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-amber-600 uppercase">
            Service Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Core Service Areas
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={SERVICES_CTA.href}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-[#0C203A] px-8 text-base font-semibold text-[#0C203A] hover:bg-[#0C203A]/5"
            )}
          >
            {SERVICES_CTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
