"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "./assets/main-1.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-70">
      {/* Marquee/Announcement Bar */}
      <div className="overflow-hidden bg-[#630505] text-white">
        <div
          className="whitespace-nowrap px-4"
          style={{
            display: "inline-block",
            minWidth: "100%",
            animation: "slideLeft 30s linear infinite",
          }}
        >
          Stunning designs with Haider Designing. &nbsp;&nbsp;&nbsp; &nbsp;
          Work with promise @haider Desigining.&nbsp;&nbsp;&nbsp; &nbsp;
          20% Discount till 20th October 2025. &nbsp;&nbsp;&nbsp; &nbsp;
        </div>
        <style>
          {`
            @keyframes slideLeft {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </div>
      {/* Main Navbar */}
      <header className=" bg-gray-800/50  backdrop-blur-md body-font shadow w-full">
        <div className="container mx-auto flex flex-wrap px-4 py-3 flex-col md:flex-row items-center justify-between">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            
          <Image src={logo} alt="Haider Designing Logo" width={40} height={40}  className="ml-5"/>  <span className="ml-3 text-xl  sm:hidden font-bold">Haider Designing</span>
          </a>
          {/* Small screen: hamburger + button in a row */}
          <div className="flex flex-row md:hidden gap-4 justify-center text-center">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-300 hover:text-gray-900 hover:border-gray-400"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {menuOpen ? (
                  // X icon
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:items-center mr-[10%]   md:space-x-10 md:ml-0 w-full md:w-auto items-center text-base justify-center mt-4 md:mt-0`}
          >
            <a href="#" className="hover:text-blue-600 transition-all  text-white delay-75 font-bold  mt-2 md:mt-0">
              HOME
            </a>
            <a href="#" className="hover:text-blue-600 transition-all text-white delay-75 font-bold  mt-2 md:mt-0">
              GALLERY
            </a>
            <a href="#" className="hover:text-blue-600 transition-all text-white delay-75 font-bold  mt-2 md:mt-0">
              ABOUT
            </a>
            <a href="#" className="hover:text-blue-600 transition-all text-white delay-75 font-bold mt-2 md:mt-0">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}