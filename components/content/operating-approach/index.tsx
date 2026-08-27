import { getOperatingApproachSteps } from "@/lib/get-operating-approach-steps"
import { OperatingApproachCard } from "./operating-approach-card"

/**
 * About page process band: the Discover / Diagnose / Model / Deliver /
 * Support sequence, driven by the `operating-approach-steps` Payload
 * collection.
 *
 * Rendered as a connected timeline rather than a plain card grid, so the
 * sequence itself reads visually. Entrance animation is gated on the
 * surrounding Reveal wrapper's `data-revealed`, so it plays when the band
 * scrolls into view; the flowing connector and node rings run continuously.
 * See globals.css `.oa-*`.
 */
export async function OperatingApproach() {
  const steps = await getOperatingApproachSteps()

  return (
    <section className="overflow-hidden bg-[#F4F6F9] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Operating Approach
          </h2>
          
        </div>

        <div className="relative mt-16">
          {/* Horizontal rail (desktop). Sits behind the nodes, spanning
              between the first and last node centres. */}
          <div
            aria-hidden
            className="absolute top-6 right-[10%] left-[10%] hidden h-0.5 lg:block"
          >
            <div className="oa-track-x relative size-full">
              <div
                className="oa-flow size-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--brand) 0 7px, transparent 7px 20px)",
                  backgroundSize: "20px 100%",
                }}
              />
              {/* Bright dot travelling the length of the rail. */}
              <span className="oa-travel absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A441] shadow-[0_0_10px_2px_rgba(217,164,65,0.6)]" />
            </div>
          </div>

          {/* Vertical rail (mobile / tablet). */}
          <div
            aria-hidden
            className="absolute top-6 bottom-6 left-6 w-0.5 lg:hidden"
          >
            <div className="oa-track-y size-full">
              <div
                className="size-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--brand) 0 7px, transparent 7px 20px)",
                }}
              />
            </div>
          </div>

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => (
              <OperatingApproachCard key={step.step} step={step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
