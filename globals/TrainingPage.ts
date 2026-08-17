import type { GlobalConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * Shared /training landing-page copy, plus the delivery options that are
 * identical across all 8 offerings (kept here once rather than duplicated
 * onto every course).
 */
export const TrainingPage: GlobalConfig = {
  slug: "training-page",
  hooks: {
    afterChange: [makeRevalidateHook("training-page")],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroTitle", type: "text", required: true },
            { name: "heroDescription", type: "textarea", required: true },
            {
              name: "positioning",
              type: "array",
              required: true,
              labels: { singular: "Paragraph", plural: "Paragraphs" },
              fields: [{ name: "value", type: "textarea", required: true }],
            },
          ],
        },
        {
          label: "Categories",
          fields: [
            {
              name: "categories",
              type: "array",
              required: true,
              admin: {
                description:
                  "Groups the portfolio on the landing page, in this order. `category` must match the value used on each course.",
              },
              fields: [
                {
                  name: "category",
                  type: "select",
                  required: true,
                  options: ["Short Course", "Applied Course", "Integrated Program"],
                },
                {
                  name: "label",
                  type: "text",
                  required: true,
                  admin: { description: 'Plural heading, e.g. "Short Courses".' },
                },
                { name: "caption", type: "text", required: true },
              ],
            },
          ],
        },
        {
          label: "Delivery Options",
          fields: [
            {
              name: "deliveryOptions",
              type: "array",
              required: true,
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "Corporate & CTA",
          fields: [
            { name: "corporateTitle", type: "text", required: true },
            { name: "corporateDescription", type: "textarea", required: true },
            { name: "finalCtaTitle", type: "text", required: true },
            { name: "finalCtaDescription", type: "textarea", required: true },
          ],
        },
      ],
    },
  ],
}
