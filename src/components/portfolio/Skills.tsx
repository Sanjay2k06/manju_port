import { Reveal, RevealText } from "./ScrollReveal";

const GROUPS = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { title: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "Redis"] },
  { title: "Artificial Intelligence", items: ["OpenCV", "YOLO", "Gemini", "TensorFlow"] },
  { title: "Tools", items: ["Git", "Docker", "Linux", "Figma", "VS Code"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-56 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                (02) — Craft
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <RevealText
              as="h2"
              text="Tools that stay out of the way."
              className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-16 gap-x-8 border-t border-border pt-16">
          {GROUPS.map((g, gi) => (
            <div key={g.title} className="col-span-12 md:col-span-6 lg:col-span-3">
              <Reveal delay={gi * 0.05}>
                <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-8">
                  0{gi + 1} — {g.title}
                </p>
              </Reveal>
              <ul className="space-y-3">
                {g.items.map((it, i) => (
                  <Reveal key={it} delay={0.1 + i * 0.05} y={16}>
                    <li className="text-2xl md:text-3xl font-light tracking-tight text-black">
                      {it}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
