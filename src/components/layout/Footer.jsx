import { BsSend } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-zinc-950 lg:py-14 md:py-8 py-4 sm:pt-10 lg:pt-12 w-full">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <div className="w-full grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 md:gap-10 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2 ">
              <a href="/" className="inline-flex items-center">
                <img src="/logo.png" alt="logo" width={200} height={200} />
              </a>
            </div>

            <p className="mb-6 sm:pr-8">
              Fanzly is a platform where AI integration meets the creator
              economy, offering an innovative space for creators to monetize
              their content and for fans to engage with their favorite content
              creators
            </p>

            <div className="flex gap-4">
              <a href="#" target="_blank">
                <img
                  src="/telegram.svg"
                  alt="telegram"
                  className="bg-white rounded-full border-2 w-10 h-10 p-1 "
                />
              </a>

              <a
                href="#"
                target="_blank"
                className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <img
                  src="/x.svg"
                  alt="x"
                  className="bg-white rounded-full border-2 w-10 h-10 p-1"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 font-bold text-lg">Useful Links</div>

            <nav className="flex flex-col gap-4 text-base">
              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Home
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Ecosystem
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Creators
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Fans
                </a>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold text-lg">Resources</div>

            <nav className="flex flex-col gap-4 text-base">
              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Pitch Deck
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className=" transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>

          <div className="col-span-full lg:col-span-2">
            <h3 className="mb-4 font-bold text-lg">
              Join the Fanzly Community
            </h3>

            <p className="mb-6 sm:pr-8">
              Welcome to Fanzly, your one stop destination in the creator
              economy, the next chapter of fan engagement starts now.
            </p>

            <form className="mb-8 flex gap-2 w-full max-w-md  relative">
              <input
                type="email"
                placeholder="Enter E-mail"
                className="flex-grow px-4 py-2 rounded-md text-zinc-950"
                required
              />
              <BsSend className="absolute right-2 top-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-md p-2 w-8 h-8" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
