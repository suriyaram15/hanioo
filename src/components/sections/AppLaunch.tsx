const AppLaunch = () => {
  return (
    <section
      className="relative w-full h-[650px] overflow-hidden"
      style={{
        background:
          "linear-gradient(279.85deg, #151249 0%, #2B3B90 100%)",
      }}
    >
     {/* LEFT CONTENT - Vertically centered */}
<div
  className="absolute flex flex-col"
  style={{
    left: "200px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "630.33px",
    gap: "40px", // ⬅️ unified gap
  }}
>
  {/* Title + Subtitle Group */}
  <div className="flex flex-col" style={{ gap: "10px" }}>
    <h2
      className="font-semibold text-white"
      style={{
        fontFamily: "'Stack Sans Text', sans-serif",
        fontSize: "56px",
        lineHeight: "75.6px",
      }}
    >
      Hanioo App
      <br />
      Launching Soon
      <img
        src="/rocket.gif"
        alt="Rocket"
        className="inline-block align-middle ml-[12px]"
        style={{
          width: "64px",
          height: "64px",
        }}
      />
    </h2>

    <p
      className="font-normal text-white"
      style={{
        fontFamily: "'Stack Sans Text', sans-serif",
        fontSize: "16px",
        lineHeight: "29.7px",
      }}
    >
      Your language, your connection, all in one powerful app. Join thousands<br></br>
      of early users and be part of the communication revolution.
    </p>
  </div>

  {/* Button and Trust Section */}
  <div className="flex flex-col" style={{ gap: "60px" }}>
    <button
      className="flex items-center justify-center w-[180.9px] h-[38.3px] bg-[#34C759] rounded-[6.3px]"
    >
      <span
        className="font-semibold text-white"
        style={{
          fontFamily: "'Stack Sans Text', sans-serif",
          fontSize: "14.5px",
          lineHeight: "20.7px",
        }}
      >
        Join Wishlist
      </span>
    </button>

    {/* Trust Avatars + Text */}
    <div className="flex flex-col" style={{ gap: "5px" }}>
      <div className="relative w-[149.4px] h-[46.8px]">
        {["user1", "user2", "user3", "user4"].map((u, i) => (
          <img
            key={u}
            src={`/${u}.png`}
            alt="User avatar"
            className="absolute rounded-full border-2 border-white object-cover"
            style={{
              width: "41.6px",
              height: "41.6px",
              left: `${i * 34.2}px`,
              zIndex: 10 - i,
            }}
          />
        ))}
      </div>

      <p
        className="font-normal text-white"
        style={{
          fontFamily: "'Stack Sans Text', sans-serif",
          fontSize: "14.4px",
          lineHeight: "23.4px",
          width: "142.7px",
        }}
      >
        Trusted by 1000+
        <br />
        Users in beta
      </p>
    </div>
  </div>
</div>

      {/* RIGHT SIDE - iPhone Mockups - Moved further right to avoid overlap */}
      <div
        className="absolute h-full"
        style={{
          right: "-40px",        // Reduced from 200px → moved ~80px to the right
          top: 0,
          width: "798.09px",
        }}
      >
        <img
          src="/iPhone.png"
          alt="Hanioo App Preview"
          className="h-full w-auto object-contain"
          style={{
            width: "650px",  // 798.09px × 0.8 (20% smaller)
          }}
        />
      </div>
    </section>
  );
};

export default AppLaunch;