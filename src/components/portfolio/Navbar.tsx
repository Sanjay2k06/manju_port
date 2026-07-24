import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internships", href: "#internships" },
  { label: "Achievements & Workshops", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/manjula-devi-97286b35a" },
  { label: "Email", href: "mailto:manjuladevimari8@gamil.com" },
  { label: "Phone", href: "tel:+919344710273" },
];

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span className={cn("relative block overflow-hidden leading-[1.05]", className)}>
      <div className="flex overflow-hidden">
        {children.split("").map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (children.length - 1) / 2) : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0 flex overflow-hidden">
        {children.split("").map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (children.length - 1) / 2) : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block text-black"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useMagnetic<HTMLAnchorElement>();
  const toggleRef = useMagnetic<HTMLButtonElement>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-white/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            ref={logoRef}
            href="#home"
            className="text-black font-medium tracking-tight text-lg"
            data-cursor="hover"
          >
            Manjula Devi
          </a>
          <button
            ref={toggleRef}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor="hover"
            className="relative w-10 h-10 flex flex-col items-end justify-center gap-1.5 group"
          >
            <span
              className={`block h-px bg-black transition-all duration-500 ${
                open ? "w-6 translate-y-[3px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-black transition-all duration-500 ${
                open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
            className="fixed top-0 right-0 z-40 h-screen w-full sm:w-[520px] bg-white border-l border-border flex flex-col justify-between px-8 sm:px-14 pt-28 pb-10"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-cursor="hover"
                  variants={{
                    initial: { y: 40, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                  }}
                  initial="initial"
                  animate="animate"
                  whileHover="hovered"
                  transition={{
                    delay: 0.25 + i * 0.06,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group text-[42px] sm:text-[56px] font-medium tracking-tight leading-[1.05] text-black transition-colors block"
                >
                  <TextRoll>{item.label}</TextRoll>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-secondary-foreground"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-cursor="hover"
                  className="hover:text-black transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
