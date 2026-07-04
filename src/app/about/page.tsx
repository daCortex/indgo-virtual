import type { Metadata } from "next";
import { BRAND, TEAM, STATS } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { JaliPanel } from "@/components/Motifs";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Built by pilots,<br />for pilots.</>}
        intro={BRAND.intro}
      />

      <section className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="reveal space-y-5 text-[var(--color-slate)] leading-relaxed">
            <p>
              IndGo Air Virtual was founded in <b className="text-[var(--color-ink)]">{BRAND.founded}</b> and received IFVARB approval on <b className="text-[var(--color-ink)]">{BRAND.approved}</b>. We recreate IndiGo's real-world domestic and international operations inside Infinite Flight — the schedules, the fleet, the discipline.
            </p>
            <p>
              But we're more than a schedule. We're a community where a brand-new cadet gets the same warm welcome as a seasoned captain, where training is real, and where flying together is the whole point.
            </p>
            <p className="font-display text-2xl text-[var(--color-indigo)]">"{BRAND.tagline}"</p>
          </div>

          <div className="reveal relative">
            <div className="card grid grid-cols-2 gap-px overflow-hidden bg-[var(--color-line)]">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[var(--color-surface)] p-7 text-center">
                  <div className="stat-num text-3xl text-[var(--color-indigo)]">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-[var(--color-faint)]">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-40 w-40 text-[var(--color-marigold)] opacity-20">
              <JaliPanel className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden tint-sand py-16">
        <div className="wrap">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Flight deck & staff</span>
            <h2 className="mt-4 text-4xl md:text-5xl">The crew behind the crew</h2>
            <p className="mt-4 text-[var(--color-slate)]">A dedicated team keeps operations, training, routes and community running smoothly.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="reveal card card-hover p-6">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-sky)] font-display text-lg text-white">
                  {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 text-lg">{m.name}</h3>
                <p className="text-sm text-[var(--color-marigold)]">{m.role}</p>
                <p className="mt-2 text-xs text-[var(--color-faint)]">{m.handle}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-[var(--color-slate)]">Questions? Reach the team directly.</p>
            <a href={`mailto:${BRAND.email}`} className="btn btn-ghost">{BRAND.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
