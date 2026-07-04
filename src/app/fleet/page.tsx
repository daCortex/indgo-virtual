import type { Metadata } from "next";
import { FLEET } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Plane } from "@/components/Motifs";

export const metadata: Metadata = { title: "Fleet" };

const families = ["A320 Family", "737 Family", "Widebody", "Turboprop"];

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The fleet"
        title={<>An all-jet backbone,<br />wingtip to wingtip.</>}
        intro="Nine aircraft types spanning regional turboprops to long-haul widebodies — every one flown in IndiGo livery wherever Infinite Flight allows."
      />

      <section className="wrap py-16">
        {families.map((fam) => {
          const list = FLEET.filter((a) => a.family === fam);
          if (!list.length) return null;
          return (
            <div key={fam} className="mb-14">
              <div className="reveal mb-6 flex items-center gap-4">
                <h2 className="text-2xl">{fam}</h2>
                <span className="h-px flex-1 bg-[var(--color-line)]" />
                <span className="text-sm text-[var(--color-faint)]">{list.length} type{list.length > 1 ? "s" : ""}</span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <div key={a.model} className="reveal card card-hover overflow-hidden">
                    <div className="relative h-36 overflow-hidden bg-gradient-to-br from-[var(--color-indigo-deep)] to-[var(--color-indigo)]">
                      <div className="absolute inset-0 jali jali-gold opacity-20" />
                      <Plane className="absolute right-6 top-1/2 h-12 w-12 -translate-y-1/2 -rotate-12 text-white/90" />
                      <div className="absolute bottom-4 left-5 text-white">
                        <div className="font-display text-lg">{a.model}</div>
                        <div className="text-xs text-[var(--color-sky-soft)]">{a.role}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-[var(--color-slate)]">{a.note}</p>
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-[var(--color-sand)] px-3 py-2.5">
                          <div className="stat-num text-xl text-[var(--color-indigo)]">{a.seats}</div>
                          <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">Seats</div>
                        </div>
                        <div className="rounded-lg bg-[var(--color-sand)] px-3 py-2.5">
                          <div className="stat-num text-xl text-[var(--color-indigo)]">{a.range}</div>
                          <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">Range</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
