const phase1 = [
  "Passenger App",
  "Driver App",
  "Admin Dashboard",
  "Driver Onboarding",
  "Document Upload & Verification",
  "Ride Booking",
  "Ride Dispatch",
  "Ride Categories",
  "Live Driver Tracking",
  "Trip Status Updates",
  "Cash Payment Tracking",
  "Driver Earnings",
  "Driver Cashout Requests",
  "Admin Payout Approval",
  "Basic Support System",
  "Basic Notifications",
];

const phase2 = [
  "Airport Rides",
  "Student Ride Program",
  "Corporate Accounts",
  "Memberships & Loyalty",
  "Gift Cards",
  "Promo Codes",
  "Wish Money Integration",
  "Visa / Mastercard Processing",
  "Advanced Driver Analytics",
  "Advanced Passenger Analytics",
  "Scheduled Rides",
  "Lost Item Workflow",
];

const futureVision = [
  "GRABME Connect In-Car Screens",
  "Vehicle WiFi Login Portal",
  "In-Car Advertising Platform",
  "Tourism & Local Offers",
  "AR Vehicle Preview",
  "AI Demand Forecasting",
  "Smart Dispatch Optimization",
  "Charging Station Integrations",
  "Voice Booking With Siri / Alexa",
  "Fleet Financing Portal",
  "Autonomous Fleet Readiness",
];

const excluded = [
  "Full Banking Automation Before Bank API Approval",
  "Physical ATM Infrastructure Ownership",
  "Large-Scale Advertising Network Automation",
  "Native Voice Assistant Integrations In MVP",
  "Autonomous Vehicle Dispatch In MVP",
  "Full Government Licensing Automation",
];

function ScopeColumn({
  title,
  subtitle,
  items,
  tone = "default",
}: {
  title: string;
  subtitle: string;
  items: string[];
  tone?: "default" | "green" | "yellow" | "red";
}) {
  const toneClass =
    tone === "green"
      ? "border-[#7AC943]/40 bg-[#7AC943]/10"
      : tone === "yellow"
      ? "border-yellow-400/30 bg-yellow-400/10"
      : tone === "red"
      ? "border-red-400/30 bg-red-400/10"
      : "border-white/10 bg-white/[0.04]";

  return (
    <div className={`rounded-[2rem] border p-7 ${toneClass}`}>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-2 mb-6 text-sm leading-6 text-white/50">{subtitle}</p>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/75"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MvpScope() {
  return (
    <section id="mvp-scope" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">MVP SCOPE</p>

        <h2 className="mb-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          What belongs in Phase 1 — and what scales later.
        </h2>

        <p className="mb-10 max-w-3xl text-white/55">
          The MVP focuses on launching the core GRABME mobility marketplace:
          passenger booking, driver onboarding, ride operations, admin control,
          document verification, earnings, and payout workflows. Advanced
          ecosystem features are reserved for later phases to reduce cost,
          risk, and development time.
        </p>

        <div className="grid gap-6 lg:grid-cols-4">
          <ScopeColumn
            title="Phase 1 MVP"
            subtitle="Core features required to operate the first version of the platform."
            items={phase1}
            tone="green"
          />

          <ScopeColumn
            title="Phase 2"
            subtitle="Commercial expansion features after the ride marketplace is stable."
            items={phase2}
            tone="yellow"
          />

          <ScopeColumn
            title="Future Vision"
            subtitle="Strategic ecosystem features for scale, monetization, and differentiation."
            items={futureVision}
          />

          <ScopeColumn
            title="Excluded For Now"
            subtitle="Features intentionally excluded from the MVP to protect budget and timeline."
            items={excluded}
            tone="red"
          />
        </div>
      </div>
    </section>
  );
}