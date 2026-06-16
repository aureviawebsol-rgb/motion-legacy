import { Reveal, RevealText } from "@/components/Reveal";

const CLUSTERS = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP"] },
  { title: "Backend", items: ["Node.js", "Express", "tRPC", "REST", "GraphQL"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { title: "Tools", items: ["Git", "Docker", "Vercel", "Vite", "Postman"] },
  { title: "Design", items: ["Figma", "Design Systems", "Motion", "Typography"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" />
            05 — Capabilities
          </div>
        </Reveal>
        <RevealText
          as="h2"
          text="A toolkit, not a checklist."
          className="font-display text-4xl tracking-[-0.02em] sm:text-5xl md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Grouped by where they live in the stack — the ones I reach for instinctively.
          </p>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-3xl border border-foreground/10 bg-surface/60">
          {CLUSTERS.map((c, ci) => (
            <Reveal key={c.title} delay={ci * 0.05}>
              <div className="group grid grid-cols-1 items-baseline gap-2 border-b border-foreground/8 px-6 py-7 transition-colors last:border-b-0 hover:bg-foreground/[0.02] sm:grid-cols-[200px_1fr] sm:px-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  <span className="mr-3 text-muted-foreground/60">0{ci + 1}</span>
                  {c.title}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-display text-lg tracking-tight text-foreground/85 sm:text-xl">
                  {c.items.map((item, i) => (
                    <span key={item} className="relative">
                      {item}
                      {i < c.items.length - 1 && (
                        <span className="ml-6 text-foreground/20">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}