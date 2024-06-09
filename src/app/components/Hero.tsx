"use client";

import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
import Link from "next/link";
export function Hero() {
  const words = [
    {
      text: "Train",
    },
    {
      text: "smarter",
    },
    {
      text: "not",
    },
    {
      text: "harder",
    },
    {
      text: "with",
    },
    {
      text: "Voxy.",
      className: "text-[#DB4A2B] dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to success is not easy, but it is worth it.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href="/login"
          className="w-40 flex items-center justify-center h-10 rounded-xl  border hover:border-[#DB4A2B] dark:border-white border-transparent text-white text-sm"
        >
          Login
        </Link>
        <button className="w-40 h-10 hover:bg-transparent transition-all ease-in-out rounded-xl bg-[#DB4A2B] text-[#E4E2DD] border border-[#DB4A2B]  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
