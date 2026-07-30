import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NAV_CTA } from "@/components/content/nav/nav-config"

export function WhoWeWorkWith({ description }: { description: string }) {
  return (
    <section className="bg-[#0C203A] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
          Clients &amp; Engagements
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Who We Work With
          </h2>
          <p className="mt-6 max-w-2xl text-white/70">{description}</p>
        </div>

        <div className="border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Ready to Start?
          </p>
          <p className="mt-4 text-white/80">
            Discuss an operational challenge, request a process review, or
            ask for a technical proposal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={NAV_CTA.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 border-2 border-white bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Request Proposal
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-11 px-6 text-sm font-semibold"
              )}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
