import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getNavigation } from "@/lib/get-navigation"
import { getFooter } from "@/lib/get-footer"
import { FooterLinkColumn } from "./footer-link-column"

/**
 * Site-wide footer. Rendered once from the root layout so every route gets
 * it, mirroring how SiteNav is rendered for the header.
 */
export async function SiteFooter() {
  const [navigation, footer] = await Promise.all([getNavigation(), getFooter()])
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

          <FooterLinkColumn title="Quick Links" links={navigation.navLinks} />
          <FooterLinkColumn title="Services" links={footer.servicesLinks} />

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-white/50">Email</p>
                <a
                  href={`mailto:${footer.contactEmail}`}
                  className="text-white/80 hover:text-white"
                >
                  {footer.contactEmail}
                </a>
              </div>

              <div>
                <p className="text-white/50">Phone / WhatsApp</p>
                <p className="text-white/80">{footer.contactPhone}</p>
              </div>

              <div>
                <p className="text-white/50">Location</p>
                <p className="text-white/80">{footer.contactLocation}</p>
              </div>
            </div>

            <Link
              href={navigation.ctaHref}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "mt-6 h-11 px-6 text-sm font-semibold"
              )}
            >
              {navigation.ctaLabel}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${year} Resolvent Global Energy Process & Carbon Ltd. All rights reserved.`}</p>

          <div className="flex gap-6">
            {footer.legalLinks.map(({ href, label }) => (
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
