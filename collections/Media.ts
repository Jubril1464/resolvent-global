import type { CollectionConfig } from "payload"

/**
 * Standard upload-enabled collection backing every image field across the
 * CMS (industry sector photos, and any future upload fields). Storage is
 * Vercel Blob (see the vercelBlobStorage plugin in payload.config.ts) —
 * local disk storage doesn't persist on Vercel's serverless filesystem.
 */
export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Alt text for accessibility.",
      },
    },
  ],
}
