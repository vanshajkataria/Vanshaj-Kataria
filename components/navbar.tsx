import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="h-full w-full flex items-center justify-center md:justify-between">
        <Link href="/">
          <div className="font-black text-3xl md:text-4xl">Vanshaj Kataria</div>
        </Link>
        <div className="md:flex justify-center items-center gap-12 hidden">
          <div className="font-medium hover:font-black ease-in-out duration-300 transition-all cursor-pointer">
            About
          </div>
          <div className="font-medium hover:font-black ease-in-out duration-300 transition-all cursor-pointer">
            Projects
          </div>
          <div className="font-medium hover:font-black ease-in-out duration-300 transition-all cursor-pointer">
            Experiences
          </div>
          <div className="font-medium hover:font-black ease-in-out duration-300 transition-all cursor-pointer">
            Contact
          </div>
        </div>
        <div className="hidden">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </nav>
    </>
  );
}
