import { resolveIcon } from "@/lib/icon-map"
import type { WhyUsPoint } from "@/payload-types"

export function WhyUsCard({
  point,
  index = 0,
}: {
  point: WhyUsPoint
  index?: number
}) {
  const Icon = resolveIcon(point.icon)

  return (
    <article
      className="wu-card group relative overflow-hidden border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/40 hover:bg-white/10"
      style={{ ["--wu-ci" as string]: index }}
    >
      {/* Gold corner accent that expands on hover. */}
      <span
        aria-hidden
        className="absolute -top-8 -right-8 size-16 rotate-45 bg-[#D9A441]/10 transition-transform duration-500 group-hover:scale-150"
      />
      <div className="relative flex size-14 items-center justify-center rounded-sm bg-[#D9A441] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon aria-hidden className="size-6 text-[#0C203A]" />
      </div>

      <h3 className="relative mt-8 text-xl font-medium text-white">{point.title}</h3>

      <p className="relative mt-4 font-light text-[#D1D5DB]">{point.description}</p>
    </article>
  )
}
