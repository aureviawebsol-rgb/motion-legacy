export function Marquee() {
  const items = [
    "Design as discipline",
    "Engineered emotion",
    "Restraint over flash",
    "Detail is the difference",
    "Quiet luxury",
    "Crafted, not generated",
  ];
  const Row = (
    <div className="flex shrink-0 items-center gap-16 px-8">
      {items.map((t) => (
        <span key={t} className="flex items-center gap-16">
          <span className="font-display text-3xl tracking-tight text-foreground/70 sm:text-4xl">{t}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-foreground/5 py-10">
      <div className="flex animate-marquee">
        {Row}
        {Row}
      </div>
    </div>
  );
}