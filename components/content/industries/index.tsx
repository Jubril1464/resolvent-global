import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { IndustriesExplorer } from "./industries-explorer"

/**
 * Home page industries section: a vertical tab list on the left drives the
 * photo + description panel on the right, all backed by INDUSTRIES.
 */
export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Sectors We Serve
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industries Served
          </h2>
        </div>

        <div className="mt-16">
          <IndustriesExplorer />
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View all industries
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
