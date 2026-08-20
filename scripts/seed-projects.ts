/**
 * Seeds the `projects` collection (P01-P10 + O01-O03).
 *
 * Run with: npm run seed:projects
 *
 * Idempotent — skips any slug that already exists, so it's safe to re-run.
 *
 * Ongoing (O-series) projects are seeded WITHOUT approach / pathway /
 * deliverables / target sectors, per the content pack's confidentiality
 * rule. That's deliberate, not missing data.
 */
import { getPayload } from "payload"

import config from "../payload.config"
import { PROJECTS_DATA } from "./projects-data"

const payload = await getPayload({ config })

const list = (values: string[]) => values.map((value) => ({ value }))

for (const project of PROJECTS_DATA) {
  const existing = await payload.find({
    collection: "projects",
    where: { slug: { equals: project.slug } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`Skipping "${project.slug}" — already exists.`)
    continue
  }

  const isOngoing = project.category === "Ongoing"

  await payload.create({
    collection: "projects",
    data: {
      slug: project.slug,
      projectId: project.projectId,
      order: project.order,
      category: project.category,
      title: project.title,
      caption: project.caption,
      statusBadge: project.statusBadge,
      description: project.description,
      challenge: project.challenge,
      // Delivered-capability fields — intentionally omitted for Ongoing.
      approach: isOngoing ? undefined : project.approach,
      pathway: isOngoing ? [] : project.pathway,
      deliverables: isOngoing ? [] : list(project.deliverables),
      targetSectors: isOngoing ? [] : list(project.targetSectors),
      // Confidential-presentation fields — only for Ongoing.
      disclosureNote: isOngoing ? project.disclosureNote : undefined,
      developmentFocus: isOngoing ? project.developmentFocus : undefined,
      applications: isOngoing ? project.applications : undefined,
      applicationsTags: isOngoing ? list(project.applicationsTags) : [],
      valuePillars: project.valuePillars,
      primaryCta: project.primaryCta,
      detailCta: project.detailCta,
      footerCtaHeading: project.footerCtaHeading,
      footerCtaSubtext: project.footerCtaSubtext,
    },
  })
  console.log(`Created ${project.projectId} "${project.slug}".`)
}

process.exit(0)
