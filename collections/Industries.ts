import type { CollectionConfig } from "payload"

import { ICON_SELECT_OPTIONS } from "@/lib/icon-options"
import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * Home page industries tab-explorer (icon + label list on the left,
 * description panel on the right).
 */
export const Industries: CollectionConfig = {
  slug: "industries",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "tabId", "order"],
  },
  defaultSort: "order",
  hooks: {
    afterChange: [makeRevalidateHook("industries")],
    afterDelete: [makeRevalidateHook("industries")],
  },
  fields: [
    {
      name: "tabId",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Stable identifier for the homepage tab/accessibility ids — not a URL.",
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
    { name: "icon", type: "select", required: true, options: ICON_SELECT_OPTIONS },
    { name: "label", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "image",
      type: "text",
      required: true,
      admin: {
        description: "Path under /public, e.g. /images/mining.jpg",
      },
    },
  ],
}
