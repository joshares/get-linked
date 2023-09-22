"use client";
import Image from "next/image";
import slash from "../../public/slash.svg";
import chain from "../../public/chain.svg";
import blast from "../../public/blast.svg";
import guy from "../../public/glass-guy.svg";
import star_b from "../../public/bright-star.svg";
import star_d from "../../public/dull-star.svg";
import bulb from "../../public/bulb.svg";
import bubbles from "../../public/star-bubble.svg";
import Button from "component/ui/Button";
import Line from "component/ui/Line";

export default function Hero() {
  return (
    <main>
      <div className="md:pl-16 md:pt-8 pt-5">
        <div className=" md:pr-10 flex md:justify-end justify-center w-full">
          <p className="md:text-3xl sm:text-2xl  text-lg font-bold italic relative     w-max">
            <span>Igniting a Revolution in HR innovation</span>
            <Image
              src={slash}
              alt="slash"
              width={253}
              className="absolute -bottom-3 md:w-[14rem]  sm:w-[11rem] w-[9rem] right-[0%]"
            />
          </p>
        </div>
        <section className="flex md:flex-row md:gap-0 justify-center items-center flex-col gap-5">
          <article className="mt relative">
            {/*start of positioning of stars */}
            <div className="absolute top-4 left-[35%] md:-top-16 md:left-[15%] ">
              <Image
                src={star_b}
                alt="star"
                className="w-3 md:w-auto"
                width={26}
              />
            </div>
            <div className="absolute top-7 right-[18%] md:-top-5 md:-right-[14%] ">
              <Image
                src={star_d}
                alt="star"
                className="w-2 md:w-5"
                width={26}
              />
            </div>
            <div className="absolute bottom-[5.5rem] right-[20%] md:bottom-[8rem] md:right-[14%]">
              <Image
                src={star_d}
                alt="star"
                className="w-2 md:w-5"
                width={26}
              />
            </div>
            {/* end of positioning stars */}
            <div className="mt-10">
              <div className="flex justify-center  md:block ">
                <p className="md:text-7xl text-4xl font-bold md:text-left text-center w-max relative">
                  getlinkedTech
                  <span className="absolute -top-4 md:-top-14 right-4">
                    <Image
                      src={bulb}
                      alt="bulb"
                      width={53}
                      className="w-5 md:w-auto"
                    />
                  </span>
                </p>
              </div>
              <div className="flex justify-center pr-10 md:block md:pr-0">
                <p className="md:text-7xl text-4xl font-bold relative w-max">
                  Hackathon
                  <span className="text-primary">1.0</span>
                  <span className="flex justify-center items-center absolute md:-right-[8rem] -right-[4rem] bottom-0">
                    <Image
                      src={chain}
                      alt="chain"
                      width={86}
                      className="md:w-20 w-10"
                    />
                    <Image
                      src={blast}
                      alt="blast"
                      width={86}
                      className="md:w-12 w-6"
                    />
                  </span>
                </p>
              </div>
            </div>
            <p className="text-center md:text-left px-16 md:px-0 md:w-[85%] pt-8">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button
              title="Register"
              style="mx-auto md:mx-0 md:block mt-10 flex justify-center items-center self-center"
            />
            <div className="flex justify-center items-center gap-4 w-max mx-auto md:mx-0 pt-5 md:py-16">
              <p className="text-5xl md:9xl font-medium">
                00<span className="text-base">H</span>
              </p>
              <p className="text-5xl md:9xl font-medium">
                00<span className="text-base">H</span>
              </p>
              <p className="text-5xl md:9xl font-medium">
                00<span className="text-base">H</span>
              </p>
            </div>
          </article>
          <article className="pt-10 relative ">
            <div className="relative z-30 blend-images inset-0 w-full h-full">
              <Image src={guy} alt="guy" width={828} />
            </div>
            <div className="absolute top-0 blend-images inset-0 w-full h-full">
              <Image src={bubbles} alt="guy" width={781} />
            </div>
          </article>
        </section>
      </div>
      <Line />
    </main>
  );
}
