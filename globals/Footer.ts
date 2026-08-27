import type { GlobalConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/** Site-wide footer: services/legal link columns + contact details. */
export const Footer: GlobalConfig = {
  slug: "footer",
  hooks: {
    afterChange: [makeRevalidateHook("footer")],
  },
  fields: [
    {
      name: "servicesLinks",
      type: "array",
      required: true,
      fields: [
        { name: "href", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "legalLinks",
      type: "array",
      required: true,
      fields: [
        { name: "href", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      labels: { singular: "Social profile", plural: "Social profiles" },
      admin: {
        description:
          "Shown as icons in the footer, and published as schema.org sameAs so search engines can tie the profiles to the business. Order here is the display order.",
      },
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          // A fixed list because each platform needs a hand-drawn brand
          // glyph in social-links.tsx — lucide removed its brand icons, so
          // a free-text platform would have no icon to render.
          options: ["LinkedIn", "Facebook", "Instagram", "X"],
        },
        {
          name: "url",
          type: "text",
          required: true,
          admin: { description: "Full profile URL, including https://" },
        },
      ],
    },
    { name: "contactEmail", type: "email", required: true },
    { name: "contactPhone", type: "text", required: true },
    {
      name: "addresses",
      type: "array",
      required: true,
      labels: { singular: "Address", plural: "Addresses" },
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
  ],
}
