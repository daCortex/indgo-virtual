import type { Metadata } from "next";
import Link from "next/link";
import {
  CURRENCIES, CAREER_RANKS, PREMIUM_RANKS, TYPE_RATINGS, ROUTE_LICENSES,
  STORE_ITEMS, SALARY_FACTORS, MISSIONS, CONTRACTS, inr, BRAND,
} from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Mandala, JaliPanel, Plane } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Careers & Credits",
  description:
    "IndGo Air Virtual's Credit & Career Progression System — a three-currency economy of Flight Hours, Money (₹) and Credits that turns every flight into a realistic airline career.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Credit & Career Progression"
        title={<>Every flight,<br />a real career.</>}
        intro="More than logging hours. A three-currency economy — experience, salary and reputation — turns each sector into meaningful progress through an authentic airline career."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/join" className="btn btn-primary">Start your career</Link>
          <Link href="/crew" className="btn btn-ghost">See the Crew Center</Link>
        </div>
      </PageHero>

      {/* ============ 1 · THREE-CURRENCY ECONOMY ============ */}
      <section className="wrap py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">The economy</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Three currencies, three journeys</h2>
          <p className="mt-4 text-[var(--color-slate)]">
            Each resource is independent and earns a different kind of progress — so careers stay balanced, and no amount of money or reputation can shortcut genuine experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CURRENCIES.map((c) => (
            <div key={c.key} className="reveal card card-hover flex flex-col overflow-hidden">
              <div className="relative h-1.5" style={{ background: c.accent }} />
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `color-mix(in srgb, ${c.accent} 14%, transparent)`, color: c.accent }}>
                    <CurrencyIcon k={c.key} />
                  </div>
                  <div>
                    <h3 className="text-xl leading-tight">{c.name}</h3>
                    <div className="text-sm" style={{ color: c.accent }}>{c.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-slate)]">{c.summary}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">{c.cannot}</p>
                <div className="mt-5 h-px bg-[var(--color-line)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-faint)]">Used for</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.uses.map((u) => (
                    <span key={u} className="chip">{u}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 2 · CAREER PROGRESSION LADDER ============ */}
      <section className="relative overflow-hidden tint-sand py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 text-[var(--color-indigo)] opacity-[0.05]">
          <JaliPanel className="h-full w-full" />
        </div>
        <div className="wrap relative">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Career progression</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Fifteen ranks, earned in hours</h2>
            <p className="mt-4 text-[var(--color-slate)]">
              Promotions recognise experience only. Money and Credits support your career — they never replace the hours required to advance.
            </p>
          </div>

          <div className="mt-12 grid gap-3">
            {CAREER_RANKS.map((r, i) => (
              <div key={r.name} className="reveal card card-hover flex items-center gap-4 p-4 sm:gap-6 sm:p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--color-indigo)] font-display text-sm text-white sm:h-12 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg leading-tight">{r.name}</h3>
                  <p className="text-sm text-[var(--color-faint)]">{r.focus}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-lg text-[var(--color-indigo)]">
                    {r.max === null ? `${r.min.toLocaleString()}+` : `${r.min}–${r.max}`}
                  </div>
                  <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">hours</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3 · PREMIUM CAREER MODE ============ */}
      <section className="relative overflow-hidden bg-[var(--color-indigo-deep)] py-20 text-white">
        <div className="pointer-events-none absolute inset-0 jali jali-gold opacity-[0.12]" />
        <div className="pointer-events-none absolute -right-24 -top-20 text-[var(--color-marigold-soft)] opacity-20">
          <Mandala className="h-96 w-96" spin />
        </div>
        <div className="wrap relative">
          <div className="reveal max-w-2xl">
            <span className="eyebrow !text-[var(--color-marigold-soft)]">Premium Career Mode</span>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">A prestige path of its own</h2>
            <p className="mt-4 text-white/70">
              An additional progression track for pilots chasing long-term prestige — enhanced recognition and exclusive rewards, with zero effect on the fairness of standard progression.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PREMIUM_RANKS.map((r, i) => (
              <div key={r.name} className="reveal rounded-[var(--radius-xl)] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-marigold)] font-display text-sm text-[#241200]">{i + 1}</span>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-sky-soft)]">
                    {r.max === null ? `${r.min.toLocaleString()}+` : `${r.min}–${r.max}`} h
                  </span>
                </div>
                <h3 className="mt-4 text-lg leading-tight text-white">{r.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4 · AIRCRAFT TYPE RATINGS ============ */}
      <section className="wrap py-20">
        <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="eyebrow">Aircraft type ratings</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Ratings are earned, not unlocked</h2>
            <p className="mt-4 text-[var(--color-slate)]">
              Reaching a rank doesn't hand you a bigger jet. Instead you become <em>eligible to apply</em> for a type rating once you meet the hours, salary, credits and pass a check ride — just like the real world.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">Minimum hours</span>
              <span className="chip chip-gold">Required salary ₹</span>
              <span className="chip">Credits</span>
              <span className="chip">Check ride</span>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="tbl min-w-[560px]">
                <thead>
                  <tr>
                    <th>Aircraft</th>
                    <th className="text-right">Min hours</th>
                    <th className="text-right">Salary (₹)</th>
                    <th className="text-right">Credits</th>
                    <th className="text-center">Check ride</th>
                  </tr>
                </thead>
                <tbody>
                  {TYPE_RATINGS.map((t) => (
                    <tr key={t.ac}>
                      <td className="font-medium text-[var(--color-ink)]">{t.ac}</td>
                      <td className="text-right">{t.hours === 0 ? "—" : t.hours}</td>
                      <td className="text-right">{t.money === 0 ? "Free" : inr(t.money)}</td>
                      <td className="text-right">{t.credits === 0 ? "—" : t.credits}</td>
                      <td className="text-center">
                        {t.hours === 0 ? <span className="text-[var(--color-faint)]">Starter</span> : <span className="chip chip-gold">Required</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-[var(--color-line)] px-4 py-3 text-xs text-[var(--color-faint)]">Figures are illustrative and tuned during rollout.</p>
          </div>
        </div>
      </section>

      {/* ============ 5 · ROUTE LICENSING ============ */}
      <section className="relative overflow-hidden tint-sand py-20">
        <div className="wrap">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Route licensing</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Expand where you fly</h2>
            <p className="mt-4 text-[var(--color-slate)]">
              Rather than locking aircraft away, we license <em>operations</em>. Spend Credits to gradually widen your operational reach — rewarding active, consistent pilots.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTE_LICENSES.map((l) => (
              <div key={l.name} className="reveal card card-hover p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg leading-tight">{l.name}</h3>
                  <span className={l.credits === 0 ? "chip" : "chip"} style={{ background: "color-mix(in srgb, var(--color-sky) 14%, var(--color-surface))" }}>
                    {l.credits === 0 ? "Included" : `${l.credits} cr`}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--color-slate)]">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6 · DYNAMIC SALARY + INSURANCE ============ */}
      <section className="wrap py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal card p-8">
            <span className="eyebrow">Dynamic salary</span>
            <h2 className="mt-3 text-3xl">Paid for how you fly</h2>
            <p className="mt-3 text-[var(--color-slate)]">
              Salary reflects operational performance, not just completing a flight — so there's real variety and no reward for repetitive route farming.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SALARY_FACTORS.map((f) => (
                <div key={f.name} className="rounded-lg border border-[var(--color-line)] p-4 text-center">
                  <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-marigold)_14%,transparent)] text-[var(--color-henna)]">
                    <FactorIcon name={f.icon} />
                  </div>
                  <div className="mt-2 text-xs font-medium text-[var(--color-ink)]">{f.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal card flex flex-col p-8">
            <span className="eyebrow">Insurance & incidents</span>
            <h2 className="mt-3 text-3xl">Fly responsibly</h2>
            <p className="mt-3 text-[var(--color-slate)]">
              Operational incidents carry repair costs deducted by aircraft category. Can't cover the bill? You temporarily operate smaller aircraft until funds recover — real consequences that reward careful flying.
            </p>
            <div className="mt-6 space-y-3">
              {[
                ["Incident logged", "Repair cost assessed by aircraft category"],
                ["Insurance applied", "Covered portion deducted automatically"],
                ["Shortfall", "Operate smaller aircraft until funds recover"],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-4 rounded-lg bg-[var(--color-sand)] p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-indigo)] font-display text-sm text-white">{i + 1}</span>
                  <div>
                    <div className="font-medium text-[var(--color-ink)]">{t}</div>
                    <div className="text-sm text-[var(--color-faint)]">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7 · MISSIONS + CONTRACTS ============ */}
      <section className="relative overflow-hidden tint-sand py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Missions & rewards</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Always a reason to fly</h2>
            <p className="mt-4 text-[var(--color-slate)]">Earn extra Money and Credits through rotating objectives — with reward multipliers that steer the community toward the action.</p>
            <div className="mt-7 space-y-3">
              {MISSIONS.map((m) => (
                <div key={m.name} className="flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4">
                  <div>
                    <div className="font-medium text-[var(--color-ink)]">{m.name}</div>
                    <div className="text-xs text-[var(--color-faint)]">{m.cadence}</div>
                  </div>
                  <span className="chip chip-gold">{m.reward}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Company contracts</span>
            <h2 className="mt-4 text-3xl md:text-4xl">A living, evolving airline</h2>
            <p className="mt-4 text-[var(--color-slate)]">Weekly operational priorities temporarily boost rewards on selected routes or aircraft — encouraging pilots to diversify their flying.</p>
            <div className="mt-7 space-y-3">
              {CONTRACTS.map((c) => (
                <div key={c.name} className="card card-hover flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--color-indigo)_10%,transparent)] text-[var(--color-indigo)]">
                    <Plane className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[var(--color-ink)]">{c.name}</div>
                    <div className="text-sm text-[var(--color-faint)]">{c.boost}</div>
                  </div>
                  <span className="chip shrink-0">{c.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8 · COMPANY STORE ============ */}
      <section className="wrap py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Company store</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Spend your reputation</h2>
            <p className="mt-3 max-w-lg text-[var(--color-slate)]">Redeem hard-earned Credits for lasting rewards — keeping reputation valuable across your whole career.</p>
          </div>
          <span className="chip chip-gold">Credits only · never for sale</span>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STORE_ITEMS.map((s) => (
            <div key={s.name} className="reveal card card-hover flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-sky)_16%,transparent)] text-[var(--color-indigo)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8L12 2Z" strokeLinejoin="round" /></svg>
                </div>
                <span className="font-medium text-[var(--color-ink)]">{s.name}</span>
              </div>
              <span className="font-display text-[var(--color-indigo)]">{s.credits} cr</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="wrap pb-20">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-indigo)] p-10 text-center text-white shadow-[var(--shadow-lift)] md:p-14">
          <div className="pointer-events-none absolute -left-16 -top-16 text-white/10"><Mandala className="h-72 w-72" spin /></div>
          <div className="pointer-events-none absolute -bottom-16 -right-16 text-white/10"><Mandala className="h-72 w-72" spin /></div>
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl text-white md:text-4xl">Your career starts on the first sector</h2>
            <p className="mt-3 text-white/75">Log your first flight, earn your first rupees, and begin the climb from BlueSpark Member to Blue Imperium.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/join" className="btn btn-gold">Apply to fly</Link>
              <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn !bg-white/10 !text-white !border !border-white/20 hover:!bg-white/20">Join Discord</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CurrencyIcon({ k }: { k: string }) {
  const p: Record<string, React.ReactNode> = {
    hours: <path d="M12 22a10 10 0 100-20 10 10 0 000 20Zm0-16v6l4 2" strokeLinecap="round" strokeLinejoin="round" />,
    money: <path d="M6 4h11M6 9h11M8 4c5 0 5 9 0 9m0 0h3l6 7M6 13h2" strokeLinecap="round" strokeLinejoin="round" />,
    credits: <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8L12 2Z" strokeLinejoin="round" />,
  };
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{p[k]}</svg>;
}

function FactorIcon({ name }: { name: string }) {
  const p: Record<string, React.ReactNode> = {
    pax: <path d="M12 8a3 3 0 100-6 3 3 0 000 6Zm-6 13c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />,
    landing: <path d="M3 20h18M5 14l14 3M6 10l2 1 5-6 1 4 4 2" strokeLinecap="round" strokeLinejoin="round" />,
    fuel: <path d="M6 21V5a2 2 0 012-2h4a2 2 0 012 2v16M4 21h12M14 8h3a2 2 0 012 2v5a2 2 0 01-2 2" strokeLinecap="round" strokeLinejoin="round" />,
    weather: <path d="M7 18a4 4 0 010-8 5 5 0 019.6 1.5A3.5 3.5 0 0116 18H7Z" strokeLinejoin="round" />,
    delay: <path d="M12 22a10 10 0 100-20 10 10 0 000 20Zm0-15v5l3 3" strokeLinecap="round" strokeLinejoin="round" />,
    check: <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
  };
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{p[name]}</svg>;
}
