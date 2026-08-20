import type { Metadata } from "next";

import { PageHeader } from "@/components/content/page-header";
import { ProjectsExplorer } from "@/components/content/projects/projects-explorer";
import { Cta } from "@/components/content/cta";
import { Reveal } from "@/components/ui/reveal";
import { getProjects } from "@/lib/get-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected project work across water and effluent treatment, energy and process performance, clean-technology assessment and technical advisory.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Our Projects"
        title="Project Portfolio"
        description="Selected work across water and effluent treatment, energy and process performance, clean-technology assessment and technical advisory — from validated research capability through to market-ready services."
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
