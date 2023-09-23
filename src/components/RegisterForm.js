"use client";
import Image from "next/image";
import React, { useState } from "react";
import man from "../../public/png/man-sitting.png";
import man_w from "../../public/svg/walking-man-icon.svg";
import woman_w from "../../public/svg/walking-woman-icon.svg";
import Congratulations from "./Congratulations";
import { useRouter } from "next/router";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import bg_light from "../../public/png/bg-light.png";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "10",
    project_topic: "",
    category: "1",
    privacy_policy_accepted: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  };
  const handleCheckbox = () => {
    setData({
      ...data,
      privacy_policy_accepted: !data.privacy_policy_accepted,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setIsOpen(true);
        setData({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: "",
          project_topic: "",
          category: "",
          privacy_policy_accepted: false,
        });
      } else {
        console.log("registration failed");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("registration failed");
      console.log("error:", error);
    }
  };

  function closeModal() {
    setIsOpen(false);
    router.push("/");
  }

  return (
    <main className="md:flex  flex-row gap-8 md:p-8 md:px-8 px-10 relative overflow-hidden p-8">
      {/* start positioning of stars */}
      <div className="absolute top-[20rem] right-[5rem] md:left-[10%] md:top-[5rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[16rem] right-[2rem] md:left-[40%] md:bottom-[13rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[1rem] md:left-[90%] right-[1rem] hidden md:block  md:bottom-[1rem]">
        <Image src={star_b} alt="star" className="md:w-2 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[50%] left-[1rem] md:left-[10%] md:bottom-10">
        <Image src={star_d} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="hidden md:block absolute bottom-[50%] right-[12rem]  md:top-16">
        <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
      </div>
      {/* end positioning of stars */}
      {/* background lights */}
      <div className="absolute md:-top-[15rem] -left-[18%] top-[10rem] md:-left-[15rem] opacity-60 -z-20">
        <Image src={bg_light} alt="metrix" className="" />
      </div>
      <Image
        src={bg_light}
        alt="metrix"
        className="absolute  md:opacity-90 -z-20 top-[10rem] left-3/4 hidden md:block"
      />
      {/* background lights end */}
      {isOpen && <Congratulations isOpen={isOpen} closeModal={closeModal} />}
      <Link
        href="/"
        className="md:hidden my-10 gradient-border-arrow rounded-full flex justify-center items-center"
      >
        <MdKeyboardArrowLeft className="text-xl " />
      </Link>
      <p className="text-primary font-bold md:text-3xl text-xl md:hidden ">
        Register
      </p>
      {/* man sitting section */}
      <section>
        <div>
          <Image src={man} width={720} alt="man" className="" />
        </div>
      </section>
      {/* form section */}
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
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <article className="flex gap-4 md:flex-row flex-col items-center w-full">
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label htmlFor="team" className="text-sm">
                Team&#39;s Name
              </label>
              <input
                name="team_name"
                type="text"
                value={data.team_name}
                onChange={handleChange}
                required
                placeholder="Enter the name of your group"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label htmlFor="team" className="text-sm">
                Phone
              </label>
              <input
                name="phone_number"
                type="tel"
                value={data.phone_number}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
          </article>
          <article className="flex gap-4 md:flex-row flex-col items-center w-full">
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={data.email}
                required
                onChange={handleChange}
                placeholder="Enter your email address"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
            <div className="flex gap-2 flex-col w-full md:w-1/2">
              <label htmlFor="project" className="text-sm">
                Project Topic
              </label>
              <input
                name="project_topic"
                type="text"
                value={data.project_topic}
                onChange={handleChange}
                required
                placeholder="what is your group topic"
                className="p-3 outline-none border border-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:text-sm bg-transparent w-full rounded-md"
              />
            </div>
          </article>
          <article className="flex gap-4 items-center w-full">
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <select
                name="category"
                value={data.category}
                onChange={handleChange}
                required
                className="block w-full rounded-md outline-none bg-transparent text-white border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option className="bg-transparent text-white">1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex gap-2 flex-col w-1/2">
              <label htmlFor="category" className="text-sm">
                Group Size
              </label>
              <select
                name="group_size"
                value={data.group_size}
                onChange={handleChange}
                required
                className="block w-full rounded-md outline-none bg-transparent text-white border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option className="bg-transparent text-white">10</option>
                <option>20</option>
              </select>
            </div>
          </article>
          <p className="text-[#FF26b9] text-xs">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-4">
            <input
              name="privacy_policy_accepted"
              type="checkbox"
              checked={data.privacy_policy_accepted}
              onChange={handleCheckbox}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
            {loading ? "loading..." : "Register Now"}
          </button>
        </form>
      </section>
    </main>
  );
}
