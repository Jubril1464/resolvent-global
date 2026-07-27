import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA } from "@/components/content/nav/nav-config";

type CtaProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Closing call-to-action band. Sits at the end of the page content, right
 * before the footer. Copy is overridable per page; defaults match the home
 * page usage.
 */
export function Cta({
  title = "Ready to Discuss a Technical Challenge?",
  description = "Request a proposal or send us your project details. We aim to respond within 24–48 business hours.",
  primaryLabel = "Request a Proposal",
  secondaryLabel = "Send Project Details",
  secondaryHref = "/contact",
}: CtaProps = {}) {
  return (
    <section className="bg-brand py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/85">{description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={NAV_CTA.href}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            )}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-2 border-white bg-white px-8 text-base font-semibold text-brand hover:bg-white/90 hover:text-brand"
            )}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
