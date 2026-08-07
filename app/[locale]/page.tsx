import {
  Bath,
  BedDouble,
  Car,
  CloudRain,
  Fish,
  Flame,
  Leaf,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Sun,
  UtensilsCrossed,
  Users,
  Waves,
  Zap,
} from "lucide-react";

import { BookButton, BookingCalendar } from "@/components/booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { dict, type Locale } from "@/lib/i18n";

const PHONE = "+1 (715) 348-4887";
const PHONE_HREF = "tel:+17153484887";
const EMAIL = "madilyn.fischer1991@gmail.com";

// Set NEXT_PUBLIC_CAL_LINK (build variable) to switch on Cal.com booking:
// the inline calendar section appears and casa buttons open the booking popup.
const CAL_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_CAL_LINK);

// TODO: add each casa's Airbnb listing URL when the individual listings are
// published. An Airbnb link takes priority over the Cal.com popup.
const AIRBNB_URLS: (string | null)[] = [null, null, null];

const CASA_HEADER_CLASSES = [
  "from-emerald-700 to-emerald-900",
  "from-teal-600 to-emerald-800",
  "from-lime-600 to-emerald-700",
];

const QUICK_FACT_ICONS = [Waves, Sun, Flame, Fish, Leaf, Users];
const AREA_ICONS = [Fish, Leaf, Flame, Mountain];
const KNOW_ICONS = [Car, Zap, Leaf, CloudRain];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg text-muted-foreground">{children}</p>
      ) : null}
    </div>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dict[locale as Locale];

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="text-lg font-extrabold tracking-tight">
            Fischer <span className="text-emerald-700">Tropitel</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#casas" className="hover:text-emerald-700">
              {t.nav.casas}
            </a>
            <a href="#area" className="hover:text-emerald-700">
              {t.nav.area}
            </a>
            <a href="#know" className="hover:text-emerald-700">
              {t.nav.know}
            </a>
            <a href="#contact" className="hover:text-emerald-700">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={t.nav.switchHref}
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              {t.nav.switchLabel}
            </a>
            <Button asChild size="sm">
              <a href={CAL_CONFIGURED ? "#book" : "#contact"}>{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero.
            TODO: swap the gradient background for the client's professional
            photos (she has a pro photo set + video in Google Drive). */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-emerald-100 sm:text-xl">
              {t.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-400 text-emerald-950 hover:bg-amber-300"
              >
                <a href="#casas">{t.hero.ctaPrimary}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#know">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="border-b bg-secondary">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.quickFacts.map((text, i) => {
              const Icon = QUICK_FACT_ICONS[i];
              return (
                <div key={text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="font-medium">{text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* The casas */}
        <section id="casas" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow={t.casas.eyebrow} title={t.casas.title}>
              {t.casas.intro}
            </SectionHeading>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {t.casas.list.map((casa, i) => (
                <Card
                  key={casa.name}
                  className="flex flex-col overflow-hidden pt-0"
                >
                  {/* TODO: replace gradient header with this casa's photo. */}
                  <div
                    className={`flex h-40 items-end bg-gradient-to-br ${CASA_HEADER_CLASSES[i]} p-5`}
                  >
                    <div className="text-white">
                      <p className="text-2xl font-extrabold">{casa.name}</p>
                      <p className="text-lg font-semibold text-amber-300">
                        {casa.price}
                        <span className="text-sm font-normal text-white/80">
                          {" "}
                          {t.casas.perNight}
                        </span>
                      </p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base font-medium leading-relaxed text-muted-foreground">
                      {casa.tagline}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <ul className="grid gap-2 text-sm">
                      <li className="flex items-center gap-2">
                        <BedDouble
                          className="h-4 w-4 text-emerald-700"
                          aria-hidden
                        />
                        {t.casas.beds}
                      </li>
                      <li className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-emerald-700" aria-hidden />
                        {t.casas.bath} · {casa.water}
                      </li>
                      <li className="flex items-center gap-2">
                        <UtensilsCrossed
                          className="h-4 w-4 text-emerald-700"
                          aria-hidden
                        />
                        {t.casas.kitchen}
                      </li>
                      <li className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-emerald-700" aria-hidden />
                        {casa.deck}
                      </li>
                    </ul>
                    {casa.highlight ? (
                      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
                        {casa.highlight}
                      </p>
                    ) : null}
                    <div className="mt-auto">
                      {AIRBNB_URLS[i] ? (
                        <Button asChild className="w-full" size="lg">
                          <a
                            href={AIRBNB_URLS[i]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.casas.airbnbCta}
                          </a>
                        </Button>
                      ) : CAL_CONFIGURED ? (
                        <BookButton className="w-full" notes={casa.name}>
                          {t.casas.bookCta} {casa.name}
                        </BookButton>
                      ) : (
                        <Button asChild className="w-full" size="lg">
                          <a href="#contact">{t.casas.askCta}</a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
              {t.casas.note}
            </p>
          </div>
        </section>

        {/* Fishing & the area */}
        <section
          id="area"
          className="scroll-mt-16 border-y bg-gradient-to-br from-emerald-950 to-teal-900 py-20 text-white"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                {t.area.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t.area.title}
              </h2>
              <p className="mt-4 text-lg text-emerald-100">{t.area.sub}</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {t.area.items.map(({ title, text }, i) => {
                const Icon = AREA_ICONS[i];
                return (
                  <div
                    key={title}
                    className="rounded-xl border border-white/15 bg-white/5 p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-emerald-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-emerald-100">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Know before you go */}
        <section id="know" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow={t.know.eyebrow} title={t.know.title}>
              {t.know.sub}
            </SectionHeading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {t.know.items.map(({ title, text }, i) => {
                const Icon = KNOW_ICONS[i];
                return (
                  <Card key={title}>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking — renders only once NEXT_PUBLIC_CAL_LINK is set at build. */}
        {CAL_CONFIGURED ? (
          <section id="book" className="scroll-mt-16 border-t bg-secondary py-20">
            <div className="mx-auto max-w-6xl px-4">
              <SectionHeading eyebrow={t.book.eyebrow} title={t.book.title}>
                {t.book.sub}
              </SectionHeading>
              <div className="mt-10 rounded-xl border bg-card p-2 sm:p-4">
                <BookingCalendar />
              </div>
            </div>
          </section>
        ) : null}

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-16 border-t bg-secondary py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                {t.contact.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.contact.sub}
              </p>
              <ul className="mt-8 grid gap-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-700" aria-hidden />
                  <a href={PHONE_HREF} className="font-medium hover:underline">
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-700" aria-hidden />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium hover:underline"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                    aria-hidden
                  />
                  <span className="font-medium">{t.contact.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <ContactForm labels={t.form} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-emerald-950 py-10 text-emerald-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm">
          <p className="text-lg font-extrabold text-white">
            Fischer <span className="text-amber-400">Tropitel</span>
          </p>
          <p>{t.footer.tagline}</p>
          <p>
            <a href={PHONE_HREF} className="hover:underline">
              {PHONE}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${EMAIL}`} className="hover:underline">
              {EMAIL}
            </a>
          </p>
          <p className="text-emerald-300/70">
            © {new Date().getFullYear()} Fischer Tropitel. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
