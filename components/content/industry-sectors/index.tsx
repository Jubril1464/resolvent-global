import { IndustrySectorCard } from "./industry-sector-card"
import { INDUSTRY_SECTORS } from "./industry-sectors-config"

/**
 * Industries page sector list: one icon-panel + capability card per sector,
 * driven by INDUSTRY_SECTORS.
 */
export function IndustrySectors() {
  return (
    <section className="bg-[#F4F6F9] py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-8">
        {INDUSTRY_SECTORS.map((sector) => (
          <IndustrySectorCard key={sector.title} {...sector} />
        ))}
      </div>
    </section>
  )
}
