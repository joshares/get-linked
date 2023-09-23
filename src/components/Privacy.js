"use client";
import Image from "next/image";
import mark from "../../public/svg/mark.svg";
import keylock from "../../public/png/keylock.png";
import bg_light from "../../public/png/bg-light.png";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import Button from "component/ui/Button";

export default function Privacy() {
  return (
    <main className="relative overflow-hidden">
      {/* start positioning of stars */}
      <div className="absolute top-[14rem] right-[3rem] md:left-[65%] md:top-[50%]">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute top-[45%] left-[1rem] md:left-[50%] md:top-[20%] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[30%] left-[1rem] md:left-[1rem] md:bottom-[15rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[35%] right-[5rem] md:right-[8rem] md:top-[5%]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[10%] md:left-[60%] left-[7rem]  md:bottom-[15rem]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[8rem] right-10 md:right-[2%] md:bottom-[15rem]">
        <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
      </div>
      <div className="absolute top-8 right-[25%] md:left-[35%] md:top-16">
        <Image src={star_d} alt="star" width={26} className="md:w-5 w-3" />
      </div>
      {/* end positioning of stars */}
      {/* background lights */}
      <div className="absolute md:-bottom-[10rem] -left-[25%] top-[26%] md:-left-[25%] opacity-50 -z-20">
        <Image src={bg_light} alt="metrix" className="" />
      </div>
      {/* background lights end */}
      <section className="p-8 md:p-14 flex md:flex-row flex-col gap-8">
        {/* privacy policy terms words article */}
        <article className="md:w-1/2">
          <header className="text-center md:text-left flex flex-col gap-4 p-4">
            <div className="font-bold md:text-3xl text-xl clash-display">
              <p>Privacy Policy and</p>
              <p className="clash-display text-primary">Terms</p>
            </div>
            <p className="text-sm text text-gray-400">
              last updated on september 12, 2013
            </p>
            <p>
              Below are our privacy & policy, which outline a lot of
              goodies.it&apos;s our aim to always take of our participant
            </p>
          </header>
          <div className="p-8 flex flex-col  gap-5 border border-primary">
            <p className="text-center md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className="font-bold  md:text-2xl text-xl text-primary">
              Licensing Policy
            </p>
            <p className="font-bold">Here are terms of our Standard License:</p>
            <ul className="flex flex-col gap-4">
              <div className="flex items-start gap-5">
                <Image src={mark} alt="mark" className="" />
                <p className="">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-start gap-5">
                <Image src={mark} alt="mark" className="" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </ul>
            <Button style="w-max mx-auto " title="Read More" />
          </div>
        </article>
        {/* key lock image article */}
        <article className="bg-[url('../../public/png/lock-bg.png')] bg-top bg-no-repeat bg-contain">
          <div>
            <Image
              src={keylock}
              alt="keylock"
              width={560}
              className="object-cover "
            />
          </div>
        </article>
      </section>
    </main>
  );
}
