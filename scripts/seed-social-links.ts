/**
 * Sets the footer's social profile links.
 *
 * Run with: npm run seed:social-links
 *
 * Declarative and re-runnable — always applies the list below. Platform names
 * must match the select options in globals/Footer.ts, which in turn must have
 * a brand glyph in components/content/footer/social-links.tsx; the check below
 * fails loudly rather than letting a profile render as a blank square.
 */
import { getPayload } from "payload"

import config from "../payload.config"

/** Must stay in sync with the `platform` select and BRAND_PATHS. */
const KNOWN_PLATFORMS = ["LinkedIn", "Facebook", "Instagram", "X"] as const

const SOCIAL_LINKS = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/resolvent-global/" },
  { platform: "Facebook", url: "https://www.facebook.com/resolventglobal" },
  { platform: "Instagram", url: "https://www.instagram.com/resolventglobal/" },
  { platform: "X", url: "https://x.com/resolventglobal" },
] as const

const unknown = SOCIAL_LINKS.filter(
  (link) => !KNOWN_PLATFORMS.includes(link.platform)
)
if (unknown.length > 0) {
  console.error(
    `Refusing to continue — no brand glyph for: ${unknown.map((l) => l.platform).join(", ")}`
  )
  process.exit(1)
}

const badUrls = SOCIAL_LINKS.filter((link) => !link.url.startsWith("https://"))
if (badUrls.length > 0) {
  console.error(
    `Refusing to continue — these URLs are not absolute https: ${badUrls.map((l) => l.url).join(", ")}`
  )
  process.exit(1)
}

const payload = await getPayload({ config })

await payload.updateGlobal({
  slug: "footer",
  data: { socialLinks: SOCIAL_LINKS.map((link) => ({ ...link })) },
})

const footer = await payload.findGlobal({ slug: "footer" })
console.log(`Set ${footer.socialLinks?.length ?? 0} social profiles:`)
for (const link of footer.socialLinks ?? []) {
  console.log(`  ${link.platform.padEnd(10)} ${link.url}`)
}

process.exit(0)
