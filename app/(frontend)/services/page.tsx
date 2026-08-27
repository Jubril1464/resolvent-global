import type { Metadata } from "next";

import { MediaHero } from "@/components/content/media-hero";
import { ServiceDetail } from "@/components/content/service-detail";
import { Reveal } from "@/components/ui/reveal";
import { getServices } from "@/lib/get-services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three integrated service platforms designed to help industrial, public-sector, investment and innovation clients operate better, invest smarter and build lasting technical capability.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="flex-1">
      <MediaHero
     
        title="Services"
        description="Three integrated service platforms designed to help industrial, public-sector, investment and innovation clients operate better, invest smarter and build lasting technical capability."
        videoSrc="/our-services-vid.mp4"
        chipsLabel="Service platforms"
        // Pulled from the `services` collection, so the hero can never drift
        // out of sync with the platforms listed further down the page.
        chips={services.map((service) => service.fullTitle)}
      />
      <Reveal>
        <ServiceDetail />
      </Reveal>
    </main>
  );
}
