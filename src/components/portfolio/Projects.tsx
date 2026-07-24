import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./ScrollReveal";

const PROJECTS = [
  {
    name: "Aperture",
    year: "2025",
    tag: "Computer Vision",
    description:
      "A real-time visual intelligence platform that transforms raw camera streams into structured, searchable data using on-device models.",
    stack: ["Next.js", "YOLO", "FastAPI", "PostgreSQL"],
  },
  {
    name: "Lumen OS",
    year: "2024",
    tag: "Productivity",
    description:
      "A minimal operating layer for personal knowledge — capture, connect, and retrieve ideas with a keyboard-first, latency-obsessed interface.",
    stack: ["React", "TypeScript", "Rust", "SQLite"],
  },
  {
    name: "Foldwise",
    year: "2024",
    tag: "AI Tooling",
    description:
      "An assistant for design engineers that turns loose requirements into production-ready specifications, powered by fine-tuned LLMs.",
    stack: ["Next.js", "Gemini", "Python", "Redis"],
  },
  {
    name: "Vantage",
    year: "2023",
    tag: "Editorial",
    description:
      "An editorial analytics tool for independent writers — quiet metrics that surface signal instead of vanity.",
    stack: ["React", "TailwindCSS", "Node", "Postgres"],
  },
];

function Card({ project, i, total }: { project: (typeof PROJECTS)[number]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isLast = i === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -60]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen w-full flex items-center"
      style={{ zIndex: i + 1 }}
    >
      <motion.article
        style={{ scale, opacity, y }}
        className="w-full h-full bg-white border-t border-border flex items-center will-change-transform"
      >
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-secondary-foreground">
                0{i + 1} / {String(total).padStart(2, "0")}
              </p>
              <span className="w-8 h-px bg-border" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-secondary-foreground">
                {project.tag} · {project.year}
              </p>
            </div>
            <h3 className="text-6xl md:text-[7.5vw] font-medium tracking-[-0.05em] leading-[0.9] mb-10">
              {project.name}
            </h3>
            <p className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed max-w-md mb-12">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-foreground mb-10">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {["GitHub", "Live", "Case Study"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="group inline-flex items-center gap-2 text-black"
                >
                  <span className="relative">
                    {l}
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-black origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/11] bg-[#fafafa] border border-border relative overflow-hidden">
            <motion.div
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1.05, 1.2]),
              }}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              <span className="text-[28vw] md:text-[16vw] font-medium tracking-[-0.06em] text-black/[0.05] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-secondary-foreground">
              <span>{project.name}</span>
              <span>—</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border">
      <div className="px-6 md:px-10 pt-32 md:pt-56 pb-16 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-secondary-foreground">
                (03) — Selected Work
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] leading-[1]">
                A few things I&apos;ve built.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative">
        {PROJECTS.map((p, i) => (
          <Card key={p.name} project={p} i={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
