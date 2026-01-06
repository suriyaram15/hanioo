const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#2B3B90] to-[#151249] py-8 lg:py-10">
      {/* Main container with increased left/right padding */}
      <div className="mx-auto max-w-[1520px] pl-16 sm:pl-24 lg:pl-32 xl:pl-48 pr-16 sm:pr-24 lg:pr-32 xl:pr-48">

        {/* MAIN GRID - Reduced gap between middle and right columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Logo + Hanioo Name - Reduced logo size */}
            <div className="flex flex-col items-start gap-2">
              <img
                src="/hanioo-footer.png"
                alt="Hanioo logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <h2
                className="text-white text-5xl sm:text-6xl lg:text-7xl leading-none -mt-1"
                style={{ 
                  fontFamily: "'Lateef'", 
                  fontWeight: 500,
                  letterSpacing: '-0.02em'
                }}
              >
                Hanioo
              </h2>
            </div>

            <p className="text-white/90 text-base sm:text-lg max-w-md">
              Connecting people through language globally.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-5 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-4">
                <img src="/mobile.png" alt="Phone" className="w-5 h-5" />
                <span>+91 729 900 5577</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/email.png" alt="Email" className="w-5 h-5" />
                <span>salesteam@honeytranslation.com</span>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN - Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-[#34C759] text-lg sm:text-xl">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4 text-white/90 text-sm sm:text-base">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">How it works</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="hover:text-white transition">Join Wishlist</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </nav>
          </div>

          {/* RIGHT COLUMN - Launching Soon */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h4 className="text-[#34C759] text-lg sm:text-xl font-semibold">
              Launching Soon on
            </h4>

            <div className="flex flex-col sm:flex-row gap-2">
              <img 
                src="/GPlay-footer.png" 
                alt="Get it on Google Play" 
                className="h-11 sm:h-12"
              />
              <img 
                src="/AppStore-footer.png" 
                alt="Download on the App Store" 
                className="h-11 sm:h-12"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="relative w-[160px] h-[40px]">
                {["user1", "user2", "user3", "user4"].map((u, i) => (
                  <img
                    key={u}
                    src={`/${u}.png`}
                    alt="User"
                    className="absolute w-10 h-10 rounded-full border-2 border-white object-cover"
                    style={{ left: `${i * 32}px`, zIndex: 4 - i }}
                  />
                ))}
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                1000+ Peoples are Enrolled
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* FULL-WIDTH DIVIDER & COPYRIGHT */}
      <div className="mt-6">
        <div className="border-t border-white/20" />
        <p className="text-white/70 text-sm text-left pl-16 sm:pl-24 lg:pl-32 xl:pl-48 py-3">
          © 2025 Hanioo App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;