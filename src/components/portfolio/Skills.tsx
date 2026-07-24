import { useRef } from "react";
import { motion } from "framer-motion";
import { Reveal, RevealText } from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST API"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "AI",
    items: ["Google Gemini", "OpenAI", "Computer Vision", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Automation & IoT",
    items: ["ESP32", "Arduino", "Sensors", "Embedded Systems"],
  },
];

function SkillItem({
  item,
  colIndex,
  itemIndex,
}: {
  item: string;
  colIndex: number;
  itemIndex: number;
}) {
  // Staggered scroll fly-in from outside toward the center
  let initialX = 0;
  let initialY = 0;

  if (colIndex < 2) {
    initialX = -120; // Fly from left
  } else if (colIndex > 2) {
    initialX = 120; // Fly from right
  } else {
    initialY = 80; // Fly from bottom center
  }

  return (
    <motion.li
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 80,
        delay: itemIndex * 0.04 + colIndex * 0.06,
      }}
      className="text-xl md:text-2xl font-light tracking-tight text-black cursor-default transition-all duration-300 hover:translate-x-1 hover:text-secondary-foreground"
    >
      {item}
    </motion.li>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border overflow-hidden"
    >
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
            <div key={g.title} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2">
              <Reveal delay={gi * 0.05}>
                <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-6 font-semibold">
                  {g.title}
                </p>
              </Reveal>
              <ul className="space-y-2">
                {g.items.map((it, i) => (
                  <SkillItem key={it} item={it} colIndex={gi} itemIndex={i} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
