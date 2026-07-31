import type { Metadata } from "next";

import { getContactPage } from "@/lib/get-contact-page";
import { getServices } from "@/lib/get-services";
import { getIndustrySectors } from "@/lib/get-industry-sectors";
import { ContactHero } from "@/components/content/contact/contact-hero";
import { ContactForm } from "@/components/content/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const [contactPage, services, industrySectors] = await Promise.all([
    getContactPage(),
    getServices(),
    getIndustrySectors(),
  ]);

  return (
    <main className="flex-1">
      <ContactHero />
      <Reveal>
        <ContactForm
          expectSteps={contactPage.expectSteps}
          serviceOptions={services.map((service) => service.fullTitle)}
          industryOptions={industrySectors.map((sector) => sector.title)}
        />
      </Reveal>
    </main>
  );
}
