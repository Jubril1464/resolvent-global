import type { Metadata } from "next";

import { ComingSoon } from "@/components/content/coming-soon";

export const metadata: Metadata = {
  title: "Projects",
  robots: { index: false, follow: true },
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      description="A showcase of our project work is on the way."
    />
  );
}
