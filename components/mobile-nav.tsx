"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

/**
 * IFF-style site menu: an accent square flush against the header's right edge
 * that opens a full-width dropdown panel. Used at every breakpoint — the
 * header itself only carries the wordmark and the primary CTA.
 */
export function SiteMenu({
  links,
  switchLabel,
  switchHref,
}: {
  links: { href: string; label: string }[];
  switchLabel: string;
  switchHref: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-16 w-16 shrink-0 items-center justify-center bg-amber-400 text-emerald-950 transition-colors hover:bg-amber-300"
      >
        {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full bg-emerald-950 text-white shadow-2xl"
          >
            <ul className="mx-auto grid max-w-6xl gap-1 px-6 py-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.05 * i, duration: 0.25 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-2xl font-medium tracking-tight hover:bg-white/10 sm:text-3xl"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 border-t border-white/15 pt-4">
                <a
                  href={switchHref}
                  className="inline-block rounded-full border border-white/30 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-300 hover:bg-white/10"
                >
                  {switchLabel}
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
