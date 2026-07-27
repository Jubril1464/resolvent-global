import { Cpu, FileText, FlaskConical, Shield, type LucideIcon } from "lucide-react"

export type Credential = {
  icon: LucideIcon
  title: string
  subtitle: string
}

export const CREDENTIALS: Credential[] = [
  {
    icon: FileText,
    title: "CAC-Registered Company",
    subtitle: "Corporate Affairs Commission, Nigeria",
  },
  {
    icon: FlaskConical,
    title: "Chemical & Process Engineering",
    subtitle: "Core technical foundation",
  },
  {
    icon: Cpu,
    title: "Data-Driven Approach",
    subtitle: "Technical publications & research background",
  },
  {
    icon: Shield,
    title: "HSE-Conscious Practice",
    subtitle: "Safety embedded in all engagements",
  },
]
