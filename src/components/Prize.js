"use client";
import cup from "../../public/cup.svg";
import silver from "../../public/silver-medal.svg";
import gold from "../../public/gold-medal.svg";
import bronze from "../../public/bronze-medal.svg";
import Image from "next/image";
import Line from "component/ui/Line";

export default function Prize() {
  return (
    <main>
      <header className="flex md:flex-row-reverse justify-center">
        <div className="font-bold text-3xl flex  flex-col  gap-2 p-10 md:w-1/2 text-center md:text-left">
          <p>Prizes and </p>
          <p className="-mt-2 text-primary ">Rewards</p>
          <p className="text-base font-normal">
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>
        <div className="hidden w-1/2 md:block"></div>
      </header>
      <div className="flex flex-col md:flex-row items-center md:gap-2 gap-10 p-14">
        <section>
          <div>
            <Image src={cup} alt="cup" className="" />
          </div>
        </section>
        <section className="flex mt-24 gap-2 md:min-w-max">
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
            <div className="md:-mt-24 -mt-12 ">
              <Image
                src={gold}
                alt="gold"
                className="w-[10rem] sm:w-[11rem] md:w-auto"
              />
            </div>
            <div className="bg-secondary p-6 px-2  md:px-8 bg-opacity-20 border-[0.1px] rounded-md border-secondary text-center font-bold md:text-2xl text-lg sm:text-xl pb-12 md:pb-12 md:pt-20 pt-14  md:-mt-16 -mt-8 relative md:w-max -z-10">
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
