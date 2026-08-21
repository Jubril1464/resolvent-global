import type { GlobalConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * Site-wide nav links + the "Request Proposal" CTA button.
 *
 * Supports exactly one level of nesting: a top-level entry is either a plain
 * link (`href`, no children) or a dropdown group (`children`, no `href` of its
 * own). One level is deliberate — deeper menus are hard to operate on touch
 * and would let an editor build an information architecture the `app/` routes
 * don't actually have.
 */
export const Navigation: GlobalConfig = {
  slug: "navigation",
  hooks: {
    afterChange: [makeRevalidateHook("navigation")],
  },
  fields: [
    {
      name: "navLinks",
      type: "array",
      required: true,
      admin: {
        description:
          "Top-level items, in order. Give an item either an href (plain link) or children (dropdown) — not both.",
      },
      fields: [
        { name: "label", type: "text", required: true },
        {
          name: "href",
          type: "text",
          admin: {
            description:
              "Leave empty when this item is a dropdown. A group heading is not itself a page — add its landing page as the first child instead.",
          },
        },
        {
          name: "children",
          type: "array",
          labels: { singular: "Dropdown link", plural: "Dropdown links" },
          admin: {
            description:
              "Fill this in to turn the item into a dropdown. Leave empty for a plain link.",
          },
          fields: [
            { name: "href", type: "text", required: true },
            { name: "label", type: "text", required: true },
            {
              name: "description",
              type: "text",
              admin: { description: "Optional one-line hint shown under the label." },
            },
          ],
        },
      ],
    },
    { name: "ctaHref", type: "text", required: true },
    { name: "ctaLabel", type: "text", required: true },
  ],
}
