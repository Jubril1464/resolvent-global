import type { GlobalConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/** Site-wide nav links + the "Request Proposal" CTA button. */
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
      fields: [
        { name: "href", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    { name: "ctaHref", type: "text", required: true },
    { name: "ctaLabel", type: "text", required: true },
  ],
}
