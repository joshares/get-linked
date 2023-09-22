"use client";
import Button from "component/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="md:flex hidden justify-between items-center text-white px-16 py-5">
      <h1 className="font-bold text-4xl w-max">
        get<span className="text-[#D434FE]">linked</span>
      </h1>
      <section className="flex gap-40 justify-between items-center text-md font-bold text-sm">
        <div className="flex md:gap-8 sm:gap-3 justify-center items-center">
          <Link href="#">Timeline</Link>
          <Link href="#">Overview</Link>
          <Link href="#">FAQs</Link>
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact" &&
              "bg-gradient-to-r  to-[#FF26B9] from-[#9034ff] bg-clip-text text-transparent rounded-sm w-max "
            }`}
          >
            Contact
          </Link>
        </div>
        <Link
          href="/register"
          // className={` ${
          //   router.pathname === "/register"
          //     ? "gradient-border"
          //     : "gradient-background"
          // }`}
        >
          {/* Register */}
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
