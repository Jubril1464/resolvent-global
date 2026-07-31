import type { CollectionConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * /industries page sector list: one icon-panel + capability card per
 * sector.
 */
export const IndustrySectors: CollectionConfig = {
  slug: "industry-sectors",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  defaultSort: "order",
  hooks: {
    afterChange: [makeRevalidateHook("industry-sectors")],
    afterDelete: [makeRevalidateHook("industry-sectors")],
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
    { name: "description", type: "textarea", required: true },
    {
      name: "capabilities",
      type: "array",
      required: true,
      fields: [{ name: "value", type: "text", required: true }],
    },
  ],
}
