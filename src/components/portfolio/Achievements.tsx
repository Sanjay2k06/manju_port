import { Reveal } from "./ScrollReveal";

const TIMELINE_ITEMS = [
  {
    year: "2025",
    type: "Hackathon",
    title: "National Level Ideathon — 12 Hour Hackathon",
    institution: "SSN College of Engineering",
    description:
      "Participated in the intense 12-hour collaborative coding and ideation sprint to draft solutions for real-world scenarios.",
  },
  {
    year: "2025",
    type: "Hackathon",
    title: "Smart India Hackathon",
    institution: "Anand Institute of Higher Technology",
    description:
      "Collaborated on designing and presenting technology prototypes for the prestigious national-level hackathon initiative.",
  },
  {
    year: "2025",
    type: "Workshop",
    title: "Machine Learning Workshop",
    institution: "TopEngineers",
    location: "IIT Madras Research Park",
    description:
      "Acquired hands-on exposure to core machine learning concepts, model training, and algorithmic workflows at IIT Madras Research Park.",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground">
                Milestones
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1]">
                Achievements & Workshops.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-32 pl-8 md:pl-16 space-y-16 py-8">
          {TIMELINE_ITEMS.map((item, i) => (
            <div key={i} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-1.5 w-[11px] h-[11px] rounded-full bg-white border border-black group-hover:bg-black transition-colors duration-300" />

              <Reveal>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-3">
                    <span className="text-xs tracking-[0.25em] uppercase text-secondary-foreground font-semibold">
                      {item.year} — {item.type}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-9 max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black">
                      {item.title}
                    </h3>
                    <p className="text-lg font-light text-secondary-foreground mt-2">
                      {item.institution} {item.location ? `· ${item.location}` : ""}
                    </p>
                    <p className="text-sm text-secondary-foreground font-light leading-relaxed mt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
