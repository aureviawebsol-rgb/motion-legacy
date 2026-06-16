import { motion } from "framer-motion";
import watchImg from "@/assets/watch.jpg";
import carImg from "@/assets/car.jpg";
import { Reveal, RevealText } from "@/components/Reveal";

export function Passion() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" />
            02 — Beyond Technology
          </div>
        </Reveal>
        <RevealText
          as="h2"
          text="The things that shape my taste."
          className="max-w-3xl text-balance font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Two obsessions that quietly inform how I design and build. Mechanical patience.
            Engineered emotion.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10 bg-surface">
              <img
                src={watchImg}
                alt="Mechanical watch movement"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-60 mix-blend-screen">
                <GearSVG className="absolute inset-0 animate-spin-slow text-gold/60" />
                <GearSVG className="absolute inset-10 animate-spin-reverse text-foreground/40" teeth={10} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Horology</div>
                <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Luxury Watches</h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  A reverence for tourbillons, perpetual calendars and the silent architecture
                  inside a Lange or a Patek. Patience, made visible.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.15}>
            <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10 bg-surface">
              <img
                src={carImg}
                alt="Performance car silhouette"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 blur-[0.5px] transition-all duration-[1200ms] ease-out group-hover:scale-[1.08] group-hover:blur-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div aria-hidden className="absolute inset-0 overflow-hidden">
                {[12, 28, 46, 64, 82].map((y, i) => (
                  <motion.span
                    key={i}
                    className="absolute h-px w-40 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                    style={{ top: `${y}%` }}
                    initial={{ x: "-20%", opacity: 0 }}
                    whileInView={{ x: "120%", opacity: [0, 1, 0] }}
                    viewport={{ once: false }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Velocity</div>
                <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Performance Cars</h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  The Porsche 911 line, the GT3 RS, naturally aspirated flat-sixes — engineering
                  with a heartbeat. Function delivered as feeling.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GearSVG({ className = "", teeth = 14 }: { className?: string; teeth?: number }) {
  const arr = Array.from({ length: teeth });
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g fill="currentColor">
        {arr.map((_, i) => {
          const a = (i / teeth) * 360;
          return <rect key={i} x="48" y="2" width="4" height="10" transform={`rotate(${a} 50 50)`} />;
        })}
      </g>
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}