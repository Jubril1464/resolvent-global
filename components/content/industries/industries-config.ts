import {
  Droplet,
  Factory,
  Flame,
  HardHat,
  Landmark,
  Microscope,
  Mountain,
  type LucideIcon,
} from "lucide-react"

export type Industry = {
  id: string
  label: string
  icon: LucideIcon
  description: string
}

export const INDUSTRIES: Industry[] = [
  {
    id: "energy-oil-gas",
    label: "Energy, Oil & Gas",
    icon: Flame,
    description:
      "Process engineering and optimisation support for energy, oil and gas operations, including process and utility performance reviews, energy-efficiency studies, carbon and emissions-reduction opportunity screening, water and wastewater solutions, technical documentation, feasibility inputs, technology evaluation, commissioning readiness and HSE-conscious project support.",
  },
  {
    id: "water-wastewater",
    label: "Water and Wastewater",
    icon: Droplet,
    description:
      "Technical support for water and wastewater utilities and industrial users, including treatment-process audits, effluent and discharge-compliance reviews, water-reuse and recovery feasibility, energy-efficiency assessments for pumping and aeration systems, technology selection, and commissioning and operational-readiness support.",
  },
  {
    id: "manufacturing-fmcg",
    label: "Manufacturing and FMCG",
    icon: Factory,
    description:
      "Process and utility optimisation for manufacturing and fast-moving consumer goods operations, including production-line efficiency reviews, energy and utility audits, waste-reduction and resource-recovery opportunities, quality and compliance gap assessments, and technical support for plant upgrades and capacity expansion.",
  },
  {
    id: "mining-minerals-resources",
    label: "Mining, Minerals and Resources",
    icon: Mountain,
    description:
      "Engineering and advisory support across the minerals value chain, including process-plant performance reviews, energy and water-use optimisation, tailings and waste-management advisory, environmental and regulatory compliance support, and feasibility and technology evaluation for processing and beneficiation projects.",
  },
  {
    id: "government-ngos-development",
    label: "Government, NGOs and Development",
    icon: Landmark,
    description:
      "Technical advisory for public-sector and development programmes, including infrastructure and utility feasibility studies, policy and regulatory support for energy and environmental initiatives, capacity-building and training design, and independent technical review for donor-funded and multilateral projects.",
  },
  {
    id: "research-innovation-technology",
    label: "Research, Innovation and Technology",
    icon: Microscope,
    description:
      "Applied research and technology-development support, including technology-readiness assessment, process and product scale-up support, pilot-plant design input, intellectual-property and commercialisation advisory, and technical due diligence for early-stage energy and industrial innovations.",
  },
  {
    id: "infrastructure-construction",
    label: "Infrastructure & Construction",
    icon: HardHat,
    description:
      "Technical support for infrastructure and industrial construction projects, including feasibility and concept engineering, utility and energy-system integration, constructability and HSE reviews, commissioning readiness, and technical documentation to support project delivery and handover.",
  },
]
