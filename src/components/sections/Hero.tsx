import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(27,61,143,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(107,138,204,0.10),transparent_60%)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="pointer-events-none absolute right-[-12vmin] top-1/2 -z-10 -translate-y-1/2"
      >
        <div className="relative h-[78vmin] w-[78vmin]">
          <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),rgba(225,232,245,0.45)_55%,rgba(27,61,143,0.05)_100%)]" />
          <DialSVG className="absolute inset-0" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[40%] w-[2px] -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-t from-[rgb(27_61_143)] to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 100%" }}
          />
          <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_24px_rgba(27,61,143,0.45)]" />
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="inline-block h-px w-12 bg-gold/70" />
          Portfolio &middot; 2026 Edition
        </motion.div>

        <h1 className="font-display font-light text-[14vw] leading-[0.95] tracking-[-0.035em] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[10.5rem]">
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
              className="block italic text-gold"
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
            Crafting interfaces and ideas with the same patience watchmakers reserve for movements.
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

function DialSVG({ className = "" }: { className?: string }) {
  const minutes = Array.from({ length: 60 });
  const indices = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="dialGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(27,61,143,0.08)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(27,61,143,0.22)" strokeWidth="0.2" />
      <circle cx="50" cy="50" r="44" fill="url(#dialGrad)" stroke="rgba(27,61,143,0.12)" strokeWidth="0.12" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(27,61,143,0.08)" strokeWidth="0.1" />
      {minutes.map((_, i) => {
        const a = (i / 60) * 360;
        const long = i % 5 === 0;
        return (
          <line
            key={i}
            x1="50"
            y1={4}
            x2="50"
            y2={4 + (long ? 2.4 : 1)}
            stroke="rgba(27,61,143,0.45)"
            strokeWidth={long ? 0.3 : 0.13}
            transform={`rotate(${a} 50 50)`}
          />
        );
      })}
      {indices.map((label, i) => {
        const a = (i / 12) * 360;
        const rad = (a - 90) * (Math.PI / 180);
        const x = Number((50 + Math.cos(rad) * 39).toFixed(3));
        const yy = Number((50 + Math.sin(rad) * 39 + 1.1).toFixed(3));
        return (
          <text
            key={i}
            x={x}
            y={yy}
            textAnchor="middle"
            fontSize="3"
            fontFamily="Fraunces, serif"
            fontStyle="italic"
            fill="rgba(27,61,143,0.55)"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}