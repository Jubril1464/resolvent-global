import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TrainingCourseDetail } from "@/components/content/training-course";
import { TrainingCtaBand } from "@/components/content/training/training-cta-band";
import { Reveal } from "@/components/ui/reveal";
import {
  getTrainingCourseBySlug,
  getTrainingCourses,
} from "@/lib/get-training-courses";
import { getTrainingPage } from "@/lib/get-training-page";
import { courseNoun, enquiryHref } from "@/lib/training";

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const course = await getTrainingCourseBySlug(slug);

  if (!course) {
    return { title: "Training" };
  }

  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/training/${course.slug}` },
    openGraph: {
      title: course.title,
      description: course.summary,
    },
  };
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const course = await getTrainingCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const [page, courses] = await Promise.all([
    getTrainingPage(),
    getTrainingCourses(),
  ]);

  return (
    <>
      <TrainingCourseDetail
        course={course}
        deliveryOptions={page.deliveryOptions}
        totalCourses={courses.length}
      />
      <Reveal>
        <TrainingCtaBand
          title={course.finalCtaTitle}
          description={course.finalCtaDescription}
          primaryLabel={`Enquire About This ${courseNoun(course.category)}`}
          primaryHref={enquiryHref(course.title)}
        />
      </Reveal>
    </>
  );
}
