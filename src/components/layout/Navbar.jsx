function Navbar() {
  return (
    <div className=" bg-zinc-900 bg-opacity-40 rounded-full top-10 inset-x-0 lg:max-w-screen-lg mx-auto h-[80px] z-50">
      <div className=" px-4 md:px-8">
        <header className="flex items-center justify-between py-4 ">
          <a href="/">
            <img src="/logo.png" alt="logo" width="180" height="180" />
          </a>

          <div className="hidden gap-12 lg:flex">
            <a
              href="/"
              className="text-md font-semibold transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Home
            </a>
            <a
              href="#"
              className="text-md font-semibold transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Ecosystem
            </a>
            <a
              href="#"
              className="text-md font-semibold transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Creators
            </a>

            <a
              href="#"
              className="text-md font-semibold transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Fans
            </a>
          </div>

          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
            <a
              href="#"
              className="inline-block rounded-full bg-blue-400 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-blue-400 md:text-base"
            >
              <img
                src="/telegram.svg"
                alt="logo"
                width="30"
                height="30"
                className="inline-block mr-3"
              />
              Telegram
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
