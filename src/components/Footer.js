"use client";
import Link from "next/link";
import React, { useState } from "react";
import instagram from "../../public/instagram.svg";
import x from "../../public/x.svg";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedIn.svg";
import tel from "../../public/tel.svg";
import location from "../../public/location.svg";
import Image from "next/image";

const socials = [instagram, x, facebook, linkedin];

export default function Footer() {
  const [social, setSocial] = useState(socials);
  return (
    <footer className="py-10">
      <main className="flex justify-between gap-12 md:flex-row flex-col p-8 md:p-14 ">
        <section className="flex flex-col gap-10 md:w-1/2">
          <div>
            <h1 className="font-bold md:text-4xl text-2xl w-max">
              get<span className="text-[#D434FE]">linked</span>
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
          <Link href="#">Overview</Link>
          <Link href="#">Timeline</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Register</Link>
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
          <div className="flex items-center gap-4">
            <Image src={location} alt="tel" />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </section>
      </main>
      <p className="text-center">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
}
