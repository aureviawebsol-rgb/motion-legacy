import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background radial */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" />
      </div>

      {/* Rotating mechanical rings */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-[120vmin] w-[120vmin] opacity-[0.55]">
          <RingSVG className="absolute inset-0 animate-spin-slow" stroke="rgba(212,175,55,0.35)" radius={48} ticks={60} long={6} />
          <RingSVG className="absolute inset-[8%] animate-spin-reverse" stroke="rgba(255,255,255,0.10)" radius={48} ticks={120} long={2} />
          <RingSVG className="absolute inset-[18%] animate-spin-slow" stroke="rgba(212,175,55,0.18)" radius={48} ticks={24} long={10} />
          <div className="absolute inset-[34%] rounded-full border border-white/5" />
          <div className="absolute inset-[44%] rounded-full border border-gold/20" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_30px_rgba(212,175,55,0.8)]" />
        </div>
      </motion.div>

      {/* Particles */}
      <Particles />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="inline-block h-px w-10 bg-gold/60" />
          Portfolio &middot; 2026 Edition
        </motion.div>

        <h1 className="font-display text-[14vw] leading-[0.9] tracking-[-0.04em] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Kartik
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gold"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Goyal.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 grid items-end gap-10 md:grid-cols-[1fr_auto]"
        >
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            B.Tech Final Year Student &middot; Builder &middot; Designer &middot; Technology Enthusiast.
            Crafting interfaces and ideas with the same obsession watchmakers reserve for movements.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">
              View Work <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#about" variant="ghost">
              About Me
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
}

function RingSVG({ className = "", stroke = "white", radius = 48, ticks = 60, long = 6 }: { className?: string; stroke?: string; radius?: number; ticks?: number; long?: number }) {
  const items = Array.from({ length: ticks });
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r={radius} fill="none" stroke={stroke} strokeWidth="0.15" />
      {items.map((_, i) => {
        const angle = (i / ticks) * 360;
        const isLong = i % long === 0;
        const len = isLong ? 2.5 : 1;
        return (
          <line
            key={i}
            x1="50"
            y1={50 - radius}
            x2="50"
            y2={50 - radius + len}
            stroke={stroke}
            strokeWidth={isLong ? 0.25 : 0.12}
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 137) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 8) * 0.4;
        const size = (i % 3) + 1;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0], y: [-8, 8, -8] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay }}
          />
        );
      })}
    </div>
  );
}