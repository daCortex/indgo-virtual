"use client";
import { useMemo, useState } from "react";
import { ROUTES, type Route } from "@/lib/content";
import { Plane } from "@/components/Motifs";

// deterministic pseudo-figures from the flight number (no Math.random for stable SSR)
function seedFrom(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
function ofp(r: Route) {
  const h = seedFrom(r.fnum);
  const durMin = parseInt(r.dur) * 60 + (parseInt(r.dur.split(" ")[1]) || 0);
  const fl = r.type === "International" ? 360 + (h % 4) * 20 : 340 + (h % 3) * 20;
  const fuel = Math.round((durMin * 42 + 2600 + (h % 900)) / 100) * 100;
  const pax = 140 + (h % 46);
  const zfw = 48 + (h % 9);
  const cost = 12 + (h % 8);
  return {
    fl: `FL${fl}`,
    fuel: fuel.toLocaleString(),
    pax,
    zfw: `${zfw}.${(h % 9)} t`,
    cost: `CI ${cost}`,
    route: makeRoute(r, h),
    alt: pickAlt(r.to),
  };
}
function makeRoute(r: Route, h: number) {
  const sids = ["LEKN1A", "PARAR2B", "GUXOB1C", "IGENA3D", "RATED1A"];
  const awys = ["N571", "L301", "P574", "A791", "G450", "M300"];
  const wps = ["BUBKO", "TELEM", "ASOPO", "KIKOT", "LALID", "ONIRA", "RUSGO"];
  const a = awys[h % awys.length];
  const b = awys[(h >> 3) % awys.length];
  return `${sids[h % sids.length]} ${wps[h % wps.length]} ${a} ${wps[(h >> 2) % wps.length]} ${b} ${wps[(h >> 4) % wps.length]}`;
}
function pickAlt(icao: string) {
  const map: Record<string, string> = { VABB: "VAAH", VIDP: "VILK", VOBL: "VOHS", VOMM: "VOBL", OMDB: "OMSJ", WSSS: "WMKK", LTFM: "LTFJ", VTBS: "VTBD", OTHH: "OMDB" };
  return map[icao] ?? "VABB";
}

export function DispatchTool() {
  const [id, setId] = useState(ROUTES[0].fnum);
  const [gen, setGen] = useState(false);
  const route = useMemo(() => ROUTES.find((r) => r.fnum === id)!, [id]);
  const plan = useMemo(() => ofp(route), [route]);

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      {/* Selector */}
      <div className="reveal card h-fit p-6">
        <h2 className="text-lg">Select a route</h2>
        <p className="mt-1 text-sm text-[var(--color-faint)]">Pick a sector to build an operational flight plan.</p>

        <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">Flight number</label>
        <select
          value={id}
          onChange={(e) => { setId(e.target.value); setGen(false); }}
          className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-indigo)]"
        >
          {ROUTES.map((r) => (
            <option key={r.fnum} value={r.fnum}>{r.fnum} · {r.from}→{r.to}</option>
          ))}
        </select>

        <div className="mt-5 rounded-lg bg-[var(--color-sand)] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-display text-lg text-[var(--color-indigo)]">{route.from}</span>
            <Plane className="h-4 w-4 text-[var(--color-marigold)]" />
            <span className="font-display text-lg text-[var(--color-indigo)]">{route.to}</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-xs text-[var(--color-faint)]">
            <span>{route.fromCity}</span>
            <span>{route.toCity}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="chip">{route.ac}</span>
            <span className="chip">{route.dur}</span>
            <span className={route.type === "International" ? "chip chip-gold" : "chip"}>{route.type}</span>
          </div>
        </div>

        <button onClick={() => setGen(true)} className="btn btn-primary mt-5 w-full">Generate flight plan</button>
        <a
          href="https://www.simbrief.com/system/dispatch.php"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost mt-3 w-full"
        >
          Open in SimBrief ↗
        </a>
      </div>

      {/* OFP */}
      <div className="reveal card overflow-hidden">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-sand)] px-6 py-4">
          <div>
            <div className="font-display text-lg">Operational Flight Plan</div>
            <div className="text-xs text-[var(--color-faint)]">IndGo Air Virtual · {route.fnum} · {route.ac}</div>
          </div>
          <span className={`chip ${gen ? "chip-gold" : ""}`}>{gen ? "Generated" : "Preview"}</span>
        </div>

        {!gen ? (
          <div className="grid place-items-center gap-3 px-6 py-20 text-center">
            <Plane className="h-10 w-10 text-[var(--color-line)]" />
            <p className="text-[var(--color-faint)]">Select a route and hit <b className="text-[var(--color-slate)]">Generate flight plan</b> to build the OFP.</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Cruise", plan.fl],
                ["Block fuel", `${plan.fuel} kg`],
                ["Payload", `${plan.pax} pax`],
                ["Cost index", plan.cost],
                ["ZFW", plan.zfw],
                ["Alternate", plan.alt],
                ["Flight time", route.dur],
                ["Rules", route.type === "International" ? "IFR · OCA" : "IFR"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-[var(--color-line)] p-4">
                  <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">{k}</div>
                  <div className="mt-1 font-display text-lg text-[var(--color-ink)]">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-faint)]">Filed route</div>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-[var(--color-indigo-deep)] p-4 font-mono text-sm leading-relaxed text-[var(--color-sky-soft)]">
{route.from} {plan.route} {route.to}</pre>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <InfoRow label="Callsign" value={`IFLY ${route.fnum.replace("6E-", "")}GO`} />
              <InfoRow label="Squawk" value={`${2000 + (seedFrom(route.fnum) % 5000)}`} />
              <InfoRow label="Difficulty" value={route.diff} />
            </div>

            <p className="mt-6 text-xs text-[var(--color-faint)]">
              Demo OFP for illustration. In the live Crew Center this hands straight off to SimBrief with your IndGo airframe, then auto-files your PIREP through the Infinite Flight API on arrival.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-[var(--color-sand)] px-4 py-3">
      <span className="text-xs uppercase tracking-wider text-[var(--color-faint)]">{label}</span>
      <span className="font-display text-[var(--color-indigo)]">{value}</span>
    </div>
  );
}
