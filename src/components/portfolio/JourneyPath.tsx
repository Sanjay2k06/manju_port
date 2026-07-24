import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function JourneyPath() {
  const pathRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathD, setPathD] = useState("");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const calculatePath = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const mainHeight = main.clientHeight;
      setHeight(mainHeight);

      const sectionIds = [
        "home",
        "about",
        "skills",
        "projects",
        "internships",
        "achievements",
        "certifications",
        "contact",
      ];

      const points: { x: number; y: number }[] = [];
      const width = window.innerWidth;

      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const mainRect = main.getBoundingClientRect();
          // Get absolute vertical center of the section relative to the page container
          const y = rect.top - mainRect.top + rect.height / 2;

          // Alternate X coordinates on desktop, or run down the left gutter on mobile
          let x = width / 2;
          if (width < 1024) {
            x = width < 640 ? 24 : 36; // Left gutter line on mobile/tablet
          } else {
            if (index === 0) {
              x = width / 2; // Hero starts center
            } else if (id === "about") {
              x = width * 0.2; // Weave left
            } else if (id === "skills") {
              x = width * 0.8; // Weave right
            } else if (id === "projects") {
              x = width * 0.18; // Weave left
            } else if (id === "internships") {
              x = width * 0.78; // Weave right
            } else if (id === "achievements") {
              x = width * 0.22; // Weave left
            } else if (id === "certifications") {
              x = width * 0.75; // Weave right
            } else if (id === "contact") {
              x = width / 2; // Contact ends center
            }
          }

          points.push({ x, y });
        }
      });

      if (points.length < 2) return;

      // Build smooth cubic Bezier S-curves connecting the points
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const dy = p1.y - p0.y;
        
        // Control points build soft vertical bends (S-bends)
        const cp1x = p0.x;
        const cp1y = p0.y + dy * 0.45;
        const cp2x = p1.x;
        const cp2y = p1.y - dy * 0.45;

        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
      }

      setPathD(d);
    };

    // Calculate layout parameters after components mount
    const timer = setTimeout(calculatePath, 800);
    window.addEventListener("resize", calculatePath);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePath);
    };
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const circle = circleRef.current;
    if (!path || !circle || !pathD) return;

    const length = path.getTotalLength();
    
    // Set initial dash properties to hide the stroke
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const trigger = ScrollTrigger.create({
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2, // Cinematic, ultra-smooth following
      onUpdate: (self) => {
        const progress = self.progress;
        const currentOffset = length * (1 - progress);
        
        // Draw path stroke
        gsap.set(path, { strokeDashoffset: currentOffset });

        // Update indicator circle coordinates on path
        const currentLength = length * progress;
        const point = path.getPointAtLength(currentLength);
        
        gsap.set(circle, {
          cx: point.x,
          cy: point.y,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [pathD]);

  if (!pathD) return null;

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: `${height}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background guide path (subtle thin grey stroke) */}
      <path
        d={pathD}
        fill="none"
        stroke="#eaeaea"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-50"
      />
      {/* Active timeline path (indigo accent stroke) */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="#6366f1"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="will-change-transform"
      />
      {/* Moving journey tracker point */}
      <circle
        ref={circleRef}
        r="7"
        fill="#6366f1"
        className="shadow-sm will-change-transform"
      />
    </svg>
  );
}
