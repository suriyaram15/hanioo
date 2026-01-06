const Hero = () => {
  return (
    <section
      className="
        relative
        bg-white
        overflow-hidden
        font-['Stack Sans Text']
        min-h-[915px]
        -mt-[200px]  /* Pulls hero section up to overlap/reduce gap with fixed navbar */
        pt-[138px]    /* Counteracts the negative margin to keep internal layout intact */
      "
    >
      {/* ================= WATERMARK ================= */}
      <img
        src="/Hanioo-WM.png"
        alt="Hanioo Watermark"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[0px]   /* Moved further down to prevent cropping at the bottom */
          w-[1200px]
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* ================= MAIN CONTENT ================= */}
      <div
        className="
          relative
          z-10
          max-w-[1000px]
          mx-auto
          pt-[130px]
          flex
          flex-col
          items-center
          gap-[30px]
          text-center
        "
      >
        {/* Heading */}
        <h1
          className="text-[#262C36] font-semibold"
          style={{
            fontSize: "66px",
            lineHeight: "70px",
            maxWidth: "896px",
          }}
        >
          Connecting People Through <br />
          the <span className="text-[#0A66FF]">Power of Language</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#262C36] font-semibold"
          style={{
            fontSize: "14.5px",
            lineHeight: "26px",
            maxWidth: "950px",
          }}
        >
          Hanioo is a smart app that bridges the gap between
          interpreters and customers. Find experts for any language, or become an
          interpreter and start helping others communicate globally.
        </p>

        {/* Launching Soon */}
        <div className="flex flex-col items-center gap-[18px] mt-[10px]">
          <p
            className="uppercase tracking-[0.12em] text-[#8391A1] font-medium"
            style={{ fontSize: "12.5px" }}
          >
            Launching Soon On
          </p>

          <div className="flex gap-[14px]">
            <img
              src="/GPlay-hero.png"
              alt="Google Play"
              className="h-[48px]"
            />
            <img
              src="/AppStore-hero.png"
              alt="App Store"
              className="h-[48px]"
            />
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-[18px] mt-[10px]">
          <div className="flex items-center">
            {["user1", "user2", "user3", "user4"].map((user, i) => (
              <img
                key={i}
                src={`/${user}.png`}
                alt={user}
                className="
                  w-[38px]
                  h-[38px]
                  rounded-full
                  border
                  border-white
                  -ml-2
                  first:ml-0
                "
              />
            ))}
          </div>

          <p className="text-[#262C36]" style={{ fontSize: "14.5px" }}>
            <span className="font-semibold">1000+</span>{" "}
            <span className="font-normal">Peoples are Enrolled</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;