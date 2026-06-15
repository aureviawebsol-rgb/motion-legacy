import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Passion } from "@/components/sections/Passion";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kartik Goyal — B.Tech, Builder, Designer" },
      { name: "description", content: "Portfolio of Kartik Goyal — final year B.Tech student at MIT ADT University. Builder, designer, technology enthusiast." },
      { property: "og:title", content: "Kartik Goyal — Portfolio" },
      { property: "og:description", content: "B.Tech final year. Builder. Designer. Technology enthusiast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Marquee />
      <Passion />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
