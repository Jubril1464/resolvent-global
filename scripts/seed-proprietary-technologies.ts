/**
 * Seeds the Proprietary Technologies page: the `proprietary-technologies`
 * collection (the 3 approved IP portfolio entries), the
 * `proprietary-technologies-page` global (all page copy), and the nav link.
 *
 * Run with: npm run seed:proprietary-technologies
 *
 * Every string below is verbatim from the handover document — the "Do Not
 * Publish" rules mean nothing here may be paraphrased, embellished or
 * extended without Resolvent Global / IP counsel sign-off.
 *
 * Idempotent: skips technologies that already exist, skips the global if it
 * already has content, and skips the nav insert if the link is already there,
 * so re-running never clobbers a real admin edit.
 */
import { getPayload } from "payload"

import config from "../payload.config"

const payload = await getPayload({ config })

const NAV_HREF = "/proprietary-technologies"
const NAV_LABEL = "Proprietary Technologies"

const TECHNOLOGIES = [
  {
    order: 0,
    title: "Microwave System",
    ipStatus: "Patent Pending" as const,
    positioning: "High-temperature industrial heating",
    motif: "waveform" as const,
  },
  {
    order: 1,
    title: "Electrodialysis System",
    ipStatus: "Proprietary Process" as const,
    positioning: "Critical metal hydroxide production",
    motif: "membrane-stack" as const,
  },
  {
    order: 2,
    title: "Separation Technology",
    ipStatus: "Proprietary Process" as const,
    positioning: "Chloride separation",
    motif: "lattice" as const,
  },
]

for (const technology of TECHNOLOGIES) {
  const existing = await payload.find({
    collection: "proprietary-technologies",
    where: { title: { equals: technology.title } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`Skipping "${technology.title}" — already exists.`)
    continue
  }

  await payload.create({ collection: "proprietary-technologies", data: technology })
  console.log(`Created "${technology.title}".`)
}

const page = await payload.findGlobal({ slug: "proprietary-technologies-page" })

if (page?.heroTitle) {
  console.log("Skipping proprietary-technologies-page global — already populated.")
} else {
  await payload.updateGlobal({
    slug: "proprietary-technologies-page",
    data: {
      heroTitle: "Proprietary Technologies",
      heroCaption:
        "Patent-pending and proprietary technology platforms for industrial decarbonisation, resource recovery, advanced separation and process intensification.",
      heroTagline: "Cleaner resources, a stronger tomorrow",
      primaryCtaLabel: "Discuss Technology Collaboration",
      primaryCtaHref: "/contact?type=general&subject=Technology%20Collaboration",
      secondaryCtaLabel: "Request NDA Discussion",
      secondaryCtaHref: "/contact?type=general&subject=NDA%20Discussion",

      portfolioHeading: "Our Technology Portfolio",
      portfolioParagraphs: [
        {
          value:
            "Resolvent Global is developing a portfolio of patent-pending processes and proprietary equipment innovations across CO₂ utilisation, electrochemical systems, water treatment and biomass conversion.",
        },
        {
          value:
            "These technologies are designed to support industrial partners seeking scalable solutions for cleaner production, resource efficiency and high-value process transformation.",
        },
      ],
      collaborationHeading: "Collaboration Opportunities",
      collaborationParagraph:
        "Selected technologies may be considered for licensing, joint development, strategic collaboration or assignment to qualified industrial partners, subject to technical fit, commercial alignment and appropriate confidentiality arrangements.",

      confidentialityTitle: "Confidentiality & Disclosure",
      confidentialityNote:
        "Detailed technical disclosures, process conditions, equipment designs, performance data, drawings, specifications and implementation pathways are reserved. All technology discussions and disclosures are made only under an executed Non-Disclosure Agreement (NDA).",

      portfolioSectionHeading: "Current IP Portfolio",
      portfolioSectionNote:
        "Public positioning only. Technical detail is disclosed under an executed NDA.",
      pathwaysHeading: "Engagement Pathways",
      engagementPathways: [
        {
          icon: "FileText",
          title: "Licensing",
          description:
            "For qualified industrial partners seeking access to selected proprietary or patent-pending technology platforms.",
        },
        {
          icon: "Handshake",
          title: "Joint Development",
          description:
            "For partners interested in co-developing, validating or adapting technologies for defined industrial applications.",
        },
        {
          icon: "Link2",
          title: "Assignment",
          description:
            "For qualified parties seeking acquisition or assignment of selected technology rights, subject to legal, commercial and technical review.",
        },
      ],

      ctaTitle: "Interested in proprietary technology collaboration?",
      ctaDescription:
        "Resolvent Global welcomes serious enquiries from qualified industrial partners, investors and technology organisations. All discussions involving technical disclosure require an executed NDA.",
      contactEmail: "info@resolventglobal.com",
      ctaButtonLabel: "Request NDA Discussion",
      ctaButtonHref: "/contact?type=general&subject=NDA%20Discussion",
    },
  })
  console.log("Populated proprietary-technologies-page global.")
}

/**
 * The handover is explicit: Proprietary Technologies goes immediately before
 * Contact, and Contact stays the final item. Insert relative to Contact
 * rather than at a fixed index, so the position holds even if the rest of the
 * nav is reordered later.
 */
const navigation = await payload.findGlobal({ slug: "navigation" })
const navLinks = navigation.navLinks ?? []

if (navLinks.some((link) => link.href === NAV_HREF)) {
  console.log("Skipping nav insert — Proprietary Technologies link already present.")
} else {
  const contactIndex = navLinks.findIndex((link) => link.href === "/contact")
  const insertAt = contactIndex === -1 ? navLinks.length : contactIndex
  const next = [
    ...navLinks.slice(0, insertAt).map(({ href, label }) => ({ href, label })),
    { href: NAV_HREF, label: NAV_LABEL },
    ...navLinks.slice(insertAt).map(({ href, label }) => ({ href, label })),
  ]

  await payload.updateGlobal({ slug: "navigation", data: { navLinks: next } })
  console.log(`Inserted nav link at position ${insertAt + 1} of ${next.length}.`)
}

console.log("Done.")
process.exit(0)
