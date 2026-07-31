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
    { name: "contactEmail", type: "email", required: true },
    { name: "contactPhone", type: "text", required: true },
    { name: "contactLocation", type: "text", required: true },
  ],
}
