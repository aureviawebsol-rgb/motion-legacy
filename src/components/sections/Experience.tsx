import { Reveal, RevealText } from "@/components/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
  {
    year: "2026",
    title: "Graduating — B.Tech",
    org: "MIT ADT University",
    body: "Wrapping up four years with a capstone focused on design-led engineering and modern web infrastructure.",
  },
  {
    year: "2024 — 25",
    title: "Independent Builder",
    org: "Self-directed projects",
    body: "Shipping small, polished products. Learning the craft by repeatedly going zero-to-one.",
  },
  {
    year: "2023",
    title: "Design Systems Lead — College Club",
    org: "Campus design collective",
    body: "Built a token-driven component library and ran weekly critique sessions on visual hierarchy.",
  },
  {
    year: "2022",
    title: "Started B.Tech",
    org: "MIT ADT University",
    body: "Began the journey. First taste of building real things for real people.",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" />
            04 — Experience
          </div>
        </Reveal>
        <RevealText
          as="h2"
          text="A short timeline. A long curiosity."
          className="font-display text-4xl tracking-[-0.02em] sm:text-5xl md:text-6xl"
        />

        <div ref={ref} className="relative mt-20 max-w-3xl">
          <div className="absolute left-[11px] top-0 h-full w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[11px] top-0 w-px bg-gradient-to-b from-gold via-gold/60 to-transparent"
          />

          <ul className="space-y-14">
            {ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.05}>
                <li className="relative pl-12">
                  <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-gold/40 bg-background">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{it.year}</div>
                  <div className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">{it.title}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{it.org}</div>
                  <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">{it.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}