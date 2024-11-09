import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <>
      <div className="flex justify-around items-center w-full">
        <Link
          href="https://www.linkedin.com/in/vanshaj-kataria/"
          target="_blank"
        >
          <span className="text-lg font-medium hover:font-black transition-all duration-300 ease-in-out">
            LinkedIn
          </span>
        </Link>
        <Link href="https://www.instagram.com/vanshaj_kataria/" target="_blank">
          <span className="text-lg font-medium hover:font-black transition-all duration-300 ease-in-out">
            Instagram
          </span>
        </Link>
        <Link href="mailto:vanshajkataria3@gmail.com">
          <span className="text-lg font-medium hover:font-black transition-all duration-300 ease-in-out">
            Mail
          </span>
        </Link>
      </div>
    </>
  );
}
