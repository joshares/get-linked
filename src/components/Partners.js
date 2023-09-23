"use client";
import libertyPay from "../../public/png/liberty.png";
import libertyAssure from "../../public/png/liberty-assured.png";
import paybox from "../../public/png/Paybox.png";
import winwise from "../../public/png/winwise-logo.png";
import wisper from "../../public/png/wisper.png";
import vizual from "../../public/png/Vizual-Plus.png";
import bg_light from "../../public/png/bg-light.png";
import redstar from "../../public/svg/red-star.svg";
import star_b from "../../public/svg/bright-star.svg";
import Image from "next/image";
import Line from "component/ui/Line";

const LineSeperator = ({ style }) => {
  return <div className={`${style} bg-primary`}></div>;
};

export default function Partners() {
  return (
    <main className="relative overflow-hidden ">
      {/* start positioning of stars */}
      <div className="absolute top-[40%] left-[3rem] md:left-[8rem] md:top-[13rem]">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute top-[55%] right-[45%] md:right-[45%] md:top-[25rem] -z-10">
        <Image src={redstar} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      <div className="absolute bottom-[8%] right-[5rem] md:right-[40%] md:bottom-[15%]">
        <Image src={star_b} alt="star" className="md:w-5 w-3 animate-blink" />
      </div>
      {/* end positioning of stars */}
      {/* background lights */}
      <div className="absolute md:-top-[15rem] -left-[15%] -top-[8rem] md:-left-[10rem] opacity-50 -z-20">
        <Image src={bg_light} alt="metrix" className="" />
      </div>
      <Image
        src={bg_light}
        alt="metrix"
        className=" md:hidden absolute md:top-[3rem] md:opacity-30 -z-20 -bottom-[6rem] left-3/4 "
      />
      {/* background lights end */}
      <header className=" p-8 md:pt-20  md:px-[30%] text-center">
        <p className="font-bold md:text-3xl text-2xl clash-display pb-2">
          Partners and Sponsors
        </p>
        <p className="">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </header>
      <section className="p-[5%] md:p-32 m-8  sm:m-14 border-[0.1px] border-primary flex flex-col  gap-4">
        <article className="flex items-center justify-between ">
          <div className="w-1/5 ">
            <Image src={libertyAssure} alt="liberty" className="full" />
          </div>
          <LineSeperator style="h-16 sm:h-20 md:h-24 w-[2px] md:w-[3px]" />
          <div className=" bottom-4  w-1/4">
            <Image
              src={libertyPay}
              alt="libertypay"
              className="w-full object-cover"
            />
          </div>
          <LineSeperator style="h-16 sm:h-20 md:h-24 w-[2px] md:w-[3px]" />
          <div className="w-1/5">
            <Image src={winwise} alt="winwise" className="w-full" />
          </div>
        </article>
        <article className="flex justify-center gap-6 md:gap-12 items-center py-4 pb-5 h-1">
          <LineSeperator style="h-[2px] md:h-[3px] w-2/6" />
          <LineSeperator style="h-[2px] md:h-[3px] w-3/6" />
          <LineSeperator style="h-[2px] md:h-[3px] w-2/6 " />
        </article>
        <article className="flex items-center justify-between ">
          <div className="w-1/5  ">
            <Image src={wisper} alt="liberty" className="full" />
          </div>
          <LineSeperator style="h-16 sm:h-20 md:h-24 w-[2px] md:w-[3px]" />
          <div className=" bottom-4  w-1/4">
            <Image src={paybox} alt="libertypay" className="w-full" />
          </div>
          <LineSeperator style="h-16 sm:h-20 md:h-24 w-[2px] md:w-[3px]" />
          <div className="w-1/5 ">
            <Image src={vizual} alt="winwise" className="w-full" />
          </div>
        </article>
      </section>
      <Line />
    </main>
  );
}
