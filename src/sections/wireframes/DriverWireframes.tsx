import { WireframePhone } from "@/components/WireframePhone";
import { WireframeCard } from "@/components/WireframeCard";

export function DriverWireframes() {
  return (
    <section className="bg-[#070707] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">DRIVER APP</p>
        <h2 className="mb-4 text-4xl font-black">Driver UX Wireframes</h2>
        <p className="mb-10 max-w-3xl text-white/60">
          Complete driver flow from application, document upload, approval, going online,
          accepting rides, navigation, earnings, cashout, support, and account health.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <WireframePhone title="01 Splash / Welcome">
            <div className="space-y-4">
              <WireframeCard title="GRABME Driver Logo" text="Driver-side electric mobility identity" />
              <WireframeCard title="Language Selection" text="English / Arabic" />
              <WireframeCard title="Primary CTA" text="Apply to Drive" />
              <WireframeCard title="Secondary CTA" text="Already approved? Login" />
            </div>
          </WireframePhone>

          <WireframePhone title="02 Login / OTP">
            <div className="space-y-4">
              <WireframeCard title="Phone Number Login" text="Lebanon country code default" />
              <WireframeCard title="OTP Verification" text="SMS authentication" />
              <WireframeCard title="Application Status Check" text="New / pending / approved / rejected" />
              <WireframeCard title="Continue Button" />
            </div>
          </WireframePhone>

          <WireframePhone title="03 Driver Application">
            <div className="space-y-4">
              <WireframeCard title="Full Name" />
              <WireframeCard title="Phone / WhatsApp" />
              <WireframeCard title="Email Address" />
              <WireframeCard title="City / Area" />
              <WireframeCard title="Nationality + Age" />
            </div>
          </WireframePhone>

          <WireframePhone title="04 Document Upload">
            <div className="space-y-4">
              <WireframeCard title="Driver License" text="Photo, image, or PDF" />
              <WireframeCard title="ID / Passport" text="Required identity verification" />
              <WireframeCard title="Selfie Photo" text="Face verification" />
              <WireframeCard title="Public Service License" text="Optional / can submit later" />
              <WireframeCard title="Submit Documents" />
            </div>
          </WireframePhone>

          <WireframePhone title="05 Vehicle Information">
            <div className="space-y-4">
              <WireframeCard title="Own Vehicle?" text="Yes / No" />
              <WireframeCard title="Vehicle Type" text="Sedan, SUV, van, etc." />
              <WireframeCard title="Brand / Model / Year" />
              <WireframeCard title="Electric Vehicle?" text="Yes / no / willing to switch" />
              <WireframeCard title="Vehicle Photos" text="Later phase" />
            </div>
          </WireframePhone>

          <WireframePhone title="06 EV Financing">
            <div className="space-y-4">
              <WireframeCard title="Need an EV?" text="Interested / maybe / no" />
              <WireframeCard title="Preferred Plan" text="Purchase, lease, installments, rent-to-own" />
              <WireframeCard title="Estimated Monthly Payment" text="Calculator placeholder" />
              <WireframeCard title="Financing Partner" text="Future partner integration" />
              <WireframeCard title="Request EV Details" />
            </div>
          </WireframePhone>

          <WireframePhone title="07 Approval Pending">
            <div className="space-y-4">
              <WireframeCard title="Application Submitted" />
              <WireframeCard title="Documents Under Review" />
              <WireframeCard title="Recruiter Will Contact You" text="WhatsApp / phone call" />
              <WireframeCard title="Status Timeline" text="Submitted → contacted → interview → approved" />
              <WireframeCard title="Edit Application" />
            </div>
          </WireframePhone>

          <WireframePhone title="08 Approved / Setup">
            <div className="space-y-4">
              <WireframeCard title="Approval Confirmation" />
              <WireframeCard title="Training Checklist" />
              <WireframeCard title="Bank / Cashout Setup" />
              <WireframeCard title="Vehicle Activation" />
              <WireframeCard title="Go Online CTA" />
            </div>
          </WireframePhone>

          <WireframePhone title="09 Driver Home">
            <div className="space-y-4">
              <WireframeCard title="Online / Offline Toggle" />
              <WireframeCard title="Today’s Earnings" text="$48.50 placeholder" />
              <WireframeCard title="Completed Rides" />
              <WireframeCard title="Nearby Demand" text="Busy areas heat map" />
              <WireframeCard title="Battery / EV Status" />
            </div>
          </WireframePhone>

          <WireframePhone title="10 Incoming Ride">
            <div className="space-y-4">
              <WireframeCard title="Passenger Name + Rating" />
              <WireframeCard title="Pickup Location" />
              <WireframeCard title="Destination Preview" />
              <WireframeCard title="Estimated Earnings" />
              <WireframeCard title="Accept / Decline" />
            </div>
          </WireframePhone>

          <WireframePhone title="11 Ride Details">
            <div className="space-y-4">
              <WireframeCard title="Trip Type" text="Regular, student, airport, corporate" />
              <WireframeCard title="Distance + Duration" />
              <WireframeCard title="Payment Method" text="Card, cash, wallet" />
              <WireframeCard title="Special Notes" text="Luggage, kids, elderly, etc." />
            </div>
          </WireframePhone>

          <WireframePhone title="12 Pickup Navigation">
            <div className="space-y-4">
              <WireframeCard title="Map Navigation" />
              <WireframeCard title="Pickup ETA" />
              <WireframeCard title="Call / Message Passenger" />
              <WireframeCard title="Arrived Button" />
              <WireframeCard title="Passenger Verification" text="Optional pickup PIN" />
            </div>
          </WireframePhone>

          <WireframePhone title="13 Active Ride">
            <div className="space-y-4">
              <WireframeCard title="Live Trip Route" />
              <WireframeCard title="Start Ride" />
              <WireframeCard title="Current Fare" />
              <WireframeCard title="Support / Emergency" />
              <WireframeCard title="End Ride" />
            </div>
          </WireframePhone>

          <WireframePhone title="14 Trip Completed">
            <div className="space-y-4">
              <WireframeCard title="Fare Summary" />
              <WireframeCard title="Driver Earnings" />
              <WireframeCard title="Commission Deduction" />
              <WireframeCard title="Rate Passenger" />
              <WireframeCard title="Next Ride CTA" />
            </div>
          </WireframePhone>

          <WireframePhone title="15 Earnings Wallet">
            <div className="space-y-4">
              <WireframeCard title="Available Balance" />
              <WireframeCard title="Today / Week / Month" />
              <WireframeCard title="Completed Trips" />
              <WireframeCard title="Bonuses / Incentives" />
              <WireframeCard title="Cashout Button" />
            </div>
          </WireframePhone>

          <WireframePhone title="16 Cashout">
            <div className="space-y-4">
              <WireframeCard title="Cashout Amount" />
              <WireframeCard title="Bank Audi Transfer" />
              <WireframeCard title="ATM Withdrawal Flow" />
              <WireframeCard title="Payout Status" />
              <WireframeCard title="Payout History" />
            </div>
          </WireframePhone>

          <WireframePhone title="17 Ratings & Performance">
            <div className="space-y-4">
              <WireframeCard title="Average Rating" />
              <WireframeCard title="Acceptance Rate" />
              <WireframeCard title="Cancellation Rate" />
              <WireframeCard title="Passenger Feedback" />
              <WireframeCard title="Account Health" />
            </div>
          </WireframePhone>

          <WireframePhone title="18 Profile & Support">
            <div className="space-y-4">
              <WireframeCard title="Driver Profile" />
              <WireframeCard title="Documents" text="License, ID, selfie, public license" />
              <WireframeCard title="Vehicle Details" />
              <WireframeCard title="Help Center" />
              <WireframeCard title="Emergency Support" />
            </div>
          </WireframePhone>
        </div>
      </div>
    </section>
  );
}