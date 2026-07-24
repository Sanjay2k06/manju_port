import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "./ScrollReveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dash = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-56 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
              (01) — About
            </p>
          </Reveal>
          <div className="mt-16 hidden md:block">
            <svg viewBox="0 0 200 400" fill="none" className="w-40">
              <motion.path
                d="M100 10 C 40 80, 160 160, 100 240 C 40 320, 160 380, 100 390"
                stroke="black"
                strokeWidth="1.2"
                pathLength={1}
                style={{ pathLength: useTransform(dash, (v) => 1 - v) }}
              />
              <motion.circle
                cx="100"
                cy="0"
                r="4"
                fill="black"
                style={{
                  cy: useTransform(scrollYProgress, [0, 1], [10, 390]),
                }}
              />
            </svg>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 max-w-3xl">
          <RevealText
            as="h2"
            text="Who I am."
            className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1] mb-16"
          />
          <RevealText
            as="p"
            text="I design and build software that combines engineering, artificial intelligence, and thoughtful user experience."
            className="text-2xl md:text-3xl font-light leading-[1.35] tracking-tight text-black"
          />
          <div className="mt-10 space-y-6 text-lg md:text-xl text-secondary-foreground font-light leading-relaxed max-w-2xl">
            <RevealText
              as="p"
              text="My work focuses on creating products that feel simple for users while solving complex technical problems behind the scenes."
            />
            <RevealText
              as="p"
              text="I believe great software is invisible — it disappears into the moment, leaving only the outcome the person came for."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
