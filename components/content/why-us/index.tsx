import { getWhyUsPoints } from "@/lib/get-why-us-points"
import { WhyUsRadar } from "./why-us-radar"
import { RevealGroup } from "@/components/ui/reveal-group"
import { WhyUsCard } from "./why-us-card"

/**
 * Dark-surface differentiator band: a short pitch on the left, four
 * proof-point cards on the right, driven by the `why-us-points` Payload
 * collection.
 */
export async function WhyUs() {
  const points = await getWhyUsPoints()

  return (
    <section className="bg-[#0C203A] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:px-8">
        <RevealGroup>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Resolvent Global
          </h2>
          {/* One radar axis per proof point, so the dial tracks the CMS. */}
          <WhyUsRadar
            axes={points.length}
            className="mt-10 hidden w-full max-w-[300px] lg:block"
          />
        </RevealGroup>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point, index) => (
            <WhyUsCard key={point.title} point={point} index={index} />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
