import { AppScreen } from "@/components/AppScreen";

const passengerScreens = [
  ["Passenger Home", "home"],
  ["Ride Selection", "rides"],
  ["Driver Arriving", "driver"],
  ["Airport", "airport"],
  ["Students", "student"],
  ["Membership", "membership"],
] as const;

export function ProductAppShowcase() {
  return (
    <section className="border-t border-white/5 bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-semibold text-[#7AC943]">APP SHOWCASE</p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            GRABME high-fidelity mobile app screens.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Detailed visual screens for passenger journeys, ride selection,
            driver arrival, airport pickup, student plans, memberships, and
            loyalty rewards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {passengerScreens.map(([label, type]) => (
            <div
              key={label}
              className="flex min-h-[760px] flex-col rounded-[3rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold">{label}</p>
                <span className="rounded-full bg-[#7AC943]/15 px-3 py-1 text-xs font-bold text-[#7AC943]">
                  UI
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-hidden">
                <AppScreen type={type} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}