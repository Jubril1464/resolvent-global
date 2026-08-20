import type { CollectionConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

const textList = (name: string, description?: string) =>
  ({
    name,
    type: "array" as const,
    fields: [{ name: "value", type: "text" as const, required: true }],
    ...(description ? { admin: { description } } : {}),
  })

/**
 * The project portfolio (P01-P10 delivered capability, O01-O03 ongoing
 * confidential development).
 *
 * Ongoing projects follow the content pack's confidentiality rule: they
 * must NOT carry "Resolvent Global approach", approach pathway,
 * deliverables or target sectors, since those can disclose the IP pathway.
 * They use Disclosure note / Development focus / Applications instead.
 * That's why the two field groups below are both optional — which applies
 * is determined by `category`.
 */
export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["projectId", "title", "category", "statusBadge"],
  },
  defaultSort: "order",
  hooks: {
    afterChange: [makeRevalidateHook("projects")],
    afterDelete: [makeRevalidateHook("projects")],
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Used to build the URL (/projects/{slug})." },
    },
    {
      name: "projectId",
      type: "text",
      required: true,
      unique: true,
      admin: { description: 'Portfolio reference, e.g. "P04" or "O02".' },
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: { description: "Display order in the portfolio — lower first." },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Card",
          fields: [
            {
              name: "category",
              type: "select",
              required: true,
              options: [
                "Water & Effluent",
                "Energy & Process",
                "Clean-Tech",
                "Advisory",
                "Ongoing",
              ],
              admin: {
                description:
                  '"Ongoing" switches the page to the confidential presentation (no approach pathway or deliverables).',
              },
            },
            { name: "title", type: "text", required: true },
            {
              name: "caption",
              type: "text",
              required: true,
              admin: { description: "Short one-line caption for the card and hero." },
            },
            {
              name: "statusBadge",
              type: "text",
              required: true,
              admin: { description: 'e.g. "Market-ready service".' },
            },
            { name: "description", type: "textarea", required: true },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "Optional hero visual. A branded placeholder is shown while empty.",
              },
            },
            textList(
              "diagramStages",
              "Stage labels for the animated hero process diagram. P-series render as a linear flow; Ongoing projects render as a cycle."
            ),
            {
              name: "diagramCenterLabel",
              type: "text",
              admin: {
                description:
                  "Centre label for the circular (Ongoing) diagram. Ignored by the linear variant.",
              },
            },
          ],
        },
        {
          label: "Delivered Capability",
          admin: {
            description:
              "For P-series projects. Leave blank for Ongoing (Ongoing) projects — publishing these would breach the confidentiality rule.",
          },
          fields: [
            { name: "challenge", type: "textarea", required: true },
            { name: "approach", type: "textarea" },
            {
              name: "pathway",
              type: "array",
              labels: { singular: "Stage", plural: "Stages" },
              fields: [
                { name: "stage", type: "number", required: true },
                { name: "step", type: "text", required: true },
                { name: "purpose", type: "textarea", required: true },
              ],
            },
            textList("deliverables", 'The "We deliver" outputs.'),
            textList("targetSectors"),
          ],
        },
        {
          label: "Ongoing (Confidential)",
          admin: {
            description:
              "For O-series projects only. Keep language high-level: no process routes, recipes, material specifications, lab results or commercial strategy.",
          },
          fields: [
            { name: "disclosureNote", type: "textarea" },
            { name: "developmentFocus", type: "textarea" },
            { name: "applications", type: "textarea" },
            textList("applicationsTags"),
          ],
        },
        {
          label: "Value & CTAs",
          fields: [
            {
              name: "valuePillars",
              type: "array",
              required: true,
              labels: { singular: "Pillar", plural: "Pillars" },
              fields: [
                { name: "pillar", type: "text", required: true },
                { name: "meaning", type: "textarea", required: true },
              ],
            },
            {
              name: "primaryCta",
              type: "text",
              required: true,
              admin: { description: "Card CTA label." },
            },
            {
              name: "detailCta",
              type: "text",
              required: true,
              admin: { description: "Detail-page CTA label." },
            },
            { name: "footerCtaHeading", type: "text", required: true },
            { name: "footerCtaSubtext", type: "textarea", required: true },
          ],
        },
      ],
    },
  ],
}
