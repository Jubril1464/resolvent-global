import type { GlobalConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/** Contact page hero contact-details card + "what to expect" steps. */
export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  hooks: {
    afterChange: [makeRevalidateHook("contact-page")],
  },
  fields: [
    {
      name: "contactInfoItems",
      type: "array",
      required: true,
      fields: [
        { name: "icon", type: "select", required: true, options: ICON_SELECT_OPTIONS },
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
    {
      name: "expectSteps",
      type: "array",
      required: true,
      fields: [
        {
          name: "step",
          type: "text",
          required: true,
          admin: { description: "e.g. \"01\" — stored as text to keep the leading zero." },
        },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
}
