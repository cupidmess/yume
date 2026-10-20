import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { STAY, waLink } from "@/data/content";

type Room = (typeof STAY.rooms)[number];

const currency = (rate: number) => `₹${rate.toLocaleString("en-IN")}`;

export function RoomPackages({ room }: { room: Room }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="mt-7 h-11 rounded-[4px] bg-ink px-6 text-cream shadow-none hover:bg-ink/90"
          aria-label={`${STAY.tariff.view}: ${room.name}`}
        >
          {STAY.tariff.view}
          <ArrowRight />
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="bg-ink/65 backdrop-blur-sm motion-reduce:animate-none" />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[6px] border border-ink/15 bg-cream p-5 text-ink focus:outline-none sm:p-8">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close packages"
              className="absolute right-3 top-3 rounded-[4px] text-ink hover:bg-sage/15 hover:text-ink"
            >
              <X />
            </Button>
          </DialogClose>

          <p className="mb-3 text-xs text-ink/60">
            {STAY.tariff.heading}
          </p>

          <DialogTitle className="pr-6 font-yume-serif text-2xl font-normal leading-tight sm:text-3xl">
            {room.name}
          </DialogTitle>

          <DialogDescription className="mt-3 text-sm leading-relaxed text-ink/65">
            {room.description}
          </DialogDescription>

          {/* Weekday/weekend labels and all package rows are inside this wrapper */}
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-3 border-y border-ink/15 bg-sage/10 px-3 py-2 text-xs text-ink/65">
              <span>{STAY.tariff.weekday}</span>
              <span>{STAY.tariff.weekend}</span>
            </div>

            {room.packages.map((pkg) => (
              <div key={pkg.name} className="border-b border-ink/15 py-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium">{pkg.name}</p>

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 shrink-0 rounded-[4px] text-ink hover:bg-sage/15 hover:text-ink"
                  >
                    <a
                      href={waLink(
                        `Hi Yume! I'd like to enquire about ${room.name} — ${pkg.name}. Weekday: ${currency(pkg.weekday)} ${pkg.unit} (${pkg.weekdayGuests}); weekend: ${
                          typeof pkg.weekend === "number"
                            ? `${currency(pkg.weekend)} ${pkg.unit} (${pkg.weekendGuests})`
                            : "Not provided"
                        }. Could you confirm availability, inclusions and the total for my dates?`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${STAY.tariff.enquiry}: ${room.name}, ${pkg.name}`}
                      title={STAY.tariff.enquiry}
                    >
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    {
                      rate: pkg.weekday,
                      guests: pkg.weekdayGuests,
                    },
                    {
                      rate: pkg.weekend,
                      guests: pkg.weekendGuests,
                    },
                  ].map((period, index) => (
                    <div key={index}>
                      {typeof period.rate === "number" ? (
                        <>
                          <p className="font-yume-serif text-xl">
                            {currency(period.rate)}
                            {pkg.unit.toLowerCase().includes("person") && (
                              <span className="ml-1 align-middle text-[11px] text-ink/45">
                                PP
                              </span>
                            )}
                          </p>

                          <p className="mt-1 text-[11px] leading-relaxed text-ink/60">
                            {pkg.unit}
                            <br />
                            {period.guests}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="font-yume-serif text-base text-ink/55">
                            Not provided
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-ink/60">
                            Weekend rate unavailable
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="mt-4 text-xs leading-relaxed text-ink/55">
              {STAY.tariff.note}
            </p>

            {room.note && (
              <p className="mt-2 text-xs leading-relaxed text-ink/55">
                {room.note}
              </p>
            )}

            {room.name.startsWith("Deluxe") && (
              <p className="mt-2 text-xs leading-relaxed text-ink/55">
                {STAY.tariff.deluxeNote}
              </p>
            )}

            <DialogClose asChild>
              <a
                href="#compare"
                className="mt-5 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-xs uppercase tracking-[0.2em] text-ink hover:border-ink"
              >
                {STAY.tariff.compare.link}
                <ArrowRight className="h-4 w-4" />
              </a>
            </DialogClose>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}