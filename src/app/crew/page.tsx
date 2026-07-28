import type { Metadata } from "next";
import Link from "next/link";
import {
  PILOT, RECENT_FLIGHTS, QUICK_LINKS, AWARDS,
  careerStanding, inr, CURRENCIES,
} from "@/lib/content";
import { Mandala, Plane } from "@/components/Motifs";

export const metadata: Metadata = { title: "Crew Center" };

export default function CrewPage() {
  const { current, next, pct, toNext } = careerStanding(PILOT.hoursTotal);

  const wallet = [
    { c: CURRENCIES[0], value: `${PILOT.hoursTotal.toFixed(1)}`, unit: "hrs" },
    { c: CURRENCIES[1], value: inr(PILOT.money), unit: "" },
    { c: CURRENCIES[2], value: PILOT.credits.toLocaleString(), unit: "cr" },
  ];

  return (
    <div className="wrap py-10">
      {/* Welcome banner */}
      <div className="reveal relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-indigo)] p-7 text-white shadow-[var(--shadow-lift)] md:p-9">
        <div className="pointer-events-none absolute inset-0 jali jali-gold opacity-15" />
        <div className="pointer-events-none absolute -right-16 -top-16 text-white/10"><Mandala className="h-72 w-72" spin /></div>
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 font-display text-2xl backdrop-blur">
              {PILOT.name.split(" ").map((w) => w[0]).join("")}
            </div>
            <div>
              <p className="text-sm text-[var(--color-sky-soft)]">Welcome back, pilot</p>
              <h1 className="font-display text-3xl">{PILOT.name}</h1>
              <p className="mt-1 text-sm text-white/70">{PILOT.callsign} · {current.name} · Based {PILOT.base}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/dispatch" className="btn btn-gold">New flight plan</Link>
            <Link href="/careers" className="btn !bg-white/10 !text-white !border !border-white/20 hover:!bg-white/20">Career system</Link>
          </div>
        </div>
      </div>

      {/* Wallet — three-currency economy */}
      <div className="reveal mt-6 grid gap-4 sm:grid-cols-3">
        {wallet.map(({ c, value, unit }) => (
          <div key={c.key} className="card overflow-hidden">
            <div className="h-1.5" style={{ background: c.accent }} />
            <div className="flex items-center gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: `color-mix(in srgb, ${c.accent} 14%, transparent)`, color: c.accent }}>
                <WalletIcon k={c.key} />
              </div>
              <div>
                <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">{c.name} · {c.role}</div>
                <div className="stat-num text-2xl text-[var(--color-ink)]">
                  {value}{unit && <span className="ml-1 text-sm text-[var(--color-faint)]">{unit}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Performance tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: PILOT.flights, l: "Flights" },
              { v: PILOT.onTime, l: "On-time" },
              { v: PILOT.landingRate, l: "Avg landing" },
              { v: PILOT.typeRatings.length, l: "Type ratings" },
            ].map((s) => (
              <div key={s.l} className="reveal card p-5 text-center">
                <div className="stat-num text-2xl text-[var(--color-indigo)]">{s.v}</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Career progression */}
          <div className="reveal card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">Career progression</h2>
              <span className="chip chip-gold">{current.name}</span>
            </div>
            <div className="mt-5">
              <div className="flex items-end justify-between text-sm">
                <span className="text-[var(--color-slate)]">{PILOT.hoursTotal} hrs · {current.focus}</span>
                {next ? (
                  <span className="text-[var(--color-faint)]">Next: {next.name} · {current.max} hrs</span>
                ) : (
                  <span className="text-[var(--color-faint)]">Elite career status</span>
                )}
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-[var(--color-sand-deep)]">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-sky)]" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs text-[var(--color-faint)]">
                {next ? <>{toNext} hours to <b className="text-[var(--color-slate)]">{next.name}</b>.</> : <>You&apos;ve reached the top of the ladder.</>}
              </p>
            </div>
          </div>

          {/* Recent flights / PIREPs */}
          <div className="reveal card overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4">
              <h2 className="text-lg">Recent PIREPs</h2>
              <span className="text-xs uppercase tracking-widest text-[var(--color-faint)]">Auto-logged via IF API</span>
            </div>
            <div className="overflow-x-auto">
              <table className="tbl min-w-[560px]">
                <thead>
                  <tr><th>Flight</th><th>Route</th><th>Aircraft</th><th>Duration</th><th>Landing</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {RECENT_FLIGHTS.map((f, i) => (
                    <tr key={i}>
                      <td className="font-display text-[var(--color-indigo)]">{f.fnum}</td>
                      <td>{f.route}</td>
                      <td>{f.ac}</td>
                      <td>{f.dur}</td>
                      <td>{f.ldg}</td>
                      <td>
                        <span className={f.status === "Approved" ? "chip" : "chip chip-gold"}>{f.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Qualifications */}
          <div className="reveal card p-6">
            <h2 className="text-lg">Qualifications</h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">Type ratings</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PILOT.typeRatings.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">Route licenses</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PILOT.routeLicenses.map((r) => <span key={r} className="chip" style={{ background: "color-mix(in srgb, var(--color-sky) 14%, var(--color-surface))" }}>{r}</span>)}
            </div>
            <Link href="/careers" className="mt-5 inline-block text-sm font-semibold text-[var(--color-indigo)] hover:underline">Earn more →</Link>
          </div>

          <div className="reveal card p-6">
            <h2 className="text-lg">Quick links</h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {QUICK_LINKS.map((q) => (
                <a key={q.label} href={q.href} target="_blank" rel="noreferrer" className="rounded-lg border border-[var(--color-line)] px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-indigo)] hover:text-[var(--color-indigo)]">
                  {q.label}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal card p-6">
            <h2 className="text-lg">Latest badges</h2>
            <div className="mt-4 space-y-3">
              {AWARDS.slice(0, 3).map((a) => (
                <div key={a.name} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-marigold)_16%,transparent)] text-[var(--color-henna)]">
                    <Plane className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-ink)]">{a.name}</div>
                    <div className="text-xs text-[var(--color-faint)]">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/ranks" className="mt-5 inline-block text-sm font-semibold text-[var(--color-indigo)] hover:underline">View all awards →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletIcon({ k }: { k: string }) {
  const p: Record<string, React.ReactNode> = {
    hours: <path d="M12 22a10 10 0 100-20 10 10 0 000 20Zm0-16v6l4 2" strokeLinecap="round" strokeLinejoin="round" />,
    money: <path d="M6 4h11M6 9h11M8 4c5 0 5 9 0 9m0 0h3l6 7M6 13h2" strokeLinecap="round" strokeLinejoin="round" />,
    credits: <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8L12 2Z" strokeLinejoin="round" />,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{p[k]}</svg>;
}
