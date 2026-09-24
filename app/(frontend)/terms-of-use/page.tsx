import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/content/legal/legal-page";
import { getLegalDocument } from "@/lib/get-legal-document";
import { SITE_NAME } from "@/lib/site-config";

const SLUG = "terms-of-use";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getLegalDocument(SLUG);
  if (!doc) return { title: "Terms of Use" };

  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `/${doc.slug}` },
    openGraph: {
      title: `${doc.title} | ${SITE_NAME}`,
      description: doc.metaDescription,
    },
  };
}

export default async function TermsOfUsePage() {
  const doc = await getLegalDocument(SLUG);
  // The route only exists to render this document — with nothing in the CMS
  // there is no page, rather than an empty shell.
  if (!doc) notFound();

  return <LegalPage doc={doc} />;
}
