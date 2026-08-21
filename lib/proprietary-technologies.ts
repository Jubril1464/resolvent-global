import type { ProprietaryTechnology } from "@/payload-types"

export type IpStatus = ProprietaryTechnology["ipStatus"]
export type TechnologyMotif = ProprietaryTechnology["motif"]

/**
 * Consistent badge styling per IP status is an explicit handover requirement,
 * so the mapping lives here once rather than being written per card. Colours
 * come from the existing site palette (brand green / gold) rather than a new
 * scheme.
 */
export const IP_STATUS_BADGE: Record<IpStatus, string> = {
  "Patent Pending": "bg-[#D9A441]/15 text-[#8A6420] ring-1 ring-[#D9A441]/40",
  "Proprietary Process": "bg-brand/10 text-brand ring-1 ring-brand/25",
}
