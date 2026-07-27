export type FooterLink = {
  href: string
  label: string
}

export const FOOTER_SERVICES_LINKS: FooterLink[] = [
  { href: "/services/process-engineering", label: "Process Engineering" },
  { href: "/services/energy", label: "Energy" },
  { href: "/services/water-wastewater", label: "Water, Wastewater" },
  { href: "/services/industrial-project", label: "Industrial Project" },
  {
    href: "/services/digital-data-driven-engineering",
    label: "Digital and Data-Driven Engineering",
  },
  { href: "/services/training", label: "Training" },
]

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { href: "/privacy-notice", label: "Privacy Notice" },
  { href: "/terms-of-use", label: "Terms of Use" },
]

export const FOOTER_CONTACT = {
  email: "info@resolventglobal.com",
  phone: "[To be confirmed]",
  location: "Nigeria",
}
