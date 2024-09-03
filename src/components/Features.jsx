function Features() {
  return (
    <div className="bg-zinc-950 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <div className="mb-10 md:mb-16">
          <h2
            className="flex items-center justify-center lg:text-6xl md:text-5xl text-3xl py-4 font-semibold mb-4 text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #84cc16,#ecfccb, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Fanzly Features
          </h2>

          <p className="mx-auto max-w-screen-md text-center md:text-lg">
            Fanzly offers an immersive ecosystem crafted to revolutionize
            Creator-Fan interaction with unique engagement opportunities.
            Welcome to the future of the Creator Economy.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-16 py-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="relative">
                <div className=" mb-6 flex items-center justify-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg md:h-14 md:w-14
                  ${i % 2 === 0 ? "bg-[#84cc16]" : "bg-[#10b981]"}`}
                  >
                    <p className="font-semibold text-lg z-10">{i + 1}</p>
                  </div>
                  <div
                    className="absolute -inset-0 rounded-full animate-spin-slow"
                    style={{
                      border: `2px solid ${
                        i % 2 === 0 ? "#84cc16" : "#10b981"
                      }`,
                      borderColor: `transparent ${
                        i % 2 === 0 ? "#84cc16" : "#10b981"
                      } transparent transparent`,
                      borderRadius: "50%",
                      clipPath: "circle(50% at 100% 50%)",
                    }}
                  ></div>
                </div>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Gamified VR/AR experience
              </h3>
              <p className="mb-2 py-2 text-center text-sm">
                Fans can interact with their favorite creators and other users
                in our immersive VR world, play games, and attend events.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
