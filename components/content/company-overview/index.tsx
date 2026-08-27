import Image from "next/image"

const MISSION_VISION = [
  {
    title: "Mission",
    description:
      "To deliver practical, technically sound and sustainable engineering solutions that improve process performance, resource efficiency and environmental outcomes for industrial and energy-sector clients.",
    image: "/images/about-us/mission.png",
    imageAlt:
      "Engineering team reviewing process performance data on an industrial site",
  },
  {
    title: "Vision",
    description:
      "To become a trusted technical partner for energy, process, carbon and environmental solutions across Nigeria and broader global markets — known for technical rigour, practical outcomes and integrity.",
    image: "/images/about-us/vision.png",
    imageAlt:
      "Wide view of energy infrastructure representing long-term technical partnership",
  },
]

/**
 * About page company overview: a two-paragraph description spanning the full
 * content width, followed by Mission and Vision cards.
 *
 * The two cards are static rather than CMS-backed, so their images are
 * referenced straight from public/. The 4/3 band matches the source files
 * exactly, so `object-cover` never crops them; these are composed graphics
 * where a crop would cut real content.
 */
export function CompanyOverview() {
  return (
    <section className="bg-[#F4F6F9]">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="space-y-8 text-xl leading-relaxed text-foreground/70">
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
          {MISSION_VISION.map(({ title, description, image, imageAlt }) => (
            <article
              key={title}
              className="group/mv overflow-hidden border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0C203A]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 640px) 360px, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover/mv:scale-[1.06]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                {/* Gold rule that extends on hover, matching the service cards. */}
                <span
                  aria-hidden
                  className="mt-2.5 block h-0.5 w-8 bg-[#D9A441] transition-all duration-500 group-hover/mv:w-16"
                />
                <p className="mt-3 text-sm text-foreground/60">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
