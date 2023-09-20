"use client";
import Image from "next/image";
import menu from "../../public/menu.svg";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="md:hidden block px-10 p-5">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-3xl ">
          get<span className="text-[#D434FE]">linked</span>
        </h1>
        <div className="w-1/9">
          <Image src={menu} alt="menu" className="" />
        </div>
      </header>

      {/* <section className="flex gap-5 justify-between items-center text-md w-[55%] text-sm">
        <div className="flex md:gap-8 sm:gap-3 justify-center items-center">
          <Link href="#">Timeline</Link>
          <Link href="#">Overview</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Contact</Link>
        </div>
        <button className="bg-gradient-to-r  from-[#d434fe] to-[#9034ff] text-white p-2 px-8 rounded-sm ">
          Register
        </button>
      </section> */}
    </aside>
  );
}
