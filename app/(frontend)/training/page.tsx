import type { Metadata } from "next";

import { MediaHero } from "@/components/content/media-hero";
import { TrainingHeroSvg } from "@/components/content/training/training-hero-svg";
import { TrainingPortfolio } from "@/components/content/training";
import { TrainingCtaBand } from "@/components/content/training/training-cta-band";
import { Reveal } from "@/components/ui/reveal";
import { getTrainingPage } from "@/lib/get-training-page";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Practical, globally relevant training programs designed to strengthen technical capability, improve operational performance and support better decision-making across industry and emerging technology.",
  alternates: { canonical: "/training" },
};

export default async function TrainingPage() {
  const page = await getTrainingPage();

  return (
    <main className="flex-1">
      <MediaHero
        title={page.heroTitle}
        description={page.heroDescription}
        imageSrc="/images/training-hero-img.jpg"
        imageAlt=""
        decoration={
          <TrainingHeroSvg className="absolute inset-y-0 right-0 hidden h-full w-[62%] opacity-90 lg:block" />
        }
      />
      <TrainingPortfolio />
      <Reveal>
        <TrainingCtaBand
          title={page.finalCtaTitle}
          description={page.finalCtaDescription}
          primaryLabel="Explore Training"
          // Bare hash (not "/training#portfolio") so Next treats this as a
          // hash-only change and keeps the smooth scroll — this CTA only
          // ever renders on /training.
          primaryHref="#portfolio"
        />
      </Reveal>
    </main>
  );
}
