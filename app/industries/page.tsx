import type { Metadata } from "next";

import { PageHeader } from "@/components/content/page-header";
import { IndustrySectors } from "@/components/content/industry-sectors";
import { Cta } from "@/components/content/cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Sectors We Support"
        description="Resolvent Global serves clients across energy, manufacturing, water, mining, public-sector, research and investor sectors — addressing technical and sustainability challenges."
      />
      <Reveal>
        <IndustrySectors />
      </Reveal>
      <Reveal>
        <Cta />
      </Reveal>
    </main>
  );
}
