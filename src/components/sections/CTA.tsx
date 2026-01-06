import { useState } from "react";

const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section
      id="cta"
      className="relative w-full h-[700px] overflow-hidden"
      style={{
        background:
          "linear-gradient(279.85deg, #151249 0%, #2B3B90 100%)",
      }}
    >
      {/* Watermark */}
      <img
        src="/hannio-cta.png"
        alt="Hanioo watermark"
        className="absolute w-[588px] h-[500px] right-[300px] top-[-1px] pointer-events-none select-none"
      />

      {/* Main Container */}
      <div className="mx-auto max-w-[1520px] pl-[90px] pr-[150px] h-full flex items-center">
        <div className="w-full flex gap-[30px] items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-[20px] max-w-[1200px]">
            <div className="flex flex-col gap-[18px]">
              <img
                src="/rocket.gif"
                alt="Rocket"
                className="w-[90px] h-[90px]"
              />

              <span className="text-white text-[14px] leading-[20px] opacity-90">
                Launching Soon
              </span>

              <h1 className="font-semibold text-[50px] leading-[54px] text-white max-w-[1000px]">
                Be the First to <br />
                <span className="text-[#34C759]">Experience Hanioo</span>
              </h1>

              <p className="text-white/90 text-[14px] leading-[22px] max-w-[820px]">
                Join our wishlist and get early access when we launch on Android and iOS
              </p>
            </div>

            {/* Avatars */}
            <div className="flex flex-col gap-[12px]">
              <div className="relative h-[40px] w-[140px]">
                {["user1", "user2", "user3", "user4"].map((u, i) => (
                  <img
                    key={u}
                    src={`/${u}.png`}
                    className="absolute w-[40px] h-[40px] rounded-full border-2 border-white object-cover"
                    style={{ left: `${i * 30}px`, zIndex: 4 - i }}
                  />
                ))}
              </div>

              <p className="text-white text-[13px] opacity-90">
                1000+ Peoples waiting
              </p>
            </div>
          </div>

          {/* RIGHT FORM - Reduced blur + thin white outline */}
          <div className="relative w-[580px] h-[450px] rounded-[40px] bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center">
            <form className="w-[480px] flex flex-col gap-[60px]">
              <div className="flex flex-col gap-[30px]">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full h-[44px] px-[24px] rounded-[8px] bg-white text-[14px] text-[#262C36] outline-none placeholder:text-[#262C36]"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full h-[44px] px-[24px] rounded-[8px] bg-white text-[14px] text-[#262C36] outline-none placeholder:text-[#262C36]"
                />
              </div>

              <div className="flex flex-col items-center gap-[30px]">
                <button
                  type="submit"
                  className="w-full h-[46px] bg-[#007AFF] rounded-[8px] text-white text-[16px] font-semibold hover:bg-[#0062CC] transition-colors"
                >
                  Join Wishlist
                </button>

                <p className="text-[#B0B8C4] text-[12px] text-center max-w-[500px]">
                  No spam, only launch updates and exclusive access.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;