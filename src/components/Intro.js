"use client";
import Image from "next/image";
import bulb from "../../public/png/bulb-idea.png";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import arrow from "../../public/svg/twingled-arrow.svg";
import girl_chair from "../../public/png/chair-girl.png";
import people from "../../public/png/people.png";
import Line from "component/ui/Line";
import Button from "component/ui/Button";
import bg_light from "../../public/png/bg-light.png";
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

export default function Intro() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* introduction to get linked section*/}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col md:flex-row justify-center items-center p-14 gap-16 overflow-hidden"
      >
        {/* bulb idea article */}
        <motion.article
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="md:w-1/2 relative md:pl-14"
        >
          {/* start of star positioning */}
          <div className="absolute top-[7rem] -left-6 md:left-3 md:top-[9rem]">
            <Image src={redstar} alt="s" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end of star positioning */}
          <div className="relative md:w-max max-w-sm">
            <Image src={bulb} alt="bulb" width={490} className="object-cover" />
            <div className="md:text-xl font-bold text-center w-max absolute top-[50%] md:left-[40%] sm:left-[40%] left-[38%] ">
              <p>The Big </p>
              Idea!
            </div>
          </div>
          <div className="absolute -bottom-8 md:-right-[1rem] right-[46%] md:-bottom-[1rem]">
            <Image src={arrow} alt="star" width={50} className="md:w-12 w-8" />
          </div>
        </motion.article>
        {/* words article */}
        <motion.article
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative mt-5 md:mt-0 md:pr-20 "
        >
          <div className="absolute top-6 right-0 md:right-8 md:top-10">
            {/* start of star positioning */}
            <Image src={redstar} alt="s" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end of star positioning */}
          <p className="clash-display">Introduction to getlinked</p>
          <p className="text-primary -mt-2 clash-display">techHackathon 1.0</p>
          <p className="text-base font-normal">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </motion.article>
      </motion.section>
      <Line />
      {/* Rules and Guidelines section*/}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col-reverse md:flex-row justify-center items-center p-14 md:py-4 gap-8 relative overflow-hidden"
      >
        {/* background lights */}
        <div className="absolute md:-top-[18rem] -left-[10%] -top-[8rem] md:left-0 opacity-50 -z-20">
          <Image src={bg_light} alt="metrix" className="" />
        </div>
        <Image
          src={bg_light}
          alt="metrix"
          className="absolute md:top-[5rem] -z-20 left-3/4 "
        />
        {/* background lights end */}
        {/* words article */}
        <motion.article
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative  "
        >
          {/* start positioning of stars */}
          <div className="absolute top-14 -right-4 md:right-[40%] md:-top-4">
            <Image src={star_d} alt="sr" className="md:w-5 w-3 animate-blink" />
          </div>
          <div className="absolute -bottom-6 left-[40%] md:left-[32rem] md:-bottom-6">
            <Image src={star_b} alt="sr" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end positioning of stars */}

          <p className="clash-display">Rules and </p>
          <p className="text-primary -mt-2 clash-display">Guidelines</p>
          <p className="text-base font-normal">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </motion.article>
        {/* girl sitting article */}
        <motion.article
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="relative"
        >
          {/* star positioning */}
          <div className="absolute bottom-[52%] left-5  md:hidden">
            <Image src={star_b} alt="sr" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end of star positioning */}
          <Image
            src={girl_chair}
            alt="girl"
            width={664}
            className="object-cover"
          />
          {/* circle */}
          <div className="bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]   rounded-full w-[90px] h-[90px] absolute hidden md:block top-[6rem] right-[22%] -z-10 "></div>
        </motion.article>
      </motion.section>
      <Line />
      {/* judging criteria & key attributes section*/}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col md:flex-row justify-center items-center p-14 md:py-4 md:pb-16 gap-8 relative overflow-hidden"
      >
        {/* background lights */}
        <div className="absolute md:top-[5rem] -left-[25%] top-[2rem] md:left-0 opacity-50 -z-20">
          <Image src={bg_light} alt="metrix" className="" />
        </div>
        <Image
          src={bg_light}
          alt="metrix"
          className="absolute bottom-[0rem] md:-bottom-[20rem] -z-20 left-3/4 md:opacity-50 "
        />
        {/* background lights end */}
        {/* man and woman picture article */}
        <motion.article
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="md:w-1/2  relative"
        >
          {/* start positioning of stars */}
          <div className="absolute bottom-[40%] right-[40%] md:right-[40%] md:bottom-[35%] animate-blink">
            <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
          </div>
          <div className="absolute -top-10 left-[40%] md:left-[22%] md:-top-6">
            <Image src={redstar} alt="s" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end positioning of stars */}
          {/* woman and man standing picture */}
          <div className="md:mt-16 relative">
            <Image width={710} src={people} alt="people" className="" />
            <div className="bg-gradient-to-r  from-[#FF26B9] to-[#9034ff]   rounded-full w-[90px] h-[90px] absolute hidden md:block -top-3 left-[14%] -z-10 "></div>
          </div>
        </motion.article>
        {/* words article */}
        <motion.article
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex flex-col gap-2 justify-center md:w-1/2 md:p-4 font-bold md:text-3xl text-xl text-center md:text-left relative  "
        >
          {/* start positioning of stars */}
          <div className="absolute bottom-10 right-1 md:-left-14 md:bottom-5">
            <Image src={star_b} alt="sr" className="md:w-5 w-3 animate-blink" />
          </div>
          {/* end positioning of stars */}
          <p className="clash-display">Judging Criteria</p>
          <p className="-mt-2 text-primary clash-display">Key attributes</p>
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
        </motion.article>
      </motion.section>
      <Line />
    </motion.main>
  );
}
