import type { Metadata } from "next";
import { EVENTS, BRAND } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Plane } from "@/components/Motifs";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & fly-ins"
        title={<>Skies are better<br />flown together.</>}
        intro="From festival fly-ins to metro relays, our events bring the whole crew into the same airspace. Register on Discord and file your slot."
      >
        <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn btn-primary">Register on Discord</a>
      </PageHero>

      <section className="wrap py-16">
        <div className="space-y-6">
          {EVENTS.map((e, i) => (
            <div key={e.title} className="reveal card card-hover overflow-hidden md:grid md:grid-cols-[220px_1fr]">
              <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[var(--color-indigo-deep)] to-[var(--color-indigo)] p-6 text-white">
                <div className="absolute inset-0 jali jali-gold opacity-20" />
                <span className="relative chip !bg-white/15 !text-white !border-white/20 w-fit">{e.tag}</span>
                <div className="relative mt-8">
                  <div className="font-display text-3xl">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 text-sm text-[var(--color-sky-soft)]">{e.date}</div>
                  <div className="text-xs text-white/60">{e.time} · {e.ac}</div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl">{e.title}</h3>
                <p className="mt-3 max-w-xl text-[var(--color-slate)]">{e.desc}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-indigo)]"><Plane className="h-4 w-4" /> {e.route}</span>
                  <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2 !px-4 text-sm">Register</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal card mt-10 flex flex-col items-center gap-3 p-10 text-center">
          <h3 className="text-2xl">Want an event featured?</h3>
          <p className="max-w-md text-[var(--color-slate)]">Staff post the full calendar and sign-up threads in our Discord, with live ATC coordination for the big ones.</p>
          <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn btn-gold mt-2">Open the calendar</a>
        </div>
      </section>
    </>
  );
}
