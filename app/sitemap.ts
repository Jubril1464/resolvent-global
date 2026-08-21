import type { MetadataRoute } from "next"

import { getServices } from "@/lib/get-services"
import { getTrainingCourses } from "@/lib/get-training-courses"
import { getProjects } from "@/lib/get-projects"
import { SITE_URL } from "@/lib/site-config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, trainingCourses, projects] = await Promise.all([
    getServices(),
    getTrainingCourses(),
    getProjects(),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/training`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/industries`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${SITE_URL}/proprietary-technologies`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const trainingRoutes: MetadataRoute.Sitemap = trainingCourses.map((course) => ({
    url: `${SITE_URL}/training/${course.slug}`,
    lastModified: course.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...trainingRoutes, ...projectRoutes]
}
