import type { Metadata } from "next";

import { dict, locales, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = dict[locale as Locale].meta;
  return {
    title: {
      default: t.title,
      template: "%s | Fischer Tropitel",
    },
    description: t.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: "/en/",
        es: "/es/",
        "x-default": "/en/",
      },
    },
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      siteName: "Fischer Tropitel",
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      {/* The root layout can't see this segment's params, so it renders
          lang="en"; correct it as early as possible for /es/. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)}`,
        }}
      />
      {children}
    </>
  );
}
