import { Dna, Factory, Gauge, type LucideIcon } from "lucide-react"

export type ServiceDetailItem = {
  slug: string
  icon: LucideIcon
  headerClassName: string
  accentColor: string
  title: string
  tagline: string
  intro: string
  checklist: string[]
}

export const SERVICE_DETAILS: ServiceDetailItem[] = [
  {
    slug: "operations",
    icon: Factory,
    headerClassName: "bg-brand",
    accentColor: "#0B7A53",
    title: "Operations, Process & Environmental Performance",
    tagline: "Operate better",
    intro:
      "We help industrial and infrastructure clients improve the way their operations perform by combining process engineering, utilities and energy analysis, water and wastewater expertise, environmental thinking, project support and data-driven decision-making.",
    checklist: [
      "Process optimization audits",
      "Energy-efficiency / utility audits",
      "Water & wastewater treatment advisory",
      "Environmental compliance gap assessment",
      "Project Management / PMO support",
      "Research and development",
    ],
  },
  {
    slug: "carbon-energy-investment-advisory",
    icon: Gauge,
    headerClassName: "bg-[#1B3A5C]",
    accentColor: "#1B3A5C",
    title: "Carbon, Energy & Investment Advisory",
    tagline: "Invest smarter",
    intro:
      "We support organisations, project developers and investors in making technically credible energy, carbon and clean-technology decisions. Our work connects engineering performance with commercial, environmental and implementation considerations.",
    checklist: [
      "Energy efficiency assessments",
      "Carbon opportunity screening",
      "Emissions reduction concept development",
      "Decarbonisation roadmap support",
      "Carbon reporting preparation",
      "Process energy flow review",
      "Sustainability-oriented advisory",
      "Resource efficiency analysis",
    ],
  },
  {
    slug: "capability-digital-technical-products",
    icon: Dna,
    headerClassName: "bg-[#0C203A]",
    accentColor: "#0C203A",
    title: "Capability, Digital & Technical Products",
    tagline: "Build capability",
    intro:
      "We help organisations build the systems, skills, documentation and analytical tools needed to sustain performance and execute technical projects with greater confidence.",
    checklist: [
      "Water/wastewater treatment process selection",
      "Treatment performance review",
      "Adsorption & remediation concepts",
      "Pilot-study design & planning",
      "Advanced treatment technology assessment",
      "Environmental performance improvement",
      "Process optimisation for treatment systems",
      "Technical feasibility support",
    ],
  },
]
