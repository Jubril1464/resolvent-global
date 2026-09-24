import { ChevronRight, Globe, Mail, MapPin, Phone } from "lucide-react"

import { RevealGroup } from "@/components/ui/reveal-group"
import { LEGAL_CONTACT, type LegalBlock, type LegalSection } from "@/lib/legal"
import { ExpandAll } from "./expand-all"
import { RichText } from "./rich-text"

/**
 * The document itself: one native `<details>` per numbered section.
 *
 * Native disclosure rather than a JS accordion — keyboard and screen-reader
 * behaviour come for free, the copy stays in the DOM for search engines and
 * in-page find, and this stays a Server Component. Crucially for a legal
 * document, it also means the whole text is present with JavaScript off;
 * readers just expand the rows themselves.
 *
 * The open/close height animation is the shared `.accordion-item` rule in
 * globals.css; row-level motion is `.lgl-row` / `.lgl-block`.
 */
export function LegalSections({
  heading,
  lead,
  sections,
}: {
  heading: string
  lead: string
  sections: LegalSection[]
}) {
  return (
    <section
      id="detailed-information"
      aria-labelledby="detailed-information-heading"
      className="mt-16 scroll-mt-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            id="detailed-information-heading"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            {heading}
          </h2>
          <span aria-hidden className="mt-3 block h-0.5 w-12 bg-brand" />
        </div>

        <ExpandAll />
      </div>

      <p className="mt-6 text-foreground/70">{lead}</p>

      <RevealGroup className="mt-8 flex flex-col gap-2">
        {sections.map((section, index) => (
          <details
            key={section.id}
            id={section.id}
            data-legal-section
            className="accordion-item lgl-row group/section relative scroll-mt-24 border border-border bg-background transition-colors duration-300 open:border-brand/40 hover:border-brand/30"
            style={{ ["--lgl-i" as string]: index }}
          >
            {/* Accent rail that grows down the row as it opens. */}
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-500 ease-out group-open/section:scale-y-100"
            />

            <summary className="relative flex cursor-pointer list-none items-center gap-4 px-4 py-3.5 outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand sm:px-5">
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/[0.07] text-xs font-semibold tabular-nums text-brand transition-colors duration-300 group-open/section:bg-brand group-open/section:text-brand-foreground"
              >
                {section.number}
              </span>

              <span className="flex-1 text-sm font-medium text-foreground transition-colors duration-300 group-open/section:text-brand-dark sm:text-base">
                {section.title}
              </span>

              <ChevronRight
                aria-hidden
                className="size-4 shrink-0 text-foreground/35 transition-transform duration-300 ease-out group-open/section:rotate-90 group-open/section:text-brand"
                strokeWidth={2}
              />
            </summary>

            <div className="relative border-t border-border/70 bg-[#FAFBFC] px-4 py-5 sm:px-5 sm:pl-16">
              {section.blocks.map((block, blockIndex) => (
                <Block
                  key={blockIndex}
                  block={block}
                  index={blockIndex}
                  first={blockIndex === 0}
                />
              ))}
            </div>
          </details>
        ))}
      </RevealGroup>
    </section>
  )
}

/** One paragraph, bullet list or contact card inside an open section. */
function Block({
  block,
  index,
  first,
}: {
  block: LegalBlock
  index: number
  first: boolean
}) {
  // Staggered so the body settles in after the row's height animation
  // instead of appearing fully formed mid-expand.
  const style = { ["--lgl-j" as string]: index }
  const spacing = first ? "" : "mt-4"

  if (block.kind === "paragraph") {
    return (
      <p
        className={`lgl-block text-sm leading-relaxed text-foreground/75 ${spacing}`}
        style={style}
      >
        <RichText text={block.text} />
      </p>
    )
  }

  if (block.kind === "list") {
    return (
      <div className={`lgl-block ${spacing}`} style={style}>
        {block.intro ? (
          <p className="text-sm leading-relaxed text-foreground/75">
            <RichText text={block.intro} />
          </p>
        ) : null}
        <ul className="mt-3 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75"
            >
              <span
                aria-hidden
                className="mt-[0.45rem] size-1.5 shrink-0 rotate-45 bg-brand"
              />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return <ContactCard className={`lgl-block ${spacing}`} style={style} />
}

function ContactCard({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <address
      className={`border border-border bg-background p-5 not-italic ${className ?? ""}`}
      style={style}
    >
      <p className="text-sm font-semibold text-foreground">
        {LEGAL_CONTACT.legalName}
      </p>
      <p className="mt-0.5 text-xs text-foreground/50">
        {LEGAL_CONTACT.tradingAs}
      </p>

      <dl className="mt-4 flex flex-col gap-3 text-sm">
        <ContactRow icon={MapPin} label="Head office">
          {LEGAL_CONTACT.address}
        </ContactRow>
        <ContactRow icon={Mail} label="Email">
          <a
            href={`mailto:${LEGAL_CONTACT.email}`}
            className="text-brand-dark underline-offset-4 hover:underline"
          >
            {LEGAL_CONTACT.email}
          </a>
        </ContactRow>
        <ContactRow icon={Phone} label="Telephone / WhatsApp">
          <a
            href={`tel:${LEGAL_CONTACT.phone.replace(/\s/g, "")}`}
            className="text-brand-dark underline-offset-4 hover:underline"
          >
            {LEGAL_CONTACT.phone}
          </a>
        </ContactRow>
        <ContactRow icon={Globe} label="Website">
          {LEGAL_CONTACT.website}
        </ContactRow>
      </dl>
    </address>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        aria-hidden
        className="mt-0.5 size-4 shrink-0 text-brand"
        strokeWidth={1.75}
      />
      <div>
        <dt className="text-xs font-semibold tracking-wide text-foreground/45 uppercase">
          {label}
        </dt>
        <dd className="mt-0.5 text-foreground/75">{children}</dd>
      </div>
    </div>
  )
}
