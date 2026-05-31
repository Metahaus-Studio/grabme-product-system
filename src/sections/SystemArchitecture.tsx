const architectureBlocks = [
  {
    title: "Passenger App",
    items: [
      "Registration",
      "Ride Booking",
      "Airport Booking",
      "Student Rides",
      "Membership",
      "Live Tracking",
      "Payments",
    ],
  },
  {
    title: "Backend API",
    items: [
      "Authentication",
      "Ride Engine",
      "Driver Matching",
      "Pricing Engine",
      "Notifications",
      "Membership Logic",
      "Analytics",
    ],
  },
  {
    title: "Database",
    items: [
      "Users",
      "Drivers",
      "Vehicles",
      "Rides",
      "Payments",
      "Memberships",
      "Support Tickets",
    ],
  },
  {
    title: "Driver App",
    items: [
      "Onboarding",
      "Document Upload",
      "Navigation",
      "Ride Management",
      "Earnings",
      "Cashout",
      "Ratings",
    ],
  },
  {
    title: "Admin Dashboard",
    items: [
      "Driver Approval",
      "Ride Monitoring",
      "Payment Management",
      "Cashout Approval",
      "Analytics",
      "Support",
      "Content Management",
    ],
  },
  {
    title: "External Integrations",
    items: [
      "Google Maps",
      "SMS OTP",
      "Bank Audi",
      "Wish Money",
      "Firebase",
      "Push Notifications",
      "Future EV Charging APIs",
    ],
  },
];

export function SystemArchitecture() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">
          SYSTEM ARCHITECTURE
        </p>

        <h2 className="mb-10 max-w-4xl text-5xl font-black tracking-[-0.04em]">
          Complete GRABME Platform Architecture
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {architectureBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <h3 className="mb-6 text-2xl font-black text-[#7AC943]">
                {block.title}
              </h3>

              <div className="space-y-3">
                {block.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-black/40 p-4 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}