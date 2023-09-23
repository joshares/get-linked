"use client";
import Link from "next/link";
import React, { useState } from "react";
import instagram from "../../public/svg/instagram.svg";
import x from "../../public/svg/x.svg";
import facebook from "../../public/svg/facebook.svg";
import linkedin from "../../public/svg/linkedIn.svg";
import tel from "../../public/svg/tel.svg";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import location from "../../public/svg/location.svg";
import Image from "next/image";

const socials = [instagram, x, facebook, linkedin];

export default function Footer() {
  const [social, setSocial] = useState(socials);
  return (
    <footer className="py-10 relative">
      {/* start positioning of stars */}
      <div className="absolute bottom-[8%] left-[8rem] md:left-[40%] md:bottom-[6rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[25%] right-[5rem] md:left-[1rem] md:top-[30%]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute top-[17%] md:left-[95%] left-[1rem]  md:top-[65%]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute top-[50%] right-[50%] md:right-[20%] md:top-28">
        <Image src={star_d} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      {/* end positioning of stars */}
      <main className="flex justify-between gap-12 md:flex-row flex-col p-8 md:p-14 ">
        <section className="flex flex-col gap-10 md:w-1/2">
          <div>
            <h1 className="font-bold md:text-4xl text-2xl w-max clash-display">
              get<span className="text-[#D434FE] clash-display">linked</span>
            </h1>
            <p className="md:text-base text-sm">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <p>
            Terms of use <span className="text-primary text-2xl">|</span>{" "}
            Privacy Policy
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <p className="text-primary text-xl font-bold">Useful Links</p>
          <Link href="/">Overview</Link>
          <Link href="#timeline">Timeline</Link>
          <Link href="#faq">FAQs</Link>
          <Link href="/register">Register</Link>
          <div className="flex  items-center gap-4">
            <p className="text-primary font-bold whitespace-nowrap">
              Follow us
            </p>
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
        <section className=" flex flex-col gap-4">
          <p className="text-primary font-bold">Contact Us</p>
          <div className="flex items-center gap-4">
            <Image src={tel} alt="tel" />
            <p>+234 679 81819</p>
          </div>
          <div className="flex md:items-center items-start md:w-auto  gap-4">
            <Image src={location} alt="tel" />
            <div className="flex flex-col gap-0">
              <p>27,Alara Street</p>
              <p>Yaba 100012 </p>
              <p>Lagos State</p>
            </div>
          </div>
        </section>
      </main>
      <p className="text-center text-sm">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
}
