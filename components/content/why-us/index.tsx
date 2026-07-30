import { getWhyUsPoints } from "@/lib/get-why-us-points"
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
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Resolvent Global
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point) => (
            <WhyUsCard key={point.title} point={point} />
          ))}
        </div>
      </div>
    </section>
  )
}
