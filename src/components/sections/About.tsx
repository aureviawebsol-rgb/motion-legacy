import { Reveal, RevealText } from "@/components/Reveal";
import { GraduationCap, Lightbulb, Palette, Puzzle, Rocket } from "lucide-react";

const POINTS = [
  { icon: GraduationCap, title: "MIT ADT University", body: "B.Tech Final Year — pursuing computer science with a designer's eye." },
  { icon: Lightbulb, title: "Technologist", body: "Obsessed with how modern software is shipped, from primitives to polish." },
  { icon: Palette, title: "UI / UX Driven", body: "Pixel-perfect interfaces, restrained motion, considered details." },
  { icon: Puzzle, title: "Problem Solver", body: "I enjoy the puzzle as much as the product. Edge cases are features." },
  { icon: Rocket, title: "Always Building", body: "Exploring modern web, AI tooling, and product-grade engineering." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px w-10 bg-gold/60" />
                01 — About
              </div>
            </Reveal>
            <RevealText
              as="h2"
              text="A student who treats every product like a luxury object."
              className="text-balance font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
                I'm Kartik — a final year B.Tech student at MIT ADT University. I care deeply about the
                craft of software: the texture of an interaction, the weight of a typeface, the
                quiet confidence of a well-engineered system. Right now I'm exploring modern software
                development, design systems and the intersection of taste and technology.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                {[
                  { k: "2026", v: "Graduating" },
                  { k: "20+", v: "Projects shipped" },
                  { k: "∞", v: "Cups of espresso" },
                ].map((s) => (
                  <div key={s.v} className="bg-background p-5 sm:p-6">
                    <div className="font-display text-2xl tracking-tight sm:text-3xl text-gold">{s.k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent" />
            <ul className="space-y-8">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <li className="group relative flex gap-5">
                    <div className="relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/10 bg-surface transition-colors group-hover:border-gold/60">
                      <p.icon className="h-4 w-4 text-gold" />
                    </div>
                    <div className="min-w-0 flex-1 rounded-2xl border border-foreground/5 bg-foreground/[0.02] p-5 transition-all duration-500 group-hover:border-foreground/15 group-hover:bg-foreground/[0.04]">
                      <div className="text-sm font-medium uppercase tracking-[0.18em] text-foreground">{p.title}</div>
                      <div className="mt-1.5 text-sm text-muted-foreground">{p.body}</div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}