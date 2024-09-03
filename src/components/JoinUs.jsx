function JoinUs() {
  return (
    <div className=" flex flex-col items-center justify-center h-fit md:h-[550px] mx-auto relative w-full py-10 px-8 md:px-32 lg:px-48">
      <h2
        className="flex items-center justify-center text-center lg:text-6xl md:text-5xl text-3xl py-4 font-bold mb-4"
        style={{
          backgroundImage:
            "linear-gradient(to right, #84cc16,#ecfccb, #10b981)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        Join our Fanzly Community
      </h2>
      <p
        className="text-center md:text-xl text-base mb-6 py-4 max-w-5xl"
        style={{ lineHeight: "2" }}
      >
        We&apos;re in this together, shaping the future of fandom, step by step.
        Come along with us as we shake things up, changing how creators and fans
        link up, work together, and make magic. Welcome to Fanzly, where the
        next chapter of fan engagement starts now.
      </p>
      <button
        className="text-center px-5 py-3 rounded-3xl uppercase text-white"
        style={{
          background: "linear-gradient(to right, #14C10E,#C0CA33 )",
          transition: "background 0.3s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(to right,#6db81f, #355415)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(to right, #14C10E, #4D9F00)";
        }}
      >
        start building
      </button>
    </div>
  );
}

export default JoinUs;
