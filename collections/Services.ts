import type { CollectionConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * The 3 service platforms (Operations; Carbon, Energy & Investment
 * Advisory; Capability, Digital & Technical Products). Consolidates what
 * used to be 3 separate static config files (services-config.ts,
 * service-detail-config.ts, service-detail-page-config.ts) — all three
 * describe the same 3 real entities, joined by `slug`, just with
 * non-overlapping field sets built up incrementally. Grouped into tabs
 * matching that original split so editors see the same mental model, but
 * the underlying document is flat (unnamed tabs don't nest data).
 */
export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "order"],
  },
  defaultSort: "order",
  hooks: {
    afterChange: [makeRevalidateHook("services")],
    afterDelete: [makeRevalidateHook("services")],
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Used to build the URL (/services/{slug}) and to join this service across all three tabs below.",
      },
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Display order across the site — lower numbers first.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Card",
          fields: [
            {
              name: "icon",
              type: "select",
              required: true,
              options: ICON_SELECT_OPTIONS,
            },
            {
              name: "title",
              type: "text",
              required: true,
              admin: {
                description:
                  "Short homepage card title, e.g. \"Operations\".",
              },
            },
            {
              name: "bullets",
              type: "array",
              required: true,
              fields: [{ name: "value", type: "text", required: true }],
            },
          ],
        },
        {
          label: "Listing Band",
          fields: [
            {
              name: "accentColor",
              type: "text",
              required: true,
              admin: { description: "Hex color, e.g. #0B7A53" },
            },
            {
              name: "tagline",
              type: "text",
              required: true,
              admin: { description: "e.g. \"Operate better\"" },
            },
            {
              name: "fullTitle",
              type: "text",
              required: true,
              admin: {
                description:
                  "Long title for the /services listing band and detail-page hero, e.g. \"Operations, Process & Environmental Performance\".",
              },
            },
            {
              name: "intro",
              type: "textarea",
              required: true,
            },
            {
              name: "checklist",
              type: "array",
              required: true,
              fields: [{ name: "value", type: "text", required: true }],
            },
          ],
        },
        {
          label: "Detail Page",
          fields: [
            {
              name: "scope",
              type: "array",
              required: true,
              labels: { singular: "Scope Item", plural: "Scope Items" },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
            {
              name: "deliverables",
              type: "textarea",
              required: true,
            },
            {
              name: "outcomes",
              type: "textarea",
              required: true,
            },
            {
              name: "whoWeWorkWith",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
