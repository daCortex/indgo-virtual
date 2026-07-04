import type { Metadata } from "next";
import { RANKS, AWARDS } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Mandala } from "@/components/Motifs";

export const metadata: Metadata = { title: "Ranks & Awards" };

export default function RanksPage() {
  return (
    <>
      <PageHero
        eyebrow="Ranks & progression"
        title={<>Earn your stripes,<br />sector by sector.</>}
        intro="Every logged hour moves you up the ladder — unlocking new aircraft, longer routes and captain's authority as you go."
      />

      <section className="wrap py-16">
        <div className="grid gap-4">
          {RANKS.map((r, i) => (
            <div key={r.name} className="reveal card card-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4 sm:w-72 sm:shrink-0">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[var(--color-indigo)] text-white">
                  <Stripes n={Math.min(i + 1, 4)} />
                </div>
                <div>
                  <h3 className="text-xl leading-tight">{r.name}</h3>
                  <div className="text-sm text-[var(--color-marigold)]">{r.hours}</div>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-[var(--color-line)] sm:block" />
              <p className="text-sm text-[var(--color-slate)]">
                <span className="text-xs uppercase tracking-wider text-[var(--color-faint)]">Unlocks · </span>
                {r.unlock}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="relative overflow-hidden tint-sand py-16">
        <div className="pointer-events-none absolute -right-24 top-0 text-[var(--color-marigold)] opacity-10">
          <Mandala className="h-96 w-96" spin />
        </div>
        <div className="wrap relative">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Awards & badges</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Milestones worth flying for</h2>
            <p className="mt-4 text-[var(--color-slate)]">Collectible badges that celebrate the moments — your first solo, a festival fly-in, your hundredth hour.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((a) => (
              <div key={a.name} className="reveal card card-hover flex items-start gap-4 p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-marigold)_16%,transparent)] text-[var(--color-henna)]">
                  <AwardIcon name={a.icon} />
                </div>
                <div>
                  <h3 className="text-lg">{a.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-slate)]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stripes({ n }: { n: number }) {
  return (
    <div className="flex flex-col gap-[3px]">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="block h-[3px] w-7 rounded-full bg-[var(--color-marigold-soft)]" />
      ))}
    </div>
  );
}

function AwardIcon({ name }: { name: string }) {
  const p: Record<string, React.ReactNode> = {
    wing: <path d="M2 12h20M12 12c-2-4-6-6-10-6 2 4 6 6 10 6Zm0 0c2-4 6-6 10-6-2 4-6 6-10 6Z" />,
    arch: <path d="M5 20V10a7 7 0 0114 0v10M5 20h14M9 20v-6a3 3 0 016 0v6" />,
    cloud: <path d="M7 18a4 4 0 010-8 5 5 0 019.6 1.5A3.5 3.5 0 0116 18H7Z" />,
    lamp: <path d="M12 3v2m0 14v2M6 12H4m16 0h-2M9 12a3 3 0 106 0 3 3 0 00-6 0Z" />,
    compass: <path d="M12 22a10 10 0 100-20 10 10 0 000 20Zm3-13l-2 5-5 2 2-5 5-2Z" />,
    medal: <path d="M12 14a5 5 0 100-10 5 5 0 000 10Zm-3 0l-2 7 5-3 5 3-2-7" />,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {p[name]}
    </svg>
  );
}
