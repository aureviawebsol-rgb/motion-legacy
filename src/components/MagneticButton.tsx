import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({ children, href, onClick, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.25, y: y * 0.35 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const styles =
    variant === "primary"
      ? "bg-gold text-primary-foreground shadow-[0_10px_30px_-12px_rgb(27_61_143_/_0.45)] hover:shadow-[0_18px_50px_-12px_rgb(27_61_143_/_0.55)]"
      : "border border-foreground/15 text-foreground hover:border-gold/60 hover:bg-foreground/[0.02]";

  const inner = (
    <motion.span
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-wide uppercase"
    >
      {children}
    </motion.span>
  );

  const wrap = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 transition-all duration-300 ${styles} ${className}`}
      data-cursor="hover"
    >
      {inner}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {wrap}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-block">
      {wrap}
    </button>
  );
}