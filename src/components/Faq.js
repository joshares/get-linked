"use client";
import Image from "next/image";
import redstar from "../../public/red-star.svg";
import star_b from "../../public/bright-star.svg";
import star_d from "../../public/dull-star.svg";
import man from "../../public/think-man.svg";
import question_d from "../../public/question-dull.svg";
import question_b from "../../public/question-bright.svg";
import Line from "component/ui/Line";

export default function Faq() {
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center items-center p-14 md:py-20 md:pt-28 gap-8">
        <article className="flex flex-col gap-2 justify-center md:w-[45%] md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative">
          {/* start positioning of stars */}
          <div className="absolute -top-2 left-[20%] md:left-[0] md:-top-5">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          {/* end positioning of stars */}
          <p>Frequently Ask</p>
          <p className="-mt-2 text-primary">Question</p>
          <p className="w-[90%] my-4 text-base font-normal">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className="text-base font-normal flex flex-col gap-3 text-left">
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>Can I work on a project I started before the hackathon?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>what happens if I need help during the hackathon?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>what happens if I don&apos;t have an idea for a project?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>Can I join a team or do I have to come with one?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>what happend after the hackathon ends?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-primary pb-2 md:pb-4">
              <p>Can I work on a project I started before the hackathon?</p>
              <p className="text-3xl text-primary">+</p>
            </div>
          </div>
        </article>
        <article className="  relative pt-10 ">
          {/* start positioning of stars */}
          <div className="absolute bottom-[42%] left-[5%] md:left-[10%] md:bottom-[45%]">
            <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute top-10 left-[45%] md:left-[50%] md:top-4">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute top-[37%] left-[20%] md:left-[20%] md:top-[25%]">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute bottom-0 right-[20%] md:right-[22%] md:bottom-0">
            <Image src={star_b} alt="star" width={26} className="md:w-5 w-3" />
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
