import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getContactPage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.findGlobal({ slug: "contact-page" })
  },
  ["contact-page"],
  { tags: ["contact-page"] }
)
