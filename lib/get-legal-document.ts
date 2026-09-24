import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"
import type { IconName } from "@/lib/icon-map"
import type {
  LegalBlock,
  LegalDocument,
  LegalHeroMedia,
  LegalSection,
} from "@/lib/legal"
import type { LegalDocument as PayloadLegalDocument } from "@/payload-types"

/** The routes a legal document can render on. */
export type LegalSlug = PayloadLegalDocument["slug"]

/**
 * Reads a legal document from the CMS and normalises it into the shape the
 * page renders from.
 *
 * The mapping is deliberate rather than incidental. Payload's generated types
 * make almost everything nullable and carry array-row `id`s, and the section
 * numbering is derived from row order rather than stored. Normalising here
 * means the presentation components stay unaware of the CMS, and the numbers
 * can't drift out of step with the order an editor sees in the admin.
 */
export function getLegalDocument(slug: LegalSlug) {
  return unstable_cache(
    async (): Promise<LegalDocument | null> => {
      const payload = await getPayload({ config })
      const result = await payload.find({
        collection: "legal-documents",
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 1,
      })

      const doc = result.docs[0]
      return doc ? toLegalDocument(doc) : null
    },
    ["legal-document", slug],
    { tags: ["legal-documents"] }
  )()
}

/** Every legal document, for the sitemap. */
export const getLegalDocuments = unstable_cache(
  async (): Promise<LegalDocument[]> => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "legal-documents",
      limit: 50,
      depth: 1,
    })
    return result.docs.map(toLegalDocument)
  },
  ["legal-documents-all"],
  { tags: ["legal-documents"] }
)

/**
 * The source documents write dates as "21 September 2026", so render them
 * that way rather than in the viewer's locale — a legal document's published
 * date shouldn't change shape depending on who's reading it.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

function formatDate(value: string) {
  return DATE_FORMAT.format(new Date(value))
}

/** `2026-09-21T00:00:00.000Z` → `2026-09-21`. */
function isoDate(value: string) {
  return new Date(value).toISOString().slice(0, 10)
}

function toHeroMedia(doc: PayloadLegalDocument): LegalHeroMedia {
  const image = typeof doc.heroImage === "object" ? doc.heroImage : null

  // Fall back to the drawn globe when "Photograph" is selected but no usable
  // upload is attached — better than a hero with an empty backdrop.
  if (doc.heroMedia !== "image" || !image?.url) return { variant: "globe" }

  // Deliberately empty: the hero image is a scrimmed backdrop behind the page
  // heading, so announcing it would only repeat what the heading says. The
  // Media document's own `alt` stays as its label in the admin.
  return { variant: "image", src: image.url, alt: "" }
}

function toBlocks(
  blocks: NonNullable<PayloadLegalDocument["sections"]>[number]["blocks"]
): LegalBlock[] {
  return blocks.map((block) => {
    switch (block.blockType) {
      case "list":
        return {
          kind: "list",
          ...(block.intro ? { intro: block.intro } : {}),
          items: block.items.map((item) => item.value),
        }
      case "contact":
        return { kind: "contact" }
      default:
        return { kind: "paragraph", text: block.text }
    }
  })
}

function toSections(doc: PayloadLegalDocument): LegalSection[] {
  return doc.sections.map((section, index) => ({
    // Numbered by position, so reordering in the admin renumbers the document
    // and its anchors together rather than leaving a stored number behind.
    id: `section-${index + 1}`,
    number: index + 1,
    title: section.title,
    navLabel: section.navLabel,
    blocks: toBlocks(section.blocks),
  }))
}

function toLegalDocument(doc: PayloadLegalDocument): LegalDocument {
  const sectionCount = doc.sections.length

  return {
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle,
    metaDescription: doc.metaDescription,
    heroLead: doc.heroLead,
    heroTagline: (doc.heroTagline ?? []).map((line) => line.value),
    heroMedia: toHeroMedia(doc),
    effectiveDate: formatDate(doc.effectiveDate),
    lastUpdated: formatDate(doc.lastUpdated),
    lastUpdatedIso: isoDate(doc.lastUpdated),

    intro: {
      heading: doc.introHeading,
      paragraphs: doc.introParagraphs.map((paragraph) => paragraph.value),
    },

    glance: {
      heading: doc.glanceHeading,
      items: doc.glanceItems.map((item) => ({
        icon: item.icon as IconName,
        text: item.text,
        // Clamped so a point left pointing past the end of the document after
        // sections were removed still lands on a real anchor.
        sectionId: `section-${Math.min(item.sectionNumber, sectionCount)}`,
      })),
    },

    detail: {
      heading: doc.detailHeading,
      lead: doc.detailLead,
      sections: toSections(doc),
    },

    sideCard: {
      icon: doc.sideCardIcon as IconName,
      title: doc.sideCardTitle,
      body: doc.sideCardBody,
      ctaLabel: doc.sideCardCtaLabel,
    },

    callout: {
      icon: doc.calloutIcon as IconName,
      title: doc.calloutTitle,
      body: doc.calloutBody,
    },
  }
}
