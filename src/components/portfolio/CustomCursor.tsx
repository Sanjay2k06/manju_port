import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [badgeText, setBadgeText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only initialize custom cursor on devices that support hover (typically >= 1024px desktop)
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    setIsVisible(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial pivot to center
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // GSAP quickTo helper for lag following
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      // Fade in cursor on first move
      gsap.set([dot, ring], { opacity: 1 });
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute("data-cursor");
        
        if (cursorType === "view") {
          setBadgeText("VIEW");
          gsap.to(ring, {
            width: 80,
            height: 80,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            borderColor: "rgba(255, 255, 255, 0.15)",
            duration: 0.3,
            overwrite: "auto",
          });
          gsap.to(dot, { scale: 0, duration: 0.2 });
        } else if (cursorType === "hover") {
          gsap.to(ring, {
            width: 44,
            height: 44,
            scale: 1.15,
            borderColor: "rgba(0, 0, 0, 0.8)",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            duration: 0.3,
            overwrite: "auto",
          });
          gsap.to(dot, { scale: 1.6, duration: 0.2 });
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      
      if (interactiveEl) {
        setBadgeText("");
        gsap.to(ring, {
          width: 32,
          height: 32,
          scale: 1,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0.3)",
          duration: 0.3,
          overwrite: "auto",
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-black will-change-transform opacity-0"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex h-8 w-8 items-center justify-center rounded-full border border-black/30 bg-transparent text-[10px] font-semibold tracking-wider text-white select-none will-change-transform transition-all opacity-0"
        style={{ boxSizing: "border-box" }}
      >
        {badgeText}
      </div>
    </>
  );
}
