import type { Metadata } from "next";
import { BRAND, RANKS } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Mandala } from "@/components/Motifs";

export const metadata: Metadata = { title: "Join the Crew" };

const STEPS = [
  { t: "Apply", d: "Fill in our short application form — takes about three minutes." },
  { t: "Get onboarded", d: "Join the Discord, meet the team and read the pilot handbook." },
  { t: "Fly your check", d: "Complete a supervised domestic sector to line up as a pilot." },
  { t: "Start logging", d: "File PIREPs via Infinite Flight and begin climbing the ranks." },
];

const REQS = [
  "An active Infinite Flight subscription",
  "A Discord account for crew coordination",
  "Basic familiarity with flight planning",
  "A friendly, respectful attitude — always",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Your flight deck<br />is waiting.</>}
        intro="Applications are open. Join a growing crew flying India's skies with realism, structure and a genuinely welcoming community."
      >
        <div className="flex flex-wrap gap-3">
          <a href={BRAND.links.apply} target="_blank" rel="noreferrer" className="btn btn-primary">Apply now</a>
          <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn btn-ghost">Join Discord first</a>
        </div>
      </PageHero>

      <section className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Steps */}
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Four steps to your first sector</h2>
            <div className="mt-8 space-y-4">
              {STEPS.map((s, i) => (
                <div key={s.t} className="reveal card flex gap-5 p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-indigo)] font-display text-white">{i + 1}</div>
                  <div>
                    <h3 className="text-lg">{s.t}</h3>
                    <p className="mt-1 text-sm text-[var(--color-slate)]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements + CTA */}
          <div className="space-y-6">
            <div className="reveal card p-7">
              <span className="eyebrow">Requirements</span>
              <ul className="mt-5 space-y-3">
                {REQS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-[var(--color-slate)]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-marigold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-indigo)] p-8 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 text-white/10"><Mandala className="h-56 w-56" spin /></div>
              <div className="relative">
                <h3 className="text-2xl text-white">Start as a {RANKS[0].name}</h3>
                <p className="mt-2 text-sm text-white/75">Everyone begins on the Dash 8 flying domestic short sectors, then climbs the ranks from there.</p>
                <a href={BRAND.links.apply} target="_blank" rel="noreferrer" className="btn btn-gold mt-5">Open application form</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
