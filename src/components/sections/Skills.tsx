import { motion } from "framer-motion";
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLUSTERS.map((c, ci) => (
            <Reveal key={c.title} delay={ci * 0.06}>
              <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface p-7 transition-colors hover:border-gold/30">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition-opacity duration-700 group-hover:bg-gold/15" />
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{c.title}</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5 }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="cursor-default rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 py-1.5 text-xs text-foreground/90"
                      data-cursor="hover"
                    >
                      {item}
                    </motion.span>
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