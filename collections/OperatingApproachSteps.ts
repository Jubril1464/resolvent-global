import type { CollectionConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/** About page Discover / Diagnose / Model / Deliver / Support sequence. */
export const OperatingApproachSteps: CollectionConfig = {
  slug: "operating-approach-steps",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["step", "title"],
  },
  defaultSort: "step",
  hooks: {
    afterChange: [makeRevalidateHook("operating-approach-steps")],
    afterDelete: [makeRevalidateHook("operating-approach-steps")],
  },
  fields: [
    {
      name: "step",
      type: "number",
      required: true,
      unique: true,
      admin: {
        description: "Both the displayed step number and the sort order.",
      },
    },
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
}
