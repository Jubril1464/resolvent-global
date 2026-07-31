import { Cta } from "@/components/content/cta"
import { resolveIcon } from "@/lib/icon-map"
import type { Service } from "@/payload-types"
import { ServiceDetailHero } from "./service-detail-hero"
import { ServiceScopeGrid } from "./service-scope-grid"
import { DeliverablesOutcomes } from "./deliverables-outcomes"
import { WhoWeWorkWith } from "./who-we-work-with"
import { ExploreOtherServices } from "./explore-other-services"

/**
 * Full detail page for a single service platform, driven by the `services`
 * Payload collection. `otherServices` feeds the "explore other platforms"
 * cross-links at the bottom.
 */
export function ServiceDetailPage({
  service,
  otherServices,
}: {
  service: Service
  otherServices: Service[]
}) {
  return (
    <main className="flex-1">
      <ServiceDetailHero
        icon={resolveIcon(service.icon)}
        title={service.fullTitle}
        intro={service.intro}
        accentColor={service.accentColor}
      />
      <ServiceScopeGrid scope={service.scope} />
      <DeliverablesOutcomes
        deliverables={service.deliverables}
        outcomes={service.outcomes}
      />
      <WhoWeWorkWith description={service.whoWeWorkWith} />
      <ExploreOtherServices items={otherServices} />
      <Cta
        title="Not Sure Which Service Fits Your Challenge?"
        description="Send us a brief project description and we will advise on the best approach."
        primaryLabel="Request a Proposal"
        secondaryLabel="Discuss Your Project"
        secondaryHref="/contact"
      />
    </main>
  )
}
