import { Reveal } from "./ScrollReveal";

const INTERNSHIPS = [
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "2026",
    details: "Virtual Internship",
    responsibilities: [
      "Implemented responsive web pages",
      "Improved website responsiveness",
      "Gained hands-on web development experience",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    role: "Web Development Intern",
    company: "SmartED Innovations",
    duration: "2024",
    details: "In-person/Remote Developer Role",
    responsibilities: [
      "Created responsive web pages",
      "Used HTML, CSS, and JavaScript for UI layouts",
      "Managed backend development and system integration",
      "Worked with Python and SQL databases",
      "Performed API integration and data fetching",
      "Improved website performance and page speed",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL", "API Integration"],
  },
];

export function Internships() {
  return (
    <section
      id="internships"
      className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                Internships
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                Professional Internships.
              </h2>
            </Reveal>
          </div>
        </div>

        <ul>
          {INTERNSHIPS.map((item, i) => (
            <li key={i} className="border-t border-border py-12 md:py-16">
              <Reveal>
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-sm text-secondary-foreground font-light mb-1">
                      Year: {item.duration}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {item.details}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-5">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] text-black">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-xl font-light text-secondary-foreground">
                      {item.company}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="border border-border rounded-full px-3 py-1 bg-muted/20 text-xs text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
                    <h4 className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold mb-4">
                      Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-secondary-foreground font-light">
                      {item.responsibilities.map((r, ri) => (
                        <li key={ri} className="leading-relaxed">
                          <span className="text-black">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
