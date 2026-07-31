/**
 * One-time seed for the 3 globals (navigation, footer, contact-page),
 * migrating nav-config.ts, footer-config.ts and contact-config.ts.
 *
 * Run with: npm run seed:globals
 *
 * Idempotent — skips a global if it already has content, so it's safe to
 * re-run without clobbering a real admin edit.
 *
 * Also applies the pre-agreed fix for the footer's stale "Services" links
 * (they pointed at placeholder routes like /services/process-engineering
 * that don't match any real service) — seeded here with the 3 real service
 * slugs instead.
 */
import { getPayload } from "payload"

import config from "../payload.config"

const payload = await getPayload({ config })

const navigation = await payload.findGlobal({ slug: "navigation" })
if (navigation.navLinks && navigation.navLinks.length > 0) {
  console.log("Skipping navigation — already seeded.")
} else {
  await payload.updateGlobal({
    slug: "navigation",
    data: {
      navLinks: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/industries", label: "Industries" },
        { href: "/projects", label: "Projects" },
        { href: "/certifications", label: "Certifications" },
        { href: "/contact", label: "Contact" },
      ],
      ctaHref: "/request-proposal",
      ctaLabel: "Request Proposal",
    },
  })
  console.log("Seeded navigation.")
}

const footer = await payload.findGlobal({ slug: "footer" })
if (footer.servicesLinks && footer.servicesLinks.length > 0) {
  console.log("Skipping footer — already seeded.")
} else {
  await payload.updateGlobal({
    slug: "footer",
    data: {
      // Fixed per the pre-agreed decision: the old FOOTER_SERVICES_LINKS
      // pointed at 6 placeholder routes that never matched a real service
      // route. These 3 are the real `services` slugs.
      servicesLinks: [
        { href: "/services/operations", label: "Operations" },
        {
          href: "/services/carbon-energy-investment-advisory",
          label: "Carbon, energy & investment",
        },
        {
          href: "/services/capability-digital-technical-products",
          label: "Capability products",
        },
      ],
      legalLinks: [
        { href: "/privacy-notice", label: "Privacy Notice" },
        { href: "/terms-of-use", label: "Terms of Use" },
      ],
      contactEmail: "info@resolventglobal.com",
      contactPhone: "[To be confirmed]",
      contactLocation: "Nigeria",
    },
  })
  console.log("Seeded footer.")
}

const contactPage = await payload.findGlobal({ slug: "contact-page" })
if (contactPage.contactInfoItems && contactPage.contactInfoItems.length > 0) {
  console.log("Skipping contact-page — already seeded.")
} else {
  await payload.updateGlobal({
    slug: "contact-page",
    data: {
      contactInfoItems: [
        { icon: "Mail", label: "Email us at", value: "info@resolventglobal.com" },
        {
          icon: "Phone",
          label: "Phone / WhatsApp",
          value: "+2348063239162, +61480171213, +1(785) 393-0542, +1(803)463-7821",
        },
        { icon: "Link2", label: "Connect on LinkedIn", value: "Resolvent Global" },
      ],
      expectSteps: [
        {
          step: "01",
          title: "We review your message",
          description:
            "A technical team member reads your inquiry personally — no auto-responses.",
        },
        {
          step: "02",
          title: "We respond in less than 48h",
          description:
            "Acknowledgement with a relevant first response or a request for more detail.",
        },
        {
          step: "03",
          title: "Scoping conversation",
          description:
            "A brief call or email exchange to clarify scope and confirm fit.",
        },
        {
          step: "04",
          title: "Proposal or next step",
          description: "A clear proposal or recommendation on how best to proceed.",
        },
      ],
    },
  })
  console.log("Seeded contact-page.")
}

process.exit(0)
