"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAV } from "@/lib/content";
import { Logo } from "./Motifs";

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("indgo-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition hover:text-[var(--color-indigo)] hover:border-[var(--color-indigo)]"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66 5.66l1.41 1.41M4.93 4.93l1.41 1.41m0 11.32l-1.41 1.41M19.07 4.93l-1.41 1.41M12 7a5 5 0 100 10 5 5 0 000-10Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79Z"/></svg>
      )}
    </button>
  );
}

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo size={34} />
          <span className="font-display text-[1.15rem] font-semibold tracking-tight text-[var(--color-ink)]">
            IndGo <span className="text-[var(--color-indigo)]">Air</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`nav-link ${path === n.href ? "active" : ""}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/crew" className="nav-link">Crew Center</Link>
          <Link href="/join" className="btn btn-primary !py-2.5 !px-5 text-sm">Join the crew</Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-line)] bg-[var(--color-surface)]">
          <div className="wrap py-4 flex flex-col gap-1">
            {[...NAV, { label: "Crew Center", href: "/crew" }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`py-2.5 text-[0.98rem] font-medium ${path === n.href ? "text-[var(--color-indigo)]" : "text-[var(--color-slate)]"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/join" className="btn btn-primary mt-3 w-full">Join the crew</Link>
            <a href={BRAND.links.discord} className="btn btn-ghost w-full">Discord</a>
          </div>
        </div>
      )}
    </header>
  );
}
