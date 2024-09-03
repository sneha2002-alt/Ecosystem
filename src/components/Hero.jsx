function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full sm:pt-10 lg:pt-12 md:py-8">
      <div className="p-4 relative z-10 w-full text-center mx-auto max-w-screen-xl px-4 md:px-20">
        <h1
          className="flex items-center justify-center text-center lg:text-6xl md:text-5xl text-3xl py-4 font-bold mb-4"
          style={{
            backgroundImage:
              "linear-gradient(to right, #84cc16,#ecfccb, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            lineHeight: "1.5",
          }}
        >
          Your One-Stop Destination in the Creator Economy!
        </h1>
        <p
          className="mt-4 font-normal text-base md:text-lg lg:text-xl text-neutral-300 mx-auto md:w-4/5"
          style={{ lineHeight: "1.5" }}
        >
          Fanzly welcomes you to a world where Ai and the creator economy merge,
          revolutionizing the way fans engage with their favourite content
          creators. Step into our platform and experience the future of the
          creator economy.
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-center mt-8 pt-5 md:gap-8 gap-4">
          <button className="border-2 border-white md:px-8 md:py-3 px-6 py-2 rounded-full hover:bg-gray-500">
            Pitchdeck
          </button>
          <button className="hover:border-2 hover:border-white bg-gray-500 hover:bg-black md:px-8 md:py-3 px-4 py-2 rounded-full">
            Explore FanVerse
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
