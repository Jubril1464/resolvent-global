import type { WhyUsPoint } from "./why-us-config"

export function WhyUsCard({ icon: Icon, title, description }: WhyUsPoint) {
  return (
    <article className="group border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/40 hover:bg-white/10">
      <div className="flex size-14 items-center justify-center rounded-sm bg-[#D9A441] transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden className="size-6 text-[#0C203A]" />
      </div>

      <h3 className="mt-8 text-xl font-medium text-white">{title}</h3>

      <p className="mt-4 text-[#D1D5DB] font-light">{description}</p>
    </article>
  )
}
