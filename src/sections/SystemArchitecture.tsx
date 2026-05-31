const layers = [
  {
    title: "User Applications",
    tone: "green",
    blocks: [
      {
        title: "Passenger App",
        text: "Booking, live tracking, payments, airport rides, student rides, memberships.",
      },
      {
        title: "Driver App",
        text: "Onboarding, documents, navigation, ride acceptance, earnings, cashout.",
      },
    ],
  },
  {
    title: "Core Platform Backend",
    tone: "default",
    blocks: [
      {
        title: "Authentication",
        text: "Phone OTP, user sessions, driver access, admin permissions.",
      },
      {
        title: "Ride Engine",
        text: "Booking logic, ride states, dispatch, matching, trip lifecycle.",
      },
      {
        title: "Pricing Engine",
        text: "Ride category pricing, USD/LBP display, promos, airport logic.",
      },
      {
        title: "Notification Engine",
        text: "Driver requests, passenger updates, OTP, alerts, support messages.",
      },
    ],
  },
  {
    title: "Data Layer",
    tone: "blue",
    blocks: [
      {
        title: "Database",
        text: "Users, drivers, vehicles, rides, payments, payouts, memberships, support.",
      },
      {
        title: "Secure Storage",
        text: "Driver licenses, ID/passport files, selfies, vehicle documents.",
      },
      {
        title: "Analytics",
        text: "Ride volume, revenue, driver performance, demand zones, conversion.",
      },
    ],
  },
  {
    title: "Operations & Control",
    tone: "yellow",
    blocks: [
      {
        title: "Admin Dashboard",
        text: "Driver approval, ride monitoring, payouts, disputes, support, analytics.",
      },
      {
        title: "Recruitment CRM",
        text: "Driver applications, documents, status pipeline, notes, WhatsApp contact.",
      },
    ],
  },
  {
    title: "External Integrations",
    tone: "red",
    blocks: [
      {
        title: "Maps + Location",
        text: "Google Maps, route calculation, ETA, geolocation, driver tracking.",
      },
      {
        title: "Payments",
        text: "Cash, Visa/Mastercard, Wish Money, wallet credits, Bank Audi payout planning.",
      },
      {
        title: "Future Ecosystem",
        text: "GRABME Connect, EV charging APIs, in-car screens, advertising, AI demand.",
      },
    ],
  },
];

function toneClass(tone: string) {
  if (tone === "green")
    return "border-[#7AC943]/50 bg-[#7AC943]/15";

  if (tone === "blue")
    return "border-sky-500/50 bg-sky-500/15";

  if (tone === "yellow")
    return "border-yellow-500/50 bg-yellow-500/15";

  if (tone === "red")
    return "border-red-500/50 bg-red-500/15";

  return "border-white/10 bg-white/[0.04]";

}

export function SystemArchitecture() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">
          SYSTEM ARCHITECTURE
        </p>

        <h2 className="mb-4 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          How the GRABME platform connects apps, backend, data, payments, and operations.
        </h2>

        <p className="mb-12 max-w-3xl text-white/55">
          The architecture separates passenger experience, driver operations,
          admin control, secure data storage, payments, notifications, and
          future ecosystem integrations into clear platform layers.
        </p>

        <div className="space-y-6">
          {layers.map((layer, index) => (
            <div key={layer.title}>
              <div className={`rounded-[2rem] border p-6 ${toneClass(layer.tone)}`}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7AC943] font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">{layer.title}</h3>
                    <p className="text-sm text-white/45">
                      Platform layer {index + 1}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {layer.blocks.map((block) => (
                    <div
                      key={block.title}
                      className="rounded-2xl border border-white/10 bg-black/45 p-5"
                    >
                      <h4 className="text-lg font-black text-white">
                        {block.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {index < layers.length - 1 && (
                <div className="flex justify-center py-3 text-3xl text-[#7AC943]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

       

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <div className="rounded-2xl bg-black/40 p-4">
    <h4 className="font-black">Frontend</h4>
    <p className="mt-2 text-sm text-white/60">
      Next.js, React, TailwindCSS, responsive web app and mobile-first UI.
    </p>
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    <h4 className="font-black">Backend</h4>
    <p className="mt-2 text-sm text-white/60">
      Node.js APIs, dispatch engine, ride lifecycle, pricing logic, and admin permissions.
    </p>
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    <h4 className="font-black">Database</h4>
    <p className="mt-2 text-sm text-white/60">
      Supabase PostgreSQL for users, drivers, rides, payouts, documents, and analytics.
    </p>
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    <h4 className="font-black">Services</h4>
    <p className="mt-2 text-sm text-white/60">
      Google Maps, SMS OTP, payment gateways, WhatsApp operations, and push notifications.
    </p>
  </div>
</div>

<div className="flex justify-center py-3 text-3xl text-[#7AC943]">
  ↓
</div>

<div className="rounded-[2rem] border border-[#7AC943]/30 bg-[#7AC943]/10 p-7">
  <div className="mb-5 flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7AC943] font-black text-black">
      06
    </div>

    <div>
      <h3 className="text-2xl font-black">Core Build Logic</h3>
      <p className="text-sm text-white/45">
        Platform layer 6
      </p>
    </div>
  </div>

  <p className="max-w-4xl text-white/65">
    Phase 1 should prioritize the functional marketplace:
    passenger booking, driver onboarding, ride dispatch,
    payments tracking, admin control, document verification,
    and payout workflow.

    Advanced systems like GRABME Connect, advertising,
    charging APIs, and AI demand prediction should remain
    modular future layers.
  </p>
      </div>
      </div>
    </section>
  );
}