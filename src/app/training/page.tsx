import type { Metadata } from "next";
import { TRAINING, QUICK_LINKS } from "@/lib/content";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Training" };

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training academy"
        title={<>From first taxi<br />to long-haul command.</>}
        intro="A structured, instructor-supported path that takes you from Cadet to the flight deck of a widebody — at your own pace, with real feedback."
      />

      <section className="wrap py-16">
        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-[26px] top-2 bottom-2 hidden w-px bg-[var(--color-line)] md:block" />
          <div className="space-y-6">
            {TRAINING.map((t, i) => (
              <div key={t.title} className="reveal relative md:pl-20">
                <div className="absolute left-0 top-1 hidden h-[54px] w-[54px] place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] font-display text-lg text-[var(--color-indigo)] md:grid">
                  {i + 1}
                </div>
                <div className="card card-hover p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip chip-gold">{t.level}</span>
                    <span className="text-sm text-[var(--color-faint)]">{t.hours}</span>
                  </div>
                  <h3 className="mt-4 text-2xl">{t.title}</h3>
                  <p className="mt-2 max-w-2xl text-[var(--color-slate)]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Handbook + resources */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="reveal card p-8">
            <span className="eyebrow">Pilot handbook</span>
            <h3 className="mt-3 text-2xl">Everything, documented</h3>
            <p className="mt-3 text-[var(--color-slate)]">Our handbook covers SOPs, callsign format, PIREP filing, rank requirements and event etiquette. New cadets get a guided walkthrough on day one.</p>
            <ul className="mt-5 space-y-2.5 text-sm text-[var(--color-slate)]">
              {["Standard Operating Procedures", "Callsign & phraseology guide", "PIREP & flight-logging rules", "Rank & aircraft eligibility"].map((x) => (
                <li key={x} className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-[var(--color-marigold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal card p-8">
            <span className="eyebrow">Tools you'll use</span>
            <h3 className="mt-3 text-2xl">Set up for success</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {QUICK_LINKS.map((q) => (
                <a key={q.label} href={q.href} target="_blank" rel="noreferrer" className="rounded-lg border border-[var(--color-line)] p-3.5 transition hover:border-[var(--color-indigo)]">
                  <div className="font-display text-[var(--color-ink)]">{q.label}</div>
                  <div className="text-xs text-[var(--color-faint)]">{q.note}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
