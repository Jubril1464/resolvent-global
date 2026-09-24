import Link from "next/link"
import { ChevronRight, House } from "lucide-react"

import type { LegalDocument } from "@/lib/legal"
import { SITE_NAME, SITE_URL } from "@/lib/site-config"
import { LegalHero } from "./legal-hero"
import { SectionNav } from "./section-nav"
import { SectionAnchors } from "./section-anchors"
import { KeyPoints } from "./key-points"
import { LegalSections } from "./legal-sections"
import { Callout, SideCard } from "./side-card"

/** Id the reading-progress bar measures against. */
const ARTICLE_ID = "legal-document-body"

/**
 * Whole-page layout for a legal document: hero, breadcrumb, sticky section
 * index and the document body.
 *
 * Both legal pages are the same design filled with different text, so they
 * share this shell and differ only in the `LegalDocument` they pass — see
 * `lib/privacy-notice.ts` and `lib/terms-of-use.ts`.
 */
export function LegalPage({ doc }: { doc: LegalDocument }) {
  // Marked up as a dated legal document so search results can show when it
  // was last revised — each document promises a current "Last updated" date,
  // and this is the machine-readable half of that promise.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: doc.title,
    url: `${SITE_URL}/${doc.slug}`,
    dateModified: doc.lastUpdatedIso,
    publisher: { "@type": "Organization", name: SITE_NAME },
  }

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/*
        The scroll-reveal animations start their targets at `opacity: 0` and
        are switched on by an IntersectionObserver. On most pages that's
        harmless, but these are legal documents: if scripting is off, the
        observer never runs and the text would be invisible. Everything is
        already in the DOM, so this just makes it visible.
      */}
      <noscript>
        <style>
          {".lgl-row,.lgl-glance,.lgl-callout{opacity:1!important;animation:none!important}"}
        </style>
      </noscript>

      {/* Turns the section links elsewhere on the page into "open and jump". */}
      <SectionAnchors />

      <LegalHero
        title={doc.title}
        subtitle={doc.subtitle}
        lead={doc.heroLead}
        tagline={doc.heroTagline}
        media={doc.heroMedia}
      />

      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-background"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3.5 text-sm text-foreground/50 lg:px-8">
          <li className="flex items-center gap-2">
            <House aria-hidden className="size-3.5" strokeWidth={1.75} />
            <Link href="/" className="transition-colors hover:text-brand-dark">
              Home
            </Link>
          </li>
          <ChevronRight aria-hidden className="size-3.5 text-foreground/25" />
          <li className="font-medium text-foreground">{doc.title}</li>
        </ol>
      </nav>

      <div className="bg-background py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[17rem_1fr] lg:gap-14 lg:px-8">
          {/* The index is a desktop affordance — on a phone it would push the
              document itself below the fold, and the collapsed rows are
              already one line each to scan. */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SectionNav
                title={doc.title}
                sections={doc.detail.sections}
                articleId={ARTICLE_ID}
              />
              <SideCard {...doc.sideCard} />
            </div>
          </aside>

          <article id={ARTICLE_ID}>
            <p className="text-right text-sm text-foreground/50">
              Last updated:{" "}
              <time
                dateTime={doc.lastUpdatedIso}
                className="font-medium text-foreground/70"
              >
                {doc.lastUpdated}
              </time>
            </p>

            {/* No scroll reveal here — the introduction is above the fold on
                every breakpoint, so it would only ever be seen
                post-animation, and the hero's entrance already covers this
                area. */}
            <section
              id="introduction"
              aria-labelledby="introduction-heading"
              className="mt-2 scroll-mt-24"
            >
              <h2
                id="introduction-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                {doc.intro.heading}
              </h2>
              <span aria-hidden className="mt-3 block h-0.5 w-12 bg-brand" />

              {doc.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 leading-relaxed text-foreground/75"
                >
                  {paragraph}
                </p>
              ))}

              <p className="mt-6 text-sm text-foreground/50">
                Effective date: {doc.effectiveDate}
              </p>
            </section>

            <KeyPoints heading={doc.glance.heading} items={doc.glance.items} />

            <LegalSections
              heading={doc.detail.heading}
              lead={doc.detail.lead}
              sections={doc.detail.sections}
            />

            <Callout {...doc.callout} />
          </article>
        </div>
      </div>
    </main>
  )
}
