const values = [
  {
    number: "1",
    title: "Global Reach",
    description:
      "We connect users across borders through trusted language experts.",
  },
  {
    number: "2",
    title: "Smart Matching",
    description:
      "Our system helps customers find the right interpreter based on skills and expertise.",
  },
  {
    number: "3",
    title: "Empowering Linguists",
    description:
      "Anyone who knows multiple languages can become an interpreter and grow their career.",
  },
];
const CoreValues = () => {
  return (
    <section className="bg-white font-['Stack Sans Text'] pb-[20px]">
      <div className="max-w-[1320px] mx-auto px-6 pt-10 pr-8 pl-14">
        <div className="flex flex-col lg:flex-row gap-[30px]">

          {/* LEFT */}
          <div className="flex-1 max-w-[760px]">
            <h2 className="text-[#262C36] font-bold text-[54px] mb-[30px]">
              Our Core Values
            </h2>

            <div className="flex flex-col">
              {values.map((item, index) => (
                <div key={item.number} className="pb-[10px]">
                  <span className="inline-flex items-center justify-center bg-[#34C759] text-white text-[13px] px-[22px] py-[6px] rounded-[6px] mb-6 w-[52px] h-[24px] font-semibold">
                    {item.number}
                  </span>

                  <h3 className="text-[#262C36] font-semibold text-[22px] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#262C36] text-[14px] leading-[26px] max-w-[720px]">
                    {item.description}
                  </p>

                  {index !== values.length - 1 && (
                    <div className="mt-[10px] w-full h-px bg-[#F2F0EE]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/coreImg.png"
              alt="Core Values Illustration"
              className="w-[520px] h-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;