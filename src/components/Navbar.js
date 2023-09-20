"use client";
import Button from "component/ui/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="md:flex hidden justify-between items-center text-white px-16 py-5">
      <h1 className="font-bold text-4xl w-max">
        get<span className="text-[#D434FE]">linked</span>
      </h1>
      <section className="flex gap-40 justify-between items-center text-md  text-sm">
        <div className="flex md:gap-8 sm:gap-3 justify-center items-center">
          <Link href="#">Timeline</Link>
          <Link href="#">Overview</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Contact</Link>
        </div>
        <Button title="Register" />
        {/* <button className="bg-gradient-to-r  from-[#d434fe] to-[#9034ff] text-white p-2 px-8 rounded-sm ">
          Register
        </button> */}
      </section>
    </nav>
  );
}
