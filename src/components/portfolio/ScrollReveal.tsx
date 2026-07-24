import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

const EASE = [0.19, 1, 0.22, 1] as const;

export function Reveal({ children, as = "div", className, delay = 0, y = 32, once = true }: Props) {
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

/** Word-by-word reveal with subtle blur — Apple-style */
export function RevealText({
  text,
  className,
  stagger = 0.035,
  as: As = "p",
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const words = text.split(" ");
  return (
    <As ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", opacity: 0, filter: "blur(6px)" }}
            animate={inView ? { y: "0%", opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.1, delay: i * stagger, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </As>
  );
}
