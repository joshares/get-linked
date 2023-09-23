"use client";
import Image from "next/image";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import man from "../../public/png/think-man.png";
import question_d from "../../public/svg/question-dull.svg";
import question_b from "../../public/svg/question-bright.svg";
import bg_light from "../../public/png/bg-light.png";

import Line from "component/ui/Line";
import { useState } from "react";

export default function Faq() {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });
  return (
    <main id="faq" className="relative overflow-hidden">
      {/* background lights */}
      <Image
        src={bg_light}
        alt="metrix"
        className=" -z-20 opacity-50 hidden md:block absolute -top[40rem] bottom-[50%] left-3/4"
      />
      {/* background light end */}
      <section className="flex flex-col md:flex-row justify-center items-center p-14 md:py-20 md:pt-28 gap-8">
        {/* questions article */}
        <article className="flex flex-col gap-2 justify-center md:w-[45%] md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative">
          {/* start positioning of stars */}
          <div className="absolute -top-2 left-[20%] md:left-[0] md:-top-5">
            <Image
              src={redstar}
              alt="star"
              className="md:w-5 w-3 animate-blink"
            />
          </div>
          {/* end positioning of stars */}
          <p>Frequently Ask</p>
          <p className="-mt-2 text-primary">Question</p>
          <p className="w-[90%] my-4 text-base font-normal">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <ul className="text-base font-normal flex flex-col gap-3 text-left">
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>Can I work on a project I started before the hackathon?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ one: !active.one })}
                >
                  {active.one ? "-" : "+"}
                </p>
              </div>
              {active.one && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>what happens if I need help during the hackathon?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ two: !active.two })}
                >
                  {active.two ? "-" : "+"}
                </p>
              </div>
              {active.two && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>what happens if I don&apos;t have an idea for a project?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ three: !active.three })}
                >
                  {active.three ? "-" : "+"}
                </p>
              </div>
              {active.three && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>Can I join a team or do I have to come with one?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ four: !active.four })}
                >
                  {active.four ? "-" : "+"}
                </p>
              </div>
              {active.four && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>what happend after the hackathon ends?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ five: !active.five })}
                >
                  {active.five ? "-" : "+"}
                </p>
              </div>
              {active.five && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
            <div className="border-b border-primary flex-col">
              <div className="flex justify-between items-center pb-2 md:pb-4">
                <p>Can I work on a project I started before the hackathon?</p>
                <p
                  className="text-3xl text-primary cursor-pointer"
                  onClick={() => setActive({ six: !active.six })}
                >
                  {active.six ? "-" : "+"}
                </p>
              </div>
              {active.six && (
                <p className="pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  consequat, felis non tristique volutpat, diam mi lacinia
                  lectus, a fermentum neque justo eu tellus.
                </p>
              )}
            </div>
          </ul>
        </article>
        {/* man thinking article */}
        <article className="  relative pt-10 ">
          {/* start positioning of stars */}
          <div className="absolute bottom-[42%] left-[5%] md:left-[10%] md:bottom-[45%]">
            <Image
              src={star_d}
              alt="star"
              className="md:w-5 w-3 animate-blink"
            />
          </div>
          <div className="absolute top-10 left-[45%] md:left-[50%] md:top-4">
            <Image
              src={redstar}
              alt="star"
              className="md:w-5 w-3 animate-blink"
            />
          </div>
          <div className="absolute top-[37%] left-[20%] md:left-[20%] md:top-[25%]">
            <Image
              src={redstar}
              alt="star"
              className="md:w-5 w-3 animate-blink"
            />
          </div>
          <div className="absolute bottom-0 right-[20%] md:right-[22%] md:bottom-0">
            <Image
              src={star_b}
              alt="star"
              className="md:w-5 w-3 animate-blink"
            />
          </div>
          {/* end positioning of stars */}

          <div className=" relative">
            {/* man thinking picture */}
            <Image
              width={740}
              src={man}
              alt="people"
              className="relative z-10"
            />
            {/* start positioning of question marks */}
            <div className="flex gap-16 md:gap-20 absolute top-2 sm:top-4 left-[13%] md:left-[15%] md:-top-10 sm:left-[20%] z-0">
              <Image
                src={question_d}
                width={114}
                alt="question"
                className="w-6 md:w-12"
              />
              <Image
                src={question_b}
                width={114}
                alt="question"
                className="w-6 md:w-16 md:-mt-20  -mt-14"
              />
              <Image
                src={question_d}
                width={114}
                alt="question"
                className="w-6 md:w-12"
              />
            </div>
            {/* end positioning of question marks */}
          </div>
        </article>
      </section>
      <Line />
    </main>
  );
}
