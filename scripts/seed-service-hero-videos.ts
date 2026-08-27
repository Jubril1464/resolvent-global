/**
 * Sets the per-service hero background video on each service.
 *
 * Run with: npm run seed:service-hero-videos
 *
 * Operations keeps the original shared engineering footage; the other two
 * platforms get their own file. Declarative and re-runnable — it always
 * applies the values below, and refuses to write a path whose file isn't
 * actually in public/, so a typo fails here rather than silently rendering a
 * hero with no video.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { getPayload } from "payload"

import config from "../payload.config"

const PUBLIC_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public"
)

const HERO_VIDEOS: Record<string, string> = {
  operations: "/engineering-operations.mp4",
  "carbon-management-and-energy-investment-advisory":
    "/images/services/carbon.mp4",
  "capability-digital-technical-products": "/images/services/capability.mp4",
}

const payload = await getPayload({ config })

// Check every file up front, so a bad path can't leave the set half-applied.
const missing = Object.values(HERO_VIDEOS).filter(
  (src) => !fs.existsSync(path.join(PUBLIC_DIR, src))
)
if (missing.length > 0) {
  console.error(`Refusing to continue — these files are not in public/: ${missing.join(", ")}`)
  process.exit(1)
}

let updated = 0

for (const [slug, heroVideo] of Object.entries(HERO_VIDEOS)) {
  const result = await payload.find({
    collection: "services",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  const doc = result.docs[0]
  if (!doc) {
    console.error(`No service found for slug "${slug}".`)
    process.exitCode = 1
    continue
  }

  await payload.update({
    collection: "services",
    id: doc.id,
    data: { heroVideo },
  })
  updated++
  const size = (
    fs.statSync(path.join(PUBLIC_DIR, heroVideo)).size /
    1024 /
    1024
  ).toFixed(1)
  console.log(`${slug} -> ${heroVideo} (${size} MB)`)
}

// Anything left without a video renders the shared fallback, which is fine,
// but worth naming so it isn't mistaken for a completed set.
const all = await payload.find({ collection: "services", limit: 100, depth: 0 })
const unset = all.docs.filter((s) => !s.heroVideo).map((s) => s.slug)
if (unset.length > 0) {
  console.log(`\nStill on the fallback video: ${unset.join(", ")}`)
}

console.log(`\nDone. updated=${updated}/${all.totalDocs}`)
process.exit(0)
