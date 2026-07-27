import type { Value } from "./values-config"

export function ValueCard({ icon: Icon, title, description }: Value) {
  return (
    <article className="border border-border bg-[#F4F6F9] p-8">
      <div className="flex size-10 items-center justify-center rounded-sm bg-[#132438]">
        <Icon aria-hidden className="size-4 text-emerald-200" />
      </div>

      <h3 className="mt-8 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-foreground/60">{description}</p>
    </article>
  )
}
