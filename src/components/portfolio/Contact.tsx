import { Reveal, RevealText } from "./ScrollReveal";

const LINKS = [
  { label: "Phone", href: "tel:+919344710273", value: "+91 9344710273" },
  { label: "Email", href: "mailto:manjuladevimari8@gamil.com", value: "manjuladevimari8@gamil.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/manjula-devi-97286b35a", value: "in/manjula-devi-97286b35a" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-16">
            Contact
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
                data-cursor="hover"
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
