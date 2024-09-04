import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-zinc-900 bg-opacity-40 rounded-full top-10 inset-x-0 lg:max-w-screen-lg mx-auto h-[80px] z-50">
      <div className="px-4 md:px-8">
        <header className="flex items-center justify-between py-4">
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

          <div className="hidden lg:flex lg:justify-start">
            <a
              href="#"
              className="inline-block rounded-full bg-blue-400 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-blue-400 md:text-base"
            >
              <img
                src="/telegram.svg"
                alt="Telegram"
                width="30"
                height="30"
                className="inline-block mr-3"
              />
              Telegram
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-700 px-2.5 py-2 text-sm font-semibold text-gray-200 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            onClick={toggleSidebar}
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
          </button>
        </header>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end">
          <div className="w-64 bg-zinc-900 h-full shadow-xl p-5 flex flex-col">
            <button
              className="self-end text-white mb-8"
              onClick={toggleSidebar}
            >
              <RxCross2 className="w-6 h-6" />
            </button>
            <a
              href="/"
              className="mb-6 text-lg font-semibold text-white transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Home
            </a>
            <a
              href="#"
              className="mb-6 text-lg font-semibold text-white transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Ecosystem
            </a>
            <a
              href="#"
              className="mb-6 text-lg font-semibold text-white transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Creators
            </a>
            <a
              href="#"
              className="mb-6 text-lg font-semibold text-white transition duration-100 hover:text-lime-500 active:text-lime-700"
            >
              Fans
            </a>
            <a
              href="#"
              className="text-sm font-semibold bg-blue-400 px-2 py-2 rounded-full text-white transition duration-100 hover:bg-blue-500 active:bg-blue-400"
            >
              <img
                src="/telegram.svg"
                alt="Telegram"
                width="24"
                height="24"
                className="inline-block mr-3"
              />
              Telegram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
