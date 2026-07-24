import { Reveal, RevealText } from "./ScrollReveal";

const LINKS = [
  { label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com", value: "in/yourname" },
  { label: "GitHub", href: "https://github.com", value: "@yourname" },
  { label: "Resume", href: "#", value: "Download PDF" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-56 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-16">
            (06) — Contact
          </p>
        </Reveal>
        <RevealText
          as="h2"
          text="Let's build something meaningful."
          className="text-[12vw] md:text-[9vw] leading-[0.95] tracking-[-0.045em] font-medium max-w-[15ch]"
        />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 md:gap-x-16 border-t border-border pt-16">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.05}>
              <a
                href={l.href}
                className="group flex items-baseline justify-between border-b border-border pb-6 hover:border-black transition-colors"
              >
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-2">
                    {l.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-light tracking-tight text-black">
                    {l.value}
                  </p>
                </div>
                <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
