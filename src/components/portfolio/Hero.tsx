import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-secondary-foreground mb-10"
        >
          Portfolio — 2026
        </motion.p>

        <motion.h1
          style={{ x: tx, y: ty }}
          className="text-[13vw] md:text-[10vw] leading-[0.95] tracking-[-0.04em] font-medium text-black"
        >
          {["Building", "Intelligent", "Digital Experiences."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>

      <div className="mx-auto w-full max-w-[1600px] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-secondary-foreground text-base md:text-lg leading-relaxed font-light"
        >
          An independent engineer & designer crafting software at the intersection of
          artificial intelligence and human-centered product design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-black"
        >
          <span className="w-8 h-px bg-black" />
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
