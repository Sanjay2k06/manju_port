import { Reveal } from "./ScrollReveal";

const CERTIFICATIONS = [
  {
    title: "Python Programming Certification",
    platform: "EDUCBA",
    provider: "Skillup101",
    year: "2025",
    description: "Comprehensive curriculum in advanced Python programming constructs, functional and object-oriented architectures."
  },
  {
    title: "Web Development Internship Certificate",
    platform: "Cognifyz Technologies",
    provider: "Cognifyz Technologies",
    year: "2026",
    description: "Awarded for the successful execution of internship deliverables focused on responsive design, UI standards, and site performance."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border bg-transparent">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                Certifications
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                Certifications.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border border-border p-8 bg-white rounded-lg flex flex-col justify-between min-h-[240px] hover:border-black transition-colors duration-500">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                      {c.year}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Platform: {c.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground font-light leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="border-t border-border/60 pt-4 mt-6 flex items-center justify-between text-xs text-secondary-foreground">
                  <span>Provider: {c.provider}</span>
                  <span className="text-black">Verified ✓</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
