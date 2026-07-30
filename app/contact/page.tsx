import type { Metadata } from "next";

import { ContactHero } from "@/components/content/contact/contact-hero";
import { ContactForm } from "@/components/content/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />
      <Reveal>
        <ContactForm />
      </Reveal>
    </main>
  );
}
