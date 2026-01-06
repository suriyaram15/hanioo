
const Prototype = () => {
  return (
    <section className="relative w-full py-24 bg-background">
      {/* Outer container with padding */}
      <div className="relative mx-auto max-w-[1720px] px-[80px] pt-[30px] pb-[30px]">
        {/* Main frame - reduced size, centered, light green background */}
        <div className="relative mx-auto w-[1220px] h-[800px] rounded-[50px] bg-[rgba(52,199,89,0.1)] overflow-hidden flex flex-col items-center">

          {/* ================= HEADER ================= */}
          <div className="mt-[80px] flex flex-col items-center gap-[24px] text-center px-[100px]">
            <h2 className="text-[56px] leading-[70px] font-semibold text-[rgba(0, 0, 0, 0.1)]">
              Experience the Hanioo Prototype
            </h2>

            <p className="text-[15px] leading-[28px] font-semibold text-[rgba(0, 0, 0, 0.1)]/80 max-w-[900px]">
              Get a first look at how Hanioo connects interpreters and customers in a seamless, user-friendly interface. Explore how bookings, demo calls, and profile management work all in one place.
            </p>

            {/* Buttons */}
            <div className="flex gap-[20px] mt-[20px]">
              <button className="w-[200px] h-[40px]  border border-[#273B8C] rounded-[4px] text-[#273B8C] text-[15px] font-medium hover:bg-[#273B8C]/5 transition">
                Try Live Demo
              </button>

              {/* Updated button to match the uploaded image */}
              <button className="relative w-[220px] h-[40px] bg-[#273B8C] rounded-[4px] text-white text-[15px] font-medium overflow-hidden group">
                <span className="relative z-10">View Full Prototype</span>
                
                
              </button>
            </div>
          </div>

          {/* ================= PHONES ================= */}
          <div className="mt-[65px] mb-[40px] flex justify-center items-end gap-[40px] px-[80px]">
            {[
              "/prototype1.png",
              "/prototype2.png",
              "/prototype3.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-[300px] h-[420px] flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Prototype screen ${index + 1}`}
                  className="max-h-full max-w-full object-contain shadow-2xl"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Prototype;