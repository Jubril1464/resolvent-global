import type { OperatingApproachStep } from "@/payload-types"

export function OperatingApproachCard({
  step,
  index,
}: {
  step: OperatingApproachStep
  index: number
}) {
  return (
    <li
      className="oa-item group relative flex gap-5 lg:flex-col lg:gap-0"
      style={{ ["--oa-i" as string]: index }}
    >
      {/* Node — sits on the rail. */}
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        <span
          aria-hidden
          className="oa-ring absolute size-12 rounded-full bg-brand/40"
          style={{ ["--oa-i" as string]: index }}
        />
        <span className="oa-hex relative flex size-12 items-center justify-center bg-brand text-base font-bold text-brand-foreground transition-transform duration-300 group-hover:scale-110">
          {step.step}
        </span>
      </div>

      <div className="pt-1 lg:mt-6 lg:pt-0">
        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
        <p className="mt-2 text-foreground/60">{step.description}</p>
      </div>
    </li>
  )
}
