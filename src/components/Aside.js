"use client";
import Image from "next/image";
import menu from "../../public/svg/menu.svg";
import Link from "next/link";
import { useState } from "react";
import Button from "component/ui/Button";
import { useRouter } from "next/router";

export default function Aside() {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <aside className="md:hidden block px-10 p-5">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-3xl clash-display">
          get<span className="text-[#D434FE]">linked</span>
        </h1>
        <div className="w-1/9" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <Image src={menu} alt="menu" className="" />
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#150E28] transform transition-transform z-40 duration-500 ease-in-out ${
          isSidebarOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className=" md:hidden m-10  flex self-end gradient-border-arrow rounded-full  justify-center items-center absolute right-8"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          x
        </button>
        <section className="flex gap-5 flex-col p-10 text-md w-[55%] text-sm pt-28">
          <div className="flex flex-col text-base  font-bold  gap-4  ">
            <Link
              href="#timeline"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              Timeline
            </Link>
            <Link
              href="/"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className={`${
                router.pathname === "/" &&
                "bg-gradient-to-r  to-[#FF26B9] from-[#9034ff] bg-clip-text text-transparent rounded-sm w-max "
              } `}
            >
              Overview
            </Link>
            <Link href="#faq" onClick={() => setSidebarOpen(!isSidebarOpen)}>
              FAQs
            </Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link href="/register">
            <Button
              title="Register"
              style={`${
                router.pathname === "/register"
                  ? "bg-none  gradient-border"
                  : "w-[8rem]text-center px-0 md:p-[11px]"
              } `}
            />
          </Link>
        </section>
      </div>
    </aside>
  );
}
