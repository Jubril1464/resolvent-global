import { Handshake, Lock } from "lucide-react"

import { Reveal } from "@/components/ui/reveal"

/**
 * The two-column positioning band from the visual reference: portfolio copy on
 * the left, collaboration terms on the right, with the confidentiality panel
 * directly beneath them.
 *
 * That placement is deliberate — the handover requires the NDA requirement to
 * be visible next to the technology portfolio *and* again next to the contact
 * CTA. This is the first of those two placements; `NdaCta` is the second.
 */
export function PositioningBand({
  portfolioHeading,
  portfolioParagraphs,
  collaborationHeading,
  collaborationParagraph,
  confidentialityTitle,
  confidentialityNote,
}: {
  portfolioHeading: string
  portfolioParagraphs: string[]
  collaborationHeading: string
  collaborationParagraph: string
  confidentialityTitle: string
  confidentialityNote: string
}) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 lg:divide-x lg:divide-border">
          <Reveal>
            <div className="lg:pr-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {portfolioHeading}
              </h2>
              <span aria-hidden className="mt-4 block h-0.5 w-12 bg-brand" />
              <div className="mt-6 space-y-5 text-foreground/70">
                {portfolioParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pl-16">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="ptech-badge flex size-11 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/5 text-brand"
                >
                  <Handshake className="size-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {collaborationHeading}
                  </h2>
                  <span aria-hidden className="mt-4 block h-0.5 w-12 bg-[#D9A441]" />
                </div>
              </div>
              <p className="mt-6 text-foreground/70">{collaborationParagraph}</p>

              {/* Confidentiality panel — placement one of two. */}
              <div className="ptech-nda relative mt-8 overflow-hidden border-l-2 border-brand bg-[#F4F6F9] p-6">
                <span
                  aria-hidden
                  className="ptech-sheen pointer-events-none absolute inset-0"
                />
                <div className="relative flex items-start gap-4">
                  <span
                    aria-hidden
                    className="ptech-lock flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-white text-brand"
                  >
                    <Lock className="size-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-wide text-brand uppercase">
                      {confidentialityTitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {confidentialityNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
