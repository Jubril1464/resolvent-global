import { Dna, Factory, Gauge, type LucideIcon } from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  bullets: string[]
  href: string
}

export const SERVICES: Service[] = [
  {
    icon: Factory,
    title: "Operations",
    href: "/services/operations",
    bullets: [
      "Process optimization audits",
      "Energy-efficiency / utility audits",
      "Water & wastewater treatment advisory",
      "Environmental compliance gap assessment",
      "Project Management / PMO support",
      "Research and development",
    ],
  },
  {
    icon: Gauge,
    title: "Carbon, energy & investment",
    href: "/services/carbon-energy-investment",
    bullets: [
      "TEA/LCA for clean-tech projects",
      "Carbon footprint & GHG inventory support",
      "Carbon credit readiness & MRV design",
      "CCUS / utilization concept scoping",
      "Renewable energy + battery feasibility",
    ],
  },
  {
    icon: Dna,
    title: "Capability products",
    href: "/services/capability-products",
    bullets: [
      "Industrial training workshops",
      "Technical due diligence for investors",
      "Grant/tender/proposal writing",
      "SOPs, risk assessments & WHS systems",
      "Digital dashboards / data analytics for operations",
    ],
  },
]

export const SERVICES_CTA = {
  href: "/services",
  label: "View All Services",
}
