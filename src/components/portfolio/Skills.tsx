import { Reveal, RevealText } from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Python", "Flask"],
  },
  {
    title: "AI & ML Tools",
    items: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "Visual Studio Code", "npm", "pytest", "Selenium"],
  },
  {
    title: "Soft Skills",
    items: ["Time Management", "Critical Thinking", "Leadership Quality", "Decision Making"],
  },
  {
    title: "Languages",
    items: ["Tamil", "English"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                Skills & Capabilities
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <RevealText
              as="h2"
              text="Technical Skills & Tools"
              className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-16 gap-x-8 border-t border-border pt-16">
          {SKILL_GROUPS.map((g, gi) => (
            <div key={g.title} className="col-span-12 md:col-span-6 lg:col-span-3">
              <Reveal delay={gi * 0.05}>
                <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-6">
                  {g.title}
                </p>
              </Reveal>
              <ul className="space-y-2">
                {g.items.map((it, i) => (
                  <Reveal key={it} delay={0.05 + i * 0.03} y={10}>
                    <li className="text-xl md:text-2xl font-light tracking-tight text-black">
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
