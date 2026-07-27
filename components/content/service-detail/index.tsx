import { ServiceDetailBand } from "./service-detail-band"
import { SERVICE_DETAILS } from "./service-detail-config"

/**
 * Services page detail list: one colored header + checklist band per
 * service platform, driven by SERVICE_DETAILS.
 */
export function ServiceDetail() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {SERVICE_DETAILS.map((service) => (
        <ServiceDetailBand key={service.title} {...service} />
      ))}
    </section>
  )
}
