/**
 * Uploads the homepage service-card visuals from public/images/services and
 * attaches each to its service.
 *
 * Run with: npm run seed:service-images
 *
 * Idempotent in both halves: an existing media doc with the same filename is
 * reused rather than re-uploaded, and a service that already has an image is
 * left alone. Re-running after adding a new file only does the new work.
 *
 * Storage goes through the Vercel Blob plugin (see payload.config.ts), so
 * this needs BLOB_READ_WRITE_TOKEN in the environment — same as the project
 * images.
 */
import path from "node:path"
import { fileURLToPath } from "node:url"
import { getPayload } from "payload"

import config from "../payload.config"

const DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/images/services"
)

/**
 * Mapped explicitly rather than by filename prefix — the slugs are long and
 * the filenames are short, so a fuzzy match would silently attach the wrong
 * picture if either side is ever renamed.
 */
const IMAGES = [
  {
    file: "operations.png",
    slug: "operations",
    alt: "Process plant operators reviewing performance data on site",
  },
  {
    file: "carbon.png",
    slug: "carbon-management-and-energy-investment-advisory",
    alt: "Wind turbines and solar array representing low-carbon energy investment",
  },
  {
    file: "capability.png",
    slug: "capability-digital-technical-products",
    alt: "Engineer working with digital process monitoring dashboards",
  },
]

const payload = await getPayload({ config })

let uploaded = 0
let reused = 0
let attached = 0
let skipped = 0

for (const { file, slug, alt } of IMAGES) {
  const service = await payload.find({
    collection: "services",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  const doc = service.docs[0]
  if (!doc) {
    console.error(`No service found for slug "${slug}" — skipping ${file}.`)
    process.exitCode = 1
    continue
  }

  if (doc.image) {
    console.log(`${slug} already has an image — skipping.`)
    skipped++
    continue
  }

  // Reuse an existing upload so re-runs don't pile up duplicates in Blob.
  const existing = await payload.find({
    collection: "media",
    where: { filename: { equals: file } },
    limit: 1,
    depth: 0,
  })

  let mediaId = existing.docs[0]?.id

  if (mediaId) {
    reused++
  } else {
    const created = await payload.create({
      collection: "media",
      data: { alt },
      filePath: path.join(DIR, file),
    })
    mediaId = created.id
    uploaded++
    console.log(`Uploaded ${file} -> media ${mediaId}`)
  }

  await payload.update({
    collection: "services",
    id: doc.id,
    data: { image: mediaId },
  })
  attached++
  console.log(`Attached ${file} to ${slug}`)
}

console.log(
  `\nDone. uploaded=${uploaded} reused=${reused} attached=${attached} skipped=${skipped}`
)
process.exit(0)
