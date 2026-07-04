import { Mandala } from "./Motifs";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden tint-hero">
      <div className="pointer-events-none absolute inset-0 jali-dots opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-24 text-[var(--color-indigo)] opacity-[0.06]">
        <Mandala className="h-[440px] w-[440px]" spin />
      </div>
      <div className="wrap relative py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-slate)]">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
