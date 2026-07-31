import type { OperatingApproachStep } from "@/payload-types"

export function OperatingApproachCard({ step }: { step: OperatingApproachStep }) {
  return (
    <article className="border border-border bg-background p-4">
      <div className="flex size-10 items-center justify-center bg-brand/10">
        <span className="text-lg font-bold text-brand">{step.step}</span>
      </div>

      <h3 className="mt-5 text-xl font-medium text-foreground">{step.title}</h3>
      <p className="mt-3 text-foreground/60">{step.description}</p>
    </article>
  )
}
