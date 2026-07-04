import type { Metadata } from "next";
import Link from "next/link";
import { PILOT, RECENT_FLIGHTS, QUICK_LINKS, RANKS, AWARDS } from "@/lib/content";
import { Mandala, Plane } from "@/components/Motifs";

export const metadata: Metadata = { title: "Crew Center" };

export default function CrewPage() {
  const pct = Math.round((PILOT.hoursTotal / PILOT.hoursToNext) * 100);
  const nextRank = RANKS[RANKS.findIndex((r) => r.name === PILOT.rank) + 1]?.name ?? "Top rank";

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
              <p className="mt-1 text-sm text-white/70">{PILOT.callsign} · {PILOT.rank} · Based {PILOT.base}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/dispatch" className="btn btn-gold">New flight plan</Link>
            <Link href="/network" className="btn !bg-white/10 !text-white !border !border-white/20 hover:!bg-white/20">Browse routes</Link>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Stat tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: PILOT.hoursTotal.toFixed(1), l: "Total hours" },
              { v: PILOT.flights, l: "Flights" },
              { v: PILOT.onTime, l: "On-time" },
              { v: PILOT.landingRate, l: "Avg landing" },
            ].map((s) => (
              <div key={s.l} className="reveal card p-5 text-center">
                <div className="stat-num text-2xl text-[var(--color-indigo)]">{s.v}</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Rank progress */}
          <div className="reveal card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">Rank progression</h2>
              <span className="chip chip-gold">{PILOT.rank}</span>
            </div>
            <div className="mt-5">
              <div className="flex items-end justify-between text-sm">
                <span className="text-[var(--color-slate)]">{PILOT.hoursTotal} hrs logged</span>
                <span className="text-[var(--color-faint)]">Next: {nextRank} · {PILOT.hoursToNext} hrs</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-[var(--color-sand-deep)]">
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-sky)]" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs text-[var(--color-faint)]">{PILOT.hoursToNext - PILOT.hoursTotal} hours to your next promotion.</p>
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

          <div className="reveal card p-6">
            <h2 className="text-lg">Pilot file</h2>
            <dl className="mt-4 space-y-2.5 text-sm">
              {[
                ["Callsign", PILOT.callsign],
                ["Home base", PILOT.base],
                ["Rank", PILOT.rank],
                ["Joined", PILOT.joined],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-[var(--color-line)] pb-2.5 last:border-0">
                  <dt className="text-[var(--color-faint)]">{k}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
