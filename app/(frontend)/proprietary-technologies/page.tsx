import type { Metadata } from "next";

import { TechnologiesHero } from "@/components/content/proprietary-technologies/technologies-hero";
import { PositioningBand } from "@/components/content/proprietary-technologies/positioning-band";
import { IpPortfolio } from "@/components/content/proprietary-technologies/ip-portfolio";
import { EngagementPathways } from "@/components/content/proprietary-technologies/engagement-pathways";
import { NdaCta } from "@/components/content/proprietary-technologies/nda-cta";
import {
  getProprietaryTechnologies,
  getProprietaryTechnologiesPage,
} from "@/lib/get-proprietary-technologies";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getProprietaryTechnologiesPage();

  return {
    title: page.heroTitle,
    description: page.heroCaption,
    alternates: { canonical: "/proprietary-technologies" },
    openGraph: {
      title: page.heroTitle,
      description: page.heroCaption,
    },
  };
}

export default async function ProprietaryTechnologiesPage() {
  const [page, technologies] = await Promise.all([
    getProprietaryTechnologiesPage(),
    getProprietaryTechnologies(),
  ]);

  return (
    <main className="flex-1">
      <TechnologiesHero
        title={page.heroTitle}
        caption={page.heroCaption}
        tagline={page.heroTagline}
        primaryLabel={page.primaryCtaLabel}
        primaryHref={page.primaryCtaHref}
        secondaryLabel={page.secondaryCtaLabel}
        secondaryHref={page.secondaryCtaHref}
      />

      <PositioningBand
        portfolioHeading={page.portfolioHeading}
        portfolioParagraphs={page.portfolioParagraphs.map((p) => p.value)}
        collaborationHeading={page.collaborationHeading}
        collaborationParagraph={page.collaborationParagraph}
        confidentialityTitle={page.confidentialityTitle}
        confidentialityNote={page.confidentialityNote}
      />

      <IpPortfolio
        heading={page.portfolioSectionHeading}
        note={page.portfolioSectionNote}
        technologies={technologies}
      />

      <EngagementPathways
        heading={page.pathwaysHeading}
        pathways={page.engagementPathways}
      />

      <NdaCta
        title={page.ctaTitle}
        description={page.ctaDescription}
        contactEmail={page.contactEmail}
        buttonLabel={page.ctaButtonLabel}
        buttonHref={page.ctaButtonHref}
      />
    </main>
  );
}
