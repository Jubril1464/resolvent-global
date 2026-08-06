import Link from "next/link"
import { Clock } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PageHeader } from "@/components/content/page-header"

/**
 * Placeholder for routes that are already linked sitewide (nav, footer)
 * but don't have real content yet — keeps the link from 404ing while the
 * page is being built.
 */
export function ComingSoon({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <main className="flex-1">
      <PageHeader title={title} description={description} />
      <section className="bg-background py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center lg:px-8">
          <div className="flex size-14 items-center justify-center rounded-full bg-[#F4F6F9]">
            <Clock aria-hidden className="size-6 text-brand" strokeWidth={1.75} />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-foreground">
            This page is coming soon
          </h2>
          <p className="mt-3 text-foreground/70">
            We&apos;re still putting this section together. In the meantime,
            get in touch directly and we&apos;ll help with whatever you were
            looking for here.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "brand" }),
              "mt-8 h-12 px-8 text-base font-semibold"
            )}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
