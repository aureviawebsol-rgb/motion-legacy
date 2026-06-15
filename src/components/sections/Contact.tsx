import { Reveal, RevealText } from "@/components/Reveal";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const LINKS = [
  { icon: Mail, label: "Email", value: "kartik@example.com", href: "mailto:kartik@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/kartikgoyal", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@kartikgoyal", href: "https://github.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" />
            06 — Contact
          </div>
        </Reveal>
        <RevealText
          as="h2"
          text="Let's build something quietly remarkable."
          className="max-w-4xl text-balance font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton href="mailto:kartik@example.com">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#" variant="ghost">
              <Download className="h-4 w-4" /> Resume
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{l.label}</div>
                <l.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <span className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-gold sm:text-2xl">
                  {l.value}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Kartik Goyal</div>
          <div>Crafted with patience. India.</div>
        </div>
      </div>
    </section>
  );
}