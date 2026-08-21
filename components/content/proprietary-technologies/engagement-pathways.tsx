import { RevealGroup } from "@/components/ui/reveal-group"
import { resolveIcon } from "@/lib/icon-map"
import type { ProprietaryTechnologiesPage } from "@/payload-types"

type Pathway = NonNullable<ProprietaryTechnologiesPage["engagementPathways"]>[number]

/**
 * The three engagement routes — licensing, joint development, assignment.
 * Circled outline icons and column dividers follow the visual reference.
 */
export function EngagementPathways({
  heading,
  pathways,
}: {
  heading: string
  pathways: Pathway[]
}) {
  if (pathways.length === 0) return null

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <span aria-hidden className="mt-4 block h-0.5 w-12 bg-brand" />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-border">
          {pathways.map((pathway, index) => {
            const Icon = resolveIcon(pathway.icon)

            return (
              <div
                key={pathway.id ?? pathway.title}
                className="pw-item group/pw lg:px-10 lg:first:pl-0 lg:last:pr-0"
                style={{ ["--pw-i" as string]: index }}
              >
                <span
                  aria-hidden
                  className="relative flex size-14 items-center justify-center"
                >
                  {/* Ring that sweeps closed around the icon. */}
                  <svg
                    aria-hidden
                    viewBox="0 0 56 56"
                    className="absolute inset-0 size-14 text-brand"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      opacity="0.2"
                    />
                    <circle
                      className="pw-ring"
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="163.36"
                      transform="rotate(-90 28 28)"
                      style={{ ["--pw-i" as string]: index }}
                    />
                  </svg>
                  <Icon
                    aria-hidden
                    className="relative size-6 text-brand transition-transform duration-500 group-hover/pw:scale-110"
                    strokeWidth={1.6}
                  />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {pathway.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-3 block h-0.5 w-8 bg-[#D9A441] transition-all duration-500 group-hover/pw:w-16"
                />
                <p className="mt-4 text-foreground/70">{pathway.description}</p>
              </div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
