"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-6 shadow-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-700 before:bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo /> {/* Adjusted logo size */}
          </div>

          {/* Company Name */}
          <div className="text-white font-semibold text-3xl tracking-wide">
            Kaysics
          </div>
        </div>
      </div>
    </header>
  );
}