"use client";
import Image from "next/image";
import React, { useState } from "react";
import man from "../../public/man-sitting.svg";
import man_w from "../../public/walking-man-icon.svg";
import woman_w from "../../public/walking-woman-icon.svg";
import Congratulations from "./Congratulations";

export default function RegisterForm() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  return (
    <main className="md:flex  flex-row gap-8 md:p-8 md:px-8 px-10  p-8">
      {isOpen && <Congratulations isOpen={isOpen} closeModal={closeModal} />}
      <p className="text-primary font-bold md:text-3xl text-xl md:hidden ">
        Register
      </p>
      <section>
        <div>
          <Image src={man} alt="" className="" />
        </div>
      </section>
      <section className="md:p-14 flex flex-col md:w-[60%] gap-4 md:bg-primary md:bg-opacity-10">
        <p className="text-primary font-bold md:text-3xl text-xl md:block hidden">
          Register
        </p>
        <header className="flex items-end md:justify-normal justify-center">
          <p>Be part of this movement!</p>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Image src={woman_w} alt="wman" />
              <Image src={man_w} alt="man" />
            </div>
            <div className="dot border-t-2 border-dotted border-primary w-28"></div>
          </div>
        </header>
        <h1 className=" font-bold md:text-2xl text-xl text-center md:text-left">
          CREATE YOUR ACCOUNT
        </h1>
        <form className="flex flex-col gap-6" onSubmit={openModal}>
          <article className="flex gap-4 md:flex-row flex-col items-center w-full">
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label for="team" className="text-sm">
                Team&#39;s Name
              </label>
              <input
                name="team"
                type="text"
                placeholder="Enter the name of your group"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label for="team" className="text-sm">
                Phone
              </label>
              <input
                name="phone"
                type="number"
                placeholder="Enter your phone number"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
          </article>
          <article className="flex gap-4 md:flex-row flex-col items-center w-full">
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label for="project" className="text-sm">
                Project Topic
              </label>
              <input
                name="project"
                type="text"
                placeholder="what is your group topic"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
          </article>
          <article className="flex gap-4 items-center w-full">
            <div className="flex gap-2 flex-col w-1/2">
              <label for="category" className="text-sm">
                Category
              </label>
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                className="block w-full rounded-md outline-none bg-transparent text-white border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option className="bg-transparent text-white">
                  Select your category
                </option>
                <option>Select your Category</option>
              </select>
            </div>
            <div className="flex gap-2 flex-col w-1/2">
              <label for="category" className="text-sm">
                Group Size
              </label>
              <select
                name="size"
                className="block w-full rounded-md outline-none bg-transparent text-white border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option className="bg-transparent text-white">Select</option>
                <option>Select </option>
              </select>
            </div>
          </article>
          <p className="text-[#FF26b9] text-xs">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-4">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <p className="text-xs">
              {" "}
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button
            type="submit"
            className="submit   mx-auto bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]  p-3 px-10 rounded-sm w-full"
          >
            Register Now
          </button>
        </form>
      </section>
    </main>
  );
}
