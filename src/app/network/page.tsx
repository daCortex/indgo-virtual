import type { Metadata } from "next";
import { HUBS, FOCUS } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { RouteBrowser } from "@/components/RouteBrowser";

export const metadata: Metadata = { title: "Network" };

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Route network"
        title={<>Where India flies.</>}
        intro="Search the live schedule, filter by type or difficulty, and send any sector straight to dispatch for a SimBrief flight plan."
      />

      <section className="wrap -mt-4 pb-6">
        <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[...HUBS, ...FOCUS].map((a) => (
            <div key={a.icao} className="card flex items-center gap-3 p-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--color-indigo)_10%,transparent)] font-display text-xs text-[var(--color-indigo)]">{a.icao}</div>
              <div className="min-w-0">
                <div className="truncate font-medium text-[var(--color-ink)]">{a.city}</div>
                <div className="truncate text-xs text-[var(--color-faint)]">{"role" in a ? (a as { role: string }).role : "Focus city"}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-10">
        <RouteBrowser />
      </section>
    </>
  );
}
