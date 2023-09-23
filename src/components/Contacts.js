"use client";
import instagram from "../../public/svg/instagram.svg";
import x from "../../public/svg/x.svg";
import facebook from "../../public/svg/facebook.svg";
import linkedin from "../../public/svg/linkedIn.svg";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import bg_light from "../../public/png/bg-light.png";
import Link from "next/link";
import { toast } from "react-toastify";

const socials = [instagram, x, facebook, linkedin];

export default function Contacts() {
  const [social, setSocial] = useState(socials);
  const [submitting, setSubmitting] = useState(false);

  const [data, setData] = useState({
    email: "",
    first_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("message sent");
        console.log("sent");
        setData({
          email: "",
          first_name: "",
          message: "",
        });
      } else {
        toast.error("message not sent");
        console.log("message not sent");
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      toast.error("message not sent");
      console.log("error:", error);
    }
  };

  return (
    <main className="md:flex  flex-row gap-8 md:p-24 p-8 overflow-hidden relative">
      {/* start positioning of stars */}
      <div className="absolute top-[8%] left-[15rem] md:left-[10%] md:top-[4rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[8rem] left-[2rem] md:left-[50%] md:bottom-[13rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[13rem] md:left-[95%] right-[1rem]  md:bottom-[6rem]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute top-[10rem] right-[4rem] md:right-[10%] md:top-10">
        <Image src={star_d} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      {/* end positioning of stars */}
      {/* background lights */}
      <div className="absolute md:-top-[15rem] -left-[15%] -top-[2rem] md:-left-[15rem] opacity-50 -z-20">
        <Image src={bg_light} alt="metrix" className="" />
      </div>
      <Image
        src={bg_light}
        alt="metrix"
        className="absolute  md:opacity-90 -z-20 top-[10rem] left-3/4 hidden md:block"
      />
      {/* background lights end */}
      <Link
        href="/"
        className="md:hidden my-10 gradient-border-arrow rounded-full flex justify-center items-center"
      >
        <MdKeyboardArrowLeft className="text-xl " />
      </Link>
      {/* address section */}
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
      {/* form section */}
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
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            value={data.first_name}
            onChange={handleChange}
            required
            placeholder="First Name"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full"
          />
          <input
            type="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            placeholder="Mail"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full"
          />
          <textarea
            type="text"
            name="message"
            required
            value={data.message}
            onChange={handleChange}
            placeholder="Message"
            className="p-2 outline-none border border-gray-400 placeholder:text-white bg-transparent w-full h-32"
          />
          <button
            type="submit"
            className="submit w-max  mx-auto bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]  p-3 px-10 rounded-sm"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="flex flex-col md:hidden justify-center items-center gap-2">
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
    </main>
  );
}
