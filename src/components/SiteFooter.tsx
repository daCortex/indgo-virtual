import Link from "next/link";
import { BRAND, NAV, QUICK_LINKS } from "@/lib/content";
import { Logo, Mandala } from "./Motifs";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--color-indigo-deep)] text-white">
      {/* jali texture + mandala */}
      <div className="pointer-events-none absolute inset-0 jali jali-gold opacity-[0.15]" />
      <div className="pointer-events-none absolute -right-24 -top-24 text-[var(--color-marigold-soft)] opacity-20">
        <Mandala className="h-80 w-80" spin />
      </div>

      <div className="scallop absolute inset-x-0 top-0 !bg-[var(--color-indigo-deep)] rotate-180" />

      <div className="wrap relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-display text-xl font-semibold">IndGo Air Virtual</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{BRAND.intro}</p>
            <p className="mt-5 font-display text-lg text-[var(--color-sky)]">{BRAND.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/15 px-3 py-1">ICAO {BRAND.icao}</span>
              <span className="rounded-full border border-white/15 px-3 py-1">IATA {BRAND.iata}</span>
              <span className="rounded-full border border-white/15 px-3 py-1">{BRAND.callsign}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {[...NAV, { label: "Crew Center", href: "/crew" }, { label: "Dispatch", href: "/dispatch" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-[var(--color-sky)]">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {QUICK_LINKS.slice(0, 5).map((q) => (
                <li key={q.label}>
                  <a href={q.href} target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-sky)]">{q.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-sky)] hover:text-[var(--color-sky)]" aria-label="Discord">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4.5A18 18 0 0015.5 3l-.2.4a14 14 0 014 2 15 15 0 00-13 0 14 14 0 014-2L14 3A18 18 0 004 4.5C1.6 8 1 11.5 1.3 15a18 18 0 005.4 2.8l.7-1.2c-.6-.2-1.2-.5-1.7-.9l.4-.3a12 12 0 0011.8 0l.4.3c-.5.4-1.1.7-1.7.9l.7 1.2A18 18 0 0022.7 15c.4-4-.6-7.5-2.7-10.5ZM8.5 13.2c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm7 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z"/></svg>
              </a>
              <a href={BRAND.links.instagram} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-sky)] hover:text-[var(--color-sky)]" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href={BRAND.links.youtube} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-sky)] hover:text-[var(--color-sky)]" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 001.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 001.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 001.8-1.8C23 15.2 23 12 23 12ZM10 15V9l5 3-5 3Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. A virtual airline for Infinite Flight. Not affiliated with IndiGo / InterGlobe Aviation.</p>
          <p>Founded {BRAND.founded} · IFVARB approved {BRAND.approved}</p>
        </div>
      </div>
    </footer>
  );
}
