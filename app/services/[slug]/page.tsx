import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SERVICE_DETAILS } from "@/components/content/service-detail/service-detail-config";
import { SERVICE_DETAIL_PAGES } from "@/components/content/service-detail-page/service-detail-page-config";
import { ServiceDetailPage } from "@/components/content/service-detail-page";

export function generateStaticParams() {
  return SERVICE_DETAIL_PAGES.map((page) => ({ slug: page.slug }));
}

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const listing = SERVICE_DETAILS.find((service) => service.slug === slug);

  return { title: listing?.title ?? "Service" };
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const listing = SERVICE_DETAILS.find((service) => service.slug === slug);
  const page = SERVICE_DETAIL_PAGES.find((service) => service.slug === slug);

  if (!listing || !page) {
    notFound();
  }

  return <ServiceDetailPage listing={listing} page={page} />;
}
