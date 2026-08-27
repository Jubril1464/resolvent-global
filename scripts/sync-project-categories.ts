/**
 * Syncs each project's category in the database to the value in
 * scripts/projects-data.ts, which is the source of truth.
 *
 * Run with: npm run sync:project-categories
 *
 * seed-projects.ts skips any project that already exists, so it can't apply a
 * category correction to live data — this can. It only touches `category`,
 * so it's safe to run against a portfolio that has since been edited in the
 * admin UI for other reasons.
 */
import { getPayload } from "payload"

import config from "../payload.config"
import { PROJECTS_DATA } from "./projects-data"

const payload = await getPayload({ config })

let changed = 0
let matched = 0
const missing: string[] = []

for (const project of PROJECTS_DATA) {
  const result = await payload.find({
    collection: "projects",
    where: { slug: { equals: project.slug } },
    limit: 1,
    depth: 0,
  })

  const doc = result.docs[0]
  if (!doc) {
    missing.push(project.slug)
    continue
  }

  if (doc.category === project.category) {
    matched++
    continue
  }

  await payload.update({
    collection: "projects",
    id: doc.id,
    data: { category: project.category },
  })
  changed++
  console.log(`${project.slug}: ${doc.category} -> ${project.category}`)
}

if (missing.length > 0) {
  console.error(`\nNot in the database: ${missing.join(", ")}`)
  process.exitCode = 1
}

// Category counts drive the filter chips on /projects, so print them — a
// category dropping to zero silently removes its filter from the page.
const all = await payload.find({ collection: "projects", limit: 200, depth: 0 })
const counts = new Map<string, number>()
for (const doc of all.docs) {
  counts.set(doc.category, (counts.get(doc.category) ?? 0) + 1)
}

console.log(`\nchanged=${changed} already-correct=${matched}`)
console.log("Category counts now:")
for (const [category, count] of [...counts].sort()) {
  console.log(`  ${category.padEnd(18)} ${count}`)
}

process.exit(0)
