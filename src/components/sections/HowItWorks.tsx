const steps = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create your account as customer or interpreter.",
    gif: "/signup.gif",
  },
  {
    step: 2,
    title: "Connect",
    description: "Find or offer interpretation services instantly.",
    gif: "/connect.gif",
  },
  {
    step: 3,
    title: "Communicate",
    description: "Enjoy seamless multilingual interaction.",
    gif: "/communicate.gif",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background pt-[20px] pb-[50px]">
      <div className="container mx-auto px-4 lg:px-20">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-[52px]">
          <h2 className="text-[38px] md:text-[62px] font-semibold text-[#262C36] mb-[18px]">
            How It Works
          </h2>
          <p className="text-[#262C36] text-[14px] md:text-[15px]">
            Get started in three simple steps
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] max-w-[1420px] mx-auto">  {/* Increased wrapper max-width by ~60px to accommodate wider cards */}
          {steps.map((step) => (
            <div
              key={step.step}
              className="
                bg-muted
                rounded-[18px]
                pt-[44px]
                pl-[24px]
                relative
                overflow-hidden
                min-h-[320px]
                min-w-[400px]
                lg:min-h-[500px]
                lg:max-w-[500px]  /* Increased from 380px to 400px (+20px width) */
                mx-auto
              "
            >
              {/* Step Badge - Reduced size */}
              {/* Step Badge - Increased width, same height */}
              <span className="inline-flex items-center justify-center px-[20px] py-[2px] bg-accent text-white text-[14px] rounded-[5px] mb-[20px]">
                Step: {step.step}
              </span>
              {/* Text */}
              <div className="space-y-[14px] relative z-10">
                <h3 className="text-[16px] md:text-[21px] font-bold text-[#262C36]">
                  {step.title}
                </h3>
                <p className="text-[#262C36] text-[15px] leading-[24px] max-w-[250px] font-normal">
                  {step.description}
                </p>
              </div>

              {/* GIF */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pl-[60px] pb-[5px] pt-[20px]">
                <img
                  src={step.gif}
                  alt={step.title}
                  className="w-[350px] max-w-[300px] md:max-w-[210px] lg:max-w-[385px] rounded-[14px] "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;