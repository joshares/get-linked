"use client";
import Image from "next/image";
import bulb from "../../public/bulb-idea.svg";
import redstar from "../../public/red-star.svg";
import star_b from "../../public/bright-star.svg";
import star_d from "../../public/dull-star.svg";
import arrow from "../../public/twingled-arrow.svg";
import girl_chair from "../../public/chair-girl.svg";
import people from "../../public/people.svg";
import Line from "component/ui/Line";
import Button from "component/ui/Button";

export default function Intro() {
  return (
    <main>
      {/* introduction to get linked */}
      <section className="flex flex-col md:flex-row justify-center items-center p-14 gap-16">
        <article className="md:w-1/2 relative md:pl-14">
          <div className="absolute top-[7rem] -left-6 md:left-3 md:top-[9rem]">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div>
            <Image src={bulb} alt="bulb" width={490} className="" />
          </div>
          <div className="absolute -bottom-8 md:-right-[1rem] right-[46%] md:-bottom-[1rem]">
            <Image src={arrow} alt="star" width={50} className="md:w-12 w-8" />
          </div>
        </article>
        <article className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative mt-5 md:mt-0 md:pr-20">
          <div className="absolute top-6 right-0 md:right-8 md:top-10">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <p>Introduction to getlinked</p>
          <p className="text-primary -mt-2">techHackathon 1.0</p>
          <p className="text-base font-normal">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </article>
      </section>
      <Line />
      {/* Rules and Guidelines */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center p-14 md:py-4 gap-8">
        <article className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative  ">
          {/* start positioning of stars */}
          <div className="absolute top-14 -right-4 md:right-[40%] md:-top-4">
            <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute -bottom-6 left-[40%] md:left-[32rem] md:-bottom-6">
            <Image src={star_b} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          {/* end positioning of stars */}

          <p>Rules and </p>
          <p className="text-primary -mt-2">Guidelines</p>
          <p className="text-base font-normal">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </article>
        <article className="relative">
          {/* star positioning */}
          <div className="absolute bottom-[52%] left-5  md:hidden">
            <Image src={star_b} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          {/* end of star positioning */}
          <Image src={girl_chair} alt="girl" />
        </article>
      </section>
      <Line />
      {/* judging criteria & key attributes */}
      <section className="flex flex-col md:flex-row justify-center items-center p-14 md:py-4 md:pb-16 gap-8">
        <article className="md:w-1/2  relative">
          {/* start positioning of stars */}
          <div className="absolute bottom-[40%] right-[40%] md:right-[40%] md:bottom-[35%]">
            <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute -top-10 left-[40%] md:left-[22%] md:-top-6">
            <Image src={redstar} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          {/* end positioning of stars */}
          {/* woman and man standing picture */}
          <div className="md:mt-16 relative">
            <Image width={710} src={people} alt="people" className="" />
            <div className="bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]   rounded-full w-[90px] h-[90px] absolute hidden md:block -top-3 left-[14%] -z-10 "></div>
          </div>
        </article>
        <article className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative  ">
          {/* start positioning of stars */}
          <div className="absolute bottom-10 right-1 md:-left-14 md:bottom-5">
            <Image src={star_b} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          {/* end positioning of stars */}
          <p>Judging Criteria</p>
          <p className="-mt-2 text-primary ">Key attributes</p>
          <div className="text-base font-normal flex flex-col gap-3">
            <p>
              <span className="text-[#FF26B9] font-semibold">
                Innovation and Creativity:{" "}
              </span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p>
              <span className="text-[#FF26B9] font-semibold">
                Functionality:{" "}
              </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p>
              <span className="text-[#FF26B9] font-semibold">
                Impact and Relevance:{" "}
              </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p>
              <span className="text-[#FF26B9] font-semibold">
                Technical Complexity:{" "}
              </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p>
              <span className="text-[#FF26B9] font-semibold">
                Adherence to Hackathon Rules:{" "}
              </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
          <Button
            title="Read More"
            style="w-max text-base mx-auto mt-5 md:mx-0"
          />
        </article>
      </section>
      <Line />
    </main>
  );
}
