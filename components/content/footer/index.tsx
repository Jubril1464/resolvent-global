import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NAV_CTA, NAV_LINKS } from "@/components/content/nav/nav-config"
import { FooterLinkColumn } from "./footer-link-column"
import { FOOTER_CONTACT, FOOTER_LEGAL_LINKS, FOOTER_SERVICES_LINKS } from "./footer-config"

/**
 * Site-wide footer. Rendered once from the root layout so every route gets
 * it, mirroring how SiteNav is rendered for the header.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0C203A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Link
              href="/"
              aria-label="Resolvent Global — home"
              className="inline-block rounded-xs outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Image
                src="/images/resolvent-logo.svg"
                alt="Resolvent Global — Energy, Process, Carbon"
                width={135}
                height={50}
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-xs text-white/70">
              Technical advisory and engineering services for process,
              energy, carbon, water and environmental challenges.
            </p>

            <p className="mt-6 text-sm text-white/60">
              CAC-Registered · Nigeria
              <br />
              <span className="italic">[Registration number pending]</span>
            </p>
          </div>

          <FooterLinkColumn title="Quick Links" links={NAV_LINKS} />
          <FooterLinkColumn title="Services" links={FOOTER_SERVICES_LINKS} />

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-white/50">Email</p>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="text-white/80 hover:text-white"
                >
                  {FOOTER_CONTACT.email}
                </a>
              </div>

              <div>
                <p className="text-white/50">Phone / WhatsApp</p>
                <p className="text-white/80">{FOOTER_CONTACT.phone}</p>
              </div>

              <div>
                <p className="text-white/50">Location</p>
                <p className="text-white/80">{FOOTER_CONTACT.location}</p>
              </div>
            </div>

            <Link
              href={NAV_CTA.href}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "mt-6 h-11 px-6 text-sm font-semibold"
              )}
            >
              {NAV_CTA.label}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${year} Resolvent Global Energy Process & Carbon Ltd. All rights reserved.`}</p>

          <div className="flex gap-6">
            {FOOTER_LEGAL_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
