import type { CollectionConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * The site's legal documents — the Privacy Notice and the Terms of Use.
 *
 * A collection rather than one global per document: both are the same shape
 * rendered through the same layout (`components/content/legal`), so they're
 * two rows of one table, not two bespoke pages.
 *
 * `slug` is a fixed select, not free text. Every document here needs a route
 * to render on, and adding a route is a code change — so letting an editor
 * invent a slug would only ever produce content that nothing displays.
 *
 * A caution for editors, which is also why `lastUpdated` is a required field:
 * this is operative legal text. Section wording should change on legal advice
 * and the "Last updated" date should be moved on in the same edit. The
 * approved transcriptions live in `lib/privacy-notice.ts` and
 * `lib/terms-of-use.ts` and can be re-seeded with `npm run seed:legal` if a
 * document here is ever damaged.
 */
export const LegalDocuments: CollectionConfig = {
  slug: "legal-documents",
  labels: { singular: "Legal Document", plural: "Legal Documents" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "lastUpdated"],
    description:
      "Privacy Notice and Terms of Use. These are legal documents — change section wording only on legal advice, and move the 'Last updated' date on in the same edit.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [makeRevalidateHook("legal-documents")],
    afterDelete: [makeRevalidateHook("legal-documents")],
  },
  fields: [
    {
      name: "slug",
      type: "select",
      required: true,
      unique: true,
      options: [
        { label: "Privacy Notice (/privacy-notice)", value: "privacy-notice" },
        { label: "Terms of Use (/terms-of-use)", value: "terms-of-use" },
      ],
      admin: {
        position: "sidebar",
        description:
          "Which route this document renders on. Each route can only have one document.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              admin: {
                description:
                  'Page heading and breadcrumb label, e.g. "Privacy Notice".',
              },
            },
            {
              name: "subtitle",
              type: "text",
              required: true,
              admin: { description: "One line directly under the heading." },
            },
            {
              name: "heroLead",
              type: "textarea",
              required: true,
              admin: {
                description:
                  "Short summary paragraph in the hero. Introductory copy, not operative terms — the document itself starts below.",
              },
            },
            {
              name: "metaDescription",
              type: "textarea",
              required: true,
              admin: {
                description:
                  "Search-result and social-share description. Aim for roughly 150-160 characters.",
              },
            },
            {
              name: "heroTagline",
              type: "array",
              labels: { singular: "Line", plural: "Lines" },
              admin: {
                description:
                  "Brand line-up set to the right of the hero, one row per line. Hidden on small screens. Leave empty for none.",
              },
              fields: [{ name: "value", type: "text", required: true }],
            },
            {
              name: "heroMedia",
              type: "select",
              required: true,
              defaultValue: "globe",
              options: [
                { label: "Drawn globe (no photograph)", value: "globe" },
                { label: "Photograph", value: "image" },
              ],
              admin: {
                description:
                  "The hero backdrop. The drawn globe is generated in code and needs no upload.",
              },
            },
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
              admin: {
                condition: (data) => data?.heroMedia === "image",
                description:
                  "Wide landscape image. A dark overlay sits over it, so choose something that reads well behind white text.",
              },
            },
          ],
        },
        {
          label: "Dates",
          fields: [
            {
              name: "effectiveDate",
              type: "date",
              required: true,
              admin: {
                date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" },
                description: "Shown at the end of the introduction.",
              },
            },
            {
              name: "lastUpdated",
              type: "date",
              required: true,
              admin: {
                date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" },
                description:
                  "Shown above the introduction and published to search engines as the revision date. Move this on whenever the wording changes — both documents promise a current date.",
              },
            },
          ],
        },
        {
          label: "Introduction",
          fields: [
            { name: "introHeading", type: "text", required: true },
            {
              name: "introParagraphs",
              type: "array",
              required: true,
              minRows: 1,
              labels: { singular: "Paragraph", plural: "Paragraphs" },
              fields: [{ name: "value", type: "textarea", required: true }],
            },
          ],
        },
        {
          label: "Key Points",
          fields: [
            { name: "glanceHeading", type: "text", required: true },
            {
              name: "glanceItems",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 6,
              labels: { singular: "Point", plural: "Points" },
              admin: {
                description:
                  "The plain-language summary row. Six points fill the row exactly. Each is a link into the section that says the same thing in full — nothing here is the operative wording.",
              },
              fields: [
                {
                  name: "icon",
                  type: "select",
                  required: true,
                  options: ICON_SELECT_OPTIONS,
                },
                {
                  name: "text",
                  type: "text",
                  required: true,
                  admin: { description: "Keep to one short sentence." },
                },
                {
                  name: "sectionNumber",
                  type: "number",
                  required: true,
                  min: 1,
                  admin: {
                    description:
                      "Which numbered section this links to. Sections are numbered by their order on the Sections tab, so this follows any reordering there.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Sections",
          fields: [
            { name: "detailHeading", type: "text", required: true },
            {
              name: "detailLead",
              type: "text",
              required: true,
              admin: {
                description: "One line above the list of sections.",
              },
            },
            {
              name: "sections",
              type: "array",
              required: true,
              minRows: 1,
              labels: { singular: "Section", plural: "Sections" },
              admin: {
                initCollapsed: true,
                description:
                  "The document itself. Sections are numbered automatically by their order here, so reordering renumbers them — check the Key Points tab still points at the right sections afterwards.",
              },
              fields: [
                { name: "title", type: "text", required: true },
                {
                  name: "navLabel",
                  type: "text",
                  required: true,
                  admin: {
                    description:
                      "Shorter label for the sidebar index, which has far less room. Two or three words.",
                  },
                },
                {
                  name: "blocks",
                  type: "blocks",
                  required: true,
                  minRows: 1,
                  admin: {
                    description:
                      "The section body, in order. Write [Privacy Notice](/privacy-notice) to link to another page.",
                  },
                  blocks: [
                    {
                      slug: "paragraph",
                      labels: { singular: "Paragraph", plural: "Paragraphs" },
                      fields: [
                        { name: "text", type: "textarea", required: true },
                      ],
                    },
                    {
                      slug: "list",
                      labels: { singular: "Bullet list", plural: "Bullet lists" },
                      fields: [
                        {
                          name: "intro",
                          type: "textarea",
                          admin: {
                            description:
                              "Optional lead-in sentence above the bullets.",
                          },
                        },
                        {
                          name: "items",
                          type: "array",
                          required: true,
                          minRows: 1,
                          labels: { singular: "Bullet", plural: "Bullets" },
                          fields: [
                            { name: "value", type: "textarea", required: true },
                          ],
                        },
                      ],
                    },
                    {
                      slug: "contact",
                      labels: { singular: "Contact card", plural: "Contact cards" },
                      // No fields: the card renders LEGAL_CONTACT, so the
                      // address and phone number can't drift between the two
                      // documents or away from the footer.
                      fields: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Side Card & Callout",
          fields: [
            {
              name: "sideCardIcon",
              type: "select",
              required: true,
              options: ICON_SELECT_OPTIONS,
            },
            { name: "sideCardTitle", type: "text", required: true },
            { name: "sideCardBody", type: "textarea", required: true },
            {
              name: "sideCardCtaLabel",
              type: "text",
              required: true,
              admin: { description: "Button label. The button links to /contact." },
            },
            {
              name: "calloutIcon",
              type: "select",
              required: true,
              options: ICON_SELECT_OPTIONS,
            },
            { name: "calloutTitle", type: "text", required: true },
            {
              name: "calloutBody",
              type: "textarea",
              required: true,
              admin: {
                description:
                  "Closing band under the sections. Write [contact us](/contact) to link to another page.",
              },
            },
          ],
        },
      ],
    },
  ],
}
