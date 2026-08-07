import type { Metadata } from "next";

import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fischertropitel.com";

/**
 * Locale-specific titles, descriptions, and hreflang alternates live in
 * app/[locale]/layout.tsx — this layout only carries the site-wide base.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // No template here — the locale layouts set complete titles, and a root
  // template would append the site name to them a second time.
  title: "Fischer Tropitel",
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Fischer Tropitel",
  url: SITE_URL,
  telephone: "+1-715-348-4887",
  email: "madilyn.fischer1991@gmail.com",
  description:
    "Three private jungle casa rentals above a waterfall in the mountains near Quepos, Costa Rica, close to Manuel Antonio National Park and world-class sportfishing.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quepos",
    addressRegion: "Puntarenas",
    addressCountry: "CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
