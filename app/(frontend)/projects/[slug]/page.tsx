import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/content/project-detail";
import { getProjectBySlug } from "@/lib/get-projects";

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.caption,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.caption,
    },
  };
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
