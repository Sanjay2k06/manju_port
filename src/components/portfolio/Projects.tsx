import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { Reveal } from "./ScrollReveal";

const PROJECTS = [
  {
    name: "T-Section Road Safety Management System",
    year: "2025",
    tag: "IoT",
    description:
      "Implemented an IoT-based adaptive traffic light system using ESP32 and ultrasonic sensors for real-time vehicle detection.",
    problem:
      "Static traffic signals fail to adapt to live traffic density, leading to congestion and increased risk of collisions at T-sections.",
    solution:
      "Developed an ESP32-powered adaptive traffic light controller that dynamically optimizes signal timing based on real-time vehicle detection from ultrasonic sensors.",
    stack: ["ESP32", "Ultrasonic Sensors", "IoT", "Hardware Testing", "Traffic Management"],
    features: [
      "Real-time vehicle detection using ultrasonic sensors",
      "Adaptive signal timing optimization to reduce congestion and improve traffic flow",
      "Collision prevention safety logic to protect merging vehicles",
      "Validation through simulation and physical hardware testing"
    ],
    applications: [
      "Smart City Traffic Management",
      "Autonomous Junction Safety Automation",
      "Active Accident Prevention Systems"
    ]
  },
  {
    name: "Hospital Management System",
    year: "2025",
    tag: "Full Stack Web Application",
    description:
      "Created a web-based hospital management platform with modules for Patient Registration, Appointments, Doctor Management, and Billing.",
    problem:
      "Manual scheduling and records management in clinic settings lead to patient delays, double-booking, and invoicing errors.",
    solution:
      "Created an automated, full-stack hospital management web application using Python and MySQL to consolidate patient, doctor, and billing data.",
    stack: ["Python", "MySQL", "HTML", "CSS", "Responsive Design"],
    features: [
      "Patient Registration and profile management module",
      "Appointment Scheduling and queue tracking system",
      "Doctor Management dashboard with schedule allocation",
      "Automated Billing and invoicing calculation",
      "Fully responsive and mobile-friendly frontend layout"
    ],
    applications: [
      "Clinic Administration Automation",
      "Electronic Health Records (EHR) Systems",
      "Hospital Administrative Workflow Management"
    ]
  },
  {
    name: "Hand Gesture Recognition",
    year: "2025",
    tag: "Artificial Intelligence & Computer Vision",
    description:
      "Implemented a real-time hand gesture recognition system using MediaPipe and OpenCV.",
    problem:
      "Traditional physical input devices limit mobility and contact-free control, which is essential in sterile, secure, or emergency situations.",
    solution:
      "Engineered a contact-free, real-time hand gesture recognition application using MediaPipe and custom gesture mapping to trigger software actions.",
    stack: ["MediaPipe", "Computer Vision", "Python", "AI"],
    features: [
      "Real-time hand tracking and skeletal keypoint estimation",
      "Custom hand gesture mapping logic for distinct actions",
      "Live camera stream visualization overlay",
      "Focus on secure triggers and emergency notification applications"
    ],
    applications: [
      "Defense & Security Systems",
      "Human Computer Interaction (HCI)",
      "Contactless Controls for sterile/clean environments"
    ]
  }
];

function Card({ project, i, total }: { project: (typeof PROJECTS)[number]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isLast = i === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -40]);

  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 40 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="sticky top-0 min-h-screen w-full flex items-center py-4 md:py-24"
      style={{ zIndex: i + 1 }}
    >
      <motion.article
        data-cursor="view"
        style={{ scale, opacity, y }}
        className="w-full max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-y-visible bg-white border-t border-border py-6 md:py-16 will-change-transform shadow-sm"
      >
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 grid grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left Column: Basic Details */}
          <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <p className="text-[11px] tracking-[0.3em] uppercase text-secondary-foreground">
                {project.tag} · {project.year}
              </p>
            </div>
            <h3 className="text-2xl sm:text-4xl lg:text-[5.5vw] font-medium tracking-[-0.04em] leading-[0.95] mb-4 md:mb-8 text-black">
              {project.name}
            </h3>
            <p className="text-sm sm:text-lg text-secondary-foreground font-light leading-relaxed mb-4 md:mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-secondary-foreground mb-4 md:mb-8">
              {project.stack.map((s) => (
                <span
                  key={s}
                  data-cursor="hover"
                  className="border border-border rounded-full px-3 py-1 bg-muted/30 text-xs transition-colors hover:bg-black hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: In-Depth Details */}
          <div
            ref={detailsRef}
            className="col-span-12 lg:col-span-7 bg-muted/20 border border-border p-4 sm:p-6 md:p-8 rounded-lg space-y-4 md:space-y-6"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold mb-2">
                Problem Statement
              </h4>
              <p className="text-sm md:text-base text-black font-light leading-relaxed">
                {project.problem}
              </p>
            </div>
            
            <div className="border-t border-border/60 pt-4">
              <h4 className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold mb-2">
                Solution
              </h4>
              <p className="text-sm md:text-base text-black font-light leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border/60 pt-4">
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold mb-3">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-xs text-secondary-foreground space-y-2 font-light pl-1">
                  {project.features.map((f, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-black">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold mb-3">
                  Applications
                </h4>
                <ul className="list-disc list-inside text-xs text-secondary-foreground space-y-2 font-light pl-1">
                  {project.applications.map((a, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-black">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border">
      <div className="px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 pt-32 md:pt-48 pb-16 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-secondary-foreground">
                Projects
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] leading-[1]">
                Academic & Practical Works.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative">
        {PROJECTS.map((p, i) => (
          <Card key={p.name} project={p} i={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
