import type { Metadata } from "next";

import { MediaHero } from "@/components/content/media-hero";
import { IndustrySectors } from "@/components/content/industry-sectors";
import { Cta } from "@/components/content/cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Resolvent Global serves clients across energy, manufacturing, water, mining, public-sector, research and investor sectors — addressing technical and sustainability challenges.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main className="flex-1">
      <MediaHero
        title="Sectors We Support"
        description="Resolvent Global serves clients across energy, manufacturing, water, mining, public-sector, research and investor sectors — addressing technical and sustainability challenges."
        videoSrc="/sectors-vid.mp4"
      />
      <IndustrySectors />
      <Reveal>
        <Cta />
      </Reveal>
    </main>
  );
}
