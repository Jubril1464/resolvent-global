import { OperatingApproachCard } from "./operating-approach-card"
import { OPERATING_APPROACH_STEPS } from "./operating-approach-config"

/**
 * About page process band: the four-step Discover / Diagnose / Model /
 * Deliver sequence, driven by OPERATING_APPROACH_STEPS.
 */
export function OperatingApproach() {
  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Operating Approach
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATING_APPROACH_STEPS.map((step) => (
            <OperatingApproachCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
