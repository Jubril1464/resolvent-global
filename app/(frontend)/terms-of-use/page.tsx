import type { Metadata } from "next";

import { ComingSoon } from "@/components/content/coming-soon";

export const metadata: Metadata = {
  title: "Terms of Use",
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <ComingSoon
      title="Terms of Use"
      description="Our terms of use are being finalised and will be published here shortly."
    />
  );
}
