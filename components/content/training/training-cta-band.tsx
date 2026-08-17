import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CORPORATE_TRAINING_HREF } from "@/lib/training"

/**
 * Closing CTA band shared by the training landing page and every course
 * page. Mirrors the site-wide `Cta` band visually, but uses the training
 * CTA wording fixed by the content handover instead of the global
 * "Request Proposal" action.
 */
export function TrainingCtaBand({
  title,
  description,
  primaryLabel,
  primaryHref,
}: {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
}) {
  return (
    <section className="bg-brand py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/85">{description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-white bg-white px-8 text-base font-semibold text-brand hover:bg-white/90 hover:text-brand"
            )}
          >
            {primaryLabel}
          </Link>
          <Link
            href={CORPORATE_TRAINING_HREF}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Discuss Corporate Training
          </Link>
        </div>
      </div>
    </section>
  )
}
