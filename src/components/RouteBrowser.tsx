"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/content";

const TYPES = ["All", "Domestic", "International"] as const;
const DIFFS = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export function RouteBrowser() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [diff, setDiff] = useState<(typeof DIFFS)[number]>("All");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return ROUTES.filter((r) => {
      if (type !== "All" && r.type !== type) return false;
      if (diff !== "All" && r.diff !== diff) return false;
      if (!s) return true;
      return [r.fnum, r.from, r.to, r.fromCity, r.toCity, r.ac].some((v) => v.toLowerCase().includes(s));
    });
  }, [q, type, diff]);

  const diffClass = (d: string) => (d === "Beginner" ? "beg" : d === "Intermediate" ? "int" : "adv");

  return (
    <div>
      {/* controls */}
      <div className="reveal card p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-faint)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" strokeLinecap="round" /></svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search flight number, city or ICAO…"
              className="w-full rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] py-2.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-indigo)]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button key={t} onClick={() => setType(t)} className={pill(type === t)}>{t}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {DIFFS.map((d) => (
              <button key={d} onClick={() => setDiff(d)} className={pill(diff === d)}>{d}</button>
            ))}
          </div>
        </div>
      </div>

      {/* table */}
      <div className="reveal card mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="tbl min-w-[720px]">
            <thead>
              <tr>
                <th>Flight</th>
                <th>Route</th>
                <th>Aircraft</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th className="text-right">Dispatch</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.fnum}>
                  <td className="font-display text-[var(--color-indigo)]">{r.fnum}</td>
                  <td>
                    <div className="font-medium text-[var(--color-ink)]">{r.from} <span className="text-[var(--color-marigold)]">→</span> {r.to}</div>
                    <div className="text-xs text-[var(--color-faint)]">{r.fromCity} – {r.toCity}</div>
                  </td>
                  <td>{r.ac}</td>
                  <td>{r.dur}</td>
                  <td><span className={r.type === "International" ? "chip chip-gold" : "chip"}>{r.type}</span></td>
                  <td>
                    <span className={`diff ${diffClass(r.diff)}`} title={r.diff}>
                      <i /><i /><i />
                      <span className="ml-2 text-xs text-[var(--color-faint)]">{r.diff}</span>
                    </span>
                  </td>
                  <td className="text-right">
                    <Link href="/dispatch" className="text-sm font-semibold text-[var(--color-indigo)] hover:underline">Plan →</Link>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[var(--color-faint)]">No routes match those filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--color-faint)]">Showing {rows.length} of {ROUTES.length} routes · full database attached in the Crew Center.</p>
    </div>
  );
}

function pill(active: boolean) {
  return `rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
    active
      ? "bg-[var(--color-indigo)] text-white"
      : "border border-[var(--color-line)] text-[var(--color-slate)] hover:border-[var(--color-indigo)] hover:text-[var(--color-indigo)]"
  }`;
}
