import Image from "next/image";
import {
  ArrowRight,
  Car,
  CloudRain,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";

import { Item, Lift, Reveal, Stagger } from "@/components/animate";
import { BookButton, BookingCalendar } from "@/components/booking";
import { SiteMenu } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
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

const CASA_IMAGES = [
  { src: "/images/casa-cascada.jpg", alt: "Casa Cascada exterior" },
  { src: "/images/loads-of-toads.jpg", alt: "Loads of Toads exterior" },
  { src: "/images/casa-verde.jpg", alt: "Casa Verde exterior" },
];

const KNOW_ICONS = [Car, Zap, Leaf, CloudRain];

/** IFF-style pill CTA: uppercase, letter-spaced, arrow. */
function pillClasses(variant: "light" | "dark") {
  const base =
    "rounded-full px-7 py-6 text-sm font-bold uppercase tracking-widest";
  return variant === "light"
    ? `${base} bg-white text-emerald-900 hover:bg-amber-50`
    : `${base} bg-emerald-900 text-white hover:bg-emerald-800`;
}

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.2em] ${
        onDark ? "text-amber-400" : "text-emerald-700"
      }`}
    >
      {children}
    </p>
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
      {/* IFF-style header: solid brand band, wordmark left, CTA + menu square right. */}
      <header className="sticky top-0 z-50 bg-emerald-950 text-white">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between pl-4">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Fischer <span className="text-amber-400">Tropitel</span>
          </a>
          <div className="flex h-16 items-center gap-4">
            <a
              href={t.nav.switchHref}
              className="hidden text-sm font-semibold uppercase tracking-widest text-emerald-200 hover:text-white sm:block"
            >
              {t.nav.switchLabel}
            </a>
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-white px-5 font-bold uppercase tracking-widest text-emerald-900 hover:bg-amber-50 sm:inline-flex"
            >
              <a href={CAL_CONFIGURED ? "#book" : "#contact"}>{t.nav.cta}</a>
            </Button>
            <SiteMenu
              links={[
                { href: "#casas", label: t.nav.casas },
                { href: "#area", label: t.nav.area },
                { href: "#know", label: t.nav.know },
                { href: "#contact", label: t.nav.contact },
              ]}
              switchLabel={t.nav.switchLabel}
              switchHref={t.nav.switchHref}
            />
          </div>
        </div>
      </header>

      <main id="top">
        {/* Brand band: centered display type + pill CTA, IFF announcement style. */}
        <section className="bg-emerald-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
            <Reveal immediate>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                {t.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                {t.hero.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100 sm:text-xl">
                {t.hero.sub}
              </p>
            </Reveal>
            <Reveal immediate delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className={pillClasses("light")}>
                  <a href="#casas">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full-bleed property image card. */}
        <section className="bg-emerald-950 pb-6">
          <Reveal immediate delay={0.35} className="mx-auto max-w-7xl px-4">
            <div className="relative h-[46vh] min-h-[320px] overflow-hidden rounded-3xl sm:h-[60vh]">
              <Image
                src="/images/hero.jpg"
                alt="The Fischer Tropitel property in the jungle above Quepos"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                Quepos · Costa Rica
              </p>
            </div>
          </Reveal>
        </section>

        {/* Stats band — IFF "your experiences, our technologies" pattern. */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Reveal>
              <Eyebrow>{t.stats.eyebrow}</Eyebrow>
            </Reveal>
            <Stagger className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
              {t.stats.items.map(({ value, caption }) => (
                <Item key={caption}>
                  <p className="text-4xl font-medium tracking-tight text-emerald-900 sm:text-5xl">
                    {value}
                  </p>
                  <p className="mt-3 text-muted-foreground">{caption}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* The casas — stacked full-width image cards, IFF solutions pattern. */}
        <section id="casas" className="scroll-mt-16 border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>{t.casas.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                  {t.casas.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  {t.casas.intro}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6">
              {t.casas.list.map((casa, i) => (
                <Reveal key={casa.name} delay={0.05}>
                  <Lift>
                    <article className="relative min-h-[440px] overflow-hidden rounded-3xl bg-emerald-950 sm:min-h-[480px]">
                      <Image
                        src={CASA_IMAGES[i].src}
                        alt={CASA_IMAGES[i].alt}
                        fill
                        sizes="(min-width: 1280px) 1216px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white sm:p-10">
                        <div>
                          <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                            {casa.name}
                          </h3>
                          <p className="mt-1 text-xl font-semibold text-amber-300">
                            {casa.price}
                            <span className="text-sm font-normal text-white/80">
                              {" "}
                              {t.casas.perNight}
                            </span>
                          </p>
                        </div>
                        <p className="max-w-xl text-emerald-50">{casa.tagline}</p>
                        <p className="max-w-xl text-sm uppercase tracking-wider text-white/75">
                          {t.casas.beds} · {t.casas.bath} · {casa.water}
                        </p>
                        <p className="max-w-xl text-sm uppercase tracking-wider text-white/75">
                          {t.casas.kitchen} · {casa.deck}
                        </p>
                        {casa.highlight ? (
                          <p className="max-w-xl rounded-xl bg-amber-400/15 p-3 text-sm text-amber-200">
                            {casa.highlight}
                          </p>
                        ) : null}
                        <div className="mt-2">
                          {AIRBNB_URLS[i] ? (
                            <Button asChild size="lg" className={pillClasses("light")}>
                              <a
                                href={AIRBNB_URLS[i]}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {t.casas.airbnbCta}
                                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                              </a>
                            </Button>
                          ) : CAL_CONFIGURED ? (
                            <BookButton
                              className={pillClasses("light")}
                              notes={casa.name}
                            >
                              {t.casas.bookCta} {casa.name}
                              <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                            </BookButton>
                          ) : (
                            <Button asChild size="lg" className={pillClasses("light")}>
                              <a href="#contact">
                                {t.casas.askCta}
                                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </article>
                  </Lift>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
                {t.casas.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Fishing & adventure — numbered editorial rows, IFF insights pattern. */}
        <section id="area" className="scroll-mt-16 border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>{t.area.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                  {t.area.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">{t.area.sub}</p>
              </div>
            </Reveal>
            <div className="mt-12">
              {t.area.items.map(({ title, text }, i) => (
                <Reveal key={title}>
                  <div className="grid gap-3 border-t py-8 md:grid-cols-[80px_1fr_2fr] md:gap-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {title}
                    </h3>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Know before you go — deep green band. */}
        <section
          id="know"
          className="scroll-mt-16 bg-emerald-950 text-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                  {t.know.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                  {t.know.title}
                </h2>
                <p className="mt-5 text-lg text-emerald-100">{t.know.sub}</p>
              </div>
            </Reveal>
            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
              {t.know.items.map(({ title, text }, i) => {
                const Icon = KNOW_ICONS[i];
                return (
                  <Item
                    key={title}
                    className="rounded-3xl border border-white/15 bg-white/5 p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-emerald-100">{text}</p>
                  </Item>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* Booking — renders only once NEXT_PUBLIC_CAL_LINK is set at build. */}
        {CAL_CONFIGURED ? (
          <section id="book" className="scroll-mt-16 border-t bg-background">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                  <Eyebrow>{t.book.eyebrow}</Eyebrow>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                    {t.book.title}
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground">
                    {t.book.sub}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 rounded-3xl border bg-card p-2 sm:p-4">
                  <BookingCalendar />
                </div>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 border-t bg-background">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
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
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
                <ContactForm labels={t.form} />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 py-14 text-emerald-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2">
          <div>
            <p className="text-2xl font-bold tracking-tight text-white">
              Fischer <span className="text-amber-400">Tropitel</span>
            </p>
            <p className="mt-2">{t.footer.tagline}</p>
          </div>
          <div className="sm:text-right">
            <p>
              <a href={PHONE_HREF} className="hover:underline">
                {PHONE}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${EMAIL}`} className="hover:underline">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-4 pt-6 text-sm text-emerald-300/70">
          © {new Date().getFullYear()} Fischer Tropitel. {t.footer.rights}
        </div>
      </footer>
    </>
  );
}
