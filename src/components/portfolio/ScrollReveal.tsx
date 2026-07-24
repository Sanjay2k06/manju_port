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

export function Reveal({ children, as = "div", className, delay = 0, y = 24, once = true }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Comp
      ref={ref as never}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Word-by-word reveal for headings/paragraphs */
export function RevealText({
  text,
  className,
  stagger = 0.04,
  as: As = "p",
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const words = text.split(" ");
  return (
    <As ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </As>
  );
}
