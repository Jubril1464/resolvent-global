import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getServices } from "@/lib/get-services"
import { RevealGroup } from "@/components/ui/reveal-group"
import { ServiceCard } from "./service-card"

const SERVICES_CTA = { href: "/services", label: "View All Services" }

/**
 * Home page service overview: three portfolio cards driven by the
 * `services` Payload collection, plus a link through to the full services
 * listing.
 */
export async function Services() {
  const services = await getServices()

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Core Service Areas
          </h2>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </RevealGroup>

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
