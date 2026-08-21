import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, getServices } from "@/lib/get-services";
import { ServiceDetailPage } from "@/components/content/service-detail-page";

type RouteParams = { params: Promise<{ slug: string }> };

/**
 * Every other page on this site is prerendered at build time; these detail
 * pages were the only ones left rendering on demand, which meant they were
 * also the only ones hitting the database at request time. The slug set is
 * small and fully known, so prerender them alongside everything else.
 */
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.fullTitle,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.fullTitle,
      description: service.intro,
    },
  };
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
