const articles = [
  {
    title: "Integer Maecenas Eget Viverra",
    image: "/insight1.png",
  },
  {
    title: "Integer Maecenas Eget Viverra",
    image: "/insight2.png",
  },
  {
    title: "Integer Maecenas Eget Viverra",
    image: "/insight3.png",
  },
];

const Insights = () => {
  return (
    <section className="relative pt-[100px] pb-[20px] bg-white">
      <div className="mx-auto max-w-[1520px] px-[70px] flex flex-col items-center gap-[55px]">

        {/* Header */}
        <div className="flex flex-col items-center gap-[35px] max-w-[680px]">

          {/* Badge */}
          <div className="px-[18px] py-[5px] bg-[#34C759] rounded-[6px]">
            <span className="text-[15px] leading-[26px] text-white font-medium">
              Latest from Our Blog
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-[28px] text-center">
            <h2 className="text-[50px] leading-[63px] font-semibold text-[#262C36]">
              Insights & Updates
            </h2>
            <p className="text-[15px] leading-[26px] text-[#262C36] px-[30px]">
              Stay informed with our latest articles on interpretation services and language technology
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-[25px] justify-center">

          {articles.map((article, index) => (
            <div
              key={index}
              className="w-[390px] h-[570px] bg-white overflow-hidden"
            >

              {/* Image */}
              <div className="h-[260px] w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-[28px] px-[28px] flex flex-col gap-[18px]">

                {/* Title */}
                <h3 className="text-[20px] leading-[30px] font-semibold text-[#121416]">
                  {article.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-[10px] text-[13px] leading-[28px] text-[#6C757D]">

                  <div className="flex items-center gap-[5px]">
                    <img
                      src="/hannio-small.png"
                      alt="Hanioo"
                      className="w-[26px] h-[26px]"
                    />
                    <span className="font-medium text-[#121416]">
                      Hanioo
                    </span>
                  </div>

                  <div className="w-[1px] h-[18px] bg-[#6C757D66]" />

                  <span className="text-[#007AFF]">
                    June 28, 2018
                  </span>

                  <div className="flex items-center gap-[5px] text-[#007AFF]">
                    <img
                      src="/share.png"
                      alt="shares"
                      className="w-[11px] h-[12px]"
                    />
                    <span>1K shares</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] leading-[22px] text-[#8391A1]">
                  In today’s fast-paced global world, communication is no longer
                  limited by borders but language differences can still slow down...
                </p>

                {/* Read More */}
                <div className="flex flex-col gap-[2.5px] w-fit cursor-pointer group">
                  <span className="text-[15px] leading-[28px] text-[#121416] group-hover:text-[#34C759] transition-colors">
                    Read More
                  </span>
                  <span className="h-[1px] w-full bg-[#121416] group-hover:bg-[#34C759] transition-colors" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Insights;