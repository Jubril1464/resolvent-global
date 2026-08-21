import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

/**
 * Closing CTA band. Carries the NDA requirement in its own copy — the second
 * of the two placements the handover requires (the first sits beside the
 * portfolio, in `PositioningBand`).
 *
 * Deliberately not the shared `Cta` component: that one routes to the standard
 * proposal flow, whereas every enquiry from this page has to arrive framed as
 * an NDA-gated technology discussion.
 */
export function NdaCta({
  title,
  description,
  contactEmail,
  buttonLabel,
  buttonHref,
}: {
  title: string
  description: string
  contactEmail: string
  buttonLabel: string
  buttonHref: string
}) {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(115deg, #06231C 0%, #0A4030 60%, #0B5F41 100%)",
        }}
      />

      {/* Soft organic wash in the lower right, echoing the visual reference. */}
      <div
        aria-hidden
        className="ptech-glow pointer-events-none absolute -right-24 -bottom-32 -z-10 size-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,164,65,0.16) 0%, rgba(11,122,83,0.12) 45%, transparent 70%)",
        }}
      />

      <Reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <span aria-hidden className="mt-5 block h-0.5 w-16 bg-[#D9A441]" />
            <p className="mt-6 max-w-2xl text-white/75">{description}</p>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-16">
            <div className="flex items-start gap-4">
              <span
                aria-hidden
                className="ptech-mail flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5"
              >
                <Mail className="size-5 text-[#D9A441]" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-white/55">Contact us</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 block text-lg font-semibold break-words text-white underline-offset-4 transition-colors hover:text-[#D9A441] hover:underline"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <Link
              href={buttonHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-8 h-12 gap-2 border-2 border-white bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {buttonLabel}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
