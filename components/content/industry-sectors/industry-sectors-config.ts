import {
  ChartColumn,
  Droplets,
  FlaskConical,
  Globe,
  Landmark,
  Mountain,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type IndustrySector = {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
};

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    icon: Zap,
    title: "Energy, Oil & Gas",
    description:
      "Engineering support to improve the efficiency, reliability and overall performance of energy, oil and gas operations through targeted process and utility-system reviews.",
    capabilities: [
      "Process performance reviews",
      "Energy-efficiency studies",
      "Emissions screening",
      "Feasibility inputs",
      "Technology evaluation",
      "Commissioning support",
    ],
  },
  {
    icon: Mountain,
    title: "Mining, Minerals and Resources",
    description:
      "Strategic technical support for mining and resource operations, enabling process improvement, responsible resource management, greater efficiency and stronger environmental performance.",
    capabilities: [
      "Process improvement",
      "Process & equipment design",
      "Remediation concepts",
      "Feasibility studies",
      "Carbon-opportunity screening",
    ],
  },
  {
    icon: ChartColumn,
    title: "Manufacturing and FMCG",
    description:
      "Process and utility optimization to maximise output, strengthen operational stability, ensure consistent product quality and reduce energy, water and material use.",
    capabilities: [
      "Bottleneck analysis",
      "System reviews",
      "SOP development",
      "Data-driven assessment",
      "Carbon-reduction screening",
    ],
  },
  {
    icon: Droplets,
    title: "Water and Wastewater",
    description:
      "Technical support for industrial, municipal and decentralised water and wastewater systems, from needs assessment and treatment-process selection to performance review, pilot-study design and optimisation.",
    capabilities: [
      "Treatment-process selection",
      "Pilot-study design",
      "Advanced treatment concepts",
      "Water-reuse opportunities",
      "Operator training",
    ],
  },
  {
    icon: Landmark,
    title: "Public Agencies, NGOs and Educational Institutions",
    description:
      "Structured technical input for public-interest, development, and institutional projects involving water, sanitation, environment, energy, sustainability, and industrial capability building.",
    capabilities: [
      "Feasibility studies",
      "Programme concept development",
      "Stakeholder documentation",
      "Grant/donor proposals",
      "Technical monitoring",
      "Technical reviews",
      "Research & education initiative",
      "Training",
    ],
  },
  {
    icon: FlaskConical,
    title: "Research, Innovation and Technology",
    description:
      "Support that translates research, innovation and emerging technologies into commercial solutions implementable in industrial environments.",
    capabilities: [
      "Applied-research translation",
      "Pilot design",
      "Technology validation",
      "Scale-up planning",
      "Techno-economic analysis",
      "Life cycle analysis",
      "Grant support",
    ],
  },
  {
    icon: Globe,
    title: "Diaspora Investors and Startups",
    description:
      "Technical and project support for investors, founders, and early-stage ventures assessing opportunities in energy, industrial processing, water, environment, carbon, and sustainability.",
    capabilities: [
      "Opportunity screening",
      "Technology due diligence",
      "Feasibility studies",
      "Pilot planning",
      "Investment support documentation",
    ],
  },
];
