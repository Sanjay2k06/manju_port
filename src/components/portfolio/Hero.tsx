import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 25, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 40, damping: 25, mass: 0.8 });
  const tx = useTransform(sx, (v) => v * 14);
  const ty = useTransform(sy, (v) => v * 14);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Word/line slides up on enter
    const targetWords = el.querySelectorAll(".hero-line-word");
    gsap.fromTo(
      targetWords,
      { y: "115%" },
      {
        y: "0%",
        duration: 1.4,
        stagger: 0.14,
        ease: "power4.out",
        delay: 0.25,
      },
    );

    // Summary fade + translate
    const targetSummary = el.querySelector(".hero-summary");
    gsap.fromTo(
      targetSummary,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.0,
      },
    );
  }, []);

  const lines = ["Manjula", "Devi", "Software Engineer."];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[110vh] w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity, y, filter }}
        className="flex-1 flex flex-col justify-center will-change-transform"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.h1
            style={{ x: tx, y: ty }}
            className="text-[15vw] md:text-[10.5vw] leading-[0.92] tracking-[-0.05em] font-medium text-black"
          >
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.05em]">
                <span className="hero-line-word block translate-y-[115%]">{line}</span>
              </span>
            ))}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto w-full max-w-[1600px] flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div className="hero-summary max-w-md text-secondary-foreground text-base md:text-lg leading-relaxed font-light opacity-0">
          Computer Science graduate skilled in full-stack web development, expanding expertise in
          React.js, Artificial Intelligence, and Machine Learning.
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black"
        >
          <span className="relative block w-10 h-px bg-border overflow-hidden">
            <motion.span
              className="absolute inset-y-0 left-0 w-full bg-black"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
