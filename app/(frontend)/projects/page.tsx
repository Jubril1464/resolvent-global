import type { Metadata } from "next";

import { MediaHero } from "@/components/content/media-hero";
import { ProjectsExplorer } from "@/components/content/projects/projects-explorer";
import { ProjectsHeroDecoration } from "@/components/content/projects/projects-hero-decoration";
import { Cta } from "@/components/content/cta";
import { Reveal } from "@/components/ui/reveal";
import { getProjects } from "@/lib/get-projects";
import { PROJECT_CATEGORIES } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected project work across water and effluent treatment, energy and process performance, clean-technology assessment and technical advisory.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Only categories with work behind them, matching the explorer's own filter
  // list — an empty track in the hero would advertise a gap in the portfolio.
  const counts = PROJECT_CATEGORIES.map((category) => ({
    label: category,
    value: projects.filter((project) => project.category === category).length,
  })).filter((entry) => entry.value > 0);

  return (
    <main className="flex-1">
      <MediaHero
        title="Projects"
        description="A focused portfolio of water, energy, clean-tech and advisory projects translating technical capability into practical industrial outcomes."
        videoSrc="/engineering-operations.mp4"
        // chips={counts.map((entry) => entry.label)}
        // chipsLabel={`${projects.length} Projects Across ${counts.length} Areas`}
        decoration={<ProjectsHeroDecoration categories={counts.map((entry) => entry.label)} />}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>

      <Reveal>
        <Cta
          title="Have a Similar Challenge?"
          description="Tell us about your operation and we will advise on a practical technical pathway."
        />
      </Reveal>
    </main>
  );
}
