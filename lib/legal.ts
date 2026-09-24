/**
 * Shared shape for the site's legal documents — the Privacy Notice and the
 * Terms of Use.
 *
 * Both are transcribed from approved source documents in `docs/` and share
 * one layout (see `components/content/legal`), so they're modelled as data
 * rather than as two hand-built pages: a numbered section list, a
 * plain-language summary row, and the surrounding copy.
 *
 * This is the shape the page renders from. It is produced by
 * `lib/get-legal-document.ts`, which reads the `legal-documents` Payload
 * collection and normalises it — the components never see Payload's generated
 * types. The matching literals in `lib/privacy-notice.ts` and
 * `lib/terms-of-use.ts` are the transcription of the source documents and the
 * input to `npm run seed:legal`.
 */

import type { IconName } from "./icon-map"

/**
 * Contact details as published in both source documents. Structured rather
 * than stored as a prose blob so the email and phone can be real links.
 */
export const LEGAL_CONTACT = {
  legalName: "Resolvent Global Energy Process & Carbon Ltd",
  tradingAs: "Trading as Resolvent Global",
  address:
    "5 Baptist Close, Foreshore Zone, Magodo Phase 2, Shangisha, Lagos, Nigeria",
  email: "info@resolventglobal.com",
  website: "resolventglobal.com",
  phone: "+61 480 171 213",
}

/**
 * Body copy supports one piece of inline markup, `[label](/href)`, so a
 * section can link to another page — the Terms source document requires
 * section 13 to link to the Privacy Notice. Rendered by `RichText`.
 */
export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; intro?: string; items: string[] }
  /** Renders the `LEGAL_CONTACT` details card. */
  | { kind: "contact" }

export type LegalSection = {
  /** Anchor target; also what the side navigation and summary tiles link to. */
  id: string
  /** Numbering as it appears in the source document. */
  number: number
  title: string
  /** Shorter label for the side navigation, which has far less room. */
  navLabel: string
  blocks: LegalBlock[]
}

/**
 * One tile in the plain-language summary row.
 *
 * Icons are stored as names from ICON_MAP rather than as components, so the
 * same value round-trips through the CMS and is resolved with `resolveIcon`
 * at render time.
 */
export type GlanceItem = {
  icon: IconName
  text: string
  /** The section stating the same thing in full. */
  sectionId: string
}

/**
 * Hero backdrop. Kept as a discriminated union of plain data rather than a
 * `ReactNode` so the document files stay free of JSX.
 */
export type LegalHeroMedia =
  | { variant: "globe" }
  | { variant: "image"; src: string; alt: string }

export type LegalDocument = {
  /** Route slug — drives the canonical URL and the JSON-LD `url`. */
  slug: string
  title: string
  subtitle: string
  metaDescription: string
  /** Lead paragraph shown in the hero, beneath the subtitle. */
  heroLead: string
  /** Brand line-up set to the right of the hero, one array entry per line. */
  heroTagline: string[]
  heroMedia: LegalHeroMedia
  effectiveDate: string
  lastUpdated: string
  /** ISO form of `lastUpdated`, for `<time dateTime>` and structured data. */
  lastUpdatedIso: string
  intro: { heading: string; paragraphs: string[] }
  glance: { heading: string; items: GlanceItem[] }
  detail: { heading: string; lead: string; sections: LegalSection[] }
  sideCard: { icon: IconName; title: string; body: string; ctaLabel: string }
  callout: { icon: IconName; title: string; body: string }
}
