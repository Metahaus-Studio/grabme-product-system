const steps = [
  [
    "01",
    "Passenger Registration",
    "User signs up via phone OTP, creates profile and enables permissions.",
  ],
  [
    "02",
    "Ride Booking",
    "Passenger selects pickup, destination, ride category and payment method.",
  ],
  [
    "03",
    "Driver Matching",
    "System dispatches ride to nearest eligible driver.",
  ],
  [
    "04",
    "Driver Acceptance",
    "Driver reviews fare, pickup and destination then accepts ride.",
  ],
  [
    "05",
    "Pickup Journey",
    "Passenger tracks driver live and receives arrival notifications.",
  ],
  [
    "06",
    "Ride In Progress",
    "Trip begins with live navigation, safety tools and tracking.",
  ],
  [
    "07",
    "Ride Completion",
    "Passenger reaches destination and trip is finalized.",
  ],
  [
    "08",
    "Payment Processing",
    "Cash, card, Wish Money or future wallet payment is processed.",
  ],
  [
    "09",
    "Ratings & Feedback",
    "Passenger rates driver and submits optional feedback.",
  ],
  [
    "10",
    "Driver Earnings",
    "Completed ride revenue is added to driver balance.",
  ],
  [
    "11",
    "Cashout Request",
    "Driver requests withdrawal of available earnings.",
  ],
  [
    "12",
    "Admin Settlement",
    "Admin validates payout and releases settlement.",
  ],
];


export function FlowMap() {
  return (
    <section id="flow-map" className="bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">FLOW MAP</p>
        <h2 className="mb-10 max-w-4xl text-4xl font-black tracking-[-0.04em]">
          Full ride-to-cashout operational flow.
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm font-black text-[#7AC943]">{number}</p>
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}