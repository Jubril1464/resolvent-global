import { RevealGroup } from "@/components/ui/reveal-group"
import { getIndustrySectors } from "@/lib/get-industry-sectors"
import { IndustrySectorCard } from "./industry-sector-card"

/**
 * Industries page sector list: one icon-panel + capability card per sector,
 * driven by the `industry-sectors` Payload collection.
 */
export async function IndustrySectors() {
  const sectors = await getIndustrySectors()

  return (
    <section className="bg-[#F4F6F9] py-24">
      <RevealGroup className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-8">
        {sectors.map((sector, index) => (
          <IndustrySectorCard key={sector.title} sector={sector} index={index} />
        ))}
      </RevealGroup>
    </section>
  )
}
