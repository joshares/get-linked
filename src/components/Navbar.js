"use client";
import Button from "component/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="md:flex hidden justify-between items-center text-white px-16 py-5">
      <Link href="/" className="font-bold text-4xl w-max clash-display">
        get<span className="text-[#D434FE]">linked</span>
      </Link>
      <section className="flex gap-40 justify-between items-center text-md font-bold text-sm">
        <div className="flex md:gap-8 sm:gap-3 justify-center items-center">
          <Link href="#timeline">Timeline</Link>
          <Link
            href="/"
            className={`${
              router.pathname === "/" &&
              "bg-gradient-to-r  to-[#FF26B9] from-[#9034ff] bg-clip-text text-transparent rounded-sm w-max "
            } `}
          >
            Overview
          </Link>
          <Link href="#faq">FAQs</Link>
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact" &&
              "bg-gradient-to-r  to-[#FF26B9] from-[#9034ff] bg-clip-text text-transparent rounded-sm w-max "
            } `}
          >
            Contact
          </Link>
        </div>
        <Link href="/register">
          <Button
            title="Register"
            style={`${
              router.pathname === "/register"
                ? "bg-none  gradient-border"
                : "w-[8rem] px-0 md:p-[11px]"
            } `}
          />
        </Link>
      </section>
    </nav>
  );
}
