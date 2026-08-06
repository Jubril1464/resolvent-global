import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getNavigation } from "@/lib/get-navigation";
import { getFooter } from "@/lib/get-footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { SiteNav } from "@/components/content/nav";
import { SiteFooter } from "@/components/content/footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Energy, Process & Carbon Engineering Advisory`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Energy, Process & Carbon Engineering Advisory`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og-image.png", width: 1424, height: 752 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Energy, Process & Carbon Engineering Advisory`,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Placeholder values like "[To be confirmed]" live in the footer global
// until real business details are filled in via /admin — never surface
// those to search engines as if they were real.
function isPlaceholder(value: string) {
  return value.trim().startsWith("[");
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, footer] = await Promise.all([getNavigation(), getFooter()]);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/resolvent-logo.png`,
    description: SITE_DESCRIPTION,
    ...(isPlaceholder(footer.contactEmail) ? {} : { email: footer.contactEmail }),
    // schema.org's `telephone` expects a single number, but contactPhone
    // stores a comma-separated list — use just the first as the primary.
    ...(isPlaceholder(footer.contactPhone)
      ? {}
      : { telephone: footer.contactPhone.split(",")[0].trim() }),
    ...(isPlaceholder(footer.contactLocation)
      ? {}
      : { address: { "@type": "PostalAddress", addressCountry: footer.contactLocation } }),
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteNav navigation={navigation} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
