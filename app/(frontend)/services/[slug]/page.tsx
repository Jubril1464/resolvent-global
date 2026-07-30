import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, getServices } from "@/lib/get-services";
import { ServiceDetailPage } from "@/components/content/service-detail-page";

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  return { title: service?.fullTitle ?? "Service" };
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const services = await getServices();
  const otherServices = services.filter((s) => s.slug !== slug);

  return <ServiceDetailPage service={service} otherServices={otherServices} />;
}
