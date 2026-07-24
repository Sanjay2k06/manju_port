import { Reveal } from "./ScrollReveal";

const PROJECTS = [
  {
    name: "Aperture",
    year: "2025",
    description:
      "A real-time visual intelligence platform that transforms raw camera streams into structured, searchable data using on-device models.",
    stack: ["Next.js", "YOLO", "FastAPI", "PostgreSQL"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    name: "Lumen OS",
    year: "2024",
    description:
      "A minimal operating layer for personal knowledge — capture, connect, and retrieve ideas with a keyboard-first, latency-obsessed interface.",
    stack: ["React", "TypeScript", "Rust", "SQLite"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    name: "Foldwise",
    year: "2024",
    description:
      "An assistant for design engineers that turns loose requirements into production-ready specifications, powered by fine-tuned LLMs.",
    stack: ["Next.js", "Gemini", "Python", "Redis"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    name: "Vantage",
    year: "2023",
    description:
      "An editorial analytics tool for independent writers — quiet metrics that surface signal instead of vanity.",
    stack: ["React", "TailwindCSS", "Node", "Postgres"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border">
      <div className="px-6 md:px-10 pt-32 md:pt-56 pb-16 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                (03) — Selected Work
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                A few things I&apos;ve built.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative">
        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className="sticky top-0 h-screen w-full flex items-center bg-white border-t border-border"
            style={{ zIndex: i + 1 }}
          >
            <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-5">
                <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-6">
                  0{i + 1} / {String(PROJECTS.length).padStart(2, "0")} — {p.year}
                </p>
                <h3 className="text-6xl md:text-8xl font-medium tracking-[-0.04em] leading-[0.95] mb-8">
                  {p.name}
                </h3>
                <p className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed max-w-md mb-10">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-foreground mb-8">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="text-black underline underline-offset-4 decoration-border hover:decoration-black transition-colors"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/11] bg-muted border border-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[22vw] md:text-[14vw] font-medium tracking-tighter text-black/[0.04] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
