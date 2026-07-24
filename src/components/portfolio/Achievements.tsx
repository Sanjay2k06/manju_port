import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./ScrollReveal";

const STATS = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 8, suffix: "+", label: "Hackathons" },
  { value: 3, suffix: "+", label: "Awards" },
  { value: 2, suffix: "+", label: "Internships" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 md:py-56 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                (05) — Numbers
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                A small record.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-12 md:py-20 ${i > 0 ? "md:border-l border-border" : ""} ${
                i % 2 === 1 ? "border-l border-border md:border-l" : ""
              }`}
            >
              <div className="px-4 md:px-8">
                <div className="text-[18vw] md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.9] text-black">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-6 text-sm tracking-[0.2em] uppercase text-secondary-foreground">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
