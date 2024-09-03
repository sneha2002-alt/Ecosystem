function Vision() {
  return (
    <div className="py-4 sm:pt-10 lg:pt-12 w-full">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <h2 className="text-center lg:text-6xl md:text-5xl text-3xl py-4 font-semibold mb-4 underline-offset-8 underline decoration-2 decoration-[#84cc16] bg-gradient-to-r from-[#84cc16] to-[#ecfccb] text-transparent bg-clip-text">
          Our Vision
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="h-64 overflow-hidden rounded-xl  md:h-[500px] py-10 mb-10 lg:w-3/4">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-[500px] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <h1
              className="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 lg:text-left lg:w-1/2"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #84cc16,#ecfccb, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Empowering Creators and Engaging Fans
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
              <br />
              <br />
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy
              text which has no meaning however looks very similar to real text.
            </p>

            <button className="mb-8 border-2 border-[#84cc16] md:px-5 md:py-3 px-3 py-1 md:text-base text-sm rounded-3xl text-[#84cc16]  hover:bg-[#aeef4d] hover:text-white transition duration-200">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
