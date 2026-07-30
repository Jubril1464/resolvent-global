import { getServices } from "@/lib/get-services"
import { ServiceDetailBand } from "./service-detail-band"

/**
 * Services page detail list: one colored header + checklist band per
 * service platform, driven by the `services` Payload collection.
 */
export async function ServiceDetail() {
  const services = await getServices()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {services.map((service) => (
        <ServiceDetailBand key={service.slug} service={service} />
      ))}
    </section>
  )
}
