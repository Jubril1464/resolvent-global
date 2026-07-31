import {
  Activity,
  ChartColumn,
  ClipboardCheck,
  Cpu,
  Dna,
  Droplet,
  Droplets,
  Factory,
  FileText,
  Flame,
  FlaskConical,
  Gauge,
  Globe,
  Handshake,
  HardHat,
  Landmark,
  Leaf,
  Link2,
  Mail,
  MapPin,
  Microscope,
  Mountain,
  Phone,
  Settings2,
  Shield,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

/**
 * Every lucide icon currently used anywhere on the site. CMS icon fields
 * store one of these names as a plain string; this is the single lookup
 * that resolves it back to the actual component at render time. Also the
 * source of truth for the Payload `select` enum in icon-options.ts, so the
 * two can never drift apart.
 */
export const ICON_MAP = {
  Activity,
  ChartColumn,
  ClipboardCheck,
  Cpu,
  Dna,
  Droplet,
  Droplets,
  Factory,
  FileText,
  Flame,
  FlaskConical,
  Gauge,
  Globe,
  Handshake,
  HardHat,
  Landmark,
  Leaf,
  Link2,
  Mail,
  MapPin,
  Microscope,
  Mountain,
  Phone,
  Settings2,
  Shield,
  ShieldCheck,
  Wrench,
  Zap,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof ICON_MAP

/**
 * Resolves a stored icon name to its component. Falls back to a visibly
 * generic icon (rather than throwing or rendering nothing) if the name has
 * drifted out of sync with ICON_MAP — e.g. an icon removed from the map
 * after already being saved on a document.
 */
export function resolveIcon(name: string): LucideIcon {
  const icon = ICON_MAP[name as IconName]
  if (!icon) {
    console.warn(`[icon-map] Unknown icon "${name}" — falling back to Shield.`)
    return Shield
  }
  return icon
}
