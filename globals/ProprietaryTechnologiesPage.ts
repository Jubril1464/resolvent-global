import type { GlobalConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * Copy for the /proprietary-technologies page. The NDA wording lives here
 * rather than in the component so legal/IP review can change it without a
 * deploy — the handover requires final wording to be signed off by Resolvent
 * Global and, where appropriate, an IP advisor.
 */
export const ProprietaryTechnologiesPage: GlobalConfig = {
  slug: "proprietary-technologies-page",
  label: "Proprietary Technologies Page",
  hooks: {
    afterChange: [makeRevalidateHook("proprietary-technologies-page")],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroTitle", type: "text", required: true },
            {
              name: "heroCaption",
              type: "textarea",
              required: true,
              admin: { description: "Sits directly under the page title." },
            },
            {
              name: "heroTagline",
              type: "text",
              admin: {
                description:
                  'Optional short line set beside the hero visual, e.g. "Cleaner resources, a stronger tomorrow".',
              },
            },
            { name: "primaryCtaLabel", type: "text", required: true },
            { name: "primaryCtaHref", type: "text", required: true },
            { name: "secondaryCtaLabel", type: "text", required: true },
            { name: "secondaryCtaHref", type: "text", required: true },
          ],
        },
        {
          label: "Positioning",
          fields: [
            { name: "portfolioHeading", type: "text", required: true },
            {
              name: "portfolioParagraphs",
              type: "array",
              required: true,
              labels: { singular: "Paragraph", plural: "Paragraphs" },
              fields: [{ name: "value", type: "textarea", required: true }],
            },
            { name: "collaborationHeading", type: "text", required: true },
            { name: "collaborationParagraph", type: "textarea", required: true },
          ],
        },
        {
          label: "Confidentiality",
          fields: [
            {
              name: "confidentialityTitle",
              type: "text",
              required: true,
              admin: {
                description:
                  "The handover requires the NDA requirement to be visible next to the portfolio and again next to the contact CTA — this panel is the first of those two placements.",
              },
            },
            { name: "confidentialityNote", type: "textarea", required: true },
          ],
        },
        {
          label: "Portfolio & Pathways",
          fields: [
            { name: "portfolioSectionHeading", type: "text", required: true },
            {
              name: "portfolioSectionNote",
              type: "text",
              admin: {
                description:
                  "Short NDA reminder shown with the portfolio cards. Leave empty to hide it.",
              },
            },
            { name: "pathwaysHeading", type: "text", required: true },
            {
              name: "engagementPathways",
              type: "array",
              required: true,
              minRows: 1,
              fields: [
                { name: "icon", type: "select", required: true, options: ICON_SELECT_OPTIONS },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "CTA",
          fields: [
            { name: "ctaTitle", type: "text", required: true },
            { name: "ctaDescription", type: "textarea", required: true },
            { name: "contactEmail", type: "text", required: true },
            { name: "ctaButtonLabel", type: "text", required: true },
            { name: "ctaButtonHref", type: "text", required: true },
          ],
        },
      ],
    },
  ],
}
