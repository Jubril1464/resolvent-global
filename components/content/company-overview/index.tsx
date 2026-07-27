import Image from "next/image"

const MISSION_VISION = [
  {
    title: "Mission",
    description:
      "To deliver practical, technically sound and sustainable engineering solutions that improve process performance, resource efficiency and environmental outcomes for industrial and energy-sector clients.",
  },
  {
    title: "Vision",
    description:
      "To become a trusted technical partner for energy, process, carbon and environmental solutions across Nigeria and broader global markets — known for technical rigour, practical outcomes and integrity.",
  },
]

/**
 * About page company overview: a two-paragraph description with a
 * decorative arrow-and-target graphic bleeding off the right edge (mirrors
 * the treatment used for line-img.png in Approach), followed by Mission and
 * Vision cards.
 */
export function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F9]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[420px] lg:block"
      >
        <Image
          src="/images/arrow.png"
          alt=""
          fill
          sizes="420px"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl space-y-8 text-xl leading-relaxed text-foreground/70">
          <p>
            Resolvent Global Energy Process &amp; Carbon Ltd is a technical
            advisory and engineering services company delivering integrated
            solutions across process engineering, energy systems, carbon
            management, sustainability, water and environmental treatment,
            and industrial process optimisation.
          </p>
          <p>
            We combine global engineering standards with indigenous
            relevance, data-driven analysis and practical project support to
            help clients improve efficiency, reduce operational risk,
            strengthen compliance, optimise energy use and advance cleaner,
            lower-carbon industrial operations.
          </p>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {MISSION_VISION.map(({ title, description }) => (
            <div
              key={title}
              className="border border-border bg-background p-6"
            >
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-foreground/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
