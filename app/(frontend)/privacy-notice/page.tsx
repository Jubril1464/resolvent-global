import type { Metadata } from "next";

import { ComingSoon } from "@/components/content/coming-soon";

export const metadata: Metadata = {
  title: "Privacy Notice",
  robots: { index: false, follow: true },
};

export default function PrivacyNoticePage() {
  return (
    <ComingSoon
      title="Privacy Notice"
      description="Our privacy notice is being finalised and will be published here shortly."
    />
  );
}
