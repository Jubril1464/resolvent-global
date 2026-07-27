import type { OperatingApproachStep } from "./operating-approach-config"

export function OperatingApproachCard({
  step,
  title,
  description,
}: OperatingApproachStep) {
  return (
    <article className="border border-border bg-background p-5">
      <div className="flex size-12 items-center justify-center bg-brand/10">
        <span className="text-lg font-bold text-brand">{step}</span>
      </div>

      <h3 className="mt-8 text-xl font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-foreground/60">{description}</p>
    </article>
  )
}
