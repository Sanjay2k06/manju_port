import { createFileRoute } from "@tanstack/react-router";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Independent Engineer & Designer" },
      {
        name: "description",
        content:
          "A minimal, editorial portfolio of software crafted at the intersection of artificial intelligence and product design.",
      },
      { property: "og:title", content: "Portfolio — Independent Engineer & Designer" },
      {
        property: "og:description",
        content:
          "Selected work, experience, and craft. Building intelligent digital experiences.",
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
      <main className="bg-white text-black">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
