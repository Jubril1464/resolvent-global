export type OperatingApproachStep = {
  step: number;
  title: string;
  description: string;
};

export const OPERATING_APPROACH_STEPS: OperatingApproachStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "Scoping call, data request, site/process context and success criteria.",
  },
  {
    step: 2,
    title: "Diagnose",
    description:
      "Technical review, operating data analysis, root-cause mapping and risk screening",
  },
  {
    step: 3,
    title: "Model",
    description:
      "Simulation, TEA/LCA, feasibility screening, sensitivity and improvement options.",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "Report, roadmap, SOPs, dashboards, business case and implementation plan",
  },
  {
    step: 5,
    title: "Support",
    description:
      "Retainer, training, vendor engagement, PMO support and continuous improvement.",
  },
];
