
const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-20 font-['Stack Sans Text']"
      style={{ paddingTop: "20px" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">

    {/* Globe */}
    <img
      src="/Hanioo.png"
      alt="Language Globe"
      className="w-[255px] h-auto mb-10 md:w-[200px] sm:w-[150px]"
    />

    {/* Heading */}
    <h2
      className="text-[#262C36] font-semibold mb-6 text-[78px] md:text-[60px] sm:text-[40px]"
      style={{
        lineHeight: "58px",
        paddingBottom: "20px",
      }}
    >
      About Hanioo
    </h2>

    {/* Paragraph wrapper */}
    <div className="group flex flex-col items-center">

      {/* Paragraph 1 */}
      <p
        className="
          text-[#8391A1]
          font-normal
          max-w-[1180px]
          mb-6
          transition-all
          duration-200
          group-hover:font-semibold
          group-hover:text-black
          cursor-default
          text-[24px] md:text-[20px] sm:text-[16px]
        "
        style={{
          lineHeight: "32px",
        }}
      >
        Hanioo is built with one goal to make language no longer a barrier. Our platform
        connects customers with professional interpreters in just a few clicks, making
        global conversations effortless.
      </p>

      {/* Paragraph 2 */}
      <p
        className="
          text-[#8391A1]
          font-normal
          max-w-[1100px]
          transition-all
          duration-200
          group-hover:font-semibold
          group-hover:text-black
          cursor-default
          text-[24px] md:text-[20px] sm:text-[16px]
        "
        style={{
          lineHeight: "32px",
        }}
      >
        At Hanioo, we believe every conversation deserves understanding,
        no matter the language.
      </p>

    </div>

  </div>
</section>  );
};export default About;
