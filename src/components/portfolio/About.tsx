import { useRef } from "react";
import { Reveal, RevealText } from "./ScrollReveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={ref} className="relative bg-transparent text-black py-32 md:py-56 px-6 md:px-10 pl-12 sm:pl-16 lg:pl-10 border-t border-border">
      <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8">
        
        {/* Left Column: Sticky profile card - active on all devices */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-4 md:space-y-8 mb-12 lg:mb-0">
          <div>
            <Reveal>
              <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-secondary-foreground mb-4 md:mb-6">
                Technical Journey
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="w-full max-w-[280px] sm:max-w-[340px] aspect-[4/5] overflow-hidden rounded-lg border border-border bg-[#fafafa] shadow-sm">
                <img
                  src="/manju_portrait.png"
                  alt="Manjula Devi Portrait"
                  data-cursor="hover"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Column: Conversational narrative stages */}
        <div className="col-span-12 lg:col-span-8 space-y-24 md:space-y-48">
          
          {/* Main Title & Subtitle */}
          <div className="min-h-[50vh] flex flex-col justify-center">
            <RevealText
              as="h2"
              text="FROM CURIOSITY TO ENGINEERING"
              className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.9] text-black uppercase mb-10"
            />
            <div className="max-w-xl text-lg md:text-xl text-secondary-foreground font-light leading-relaxed mt-6 space-y-4">
              <RevealText text="Every journey starts with a simple question: 'How does this work?'" className="text-black font-normal" />
              <RevealText text="Mine started the same way." />
              <RevealText text="I was always fascinated by the technology around me—not just using it, but understanding how it was built. That curiosity eventually led me to pursue a Bachelor's degree in Computer Science and Engineering at Anand Institute of Higher Technology, where I discovered that programming was much more than writing code. It was a way to turn ideas into reality." />
            </div>
          </div>

          {/* Learning by Building */}
          <div className="space-y-6 pt-12 border-t border-border/40">
            <Reveal>
              <span className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                01 — Evolution
              </span>
            </Reveal>
            <RevealText
              as="h3"
              text="Learning by Building"
              className="text-3xl md:text-5xl font-medium tracking-tight text-black"
            />
            <div className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed space-y-4 max-w-2xl">
              <RevealText text="I quickly realized that the best way to learn wasn't by watching tutorials—it was by creating things." />
              <RevealText text="Every project became an opportunity to solve a new problem, make mistakes, and improve. Whether it was developing web applications, designing intuitive user interfaces, or building complete software solutions, each experience taught me something that no textbook ever could." />
              <RevealText text="With every challenge, I became more confident in turning concepts into working products." />
            </div>
          </div>

          {/* Discovering the World of AI */}
          <div className="space-y-6 pt-12 border-t border-border/40">
            <Reveal>
              <span className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                02 — Exploration
              </span>
            </Reveal>
            <RevealText
              as="h3"
              text="Discovering the World of AI"
              className="text-3xl md:text-5xl font-medium tracking-tight text-black"
            />
            <div className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed space-y-4 max-w-2xl">
              <RevealText text="As I continued building software, one question kept coming back: 'What if software could do more than follow instructions?'" className="text-black font-normal" />
              <RevealText text="That curiosity introduced me to Artificial Intelligence." />
              <RevealText text="Exploring intelligent systems changed the way I looked at technology. Instead of simply creating applications, I became interested in building solutions that could recognize patterns, make decisions, and interact more naturally with people." />
              <RevealText text="It opened an entirely new perspective on what software could become." />
            </div>
          </div>

          {/* Beyond the Screen */}
          <div className="space-y-6 pt-12 border-t border-border/40">
            <Reveal>
              <span className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                03 — Hardware
              </span>
            </Reveal>
            <RevealText
              as="h3"
              text="Beyond the Screen"
              className="text-3xl md:text-5xl font-medium tracking-tight text-black"
            />
            <div className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed space-y-4 max-w-2xl">
              <RevealText text="My curiosity didn't stop with software." />
              <RevealText text="I wanted to understand how digital systems interact with the physical world, which led me into embedded systems and IoT." />
              <RevealText text="Working with ESP32 boards, sensors, and hardware projects taught me that innovation happens when software and hardware work together. Seeing an idea come to life beyond the computer screen gave me a completely different appreciation for engineering." />
            </div>
          </div>

          {/* Where I Am Today */}
          <div className="space-y-6 pt-12 border-t border-border/40">
            <Reveal>
              <span className="text-xs tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                04 — Integration
              </span>
            </Reveal>
            <RevealText
              as="h3"
              text="Where I Am Today"
              className="text-3xl md:text-5xl font-medium tracking-tight text-black"
            />
            <div className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed space-y-4 max-w-2xl">
              <RevealText text="Today, I enjoy creating complete digital experiences—from the first idea to the final product." />
              <RevealText text="I love combining thoughtful design, reliable engineering, and emerging technologies to build solutions that are practical, scalable, and meaningful." />
              <RevealText text="For me, every project is another opportunity to learn, improve, and create something better than the last." />
              <RevealText text="And I believe the most exciting part of my journey is still ahead." className="text-black font-normal" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
