// ===================================================================
// IndGo Air Virtual — content & mock data
// Sourced from the official brand brief (ICAO IGO · IATA 6E · IFLY001GO)
// ===================================================================

export const BRAND = {
  name: "IndGo Air Virtual",
  short: "IndGo",
  icao: "IGO",
  iata: "6E",
  callsign: "IFLY 001GO",
  tagline: "Connecting the Skies",
  founded: "March 2025",
  approved: "28 March 2025",
  intro:
    "A realistic Infinite Flight virtual airline inspired by IndiGo's real-world operations — professional, welcoming, and built for pilots who love authentic Indian skies.",
  email: "indgoairvirtual@gmail.com",
  website: "https://indair.co.in",
  links: {
    discord: "https://discord.gg/Ne2R7sr244",
    youtube: "https://youtube.com/@indgoairvirtual",
    instagram: "https://www.instagram.com/indgo_air_virtual_airline",
    apply:
      "https://docs.google.com/forms/d/e/1FAIpQLSc4D65zHpNssJiNGf-lIjjuV2A2PARr-Nuu6Xh1BzMJDzEgrA/viewform",
    ifvarb: "https://ifvarb.com/database.php?action=view&xid=6361",
  },
};

export const NAV = [
  { label: "Fleet", href: "/fleet" },
  { label: "Network", href: "/network" },
  { label: "Events", href: "/events" },
  { label: "Training", href: "/training" },
  { label: "Ranks", href: "/ranks" },
  { label: "About", href: "/about" },
];

export const QUICK_LINKS = [
  { label: "SimBrief", href: "https://www.simbrief.com/", note: "Flight planning" },
  { label: "Navigraph", href: "https://navigraph.com/", note: "Charts & data" },
  { label: "Infinite Flight Guide", href: "https://infiniteflight.com/guide", note: "Sim reference" },
  { label: "IFC", href: "https://community.infiniteflight.com/", note: "Community forum" },
  { label: "Discord", href: BRAND.links.discord, note: "Crew lounge" },
  { label: "IFVARB", href: BRAND.links.ifvarb, note: "Our registration" },
];

export const STATS = [
  { value: "1,240+", label: "Flights flown" },
  { value: "312", label: "Active pilots" },
  { value: "68", label: "Routes" },
  { value: "9", label: "Aircraft types" },
];

// ---------------- Hubs & focus airports ----------------
export const HUBS = [
  { icao: "VABB", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj Intl", role: "Primary hub" },
  { icao: "VIDP", city: "Delhi", name: "Indira Gandhi International", role: "Primary hub" },
];
export const FOCUS = [
  { icao: "VOBL", city: "Bengaluru", name: "Kempegowda International" },
  { icao: "VOMM", city: "Chennai", name: "Chennai International" },
  { icao: "VOHS", city: "Hyderabad", name: "Rajiv Gandhi International" },
  { icao: "VOCI", city: "Kochi", name: "Cochin International" },
  { icao: "VECC", city: "Kolkata", name: "Netaji Subhas Chandra Bose Intl" },
  { icao: "VAAH", city: "Ahmedabad", name: "Sardar Vallabhbhai Patel Intl" },
];

// ---------------- Fleet ----------------
export type Aircraft = {
  model: string;
  family: string;
  seats: number;
  range: string;
  role: string;
  note: string;
};
export const FLEET: Aircraft[] = [
  { model: "Airbus A320", family: "A320 Family", seats: 180, range: "6,100 km", role: "Domestic backbone", note: "The workhorse of the network — trunk routes across India." },
  { model: "Airbus A320neo", family: "A320 Family", seats: 186, range: "6,300 km", role: "Efficient short-haul", note: "New-engine option for quieter, greener sectors." },
  { model: "Airbus A321", family: "A320 Family", seats: 222, range: "5,900 km", role: "High-density metros", note: "Extra capacity on Mumbai–Delhi golden quadrilateral." },
  { model: "Airbus A321neo", family: "A320 Family", seats: 232, range: "6,500 km", role: "Long domestic & regional intl", note: "Reaches the Gulf and Southeast Asia." },
  { model: "Boeing 737-800", family: "737 Family", seats: 189, range: "5,400 km", role: "Complementary short-haul", note: "Flexibility across focus-city rotations." },
  { model: "Boeing 737 MAX 8", family: "737 Family", seats: 197, range: "6,500 km", role: "Efficient medium-haul", note: "Extended reach on international sectors." },
  { model: "Bombardier Dash 8 Q400", family: "Turboprop", seats: 78, range: "2,000 km", role: "Regional connectivity", note: "Tier-2 & hill airports — Kochi, Guwahati, Dehradun." },
  { model: "Boeing 777-300ER", family: "Widebody", seats: 338, range: "13,600 km", role: "Flagship long-haul", note: "Marquee international — Istanbul, London charters." },
  { model: "Boeing 787-9", family: "Widebody", seats: 296, range: "14,100 km", role: "Long-haul efficiency", note: "Dreamliner comfort on ultra-long sectors." },
];

// ---------------- Routes ----------------
export type Route = {
  fnum: string;
  from: string;
  to: string;
  fromCity: string;
  toCity: string;
  ac: string;
  dur: string;
  type: "Domestic" | "International";
  diff: "Beginner" | "Intermediate" | "Advanced";
};
export const ROUTES: Route[] = [
  { fnum: "6E-201", from: "VABB", to: "VIDP", fromCity: "Mumbai", toCity: "Delhi", ac: "A321neo", dur: "2h 10m", type: "Domestic", diff: "Beginner" },
  { fnum: "6E-334", from: "VIDP", to: "VOBL", fromCity: "Delhi", toCity: "Bengaluru", ac: "A320neo", dur: "2h 45m", type: "Domestic", diff: "Beginner" },
  { fnum: "6E-512", from: "VABB", to: "VOMM", fromCity: "Mumbai", toCity: "Chennai", ac: "A320", dur: "1h 55m", type: "Domestic", diff: "Beginner" },
  { fnum: "6E-618", from: "VOHS", to: "VECC", fromCity: "Hyderabad", toCity: "Kolkata", ac: "A320", dur: "2h 05m", type: "Domestic", diff: "Intermediate" },
  { fnum: "6E-247", from: "VOCI", to: "VABB", fromCity: "Kochi", toCity: "Mumbai", ac: "Dash 8 Q400", dur: "1h 50m", type: "Domestic", diff: "Intermediate" },
  { fnum: "6E-701", from: "VIDP", to: "VAAH", fromCity: "Delhi", toCity: "Ahmedabad", ac: "737-800", dur: "1h 30m", type: "Domestic", diff: "Beginner" },
  { fnum: "6E-820", from: "VABB", to: "VECC", fromCity: "Mumbai", toCity: "Kolkata", ac: "A321", dur: "2h 40m", type: "Domestic", diff: "Intermediate" },
  { fnum: "6E-1408", from: "VIDP", to: "OMDB", fromCity: "Delhi", toCity: "Dubai", ac: "A321neo", dur: "3h 45m", type: "International", diff: "Intermediate" },
  { fnum: "6E-1732", from: "VABB", to: "VTBS", fromCity: "Mumbai", toCity: "Bangkok", ac: "737 MAX 8", dur: "4h 25m", type: "International", diff: "Advanced" },
  { fnum: "6E-1901", from: "VIDP", to: "LTFM", fromCity: "Delhi", toCity: "Istanbul", ac: "777-300ER", dur: "7h 05m", type: "International", diff: "Advanced" },
  { fnum: "6E-1555", from: "VOBL", to: "WSSS", fromCity: "Bengaluru", toCity: "Singapore", ac: "787-9", dur: "4h 30m", type: "International", diff: "Advanced" },
  { fnum: "6E-1120", from: "VOHS", to: "OTHH", fromCity: "Hyderabad", toCity: "Doha", ac: "A321neo", dur: "4h 10m", type: "International", diff: "Advanced" },
  { fnum: "6E-410", from: "VOMM", to: "VOCI", fromCity: "Chennai", toCity: "Kochi", ac: "Dash 8 Q400", dur: "1h 20m", type: "Domestic", diff: "Beginner" },
  { fnum: "6E-905", from: "VAAH", to: "VOHS", fromCity: "Ahmedabad", toCity: "Hyderabad", ac: "A320", dur: "1h 40m", type: "Domestic", diff: "Beginner" },
];

// ---------------- Ranks ----------------
export type Rank = {
  name: string;
  hours: string;
  unlock: string;
};
export const RANKS: Rank[] = [
  { name: "Cadet", hours: "0–15 hrs", unlock: "Dash 8 Q400 · domestic short sectors" },
  { name: "Second Officer", hours: "15–50 hrs", unlock: "A320 · A320neo · trunk routes" },
  { name: "First Officer", hours: "50–120 hrs", unlock: "A321 · 737-800 · high-density metros" },
  { name: "Senior First Officer", hours: "120–250 hrs", unlock: "A321neo · 737 MAX 8 · regional international" },
  { name: "Captain", hours: "250–450 hrs", unlock: "Full narrowbody fleet · all events" },
  { name: "Senior Captain", hours: "450–700 hrs", unlock: "787-9 · long-haul international" },
  { name: "Line Training Captain", hours: "700+ hrs", unlock: "777-300ER · flagship & instructor duties" },
];

export const AWARDS = [
  { name: "First Solo", desc: "Log your very first PIREP with IndGo.", icon: "wing" },
  { name: "Golden Quadrilateral", desc: "Fly all four metro trunk routes.", icon: "arch" },
  { name: "Monsoon Aviator", desc: "Complete 10 flights in a single month.", icon: "cloud" },
  { name: "Sea of Lights", desc: "Fly a night arrival into VABB or VIDP.", icon: "lamp" },
  { name: "Silk Road", desc: "Operate 5 international sectors.", icon: "compass" },
  { name: "Century", desc: "Reach 100 logged flight hours.", icon: "medal" },
];

// ---------------- Events ----------------
export type EventItem = {
  title: string;
  date: string;
  time: string;
  route: string;
  ac: string;
  tag: string;
  desc: string;
};
export const EVENTS: EventItem[] = [
  { title: "Diwali Night Fly-In", date: "Sat 18 Oct 2025", time: "13:00Z", route: "VABB → VIDP", ac: "A321neo", tag: "Signature", desc: "Our biggest group flight of the year — a festival-of-lights formation arrival into Delhi." },
  { title: "Golden Quadrilateral Relay", date: "Sun 26 Oct 2025", time: "09:00Z", route: "VIDP · VABB · VOMM · VECC", ac: "A320 Family", tag: "Group Flight", desc: "A relay touching all four metros. Fly one leg or the whole chain." },
  { title: "Gulf Express", date: "Fri 07 Nov 2025", time: "15:00Z", route: "VIDP → OMDB", ac: "A321neo", tag: "International", desc: "A realistic evening departure to Dubai with live ATC coordination." },
  { title: "Hill Stations Hop", date: "Sat 15 Nov 2025", time: "07:30Z", route: "VIDP → VIDN", ac: "Dash 8 Q400", tag: "Regional", desc: "Turboprop scenic run into the foothills — approach practice included." },
];

// ---------------- Training ----------------
export const TRAINING = [
  { level: "Ground School", title: "IndGo Foundations", desc: "Callsigns, phraseology, our SOPs and the Infinite Flight basics every cadet needs.", hours: "Self-paced" },
  { level: "Practical", title: "Narrowbody Type Familiarisation", desc: "Airbus A320-family flows, taxi, takeoff and stabilised approach standards.", hours: "2 sessions" },
  { level: "Practical", title: "Domestic Line Check", desc: "A supervised trunk-route sector with an instructor riding along.", hours: "1 flight" },
  { level: "Advanced", title: "International & Widebody", desc: "Long-haul planning, oceanic procedure and 787/777 handling for senior ranks.", hours: "3 sessions" },
];

// ---------------- Staff ----------------
export const TEAM = [
  { name: "M. M. Aatifulla Baig", role: "Chief Executive Officer", handle: "@M_M_Aatifulla_baig" },
  { name: "Kartik Salian", role: "Chief Operating Officer", handle: "@Kartik_salian_10" },
  { name: "Yash Nemani", role: "Community Director", handle: "@Yash_Nemani1" },
  { name: "Flyingshib", role: "Flight Instructor", handle: "@Flyingshib" },
  { name: "Krrish", role: "Route Manager", handle: "@Krrish_21_05" },
];

// ---------------- Crew dashboard (mock pilot) ----------------
export const PILOT = {
  name: "Aarav Mehta",
  callsign: "6E-1147",
  rank: "First Officer",
  hoursTotal: 96.4,
  hoursToNext: 120,
  flights: 74,
  base: "VABB",
  onTime: "94%",
  landingRate: "-118 fpm",
  joined: "Apr 2025",
};
export const RECENT_FLIGHTS = [
  { fnum: "6E-201", route: "VABB → VIDP", ac: "A321neo", dur: "2h 08m", ldg: "-102 fpm", status: "Approved" },
  { fnum: "6E-1408", route: "VIDP → OMDB", ac: "A321neo", dur: "3h 51m", ldg: "-134 fpm", status: "Approved" },
  { fnum: "6E-512", route: "VABB → VOMM", ac: "A320", dur: "1h 57m", ldg: "-96 fpm", status: "Approved" },
  { fnum: "6E-247", route: "VOCI → VABB", ac: "Dash 8", dur: "1h 48m", ldg: "-121 fpm", status: "Pending" },
];
