import { Link2, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { SERVICE_DETAILS } from "@/components/content/service-detail/service-detail-config";
import { INDUSTRY_SECTORS } from "@/components/content/industry-sectors/industry-sectors-config";

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: Mail, label: "Email us at", value: "info@resolventglobal.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+2348063239162, +61480171213, +1(785) 393-0542, +1(803)463-7821" },
  { icon: Link2, label: "Connect on LinkedIn", value: "Resolvent Global" },
];

export type ExpectStep = {
  step: string;
  title: string;
  description: string;
};

export const EXPECT_STEPS: ExpectStep[] = [
  {
    step: "01",
    title: "We review your message",
    description:
      "A technical team member reads your inquiry personally — no auto-responses.",
  },
  {
    step: "02",
    title: "We respond in less than 48h",
    description:
      "Acknowledgement with a relevant first response or a request for more detail.",
  },
  {
    step: "03",
    title: "Scoping conversation",
    description:
      "A brief call or email exchange to clarify scope and confirm fit.",
  },
  {
    step: "04",
    title: "Proposal or next step",
    description: "A clear proposal or recommendation on how best to proceed.",
  },
];

// Reuse the same service/industry names already established elsewhere on
// the site, so this dropdown can never drift out of sync with them.
export const SERVICE_OPTIONS = SERVICE_DETAILS.map((service) => service.title);
export const INDUSTRY_OPTIONS = INDUSTRY_SECTORS.map((sector) => sector.title);
