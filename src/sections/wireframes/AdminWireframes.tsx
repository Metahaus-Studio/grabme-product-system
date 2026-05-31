import { WireframeCard } from "@/components/WireframeCard";

function DashboardPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#7AC943]">
        {title}
      </p>
      {children}
    </div>
  );
}

export function AdminWireframes() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">ADMIN DASHBOARD</p>
        <h2 className="mb-10 text-4xl font-black">Admin UX Wireframes</h2>

        <div className="grid gap-8">
          <DashboardPanel title="01 Overview Dashboard">
            <div className="grid gap-4 md:grid-cols-4">
              <WireframeCard title="Active Rides" text="Live ride count" />
              <WireframeCard title="Drivers Online" text="Available drivers" />
              <WireframeCard title="Revenue Today" text="Daily income" />
              <WireframeCard title="Pending Payouts" text="Driver cashout requests" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="02 Live Operations">
            <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
              <WireframeCard title="Live Map" text="All active cars, pickups, dropoffs, and ride status." />
              <div className="grid gap-4">
                <WireframeCard title="Ride Queue" text="Requested / accepted / in progress" />
                <WireframeCard title="Driver Availability" text="Online / busy / inactive" />
              </div>
            </div>
          </DashboardPanel>

          <DashboardPanel title="03 Driver Management">
            <div className="grid gap-4 md:grid-cols-3">
              <WireframeCard title="Pending Applications" text="Approve or reject drivers" />
              <WireframeCard title="Document Verification" text="License, ID, car documents" />
              <WireframeCard title="Driver Status" text="Active, suspended, pending" />
              <WireframeCard title="Vehicle Profiles" text="EV type, plate, category" />
              <WireframeCard title="Ratings & Complaints" text="Performance and feedback" />
              <WireframeCard title="Manual Actions" text="Suspend, verify, reset status" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="04 Ride Management">
            <div className="grid gap-4 md:grid-cols-3">
              <WireframeCard title="All Rides" text="Filter by status, date, driver, passenger" />
              <WireframeCard title="Disputes" text="Cancelled rides, complaints, refunds" />
              <WireframeCard title="Airport Rides" text="Flight arrivals, pickup windows" />
              <WireframeCard title="Student Rides" text="Campus routes and plans" />
              <WireframeCard title="Corporate Rides" text="Company accounts and employee trips" />
              <WireframeCard title="Ride Details" text="Route, fare, payment, timestamps" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="05 Payments">
            <div className="grid gap-4 md:grid-cols-4">
              <WireframeCard title="Visa / Mastercard" text="Card transaction records" />
              <WireframeCard title="Wish Money" text="Wallet payments" />
              <WireframeCard title="Cash Rides" text="Cash collection tracking" />
              <WireframeCard title="Failed Payments" text="Retry / flag / support" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="06 Driver Payouts">
            <div className="grid gap-4 md:grid-cols-3">
              <WireframeCard title="Cashout Requests" text="Pending driver withdrawals" />
              <WireframeCard title="Bank Audi / ATM" text="Withdrawal or settlement flow" />
              <WireframeCard title="Payout Approval" text="Approve, reject, hold" />
              <WireframeCard title="Driver Balance" text="Available, pending, paid" />
              <WireframeCard title="Commission Logic" text="Platform fee and deductions" />
              <WireframeCard title="Payout History" text="Completed settlements" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="07 Memberships & Promotions">
            <div className="grid gap-4 md:grid-cols-3">
              <WireframeCard title="Student Plans" text="University packages and verification" />
              <WireframeCard title="Corporate Plans" text="Subscriptions and company billing" />
              <WireframeCard title="Loyalty Points" text="Rewards and ride credits" />
              <WireframeCard title="Gift Cards" text="Codes and balances" />
              <WireframeCard title="Promo Codes" text="Discounts, bloggers, campaigns" />
              <WireframeCard title="Pricing Rules" text="Zones, categories, priority pricing" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="08 Support & Security">
            <div className="grid gap-4 md:grid-cols-3">
              <WireframeCard title="Support Tickets" text="Passenger and driver issues" />
              <WireframeCard title="Lost Items" text="Ride-linked recovery flow" />
              <WireframeCard title="Safety Reports" text="SOS, complaints, risky rides" />
              <WireframeCard title="Fraud Monitoring" text="Suspicious trips and payments" />
              <WireframeCard title="Admin Roles" text="Permissions and access levels" />
              <WireframeCard title="Audit Logs" text="Every admin action tracked" />
            </div>
          </DashboardPanel>

          <DashboardPanel title="09 Analytics">
            <div className="grid gap-4 md:grid-cols-4">
              <WireframeCard title="Daily Rides" text="Volume trends" />
              <WireframeCard title="Revenue" text="Income by category" />
              <WireframeCard title="Driver Performance" text="Completion, ratings, earnings" />
              <WireframeCard title="Customer Segments" text="Students, corporate, airport, luxury" />
            </div>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}