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
import { Highlights } from "@/components/highlights";
import { SiteMenu } from "@/components/mobile-nav";
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

const HIGHLIGHT_IMAGES = [
  { src: "/images/hero.jpg", alt: "Jungle around the Fischer Tropitel casas" },
  { src: "/images/property-2.jpg", alt: "The gated entrance to the property" },
  { src: "/images/property-3.jpg", alt: "Casa Verde against the jungle" },
];

// TODO: swap for real activity photos (boats, park, springs) when supplied —
// these are property shots standing in.
const AREA_IMAGES = [
  "/images/property-2.jpg",
  "/images/hero.jpg",
  "/images/property-3.jpg",
  "/images/casa-cascada.jpg",
];

const KNOW_ICONS = [Car, Zap, Leaf, CloudRain];

/*
 * The signature button shape of this art direction: a pill rounded on the
 * top-left and bottom-right corners only, extrabold uppercase label, arrow.
 */
const PILL =
  "inline-flex items-center gap-2 rounded-tl-[24px] rounded-br-[24px] px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition-colors";
const PILL_ON_DARK = `${PILL} bg-white text-emerald-800 hover:bg-amber-100`;
const PILL_ON_LIGHT = `${PILL} bg-emerald-800 text-white hover:bg-emerald-700`;

const TEXT_LINK =
  "inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-emerald-700 hover:text-emerald-900";

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`text-sm font-extrabold uppercase tracking-[0.18em] ${
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

  const slides = t.highlights.items.map((item, i) => ({
    ...HIGHLIGHT_IMAGES[i],
    ...item,
  }));

  return (
    <>
      {/* Solid brand header: wordmark left; CTA + accent menu square right. */}
      <header className="sticky top-0 z-50 bg-emerald-950 text-white">
        <div className="relative mx-auto flex h-[70px] max-w-7xl items-center justify-between pl-4">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Fischer <span className="text-amber-400">Tropitel</span>
          </a>
          <div className="flex h-[70px] items-center gap-5">
            <a
              href={t.nav.switchHref}
              className="hidden text-sm font-extrabold uppercase tracking-wider text-emerald-200 hover:text-white sm:block"
            >
              {t.nav.switchLabel}
            </a>
            <a
              href={CAL_CONFIGURED ? "#book" : "#contact"}
              className={`hidden sm:inline-flex ${PILL_ON_DARK}`}
            >
              {t.nav.cta}
            </a>
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
        {/* Announcement band: centered display type over the brand color. */}
        <section className="bg-emerald-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
            <Reveal immediate>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-400">
                {t.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-6 text-4xl font-medium leading-[1.2] tracking-tight sm:text-5xl">
                {t.hero.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
                {t.hero.sub}
              </p>
            </Reveal>
            <Reveal immediate delay={0.3}>
              <div className="mt-9 flex justify-center">
                <a href="#casas" className={PILL_ON_DARK}>
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Image carousel with white content card + numeric pagination. */}
        <section aria-label={t.highlights.eyebrow}>
          <Highlights slides={slides} />
        </section>

        {/* Stats band. */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <Reveal>
              <Eyebrow>{t.stats.eyebrow}</Eyebrow>
            </Reveal>
            <Stagger className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
              {t.stats.items.map(({ value, caption }) => (
                <Item key={caption}>
                  <p className="text-4xl font-extrabold tracking-tight text-emerald-700 sm:text-5xl">
                    {value}
                  </p>
                  <p className="mt-3 text-muted-foreground">{caption}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* The casas — stacked full-width image cards. */}
        <section id="casas" className="scroll-mt-[70px] bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
                  {t.casas.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  {t.casas.intro}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6">
              {t.casas.list.map((casa, i) => (
                <Reveal key={casa.name}>
                  <Lift>
                    <article className="relative min-h-[460px] overflow-hidden rounded-2xl bg-emerald-950">
                      <Image
                        src={CASA_IMAGES[i].src}
                        alt={CASA_IMAGES[i].alt}
                        fill
                        sizes="(min-width: 1280px) 1248px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/35 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 text-white sm:p-10">
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                          {casa.name}
                        </h3>
                        <p className="text-lg font-bold text-amber-300">
                          {casa.price}
                          <span className="text-sm font-normal text-white/80">
                            {" "}
                            {t.casas.perNight}
                          </span>
                        </p>
                        <p className="max-w-xl text-emerald-50">{casa.tagline}</p>
                        <p className="max-w-xl text-sm uppercase tracking-wider text-white/75">
                          {t.casas.beds} · {t.casas.bath} · {casa.water} ·{" "}
                          {casa.deck}
                        </p>
                        {casa.highlight ? (
                          <p className="max-w-xl rounded-xl bg-amber-400/15 p-3 text-sm text-amber-200">
                            {casa.highlight}
                          </p>
                        ) : null}
                        <div className="mt-3">
                          {AIRBNB_URLS[i] ? (
                            <a
                              href={AIRBNB_URLS[i]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={PILL_ON_DARK}
                            >
                              {t.casas.airbnbCta}
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </a>
                          ) : CAL_CONFIGURED ? (
                            <BookButton
                              className={`h-auto ${PILL_ON_DARK} rounded-tr-none rounded-bl-none`}
                              notes={casa.name}
                            >
                              {t.casas.bookCta} {casa.name}
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </BookButton>
                          ) : (
                            <a href="#contact" className={PILL_ON_DARK}>
                              {t.casas.askCta}
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </Lift>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
                {t.casas.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Fishing & adventure — image-topped insight cards. */}
        <section id="area" className="scroll-mt-[70px] border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>{t.area.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                  {t.area.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">{t.area.sub}</p>
              </div>
            </Reveal>
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
              {t.area.items.map(({ title, text }, i) => (
                <Item
                  key={title}
                  className="overflow-hidden rounded-2xl border bg-card"
                >
                  <div className="relative h-52">
                    <Image
                      src={AREA_IMAGES[i]}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{text}</p>
                    <a href="#contact" className={`mt-5 ${TEXT_LINK}`}>
                      {t.casas.askCta}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Know before you go — brand-color band. */}
        <section
          id="know"
          className="scroll-mt-[70px] bg-emerald-950 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-20">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow onDark>{t.know.eyebrow}</Eyebrow>
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
                    className="rounded-2xl border border-white/15 bg-white/5 p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-tl-[20px] rounded-br-[20px] bg-amber-400 text-emerald-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
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
          <section id="book" className="scroll-mt-[70px] bg-background">
            <div className="mx-auto max-w-7xl px-4 py-16">
              <Reveal>
                <div className="max-w-3xl">
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
                <div className="mt-10 rounded-2xl border bg-card p-2 sm:p-4">
                  <BookingCalendar />
                </div>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-[70px] border-t bg-background"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2">
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
              <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                <ContactForm labels={t.form} />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer: brand band with link columns and a legal row. */}
      <footer className="bg-emerald-950 pt-14 text-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-bold tracking-tight text-white">
              Fischer <span className="text-amber-400">Tropitel</span>
            </p>
            <p className="mt-3">{t.footer.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid gap-2">
              {[
                { href: "#casas", label: t.nav.casas },
                { href: "#area", label: t.nav.area },
                { href: "#know", label: t.nav.know },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={t.nav.switchHref}
                  className="font-semibold text-amber-300 hover:underline"
                >
                  {t.nav.switchLabel}
                </a>
              </li>
            </ul>
          </nav>
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
            <p className="mt-3 text-sm text-emerald-300/80">
              {t.contact.location}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4">
          <div className="border-t border-white/15 py-6 text-sm text-emerald-300/70">
            © {new Date().getFullYear()} Fischer Tropitel. {t.footer.rights}
          </div>
        </div>
      </footer>
    </>
  );
}
