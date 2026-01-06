const features = [
  {
    title: "Real-Time Interpreter Match",
    description:
      "Find expert interpreters instantly based on your language needs.",
    gif: "/realtime.gif",
    bullets: [
      "AI-powered matching algorithm",
      "Filter by language, expertise, and availability",
      "Instant booking confirmation",
    ],
  },
  {
    title: "24/7 Support",
    description:
      "Get help whenever you need it, day or night. Our dedicated support team is available 24/7 to assist with bookings, technical issues, or interpretation needs.",
    gif: "/support.gif",
    bullets: [
      "Instant help through in-app chat or email",
      "Multilingual customer service team",
      "Fast response and issue resolution",
    ],
  },
  {
    title: "Secure Login & Profiles",
    description: "Protect your data with verified profiles and encryption.",
    gif: "/secure.gif",
    bullets: [
      "End-to-end encryption",
      "Verified interpreter profiles",
      "Secure payment processing",
    ],
  },
  {
    title: "Online & Offline Interpretation",
    description:
      "Hanioo offers both online and offline interpretation services to match your needs. Whether you need real-time video sessions or in-person language assistance.",
    gif: "/onlineInt.gif",
    bullets: [
      "Online video and audio interpretation",
      "Offline (on-site) interpreter booking",
      "Verified language experts",
    ],
  },
  {
    title: "Live Demo Before Booking",
    description:
      "Experience the difference before you decide! Hanioo lets you connect with an interpreter via in-app video call for a short live demo session.",
    gif: "/livedemo.gif",
    bullets: [
      "In-app video demo call",
      "Helps you choose confidently",
      "Secure and seamless connection",
    ],
  },
  {
    title: "Easy Enrollment",
    description:
      "Simple onboarding to start offering or booking interpretation services.",
    gif: "/enrollement.gif",
    bullets: [
      "Quick registration process",
      "Profile verification within 24 hours",
      "Start accepting bookings immediately",
    ],
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative pt-[50px] pb-[120px] bg-background font-['Stack Sans Text']"
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header – CENTERED */}
        <div className="flex flex-col gap-[26px] max-w-[1100px] mb-[50px] text-left ml-[48px]">
        <h2 className="text-[50px] leading-[59px] font-bold text-[#262C36]">
          Powerful Features
        </h2>

        <p className="text-[15px] max-w-[1080px] leading-[21px] text-[#262C36]">
          Everything you need to make Hanioo your go-to platform for seamless
          interpretation services
        </p>
      </div>


        {/* Cards – PERFECTLY CENTERED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] max-w-[1230px] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-full max-w-[398px] h-[390px] bg-[#F5F5F7] rounded-[21px] overflow-hidden mx-auto"
            >
              {/* Top content */}
              <div className="absolute top-[28px] left-[17px] flex flex-col gap-[29px] w-[331px]">

                {/* Icon */}
                <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[#151249] to-[#2B3B90] flex items-center justify-center">
                  <img
                    src={feature.gif}
                    alt={feature.title}
                    className="w-[26px] h-[26px] object-contain"
                  />
                </div>

                {/* Title & description */}
                <div className="flex flex-col gap-[22px]">
                  <h3 className="text-[24px] leading-[21px] font-semibold text-[#262C36]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[25px]  text-[#262C36]">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <div className="absolute left-[17px] top-[285px] flex flex-col gap-[7px]">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-[7px]">
                    <span className="w-[6px] h-[6px] bg-[#007AFF] rounded-full" />
                    <span className="text-[14px] leading-[18px] text-[#262C36]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[134px] bg-gradient-to-r from-[#55A3F6] to-[#0079FF] opacity-[0.12]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
