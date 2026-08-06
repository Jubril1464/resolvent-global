import type { Metadata } from "next";

import { ComingSoon } from "@/components/content/coming-soon";

export const metadata: Metadata = {
  title: "Certifications",
  robots: { index: false, follow: true },
};

export default function CertificationsPage() {
  return (
    <ComingSoon
      title="Certifications"
      description="Our certifications and credentials page is on the way."
    />
  );
}
