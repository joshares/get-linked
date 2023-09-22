import Line from "component/ui/Line";
import React from "react";

const LineSocket = ({ style, number, height }) => {
  return (
    <div className={`flex flex-col gap-2 items-center w-max ${style}`}>
      <div className={` w-[3px] bg-primary ${height}`}></div>
      <p className="bg-gradient-to-r  from-primary to-[#9034ff] rounded-full  px-3 p-1 w-max font-bold">
        {number}
      </p>
    </div>
  );
};

export default function Timeline() {
  return (
    <main>
      <div className="p-14">
        <header className="text-center md:w-[35%] mx-auto pb-20">
          <h1 className="text-3xl font-bold mb-2">Timeline</h1>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event
          </p>
        </header>
        {/* mobile version */}
        <section className="flex flex-col gap-6 md:hidden">
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[7rem]" number="1" />
            <div>
              <div>
                <p className="font-semibold  text-primary md:text-xl text-lg mb-2">
                  Hackathon Annoucement
                </p>
                <p className="mb-2 text-sm">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <p className="text-primary font-bold text-lg md:text-xl ">
                November 18,2023
              </p>
            </div>
          </article>
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[6rem]" number="2" />
            <div>
              <div>
                <p className="font-semibold  text-primary md:text-xl text-lg mb-2">
                  Teams Registration begins
                </p>
                <p className="mb-2 text-sm">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <p className="text-primary font-bold text-lg md:text-xl  ">
                November 18,2023
              </p>
            </div>
          </article>
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[6rem]" number="3" />
            <div className="flex flex-col gap-4 justify-between">
              <div>
                <p className="font-semibold  text-primary md:text-xl text-lg  mb-2">
                  Teams Registration ends
                </p>
                <p className="mb-2 text-sm">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <p className="text-primary font-bold md:text-xl text-lg ">
                November 18,2023
              </p>
            </div>
          </article>
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[7rem]" number="4" />
            <div>
              <div>
                <p className="font-semibold  text-primary md:text-xl text-lg mb-2">
                  Announcement of the accepted teams and ideas
                </p>
                <p className="mb-2 text-sm">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
              <p className="text-primary font-bold md:text-xl text-lg ">
                November 18,2023
              </p>
            </div>
          </article>
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[7rem]" number="5" />
            <div>
              <div>
                <p className="font-semibold  text-primary md:text-xl mb-2 text-lg">
                  Getlinked Hackathon 1.0 Offically Begins
                </p>
                <p className="mb-2 text-sm">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <p className="text-primary font-bold text-lg md:text-xl ">
                November 18,2023
              </p>
            </div>
          </article>
          <article className="flex gap-3  items-center">
            <LineSocket height="h-[7rem]" number="6" />
            <div>
              <div>
                <p className="font-semibold  text-primary md:text-xl mb-2 text-lg">
                  Demo Day
                </p>
                <p className="mb- text-sm">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
              <p className="text-primary font-bold text-lg  md:text-xl">
                November 18,2023
              </p>
            </div>
          </article>
        </section>
        {/* desktop version */}
        <section className="md:flex flex-col gap-4 hidden">
          <article className="flex gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-6 text-right">
              <p className="font-semibold  text-primary text-xl mb-2">
                Hackathon Annoucement
              </p>
              <p className="mb-2">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <LineSocket height="h-[7rem]" number="1" />
            <p className="text-primary font-bold text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
          <article className="flex flex-row-reverse gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-6 text-left">
              <p className="font-semibold  text-primary text-xl mb-2">
                Teams Registration begins
              </p>
              <p className="mb-2">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <LineSocket height="h-[5rem]" number="1" />
            <p className="text-primary font-bold text-right text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
          <article className="flex gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-6 text-right">
              <p className="font-semibold  text-primary text-xl mb-2">
                Teams Registration ends
              </p>
              <p className="mb-2">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <LineSocket height="h-[5rem]" number="1" />
            <p className="text-primary font-bold text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
          <article className="flex flex-row-reverse gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-12 text-left">
              <p className="font-semibold  text-primary text-xl mb-2">
                Announcement of the accepted teams and ideas
              </p>
              <p className="mb-2">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <LineSocket height="h-[5rem]" number="1" />
            <p className="text-primary font-bold text-right text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
          <article className="flex gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-10 text-right">
              <p className="font-semibold  text-primary text-xl mb-2">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="mb-2">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <LineSocket height="h-[5rem]" number="1" />
            <p className="text-primary font-bold text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
          <article className="flex flex-row-reverse gap-10  items-end justify-center mx-auto">
            <div className="w-[45%] -mb-6 text-left">
              <p className="font-semibold  text-primary text-xl mb-2">
                Demo Day
              </p>
              <p className="mb-2">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <LineSocket height="h-[5rem]" number="1" />
            <p className="text-primary font-bold text-right text-xl w-[45%] ">
              November 18,2023
            </p>
          </article>
        </section>
      </div>
      <Line />
    </main>
  );
}
