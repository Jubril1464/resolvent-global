import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { ServiceDetail } from "@/components/content/service-detail";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Our Service Portfolio"
        description="Three integrated service platforms designed to help industrial, public-sector, investment and innovation clients operate better, invest smarter and build lasting technical capability."
      />
      <Reveal>
        <ServiceDetail />
      </Reveal>
    </main>
  );
}
