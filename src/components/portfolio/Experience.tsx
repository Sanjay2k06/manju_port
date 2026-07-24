import { Reveal } from "./ScrollReveal";

const ITEMS = [
  {
    role: "Founding Engineer",
    company: "Independent",
    duration: "2024 — Present",
    description:
      "Designing and shipping AI-native products end-to-end — from research prototypes to production systems used by real teams.",
  },
  {
    role: "Software Engineer (AI)",
    company: "Confidential Client",
    duration: "2023 — 2024",
    description:
      "Built computer vision pipelines for industrial inspection: dataset tooling, model training, evaluation, and edge deployment.",
  },
  {
    role: "Product Engineer",
    company: "Early-Stage Startup",
    duration: "2022 — 2023",
    description:
      "Led the frontend and design system across a suite of internal tools. Reduced perceived latency by 60% through UX and infra work.",
  },
  {
    role: "Open Source & Research",
    company: "Personal",
    duration: "2021 — Present",
    description:
      "Contributions across web performance, developer tooling, and small experimental interfaces for thought.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-56 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                (04) — Experience
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                Where I&apos;ve worked.
              </h2>
            </Reveal>
          </div>
        </div>

        <ul>
          {ITEMS.map((e, i) => (
            <li key={i} className="border-t border-border py-12 md:py-16">
              <Reveal>
                <div className="grid grid-cols-12 gap-8 items-baseline">
                  <p className="col-span-12 md:col-span-2 text-sm text-secondary-foreground">
                    {e.duration}
                  </p>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em]">
                      {e.role}
                    </h3>
                    <p className="mt-2 text-secondary-foreground">{e.company}</p>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-secondary-foreground font-light leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
