import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, RevealText } from "@/components/Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  year: string;
};

const PROJECTS: Project[] = [
  {
    title: "Atelier Analytics",
    description: "A luxury-grade analytics dashboard with first-class typography, real-time charts and a black-tie dark theme.",
    tags: ["Next.js", "TypeScript", "D3", "Postgres"],
    image: p1,
    github: "https://github.com/",
    demo: "https://example.com",
    year: "2025",
  },
  {
    title: "Maison Wallet",
    description: "A mobile-first wallet experience exploring glassmorphism, haptic motion and a calmer financial UI.",
    tags: ["React Native", "Expo", "Reanimated"],
    image: p2,
    github: "https://github.com/",
    demo: "https://example.com",
    year: "2025",
  },
  {
    title: "Neural Atlas",
    description: "An interactive visualisation tool for embeddings — turning vector spaces into something you can feel.",
    tags: ["WebGL", "TS", "Python", "FastAPI"],
    image: p3,
    github: "https://github.com/",
    demo: "https://example.com",
    year: "2024",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px w-10 bg-gold/60" />
                03 — Selected Work
              </div>
            </Reveal>
            <RevealText
              as="h2"
              text="Projects with conviction."
              className="font-display text-4xl tracking-[-0.02em] sm:text-5xl md:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              A small, deliberate set. Each one taught me something I now refuse to forget.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 10 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transformPerspective: 1200 }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-90" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          {project.year}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl tracking-tight">{project.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:text-gold"
          >
            Live demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-white/20">/</span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}