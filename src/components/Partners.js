"use client";
import libertyPay from "../../public/liberty.svg";
import libertyAssure from "../../public/liberty-assured.svg";
import paybox from "../../public/Paybox.svg";
import winwise from "../../public/winwise-logo.svg";
import wisper from "../../public/wisper.svg";
import vizual from "../../public/Vizual-Plus.svg";
import Image from "next/image";
import Line from "component/ui/Line";

const LineSeperator = ({ style }) => {
  return <div className={`${style} bg-primary`}></div>;
};

export default function Partners() {
  return (
    <main>
      <header className=" p-8 md:pt-20  md:px-[30%] text-center">
        <p className="font-bold text-2xl ">Partners and Sponsors</p>
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
            <Image src={libertyPay} alt="libertypay" className="w-full" />
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
