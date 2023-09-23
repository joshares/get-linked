"use client";
import cup from "../../public/png/cup.png";
import silver from "../../public/svg/silver-medal.svg";
import gold from "../../public/svg/gold-medal.svg";
import bronze from "../../public/svg/bronze-medal.svg";
import bg_light from "../../public/png/bg-light.png";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import star_d from "../../public/svg/dull-star.svg";
import Image from "next/image";

export default function Prize() {
  return (
    <main className="relative  pb-10 overflow-hidden">
      {/* start positioning of stars */}
      <div className="absolute top-[2rem] left-[3rem] md:left-[18rem] md:top-[4rem]">
        <Image
          src={redstar}
          alt="star"
          width={26}
          className="md:w-5 w-3 animate-blink"
        />
      </div>
      <div className="absolute top-[4rem] right-[6rem] md:right-[20rem] md:top-[8rem] -z-10">
        <Image
          src={redstar}
          alt="star"
          width={26}
          className="md:w-5 w-3 animate-blink"
        />
      </div>
      <div className="absolute bottom-[45%] left-[5rem] md:left-[53%] md:top-[30%]">
        <Image
          src={star_b}
          alt="star"
          width={26}
          className="md:w-5 w-3 animate-blink"
        />
      </div>
      <div className="absolute bottom-[35%] right-[5rem] md:right-[4rem] md:top-[42%]">
        <Image
          src={star_b}
          alt="star"
          width={26}
          className="md:w-5 w-3 animate-blink"
        />
      </div>
      <div className="absolute bottom-16 right-[35%] md:right-[20%] md:bottom-16">
        <Image
          src={star_d}
          alt="star"
          width={26}
          className="md:w-5 w-3 animate-blink"
        />
      </div>
      {/* end positioning of stars */}
      {/* background lights */}
      <div className="absolute md:-top-[10rem] -left-[15%] -top-[2rem] md:left-0 opacity-50 -z-20">
        <Image src={bg_light} alt="metrix" className="" />
      </div>
      <Image
        src={bg_light}
        alt="metrix"
        className="absolute md:top-[3rem] md:opacity-30 -z-20 bottom-0 left-3/4 "
      />
      {/* background lights end */}
      <header className="flex md:flex-row-reverse justify-center">
        <div className="font-bold text-3xl flex  flex-col  gap-2 p-10 md:w-1/2 text-center md:text-left">
          <p className="clash-display">Prizes and </p>
          <p className="-mt-2 text-primary clash-display ">Rewards</p>
          <p className="text-base font-normal">
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>
        <div className="hidden w-1/2 md:block"></div>
      </header>
      <div className="flex flex-col md:flex-row items-center md:gap-2 gap-10 p-14">
        {/* cup section */}
        <section>
          <div>
            <Image src={cup} width={550} alt="cup" className="object-cover" />
          </div>
        </section>
        {/* medals section */}
        <section className="flex mt-24 gap-0 md:min-w-max">
          <article className="-mr-2 flex flex-col items-center md:-mr-6">
            <div>
              <Image
                src={silver}
                alt="slver"
                className="md:w-auto sm:w-[8rem] w-[7rem]"
              />
            </div>
            <div className="bg-primary p-6 md:px-8 px-1 rounded-md bg-opacity-20 border-[0.1px] border-primary text-center font-bold md:text-2xl text-xl pb-10 pt-14 md:pt-28 md:-mt-24 -mt-10 relative -z-10">
              <p>2nd</p>
              <p className="md:text-lg -mt-2 text-sm">Runner</p>
              <p className="text-primary">N300,000</p>
            </div>
          </article>
          <article className="flex flex-col items-center">
            <div className="md:-mt-24 -mt-8 w-max">
              <Image
                src={gold}
                alt="gold"
                className="w-[10rem] sm:w-[11rem] md:w-auto"
              />
            </div>
            <div className="bg-secondary p-6 px-2  md:px-8 bg-opacity-20 border-[0.1px] rounded-md border-secondary text-center font-bold md:text-2xl text-lg sm:text-xl pb-12 md:pb-12 md:pt-20 pt-14  md:-mt-16 -mt-12 relative md:w-max -z-10">
              <p>1st</p>
              <p className="md:text-lg -mt-2 sm:text-base text-sm">Runner</p>
              <p className="text-secondary">N400,000</p>
            </div>
          </article>
          <article className="-ml-2 flex flex-col items-center md:-ml-6">
            <div>
              <Image
                src={bronze}
                alt="bronze"
                className="md:w-auto sm:w-[8rem] w-[7rem]"
              />
            </div>
            <div className="bg-primary p-6 md:px-8 px-1 rounded-md bg-opacity-20 border-[0.1px] border-primary text-center font-bold md:text-2xl text-xl pb-10 pt-14 md:pt-28 md:-mt-24 -mt-10 relative -z-10">
              <p>3rd</p>
              <p className="md:text-lg -mt-2 text-sm">Runner</p>
              <p className="text-primary">N150,000</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
