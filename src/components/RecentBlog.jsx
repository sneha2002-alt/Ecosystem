function RecentBlog() {
  return (
    <div className=" py-4 sm:pt-10 lg:pt-12 w-full">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <div className="flex lg:flex-row flex-col lg:justify-between items-center mb-6">
          <h2
            className="md:text-start text-center md:text-5xl text-3xl py-6 lg:py-2 font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(to right, #84cc16,#ecfccb, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Recent Blogs
          </h2>
          <div className="flex items-center gap-2">
            <button className=" rounded-3xl bg-zinc-800 px-3 py-2 text-center text-xs  font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-zinc-600 focus-visible:ring active:bg-gray-400 md:px-6 md:py-3 md:text-base">
              Tech
            </button>
            <button className=" rounded-3xl bg-zinc-800 px-3 py-2 text-center text-xs  font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-zinc-600 focus-visible:ring active:bg-gray-400 md:px-6 md:py-3 md:text-base">
              Operations
            </button>
            <button className=" rounded-3xl bg-zinc-800 px-3 py-2 text-center text-xs  font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-zinc-600 focus-visible:ring active:bg-gray-400 md:px-6 md:py-3 md:text-base">
              Crypto
            </button>
          </div>
        </div>

        <div className="max-w-screen-2xl grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 lg:py-14 md:py-8 py-4 sm:pt-10 lg:pt-12 w-full">
          <div className="flex flex-col overflow-hidden rounded-2xl">
            <a
              href="#"
              className="group relative block h-52 overflow-hidden md:h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-2xl"
              />
            </a>

            <div className="flex flex-1 text-start flex-col py-4">
              <button className="bg-green-800 rounded-lg w-1/5 px-1 py-2 my-2">
                Blogs
              </button>
              <h2 className="mb-2 md:text-xl text-lg font-semibold py-2 md:w-11/12">
                <a
                  href="#"
                  className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  The Crypto Express: Your Gateway to the World of
                  Cryptocurrency
                </a>
              </h2>

              <p className="mb-8  text-gray-500 md:w-11/12">
                The Crypto express content is unbiased, easy to understand, and
                reliable. They also have a great community of crypto enthusiasts
              </p>

              <div className="mt-auto flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                      loading="lazy"
                      alt="Photo by Brock Wegner"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className="">Andy Clarement</span>
                    <span className=" text-gray-400">22 Nov 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl">
            <a
              href="#"
              className="group relative block h-48 overflow-hidden md:h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-2xl"
              />
            </a>

            <div className="flex flex-1 text-start flex-col py-4">
              <button className="bg-green-800 rounded-lg w-1/5 px-1 py-2 my-2">
                Blogs
              </button>
              <h2 className="mb-2 md:text-xl text-lg font-semibold py-2 md:w-11/12">
                <a
                  href="#"
                  className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  The Crypto Express: Your Gateway to the World of
                  Cryptocurrency
                </a>
              </h2>

              <p className="mb-8  text-gray-500 md:w-11/12">
                The Crypto express content is unbiased, easy to understand, and
                reliable. They also have a great community of crypto enthusiasts
              </p>

              <div className="mt-auto flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                      loading="lazy"
                      alt="Photo by Brock Wegner"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className="">Andy Clarement</span>
                    <span className=" text-gray-400">22 Nov 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl">
            <a
              href="#"
              className="group relative block h-48 overflow-hidden md:h-64"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-2xl"
              />
            </a>

            <div className="flex flex-1 text-start flex-col py-4">
              <button className="bg-green-800 rounded-lg w-1/5 px-1 py-2 my-2">
                Blogs
              </button>
              <h2 className="mb-2 md:text-xl text-lg font-semibold py-2 md:w-11/12">
                <a
                  href="#"
                  className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  The Crypto Express: Your Gateway to the World of
                  Cryptocurrency
                </a>
              </h2>

              <p className="mb-8  text-gray-500 md:w-11/12">
                The Crypto express content is unbiased, easy to understand, and
                reliable. They also have a great community of crypto enthusiasts
              </p>

              <div className="mt-auto flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                      loading="lazy"
                      alt="Photo by Brock Wegner"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className="">Andy Clarement</span>
                    <span className=" text-gray-400">22 Nov 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
