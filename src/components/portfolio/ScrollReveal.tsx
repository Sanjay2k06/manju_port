import { useEffect, useRef, useMemo, type ReactNode, type ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Framer Motion Reveal for containers/items (keeps non-text scroll reveals intact)
const EASE = [0.19, 1, 0.22, 1] as const;

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 32,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px" });
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Comp
      ref={ref as never}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

// React Bits ScrollReveal component
interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  as?: ElementType;
}

export function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  as: Component = "h2",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word font-medium" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // rotation animation on container
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      },
    );

    const wordElements = el.querySelectorAll(".word");

    // opacity animation on word spans
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity, filter" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      },
    );

    // blur animation on word spans
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  const AsTag = Component as any;

  return (
    <AsTag ref={containerRef} className={`my-5 ${containerClassName}`}>
      <span
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold block ${textClassName}`}
      >
        {splitText}
      </span>
    </AsTag>
  );
}

// Map existing text reveal components to the new GSAP ScrollReveal component
export function RevealText({
  text,
  className,
  as = "p",
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: ElementType;
}) {
  return (
    <ScrollReveal
      baseOpacity={0.15}
      baseRotation={2}
      enableBlur={true}
      blurStrength={6}
      textClassName={className}
      as={as}
    >
      {text}
    </ScrollReveal>
  );
}

export default ScrollReveal;
