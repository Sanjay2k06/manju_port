import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PATH_D =
  "M 700 150 C 1075.0 99.0, 1000.0 541.0, 730.0 320.0 C 355.0 269.0, 430.0 711.0, 700.0 490.0 C 1075.0 439.0, 1000.0 881.0, 730.0 660.0 C 355.0 609.0, 430.0 1051.0, 700.0 830.0 C 1075.0 779.0, 1000.0 1221.0, 730.0 1000.0 C 730.0 1200.0, 300.0 1200.0, 300.0 1400.0 C 510.0 1350.0, 468.0 1783.3, 330.0 1566.7 C 120.0 1516.7, 162.0 1950.0, 300.0 1733.3 C 510.0 1683.3, 468.0 2116.7, 330.0 1900.0 C 120.0 1850.0, 162.0 2283.3, 300.0 2066.7 C 510.0 2016.7, 468.0 2450.0, 330.0 2233.3 C 120.0 2183.3, 162.0 2616.7, 300.0 2400.0 C 300.0 2600.0, 1100.0 2600.0, 1100.0 2800.0 C 1310.0 2750.0, 1268.0 3183.3, 1130.0 2966.7 C 920.0 2916.7, 962.0 3350.0, 1100.0 3133.3 C 1310.0 3083.3, 1268.0 3516.7, 1130.0 3300.0 C 920.0 3250.0, 962.0 3683.3, 1100.0 3466.7 C 1310.0 3416.7, 1268.0 3850.0, 1130.0 3633.3 C 920.0 3583.3, 962.0 4016.7, 1100.0 3800.0 C 1100.0 4000.0, 300.0 4000.0, 300.0 4200.0 C 510.0 4148.6, 468.0 4594.3, 330.0 4371.4 C 120.0 4320.0, 162.0 4765.7, 300.0 4542.9 C 510.0 4491.4, 468.0 4937.1, 330.0 4714.3 C 120.0 4662.9, 162.0 5108.6, 300.0 4885.7 C 510.0 4834.3, 468.0 5280.0, 330.0 5057.1 C 120.0 5005.7, 162.0 5451.4, 300.0 5228.6 C 510.0 5177.1, 468.0 5622.9, 330.0 5400.0 C 330.0 5600.0, 1100.0 5600.0, 1100.0 5800.0 C 1310.0 5748.6, 1268.0 6194.3, 1130.0 5971.4 C 920.0 5920.0, 962.0 6365.7, 1100.0 6142.9 C 1310.0 6091.4, 1268.0 6537.1, 1130.0 6314.3 C 920.0 6262.9, 962.0 6708.6, 1100.0 6485.7 C 1310.0 6434.3, 1268.0 6880.0, 1130.0 6657.1 C 920.0 6605.7, 962.0 7051.4, 1100.0 6828.6 C 1310.0 6777.1, 1268.0 7222.9, 1130.0 7000.0 C 1130.0 7200.0, 400.0 7200.0, 400.0 7400.0 C 625.0 7314.3, 580.0 7828.6, 450.0 7571.4 C 205.0 7520.0, 250.0 7965.7, 400.0 7742.9 C 625.0 7691.4, 580.0 8137.1, 430.0 7914.3 C 205.0 7862.9, 250.0 8308.6, 400.0 8085.7 C 625.0 8034.3, 580.0 8480.0, 430.0 8257.1 C 205.0 8205.7, 250.0 8651.4, 400.0 8428.6 C 625.0 8377.1, 580.0 8822.9, 430.0 8600.0 C 430.0 8800.0, 700.0 8800.0, 700.0 9000.0 C 1075.0 8955.0, 1000.0 9345.0, 730.0 9150.0 C 355.0 9105.0, 430.0 9495.0, 700.0 9300.0 C 1075.0 9255.0, 1000.0 9645.0, 730.0 9450.0 C 355.0 9405.0, 430.0 9795.0, 700.0 9600.0 C 1075.0 9555.0, 1000.0 9945.0, 730.0 9750.0 C 355.0 9705.0, 430.0 10095.0, 700.0 9900.0";

export function JourneyPath() {
  const pathRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const main = document.querySelector("main");
      if (main) {
        setHeight(main.clientHeight);
      }
    };

    updateHeight();
    const timer = setTimeout(updateHeight, 800);
    window.addEventListener("resize", updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const circle = circleRef.current;
    if (!path || !circle) return;

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
  }, [height]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 10000"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: `${height}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background guide path (subtle thin grey stroke) */}
      <path
        d={PATH_D}
        fill="none"
        stroke="#f3f4f6"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Active timeline path (lime green stroke following scroll) */}
      <path
        ref={pathRef}
        d={PATH_D}
        fill="none"
        stroke="#C2F84F"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="will-change-transform"
      />
      {/* Moving journey tracker point */}
      <circle
        ref={circleRef}
        r="10"
        fill="#C2F84F"
        stroke="#ffffff"
        strokeWidth="3"
        className="shadow-md will-change-transform filter drop-shadow-[0_0_8px_rgba(194,248,79,0.8)]"
      />
    </svg>
  );
}
