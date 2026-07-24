import { createFileRoute } from "@tanstack/react-router";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Internships } from "@/components/portfolio/Internships";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manjula Devi — Portfolio" },
      {
        name: "description",
        content:
          "Computer Science graduate skilled in full-stack web development with HTML, CSS, JavaScript, Python, and SQL. Currently expanding expertise in React.js and AI/ML.",
      },
      { property: "og:title", content: "Manjula Devi — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-Stack Web Development and Artificial Intelligence portfolio of Manjula Devi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <main className="bg-white text-black relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
        <div className="pointer-events-none fixed inset-0 z-[70] mix-blend-multiply opacity-[0.035] noise" />
      </main>
    </SmoothScrollProvider>
  );
}
