import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Driver Sees Recruitment Poster",
    titleAr: "السائق يرى إعلان الانضمام",
    text: "Driver discovers GRABME through social media, referrals, or a QR recruitment poster.",
    textAr:
      "يتعرّف السائق على GRABME من خلال السوشيال ميديا، الترشيحات، أو إعلان يحتوي على رمز QR.",
    showPoster: true,
  },
  {
    number: "02",
    title: "Scan QR Code",
    titleAr: "مسح رمز QR",
    text: "Driver scans the QR code and is redirected to the onboarding application form.",
    textAr: "يقوم السائق بمسح رمز QR ليتم تحويله مباشرة إلى نموذج طلب الانضمام.",
  },
  {
    number: "03",
    title: "Complete Application",
    titleAr: "تعبئة الطلب",
    text: "Driver enters personal details, phone number, email address, and vehicle information.",
    textAr:
      "يقوم السائق بإدخال المعلومات الشخصية، رقم الهاتف، البريد الإلكتروني، ومعلومات المركبة.",
  },
  {
    number: "04",
    title: "Upload Documents",
    titleAr: "رفع المستندات",
    text: "Driver uploads Driver License, National ID / Passport, and a Selfie photo.",
    textAr:
      "يقوم السائق برفع رخصة القيادة، الهوية أو جواز السفر، وصورة شخصية للتحقق.",
  },
  {
    number: "05",
    title: "Application Submitted",
    titleAr: "إرسال الطلب",
    text: "Application is securely stored and automatically appears in the Admin Dashboard.",
    textAr: "يتم حفظ الطلب بشكل آمن ويظهر تلقائياً داخل لوحة تحكم الإدارة.",
  },
  {
    number: "06",
    title: "Admin Review",
    titleAr: "مراجعة الإدارة",
    text: "Operations team verifies documents, identity, and onboarding requirements.",
    textAr:
      "يقوم فريق العمليات بمراجعة المستندات، التحقق من الهوية، والتأكد من متطلبات الانضمام.",
  },
  {
    number: "07",
    title: "Approval Decision",
    titleAr: "قرار الموافقة",
    text: "Driver is approved, rejected, or asked to provide additional information.",
    textAr: "يتم قبول السائق، رفض الطلب، أو طلب معلومات إضافية عند الحاجة.",
  },
  {
    number: "08",
    title: "WhatsApp Notification",
    titleAr: "إشعار عبر واتساب",
    text: "Approved drivers receive a WhatsApp message from the GRABME team.",
    textAr:
      "يتلقى السائقون المقبولون رسالة واتساب من فريق GRABME للخطوات التالية.",
  },
  {
    number: "09",
    title: "Driver Activation",
    titleAr: "تفعيل السائق",
    text: "Driver gains access to the GRABME Driver Platform and onboarding materials.",
    textAr: "يحصل السائق على إمكانية الوصول إلى منصة السائقين ومواد التدريب والانضمام.",
  },
  {
    number: "10",
    title: "Start Accepting Rides",
    titleAr: "بدء استقبال الرحلات",
    text: "Driver goes online and begins receiving ride requests from passengers.",
    textAr: "يقوم السائق بتفعيل حالته أونلاين ويبدأ باستقبال طلبات الرحلات من الركاب.",
  },
];

export function DriverOnboardingFlow() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-[#7AC943]">
          DRIVER ONBOARDING / انضمام السائقين
        </p>

        <h2 className="mb-4 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Driver Acquisition & Onboarding Funnel
        </h2>

        <p className="mb-12 max-w-3xl text-white/55">
          A complete recruitment workflow designed to scale driver acquisition,
          automate document collection, streamline verification, and activate
          drivers efficiently.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="rounded-[2rem] border border-[#7AC943]/20 bg-[#7AC943]/10 p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7AC943] font-black text-black">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">{step.title}</h3>
                    <p
                      dir="rtl"
                      className="mt-2 text-xl font-bold text-[#7AC943]"
                    >
                      {step.titleAr}
                    </p>
                  </div>
                </div>

                {step.showPoster ? (
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="max-w-4xl text-white/65">{step.text}</p>

                      <p
                        dir="rtl"
                        className="mt-4 text-right text-base text-white/80"
                      >
                        {step.textAr}
                      </p>

                      <div className="mt-6 rounded-xl bg-black/40 p-4 text-center">
                        <p className="text-xs text-white/50">
                          Driver Recruitment URL
                        </p>

                        <p className="mt-1 font-bold text-[#7AC943]">
                          grabmeapp.com/drivers
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-4">
                      <Image
                        src="/Driver_Poster_GrabMe.png"
                        alt="GRABME Driver Recruitment Poster"
                        width={700}
                        height={900}
                        className="w-full rounded-2xl border border-white/10"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="max-w-4xl text-white/65">{step.text}</p>
                    <p
                      dir="rtl"
                      className="mt-4 max-w-4xl text-right text-white/65"
                    >
                      {step.textAr}
                    </p>
                  </>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-3 text-3xl text-[#7AC943]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
          <h3 className="text-2xl font-black">Documents Required</h3>
          <p dir="rtl" className="mt-1 text-lg font-bold text-white/60">
            المستندات المطلوبة
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/40 p-4">
              <h4 className="font-black">Driver License</h4>
              <p className="mt-2 text-sm text-white/60">
                Valid driving license photograph.
              </p>
              <p dir="rtl" className="mt-2 text-right text-sm text-white/60">
                صورة واضحة عن رخصة القيادة.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-4">
              <h4 className="font-black">National ID / Passport</h4>
              <p className="mt-2 text-sm text-white/60">
                Government-issued identification.
              </p>
              <p dir="rtl" className="mt-2 text-right text-sm text-white/60">
                هوية رسمية أو جواز سفر.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-4">
              <h4 className="font-black">Selfie Verification</h4>
              <p className="mt-2 text-sm text-white/60">
                Identity verification photo.
              </p>
              <p dir="rtl" className="mt-2 text-right text-sm text-white/60">
                صورة شخصية للتحقق من الهوية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}