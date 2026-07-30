import {
  Handshake,
  Leaf,
  Settings2,
  Shield,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with transparency, honesty and professional responsibility in all client engagements.",
  },
  {
    icon: Settings2,
    title: "Technical Excellence",
    description:
      "We bring rigorous engineering thinking, sound methodology and evidence-based recommendations to every project.",
  },
  {
    icon: Shield,
    title: "Safety & Responsibility",
    description:
      "HSE-conscious practice is embedded in how we approach process analysis, design and advisory work.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We actively consider environmental performance, carbon awareness and resource efficiency in all our technical solutions.",
  },
  {
    icon: Handshake,
    title: "Client Focus",
    description:
      "We listen carefully, communicate clearly and tailor our support to the specific needs and context of each client.",
  },
  {
    icon: Wrench,
    title: "Practical Execution",
    description: "We prioritise actionable and implementable recommendation",
  },
];
