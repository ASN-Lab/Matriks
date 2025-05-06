import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`fixed top-4 left-4 z-50 rounded-md md:hidden p-2 bg-teal-700 text-white focus:outline-none ${
          isOpen ? "hidden" : "block"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {/* Hamburger icon */}
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar untuk mobile */}
      <nav
        className={`fixed top-0 left-0 h-full w-56 bg-teal-700 text-white shadow-md transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col p-6 h-full">
          <div className="mb-8 flex items-center justify-between border-b border-gray-700 pb-4">
            <h1 className="flex text-l font-bold">MATRIX <br /> CALCULATOR
            <p className="font-black text-6xl pl-1">4</p></h1>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Navbar untuk desktop */}
      <nav className="hidden md:flex top-0 left-0 w-full bg-teal-400 text-slate-700 p-4 z-50 items-center justify-between space-x-8">
        <div className="text-2xl font-bold flex flex-between gap-3">
          MATRIX <br /> CALCULATOR
          <p className="font-black text-6xl">4</p>
        </div>
        <ul className="flex space-x-6">
          <li className="hover:text-zinc-300 cursor-pointer">Home</li>
          <li className="hover:text-zinc-300 cursor-pointer">About</li>
          <li className="hover:text-zinc-300 cursor-pointer">Services</li>
          <li className="hover:text-zinc-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
