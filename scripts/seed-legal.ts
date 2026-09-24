/**
 * Seeds the `legal-documents` collection with the Privacy Notice and the
 * Terms of Use.
 *
 * Run with: npm run seed:legal
 *
 * The content comes from `lib/privacy-notice.ts` and `lib/terms-of-use.ts`,
 * which are the verbatim transcriptions of the approved source documents in
 * `docs/`. Nothing is paraphrased on the way in — this script only reshapes
 * those literals into Payload's field structure.
 *
 * Idempotent: a document that already exists is left alone, so re-running
 * never clobbers an admin edit. Pass `--force` to overwrite — use that only
 * to restore a document that has been damaged, since it discards every change
 * made in the admin since the last seed.
 */
import path from "node:path"
import { fileURLToPath } from "node:url"
import { getPayload } from "payload"

import config from "../payload.config"
import type { LegalBlock, LegalDocument } from "../lib/legal"
import { PRIVACY_NOTICE } from "../lib/privacy-notice"
import { TERMS_OF_USE } from "../lib/terms-of-use"

const payload = await getPayload({ config })

const force = process.argv.includes("--force")

const PUBLIC_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public"
)

/**
 * Alt text for the hero uploads, keyed by the file each document names. Used
 * as the Media document's label in the admin — the hero itself renders the
 * image as a decorative backdrop, so the page emits an empty alt.
 */
const HERO_ALT: Record<string, string> = {
  "/images/hero-image.png":
    "Industrial process plant beside a river at dusk",
}

/** "21 September 2026" → the ISO string Payload's date field stores. */
function toDate(value: string) {
  const parsed = new Date(`${value} UTC`)
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Could not parse date "${value}"`)
  }
  return parsed.toISOString()
}

function toPayloadBlocks(blocks: LegalBlock[]) {
  return blocks.map((block) => {
    switch (block.kind) {
      case "list":
        return {
          blockType: "list" as const,
          intro: block.intro ?? null,
          items: block.items.map((value) => ({ value })),
        }
      case "contact":
        return { blockType: "contact" as const }
      default:
        return { blockType: "paragraph" as const, text: block.text }
    }
  })
}

function toPayloadData(doc: LegalDocument) {
  return {
    slug: doc.slug as "privacy-notice" | "terms-of-use",
    title: doc.title,
    subtitle: doc.subtitle,
    heroLead: doc.heroLead,
    metaDescription: doc.metaDescription,
    heroTagline: doc.heroTagline.map((value) => ({ value })),
    heroMedia: doc.heroMedia.variant,
    // The Terms hero photograph is a file in `public/images`, not a Media
    // upload, so there is nothing to attach here. An editor who wants a
    // different image uploads one and the field takes over — see
    // `toHeroMedia` in lib/get-legal-document.ts for the fallback.
    effectiveDate: toDate(doc.effectiveDate),
    lastUpdated: toDate(doc.lastUpdated),

    introHeading: doc.intro.heading,
    introParagraphs: doc.intro.paragraphs.map((value) => ({ value })),

    glanceHeading: doc.glance.heading,
    glanceItems: doc.glance.items.map((item) => ({
      icon: item.icon,
      text: item.text,
      // Anchors are `section-N`; the CMS stores the number on its own.
      sectionNumber: Number(item.sectionId.replace("section-", "")),
    })),

    detailHeading: doc.detail.heading,
    detailLead: doc.detail.lead,
    sections: doc.detail.sections.map((section) => ({
      title: section.title,
      navLabel: section.navLabel,
      blocks: toPayloadBlocks(section.blocks),
    })),

    sideCardIcon: doc.sideCard.icon,
    sideCardTitle: doc.sideCard.title,
    sideCardBody: doc.sideCard.body,
    sideCardCtaLabel: doc.sideCard.ctaLabel,

    calloutIcon: doc.callout.icon,
    calloutTitle: doc.callout.title,
    calloutBody: doc.callout.body,
  }
}

/**
 * Uploads the hero photograph a document names and returns its media id,
 * reusing an existing upload so re-runs don't pile up duplicates in Blob.
 * Returns null for documents whose hero is the drawn globe.
 */
async function heroImageId(doc: LegalDocument) {
  if (doc.heroMedia.variant !== "image") return null

  const src = doc.heroMedia.src
  const file = path.basename(src)

  const existing = await payload.find({
    collection: "media",
    where: { filename: { equals: file } },
    limit: 1,
    depth: 0,
  })

  const found = existing.docs[0]
  if (found) {
    console.log(`Reusing existing media for ${file}.`)
    return found.id
  }

  const created = await payload.create({
    collection: "media",
    data: { alt: HERO_ALT[src] ?? doc.title },
    filePath: path.join(PUBLIC_DIR, src),
  })
  console.log(`Uploaded ${file} -> media ${created.id}`)
  return created.id
}

for (const doc of [PRIVACY_NOTICE, TERMS_OF_USE]) {
  const existing = await payload.find({
    collection: "legal-documents",
    where: { slug: { equals: doc.slug } },
    limit: 1,
  })

  const current = existing.docs[0]

  if (current && !force) {
    // Still attach the hero image if it's missing — that's a gap rather than
    // an edit, so filling it can't clobber anything an editor chose.
    if (!current.heroImage) {
      const heroImage = await heroImageId(doc)
      if (heroImage) {
        await payload.update({
          collection: "legal-documents",
          id: current.id,
          data: { heroImage },
        })
        console.log(`Attached hero image to "${doc.title}".`)
      }
    }

    console.log(
      `Skipping "${doc.title}" — already exists. Re-run with --force to overwrite.`
    )
    continue
  }

  const data = { ...toPayloadData(doc), heroImage: await heroImageId(doc) }

  if (current) {
    await payload.update({
      collection: "legal-documents",
      id: current.id,
      data,
    })
    console.log(`Overwrote "${doc.title}" (${data.sections.length} sections).`)
    continue
  }

  await payload.create({ collection: "legal-documents", data })
  console.log(`Created "${doc.title}" (${data.sections.length} sections).`)
}

console.log("Done.")
process.exit(0)
