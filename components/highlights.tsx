"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

export interface Slide {
  src: string;
  alt: string;
  title: string;
  text: string;
  href: string;
  cta: string;
}

/**
 * Full-bleed image carousel with a white content card anchored bottom-left and
 * numeric "01 / 03" pagination — the signature pattern of the art direction
 * this site follows. Manual navigation only; slides crossfade via Motion.
 */
export function Highlights({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = React.useState(0);
  const go = (d: number) =>
    setIndex((i) => (i + d + slides.length) % slides.length);
  const s = slides[index];

  return (
    <div className="relative min-h-[560px] overflow-hidden sm:min-h-[640px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={s.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <motion.div
            key={`card-${index}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="max-w-xl rounded-tr-[40px] bg-white p-7 shadow-xl sm:p-9"
          >
            <h3 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
              {s.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
            <a
              href={s.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-emerald-700 hover:text-emerald-900"
            >
              {s.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-4 text-white">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition-colors hover:bg-white/15"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </button>
            <p className="text-sm font-bold tracking-widest">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-white/60">/</span>
              {String(slides.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition-colors hover:bg-white/15"
            >
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
