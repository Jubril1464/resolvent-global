/**
 * Hero process-diagram stage labels, derived from the "Graphic direction
 * for web developer" notes in
 * public/Resolvent_Global_Project_Portfolio_Web_Developer_Master.docx.
 *
 * Where the document lists explicit process labels those are used verbatim.
 * P04 is the exception: its graphic direction defines the layout standard
 * rather than a labelled pathway, so its own (already approved) approach
 * pathway is condensed into stage labels instead.
 *
 * Ongoing (O-series) projects render as a cycle rather than a linear flow,
 * matching the circular visual in the supplied O02 reference and staying
 * high-level per the confidentiality rule — no processing steps, routes or
 * method sequences.
 */

export type ProjectDiagramSeed = {
  projectId: string
  stages: string[]
  /** Only used by the circular (Ongoing) variant. */
  centerLabel?: string
}

export const PROJECT_DIAGRAMS: ProjectDiagramSeed[] = [
  {
    projectId: "P01",
    stages: [
      "Equalization",
      "Coagulation / Flocculation",
      "Adsorption Polishing",
      "Filtration",
      "Treated Water",
    ],
  },
  {
    projectId: "P02",
    stages: [
      "Contaminant Profile",
      "Candidate Media Selection",
      "Performance Screening",
      "Regeneration Review",
      "Scale-Up Recommendation",
    ],
  },
  {
    projectId: "P03",
    stages: [
      "Wastewater Tanks",
      "Nanobubble Injection",
      "Oxygen Transfer",
      "Performance Monitoring",
      "Upgrade Pathway",
    ],
  },
  {
    projectId: "P04",
    stages: [
      "Energy Profile",
      "Baseline",
      "Hybrid Options Screen",
      "Feasibility & Constraints",
      "Phased Roadmap",
    ],
  },
  {
    projectId: "P05",
    stages: [
      "Map Process",
      "Analyse Root Causes",
      "Optimise Solutions",
      "Standardise Controls",
      "Improve Performance",
    ],
  },
  {
    projectId: "P06",
    stages: [
      "Water Source",
      "Water Treatment",
      "Renewable Energy",
      "Electrolysis",
      "Hydrogen Use / Storage",
    ],
  },
  {
    projectId: "P07",
    stages: [
      "Cell Stack Review",
      "SOEC / SOFC Routes",
      "Degradation Review",
      "Technology Readiness",
      "Scale-Up Pathway",
    ],
  },
  {
    projectId: "P08",
    stages: [
      "CO₂ / CH₄ Streams",
      "Feedstock Review",
      "Catalyst & Reaction",
      "Value-Added Products",
      "Scale-Up Pathway",
    ],
  },
  {
    projectId: "P09",
    stages: [
      "Selection Criteria",
      "In Operation",
      "Performance Decline",
      "Degradation Review",
      "Regeneration Options",
      "Lifecycle-Cost Decision",
    ],
  },
  {
    projectId: "P10",
    stages: [
      "Initiative Review",
      "TEA Screen",
      "LCA Boundary",
      "Risk & Readiness Review",
      "Decision-Ready Advisory",
    ],
  },
  {
    projectId: "O01",
    centerLabel: "Confidential Development",
    stages: [
      "Circular Resource",
      "Material Opportunity",
      "Industrial Relevance",
      "Environmental Relevance",
      "Applications",
      "Selected Collaboration",
    ],
  },
  {
    projectId: "O02",
    centerLabel: "Evidence-led Screening",
    stages: [
      "Material Sample",
      "Characterisation",
      "Screening",
      "Application Fit",
      "Evaluation & Review",
    ],
  },
  {
    projectId: "O03",
    centerLabel: "Circular Economy Pathway",
    stages: [
      "Selected Residue",
      "Circular Pathway",
      "Industrial Asset",
      "Sustainability Value",
      "Applications",
      "Selected Collaboration",
    ],
  },
]
