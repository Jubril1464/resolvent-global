import type { CollectionConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/** Home page compact credibility strip. */
export const Credentials: CollectionConfig = {
  slug: "credentials",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  defaultSort: "order",
  hooks: {
    afterChange: [makeRevalidateHook("credentials")],
    afterDelete: [makeRevalidateHook("credentials")],
  },
  fields: [
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Display order across the site — lower numbers first.",
      },
    },
    { name: "icon", type: "select", required: true, options: ICON_SELECT_OPTIONS },
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "text", required: true },
  ],
}
