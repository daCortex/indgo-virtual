import Link from "next/link";
import { BRAND, STATS, FLEET, ROUTES, EVENTS, HUBS, FOCUS, QUICK_LINKS } from "@/lib/content";
import { ArchKeyline, ArchClipDef, Mandala, JaliPanel, Plane, Logo } from "@/components/Motifs";

export default function Home() {
  return (
    <>
      <ArchClipDef />

      {/* ============================ HERO ============================ */}
      <section className="relative tint-hero overflow-hidden">
        <div className="pointer-events-none absolute inset-0 jali-dots opacity-[0.5]" />
        <div className="pointer-events-none absolute -left-40 top-10 text-[var(--color-indigo)] opacity-[0.06]">
          <Mandala className="h-[520px] w-[520px]" spin />
        </div>

        <div className="wrap relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal">
            <span className="eyebrow">Infinite Flight Virtual Airline</span>
            <h1 className="mt-5 text-[2.7rem] leading-[1.02] sm:text-6xl">
              The heritage of Indian skies,
              <span className="block text-[var(--color-indigo)]">flown with precision.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-slate)]">
              {BRAND.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/join" className="btn btn-primary">Become a pilot</Link>
              <Link href="/network" className="btn btn-ghost">Explore the network</Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[var(--color-faint)]">
              <span className="flex items-center gap-2"><b className="text-[var(--color-ink)]">ICAO</b> {BRAND.icao}</span>
              <span className="flex items-center gap-2"><b className="text-[var(--color-ink)]">IATA</b> {BRAND.iata}</span>
              <span className="flex items-center gap-2"><b className="text-[var(--color-ink)]">Callsign</b> {BRAND.callsign}</span>
              <span className="chip chip-gold">IFVARB Approved</span>
            </div>
          </div>

          {/* Arch-framed hero art */}
          <div className="reveal relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-4">
              <ArchKeyline className="h-full w-full" draw />
            </div>
            <div
              className="arch-frame relative aspect-[3/4] w-full border border-[var(--color-line)] shadow-[var(--shadow-lift)]"
              style={{ clipPath: "url(#archClip)" }}
            >
              {/* stylised sky scene inside the arch */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-indigo-deep)] via-[var(--color-indigo)] to-[var(--color-sky)]" />
              <div className="absolute inset-0 jali jali-gold opacity-20" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-indigo-deep)]/70 to-transparent" />
              <Plane className="floaty absolute left-1/2 top-[38%] h-14 w-14 -translate-x-1/2 text-white/90" />
              <div className="absolute bottom-6 left-0 right-0 text-center text-white">
                <p className="font-display text-2xl">Connecting the Skies</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[var(--color-sky-soft)]">Mumbai · Delhi · Beyond</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 grid h-24 w-24 place-items-center rounded-full bg-[var(--color-marigold)] text-white shadow-lg">
              <div className="text-center leading-tight">
                <div className="font-display text-2xl">6E</div>
                <div className="text-[0.6rem] uppercase tracking-widest">flying</div>
              </div>
            </div>
          </div>
        </div>

        {/* stat ribbon */}
        <div className="wrap relative pb-16">
          <div className="reveal card grid grid-cols-2 divide-[var(--color-line)] overflow-hidden md:grid-cols-4 md:divide-x">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-7 text-center">
                <div className="stat-num text-3xl text-[var(--color-indigo)] md:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-xs uppercase tracking-[0.14em] text-[var(--color-faint)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY JOIN ============================ */}
      <section className="wrap py-20">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Why fly with us</span>
          <h2 className="mt-4 text-4xl md:text-5xl">A modern airline, an authentic experience</h2>
          <p className="mt-4 text-[var(--color-slate)]">
            Everything you need to fly like a real IndiGo pilot inside Infinite Flight — structured, welcoming, and beautifully organised.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Realistic operations", d: "Real-world IndiGo domestic & international schedules, flown live in Infinite Flight with proper callsigns and SOPs.", icon: "route" },
            { t: "Structured training", d: "From your first solo as a Cadet to widebody long-haul — a clear, supported path with real instructors.", icon: "grad" },
            { t: "Community & events", d: "Group flights, festival fly-ins and a friendly Discord where every pilot is welcome.", icon: "people" },
            { t: "Smart dispatch", d: "Search routes and generate a SimBrief flight plan in a couple of taps, right from the Crew Center.", icon: "dispatch" },
            { t: "Ranks & awards", d: "Earn hours, climb from Cadet to Line Training Captain, and unlock new aircraft and routes.", icon: "medal" },
            { t: "Live pilot stats", d: "Every PIREP logged via Infinite Flight — track hours, landings, on-time performance and more.", icon: "chart" },
          ].map((f) => (
            <div key={f.t} className="reveal card card-hover p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--color-indigo)_10%,transparent)] text-[var(--color-indigo)]">
                <FeatIcon name={f.icon} />
              </div>
              <h3 className="mt-5 text-xl">{f.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-slate)]">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ NETWORK / HUBS ============================ */}
      <section className="relative overflow-hidden tint-sand py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.06] text-[var(--color-indigo)]">
          <JaliPanel className="h-full w-full" />
        </div>
        <div className="wrap relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="eyebrow">The network</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Two hubs. Six focus cities.<br />One growing map.</h2>
            <p className="mt-4 max-w-lg text-[var(--color-slate)]">
              We anchor on Mumbai and Delhi and fan out across India's busiest metros — then out to the Gulf and Southeast Asia on our widebodies.
            </p>

            <div className="mt-8 space-y-3">
              {HUBS.map((h) => (
                <div key={h.icao} className="flex items-center gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--color-indigo)] font-display text-sm text-white">{h.icao}</div>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">{h.city} <span className="chip chip-gold ml-1 align-middle">{h.role}</span></div>
                    <div className="text-sm text-[var(--color-faint)]">{h.name}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <span key={f.icao} className="chip">{f.icao} · {f.city}</span>
              ))}
            </div>
            <Link href="/network" className="btn btn-ghost mt-8">Browse all routes</Link>
          </div>

          {/* Featured routes card */}
          <div className="reveal card overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4">
              <h3 className="text-lg">Featured routes</h3>
              <span className="text-xs uppercase tracking-widest text-[var(--color-faint)]">Live schedule</span>
            </div>
            <div className="divide-y divide-[var(--color-line)]">
              {ROUTES.slice(0, 5).map((r) => (
                <div key={r.fnum} className="flex items-center gap-4 px-6 py-4">
                  <div className="w-16 font-display text-sm text-[var(--color-indigo)]">{r.fnum}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
                      {r.from}
                      <span className="text-[var(--color-marigold)]">→</span>
                      {r.to}
                    </div>
                    <div className="text-xs text-[var(--color-faint)]">{r.fromCity} to {r.toCity} · {r.ac}</div>
                  </div>
                  <div className="text-right text-sm text-[var(--color-slate)]">{r.dur}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FLEET ============================ */}
      <section className="wrap py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">The fleet</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Nine aircraft, one signature service</h2>
          </div>
          <Link href="/fleet" className="btn btn-ghost">View full fleet</Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.filter((_, i) => [0, 3, 6, 7, 8, 5].includes(i)).map((a) => (
            <div key={a.model} className="reveal card card-hover overflow-hidden">
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[var(--color-indigo-deep)] to-[var(--color-indigo)]">
                <div className="absolute inset-0 jali jali-gold opacity-20" />
                <Plane className="absolute right-5 top-1/2 h-10 w-10 -translate-y-1/2 -rotate-12 text-white/85" />
                <span className="absolute left-4 top-4 chip !bg-white/15 !text-white !border-white/20">{a.family}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl">{a.model}</h3>
                <p className="mt-1 text-sm text-[var(--color-marigold)]">{a.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]">{a.note}</p>
                <div className="mt-4 flex gap-5 text-xs text-[var(--color-faint)]">
                  <span><b className="text-[var(--color-ink)]">{a.seats}</b> seats</span>
                  <span><b className="text-[var(--color-ink)]">{a.range}</b> range</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ EVENTS ============================ */}
      <section className="relative overflow-hidden bg-[var(--color-indigo-deep)] py-20 text-white">
        <div className="pointer-events-none absolute inset-0 jali jali-gold opacity-[0.12]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 text-[var(--color-marigold-soft)] opacity-20">
          <Mandala className="h-96 w-96" spin />
        </div>
        <div className="wrap relative">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow !text-[var(--color-marigold-soft)]">On the calendar</span>
              <h2 className="mt-4 text-4xl text-white md:text-5xl">Fly together</h2>
              <p className="mt-3 max-w-md text-white/70">Group flights and festival fly-ins that bring the whole crew into the same skies.</p>
            </div>
            <Link href="/events" className="btn btn-gold">All events</Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {EVENTS.slice(0, 2).map((e) => (
              <div key={e.title} className="reveal rounded-[var(--radius-xl)] border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="chip !bg-[var(--color-marigold)] !text-white !border-transparent">{e.tag}</span>
                  <span className="text-sm text-white/60">{e.date} · {e.time}</span>
                </div>
                <h3 className="mt-4 text-2xl text-white">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{e.desc}</p>
                <div className="mt-5 flex items-center gap-4 text-sm text-[var(--color-sky-soft)]">
                  <span className="flex items-center gap-1.5"><Plane className="h-4 w-4" /> {e.route}</span>
                  <span>{e.ac}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ QUICK LINKS + CTA ============================ */}
      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="reveal">
            <span className="eyebrow">Pilot toolkit</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Everything, one tap away</h2>
            <p className="mt-4 max-w-md text-[var(--color-slate)]">The tools our pilots reach for every flight — pinned inside the Crew Center too.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {QUICK_LINKS.map((q) => (
                <a key={q.label} href={q.href} target="_blank" rel="noreferrer" className="card card-hover flex flex-col p-4">
                  <span className="font-display text-[var(--color-ink)]">{q.label}</span>
                  <span className="mt-0.5 text-xs text-[var(--color-faint)]">{q.note}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-indigo)] p-10 text-white shadow-[var(--shadow-lift)]">
            <div className="pointer-events-none absolute -right-16 -top-16 text-white/10">
              <Mandala className="h-72 w-72" spin />
            </div>
            <div className="relative">
              <Logo size={40} className="mb-6" />
              <h2 className="text-3xl text-white md:text-4xl">Ready for pushback?</h2>
              <p className="mt-3 max-w-sm text-white/75">
                Applications are open. Join a growing crew of pilots flying India's skies with realism and heart.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/join" className="btn btn-gold">Apply to fly</Link>
                <a href={BRAND.links.discord} target="_blank" rel="noreferrer" className="btn !bg-white/10 !text-white !border !border-white/20 hover:!bg-white/20">Join Discord</a>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--color-sky-soft)]">{BRAND.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatIcon({ name }: { name: string }) {
  const p: Record<string, React.ReactNode> = {
    route: <path d="M6 19a2 2 0 100-4 2 2 0 000 4Zm12-10a2 2 0 100-4 2 2 0 000 4Zm-.5 2c0 4-11 1-11 5m11-9c0 2.5-3 3-6 3" strokeLinecap="round" />,
    grad: <path d="M12 4l9 5-9 5-9-5 9-5Zm-5 7v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" strokeLinecap="round" />,
    people: <path d="M9 11a3 3 0 100-6 3 3 0 000 6Zm7 0a3 3 0 100-6M4 20c0-2.8 2.2-5 5-5s5 2.2 5 5m2-5c2.8 0 4 2.2 4 5" strokeLinecap="round" />,
    dispatch: <path d="M4 6h16M4 12h10M4 18h7m5-3l5 3-5 3v-6Z" strokeLinecap="round" strokeLinejoin="round" />,
    medal: <path d="M12 14a5 5 0 100-10 5 5 0 000 10Zm-3 0l-2 7 5-3 5 3-2-7" strokeLinecap="round" strokeLinejoin="round" />,
    chart: <path d="M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6" strokeLinecap="round" />,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      {p[name]}
    </svg>
  );
}
