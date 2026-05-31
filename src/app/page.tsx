import { ProductNav } from "@/components/ProductNav";

export default function Home() {
  return (
    <main>
      <ProductNav />

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-semibold text-[#7AC943]">
            GRABME PRODUCT SYSTEM
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Code-first wireframes for the real product.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Passenger app, driver app, admin dashboard, ride logic, payout flow,
            and MVP scope before development begins.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="/passenger"
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7AC943]/50 hover:bg-[#7AC943]/10"
            >
              <p className="text-xl font-black">Passenger App</p>
              <p className="mt-2 text-sm text-white/55">
                Booking, rides, payments, membership, history.
              </p>
            </a>

            <a
              href="/driver"
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7AC943]/50 hover:bg-[#7AC943]/10"
            >
              <p className="text-xl font-black">Driver App</p>
              <p className="mt-2 text-sm text-white/55">
                Onboarding, navigation, earnings, cashout.
              </p>
            </a>

            <a
              href="/admin"
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7AC943]/50 hover:bg-[#7AC943]/10"
            >
              <p className="text-xl font-black">Admin Dashboard</p>
              <p className="mt-2 text-sm text-white/55">
                Rides, drivers, payments, payouts, analytics.
              </p>
            </a>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <a
              href="/flow-map"
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7AC943]/50 hover:bg-[#7AC943]/10"
            >
              <p className="text-xl font-black">Flow Map</p>
              <p className="mt-2 text-sm text-white/55">
                End-to-end ride, payment, earnings, and payout logic.
              </p>
            </a>

            <a
              href="/mvp-scope"
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7AC943]/50 hover:bg-[#7AC943]/10"
            >
              <p className="text-xl font-black">MVP Scope</p>
              <p className="mt-2 text-sm text-white/55">
                What belongs in Phase 1 and what stays for later.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}