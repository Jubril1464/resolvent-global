import type { CollectionConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

/**
 * The public IP portfolio. Deliberately shallow: per the content handover's
 * "Do Not Publish" rules, each entry carries only a name, an IP status and
 * one line of approved public positioning. There is no detail page and no
 * long-form description field, because the objective is qualified enquiries
 * under NDA — not explaining the technology.
 *
 * Anything resembling process routes, operating windows, equipment design,
 * drawings, specifications or performance data must not be added here.
 */
export const ProprietaryTechnologies: CollectionConfig = {
  slug: "proprietary-technologies",
  labels: {
    singular: "Proprietary Technology",
    plural: "Proprietary Technologies",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "ipStatus", "positioning", "order"],
    description:
      "Public-facing IP portfolio entries. Keep wording high-level — no process routes, conditions, designs or performance data.",
  },
  defaultSort: "order",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [makeRevalidateHook("proprietary-technologies")],
    afterDelete: [makeRevalidateHook("proprietary-technologies")],
  },
  fields: [
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: { description: "Display order in the portfolio — lower first." },
    },
    {
      name: "title",
      type: "text",
      required: true,
      admin: { description: 'Technology area, e.g. "Microwave System".' },
    },
    {
      name: "ipStatus",
      type: "select",
      required: true,
      options: ["Patent Pending", "Proprietary Process"],
      admin: {
        description:
          "Shown as the status badge. Consistent wording is a handover requirement — use only these two values.",
      },
    },
    {
      name: "positioning",
      type: "text",
      required: true,
      admin: {
        description:
          'Approved public positioning only — one short line, e.g. "High-temperature industrial heating".',
      },
    },
    {
      name: "motif",
      type: "select",
      required: true,
      defaultValue: "waveform",
      options: [
        { label: "Waveform (heating / field energy)", value: "waveform" },
        { label: "Membrane stack (electrochemical)", value: "membrane-stack" },
        { label: "Lattice (separation / filtration)", value: "lattice" },
      ],
      admin: {
        description:
          "Abstract visual used on the card. Intentionally non-technical: it illustrates a theme, never a process route.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Optional. Premium industrial or science photography for the card. Leave empty to use the abstract motif above. Do not upload drawings, schematics or annotated equipment images.",
      },
    },
  ],
}
