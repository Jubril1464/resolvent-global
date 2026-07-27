import { Cta } from "@/components/content/cta"
import {
  SERVICE_DETAILS,
  type ServiceDetailItem,
} from "@/components/content/service-detail/service-detail-config"
import { ServiceDetailHero } from "./service-detail-hero"
import { ServiceScopeGrid } from "./service-scope-grid"
import { DeliverablesOutcomes } from "./deliverables-outcomes"
import { WhoWeWorkWith } from "./who-we-work-with"
import { ExploreOtherServices } from "./explore-other-services"
import type { ServiceDetailPageData } from "./service-detail-page-config"

/**
 * Full detail page for a single service platform. `listing` supplies the
 * icon/title/intro already defined in SERVICE_DETAILS (shared with the
 * /services overview bands); `page` supplies the page-only content
 * (scope, deliverables, outcomes, client fit).
 */
export function ServiceDetailPage({
  listing,
  page,
}: {
  listing: ServiceDetailItem
  page: ServiceDetailPageData
}) {
  const otherServices = SERVICE_DETAILS.filter(
    (service) => service.slug !== listing.slug
  )

  return (
    <main className="flex-1">
      <ServiceDetailHero
        icon={listing.icon}
        title={listing.title}
        intro={listing.intro}
        accentColor={listing.accentColor}
      />
      <ServiceScopeGrid scope={page.scope} />
      <DeliverablesOutcomes
        deliverables={page.deliverables}
        outcomes={page.outcomes}
      />
      <WhoWeWorkWith description={page.whoWeWorkWith} />
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
