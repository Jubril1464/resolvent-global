import type { Metadata } from "next";

import { MediaHero } from "@/components/content/media-hero";
import { AtAGlance } from "@/components/content/at-a-glance";
import { CompanyOverview } from "@/components/content/company-overview";
import { TechnicalFoundation } from "@/components/content/technical-foundation";
import { OperatingApproach } from "@/components/content/operating-approach";
import { Values } from "@/components/content/values";
import { Cta } from "@/components/content/cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "A technical advisory and engineering services company focused on process engineering, energy, carbon, water and environmental solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <MediaHero
        title="Who We Are"
        description="A technical advisory and engineering services company focused on process engineering, energy, carbon, water and environmental solutions."
        videoSrc="/about-us-vid.mp4"
      />
      <Reveal>
        <CompanyOverview />
      </Reveal>
      <AtAGlance />
      <Reveal>
        <TechnicalFoundation />
      </Reveal>
      <Reveal>
        <OperatingApproach />
      </Reveal>
      <Reveal>
        <Values />
      </Reveal>
      <Reveal>
        <Cta />
      </Reveal>
    </main>
  );
}
