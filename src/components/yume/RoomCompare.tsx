import { STAY } from "@/data/content";

const currency = (rate: number) => `₹${rate.toLocaleString("en-IN")}`;

type Room = (typeof STAY.rooms)[number];
type Pkg = Room["packages"][number];

const tierOf = (name: string) => {
  const match = name.match(/Group of (\d+\+)/);
  return match ? ` (${match[1]})` : "";
};

const coupleOf = (room: Room) => room.packages.find((pkg) => pkg.name.startsWith("Couple"));
const groupsOf = (room: Room, withFood: boolean) =>
  room.packages.filter((pkg) => !pkg.name.startsWith("Couple") && pkg.name.endsWith(withFood ? "With food" : "Without food"));

const rateCell = (pkgs: Pkg[], key: "weekday" | "weekend") =>
  pkgs.map((pkg) => `${currency(pkg[key])}${tierOf(pkg.name)}`).join(" · ");

const rateRows: { label: string; unit: string; pick: (room: Room) => Pkg[] }[] = [
  { label: "Couple · With food", unit: "Per couple", pick: (room) => { const pkg = coupleOf(room); return pkg ? [pkg] : []; } },
  { label: "Group · Without food", unit: "Per person", pick: (room) => groupsOf(room, false) },
  { label: "Group · With food", unit: "Per person", pick: (room) => groupsOf(room, true) },
];

function RateBlock({ pkgs, unit, perPerson }: { pkgs: Pkg[]; unit: string; perPerson: boolean }) {
  if (!pkgs.length) {
    return (
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-ink/40">{unit}</p>
        <p className="mt-0.5 font-yume-serif text-sm text-ink/35">Not available</p>
      </div>
    );
  }
  const hideWeekendRate = pkgs.some((pkg) => pkg.name === "Group of 4+ · With food") &&
    pkgs.some((pkg) => pkg.name === "Group of 8+ · With food");
  const pp = perPerson ? <span className="ml-0.5 text-[11px] text-ink/45">PP</span> : null;
  return (
    <div className="transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 group-hover:translate-x-1">
      <p className="text-[10px] uppercase tracking-[0.18em] text-ink/45">{unit}</p>
      <p className="mt-0.5 font-yume-serif text-[15px] leading-snug text-ink">
        <span className="inline-block">{rateCell(pkgs, "weekday")}{pp}</span>
        {!hideWeekendRate && <span className="px-1 text-ink/35">/</span>}
        {!hideWeekendRate && <span className="inline-block">{rateCell(pkgs, "weekend")}{pp}</span>}
      </p>
      <p className="text-[10px] tracking-wide text-ink/50">weekday / weekend</p>
    </div>
  );
}

function CompareCard({ room }: { room: Room }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/60 p-6 shadow-[0_2px_16px_-8px_rgba(20,32,26,0.12)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sage/50 hover:bg-white hover:shadow-[0_28px_60px_-24px_rgba(124,143,107,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-peach transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none motion-reduce:group-hover:scale-x-100"
      />
      <header>
        <p className="text-[10px] uppercase tracking-[0.22em] text-ink/45">Room category</p>
        <h3 className="mt-1.5 font-yume-serif text-xl tracking-tight text-ink">{room.compare.short}</h3>
      </header>

      <div className="mt-5 space-y-4">
        {rateRows.map((row) => (
          <RateBlock key={row.label} pkgs={row.pick(room)} unit={row.label} perPerson={row.unit === "Per person"} />
        ))}
      </div>

      <div className="mt-5 border-t border-ink/10 pt-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-ink/45">Food options</p>
        <p className="mt-1.5 line-clamp-2 min-h-[2.7rem] text-[13px] leading-relaxed text-ink/75">{room.compare.food}</p>
      </div>

      <div className="mt-4 border-t border-ink/10 pt-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-ink/45">Inclusions</p>
        <ul className="mt-2 space-y-1.5">
          {room.compare.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/75">
              <span
                aria-hidden
                className="mt-[9px] h-px w-4 shrink-0 bg-sage/60 transition-all duration-500 ease-out motion-reduce:transition-none group-hover:w-6 group-hover:bg-peach motion-reduce:group-hover:w-4 motion-reduce:group-hover:bg-sage/60"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function RoomCompare() {
  return (
    <section id="compare" className="border-t border-ink/10 px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.25em] text-ink/45">Side by side</p>
        <h2 className="mt-3 max-w-2xl font-yume-serif text-2xl tracking-tight md:text-4xl">{STAY.tariff.compare.title}</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65">{STAY.tariff.compare.intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STAY.rooms.map((room) => (
            <CompareCard key={room.name} room={room} />
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-ink/55">{STAY.tariff.note}</p>
        <p className="mt-2 text-xs leading-relaxed text-ink/55">{STAY.tariff.deluxeNote}</p>
      </div>
    </section>
  );
}
