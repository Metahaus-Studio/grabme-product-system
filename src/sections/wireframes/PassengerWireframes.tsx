import { WireframePhone } from "@/components/WireframePhone";
import { WireframeCard } from "@/components/WireframeCard";

export function PassengerWireframes() {
  return (
    <section className="bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">PASSENGER APP</p>
        <h2 className="mb-4 text-4xl font-black">Passenger UX Wireframes</h2>
        <p className="mb-10 max-w-3xl text-white/55">
          Full passenger flow from signup to booking, live ride tracking,
          payment, membership, airport rides, student rides, corporate accounts,
          GRABME Connect, safety, support, and notifications.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <WireframePhone title="01 Splash / Welcome">
            <div className="space-y-4">
              <WireframeCard title="GRABME Logo" text="Electric mobility identity" />
              <WireframeCard title="Language Selection" text="English / Arabic" />
              <WireframeCard title="Primary CTA" text="Get Started" />
              <WireframeCard title="Secondary CTA" text="Already have an account?" />
            </div>
          </WireframePhone>

          <WireframePhone title="02 Login / OTP">
            <div className="space-y-4">
              <WireframeCard title="Phone Number Input" text="Lebanon country code default" />
              <WireframeCard title="OTP Verification" text="SMS code authentication" />
              <WireframeCard title="Resend Code" />
              <WireframeCard title="Continue Button" />
            </div>
          </WireframePhone>

          <WireframePhone title="03 Create Profile">
            <div className="space-y-4">
              <WireframeCard title="Full Name" />
              <WireframeCard title="Email Address" />
              <WireframeCard title="Profile Type" text="Regular / Student / Corporate" />
              <WireframeCard title="Location Permission" />
              <WireframeCard title="Notifications Permission" />
            </div>
          </WireframePhone>

          <WireframePhone title="04 Home Map">
            <div className="space-y-4">
              <WireframeCard title="Live Map Area" text="Current location + nearby EV cars" />
              <WireframeCard title="Where To?" text="Destination search" />
              <WireframeCard title="Pickup Location" text="Auto-detected or manual" />
              <WireframeCard title="Quick Actions" text="Airport / Student / Membership / Corporate" />
            </div>
          </WireframePhone>

          <WireframePhone title="05 Destination Search">
            <div className="space-y-4">
              <WireframeCard title="Search Destination" />
              <WireframeCard title="Saved Places" text="Home / Work / Favorites" />
              <WireframeCard title="Recent Destinations" />
              <WireframeCard title="Map Pin Adjustment" />
              <WireframeCard title="Confirm Dropoff" />
            </div>
          </WireframePhone>

          <WireframePhone title="06 Pickup Confirmation">
            <div className="space-y-4">
              <WireframeCard title="Pickup Pin" text="Adjust exact pickup spot" />
              <WireframeCard title="Pickup Notes" text="Gate, building, landmark" />
              <WireframeCard title="Schedule Option" text="Now / later" />
              <WireframeCard title="Confirm Pickup" />
            </div>
          </WireframePhone>

          <WireframePhone title="07 Ride Selection">
            <div className="space-y-3">
              <WireframeCard title="Standard EV" text="Affordable electric ride" />
              <WireframeCard title="Priority EV" text="Faster pickup" />
              <WireframeCard title="Premium EV" text="Comfort experience" />
              <WireframeCard title="Luxury EV" text="High-end vehicle" />
              <WireframeCard title="Confirm Ride" />
            </div>
          </WireframePhone>

          <WireframePhone title="08 Fare Details">
            <div className="space-y-4">
              <WireframeCard title="Fare Breakdown" text="Base fare + distance + category" />
              <WireframeCard title="USD + LBP Display" text="1 USD ≈ 89,000 LBP" />
              <WireframeCard title="Promo Code" />
              <WireframeCard title="Estimated Arrival Time" />
              <WireframeCard title="Payment Method Preview" />
            </div>
          </WireframePhone>

          <WireframePhone title="09 Payment Method">
            <div className="space-y-4">
              <WireframeCard title="Visa / Mastercard" />
              <WireframeCard title="Cash" />
              <WireframeCard title="Wish Money / Local Wallet" />
              <WireframeCard title="Wallet Credits" text="Future phase" />
              <WireframeCard title="Confirm Payment Method" />
            </div>
          </WireframePhone>

          <WireframePhone title="10 Driver Matching">
            <div className="space-y-4">
              <WireframeCard title="Searching Animation" />
              <WireframeCard title="Nearby Drivers" text="Dispatch matching logic" />
              <WireframeCard title="Estimated Matching Time" />
              <WireframeCard title="Cancel Request" />
              <WireframeCard title="Fallback State" text="No drivers available" />
            </div>
          </WireframePhone>

          <WireframePhone title="11 Driver Found">
            <div className="space-y-4">
              <WireframeCard title="Driver Profile" text="Name, rating, phone" />
              <WireframeCard title="Car Details" text="Car model, plate, EV category" />
              <WireframeCard title="Pickup ETA" />
              <WireframeCard title="Call / Message Driver" />
              <WireframeCard title="Cancel Ride" />
            </div>
          </WireframePhone>

          <WireframePhone title="12 Driver Arriving">
            <div className="space-y-4">
              <WireframeCard title="Live Driver Map" />
              <WireframeCard title="Arrival Countdown" />
              <WireframeCard title="Driver Route" />
              <WireframeCard title="Pickup Instructions" />
              <WireframeCard title="Share Trip" />
            </div>
          </WireframePhone>

          <WireframePhone title="13 Pickup Verification">
            <div className="space-y-4">
              <WireframeCard title="Driver Arrived" />
              <WireframeCard title="Vehicle Plate Check" />
              <WireframeCard title="Pickup PIN" text="Optional safety verification" />
              <WireframeCard title="Start Ride Confirmation" />
            </div>
          </WireframePhone>

          <WireframePhone title="14 Active Ride">
            <div className="space-y-4">
              <WireframeCard title="Live Route Map" />
              <WireframeCard title="Trip Status" text="Started / en route / near destination" />
              <WireframeCard title="ETA to Destination" />
              <WireframeCard title="Share Trip" />
              <WireframeCard title="Emergency / Support" />
            </div>
          </WireframePhone>

          <WireframePhone title="15 Safety Center">
            <div className="space-y-4">
              <WireframeCard title="Live Trip Sharing" />
              <WireframeCard title="Emergency Contact" />
              <WireframeCard title="SOS Button" />
              <WireframeCard title="Report Safety Issue" />
              <WireframeCard title="Ride Recording" text="Future phase" />
            </div>
          </WireframePhone>

          <WireframePhone title="16 Ride Complete">
            <div className="space-y-4">
              <WireframeCard title="Trip Summary" text="Distance, duration, driver" />
              <WireframeCard title="Final Fare" />
              <WireframeCard title="Payment Status" />
              <WireframeCard title="Receipt" />
              <WireframeCard title="Rate Driver" />
            </div>
          </WireframePhone>

          <WireframePhone title="17 Rating & Feedback">
            <div className="space-y-4">
              <WireframeCard title="Star Rating" />
              <WireframeCard title="Driver Feedback Tags" text="Clean car, safe driving, polite" />
              <WireframeCard title="Tip Driver" text="Future phase" />
              <WireframeCard title="Submit Feedback" />
            </div>
          </WireframePhone>

          <WireframePhone title="18 Airport Ride">
            <div className="space-y-4">
              <WireframeCard title="Flight Number" />
              <WireframeCard title="Arrival / Departure Time" />
              <WireframeCard title="Terminal / Pickup Point" />
              <WireframeCard title="Luggage-Friendly Car" />
              <WireframeCard title="Book Airport Ride" />
            </div>
          </WireframePhone>

          <WireframePhone title="19 Airport Tracking">
            <div className="space-y-4">
              <WireframeCard title="Flight Status Tracking" />
              <WireframeCard title="Arrival Updates" />
              <WireframeCard title="Driver Waiting Area" />
              <WireframeCard title="Meet & Greet Option" />
              <WireframeCard title="Airport Notifications" />
            </div>
          </WireframePhone>

          <WireframePhone title="20 Student Ride">
            <div className="space-y-4">
              <WireframeCard title="Student Verification" text="Student ID / university email" />
              <WireframeCard title="Campus Routes" />
              <WireframeCard title="Student Pricing" />
              <WireframeCard title="Parent Tracking" text="Future safety feature" />
              <WireframeCard title="Group Ride Later" />
            </div>
          </WireframePhone>

          <WireframePhone title="21 Corporate Account">
            <div className="space-y-4">
              <WireframeCard title="Company Profile" />
              <WireframeCard title="Employee Access" />
              <WireframeCard title="Monthly Ride Budget" />
              <WireframeCard title="Corporate Billing" />
              <WireframeCard title="Ride Analytics" />
            </div>
          </WireframePhone>

          <WireframePhone title="22 Membership">
            <div className="space-y-4">
              <WireframeCard title="Loyalty Points" />
              <WireframeCard title="Gift Cards" />
              <WireframeCard title="Promo Codes" text="Bloggers / campaigns" />
              <WireframeCard title="Student Discount" />
              <WireframeCard title="Corporate Benefits" />
            </div>
          </WireframePhone>

          <WireframePhone title="23 GRABME Connect">
            <div className="space-y-4">
              <WireframeCard title="Vehicle WiFi Login" />
              <WireframeCard title="In-Car Entertainment" />
              <WireframeCard title="Shopping & Offers" />
              <WireframeCard title="Tourism & Local Deals" />
              <WireframeCard title="Feedback Screen" />
            </div>
          </WireframePhone>

          <WireframePhone title="24 Elderly / Shopping Help">
            <div className="space-y-4">
              <WireframeCard title="Short Errand Request" />
              <WireframeCard title="Grocery Assistance" />
              <WireframeCard title="5-Minute Help Add-On" />
              <WireframeCard title="Trusted Driver Option" />
              <WireframeCard title="Service Confirmation" />
            </div>
          </WireframePhone>

          <WireframePhone title="25 Ride History">
            <div className="space-y-4">
              <WireframeCard title="Completed Rides" />
              <WireframeCard title="Cancelled Rides" />
              <WireframeCard title="Receipts" />
              <WireframeCard title="Repeat Ride" />
              <WireframeCard title="Dispute Ride" />
            </div>
          </WireframePhone>

          <WireframePhone title="26 Profile">
            <div className="space-y-4">
              <WireframeCard title="User Details" />
              <WireframeCard title="Saved Places" />
              <WireframeCard title="Payment Methods" />
              <WireframeCard title="Membership Status" />
              <WireframeCard title="Settings" />
            </div>
          </WireframePhone>

          <WireframePhone title="27 Support">
            <div className="space-y-4">
              <WireframeCard title="Report Ride Issue" />
              <WireframeCard title="Lost Item" />
              <WireframeCard title="Payment Issue" />
              <WireframeCard title="Safety Support" />
              <WireframeCard title="Chat With Support" />
            </div>
          </WireframePhone>

          <WireframePhone title="28 Notifications">
            <div className="space-y-4">
              <WireframeCard title="Driver Arriving" />
              <WireframeCard title="Ride Started" />
              <WireframeCard title="Payment Confirmed" />
              <WireframeCard title="Promo / Membership Alerts" />
              <WireframeCard title="Safety Alerts" />
            </div>
          </WireframePhone>
        </div>
      </div>
    </section>
  );
}