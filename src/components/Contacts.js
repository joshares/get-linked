"use client";
import instagram from "../../public/instagram.svg";
import x from "../../public/x.svg";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedIn.svg";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const socials = [instagram, x, facebook, linkedin];

export default function Contacts() {
  const [social, setSocial] = useState(socials);

  return (
    <main className="md:flex  flex-row gap-8 md:p-24 p-8">
      <Link
        href="/"
        className="md:hidden my-10 gradient-border-arrow rounded-full flex justify-center items-center"
      >
        <MdKeyboardArrowLeft className="text-xl " />
      </Link>
      <section className="hidden md:flex flex-col gap-8 w-1/2 p-8">
        <h1 className="text-2xl font-bold text-primary">Get in touch</h1>
        <div>
          <p>Contact </p>
          <p>Information</p>
        </div>
        <div>
          <p>27,Alara Street</p>
          <p>Yaba 100012</p>
          <p>Lagos State</p>
        </div>
        <p>Call Us: 07067981819</p>
        <div>
          <p>we are open from Monday-Friday</p>
          <p>08.00am - 05.00pm</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-primary">Share on</p>
          <div className="flex items-center gap-4">
            {social.map((phone, i) => {
              return (
                <div key={i}>
                  <Image src={phone} alt="" className="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="md:p-16 flex flex-col md:w-1/2 gap-6 md:bg-primary md:bg-opacity-10">
        <header>
          <p className="text-primary font-bold text-xl">
            Questions or need assistance?
          </p>
          <p className="text-primary font-bold text-xl">
            Let us know about it!
          </p>
        </header>
        <p className="md:hidden">
          Email us below to any question related to our event
        </p>
        <form className="flex flex-col gap-10">
          <input
            type="text "
            placeholder="First Name"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full"
          />
          <input
            type="text "
            placeholder="Mail"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full"
          />
          <textarea
            type="text "
            placeholder="Message"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full h-32"
          />
          <button
            type="submit"
            className="submit w-max  mx-auto bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]  p-3 px-10 rounded-sm"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
