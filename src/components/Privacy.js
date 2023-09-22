"use client";
import Image from "next/image";
import mark from "../../public/mark.svg";
import keylock from "../../public/keylock.svg";
import Button from "component/ui/Button";

export default function Privacy() {
  return (
    <main>
      <section className="p-8 md:p-14 flex md:flex-row flex-col gap-8">
        <article className="md:w-1/2">
          <header className="text-center md:text-left flex flex-col gap-4 p-4">
            <div className="font-bold md:text-3xl text-xl">
              <p>Privacy Policy and</p>
              <p className="text-primary">Terms</p>
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
        <article className="bg-[url('../../public/lock-bg.svg')] bg-top bg-cover">
          <div>
            <Image src={keylock} alt="" className="" />
          </div>
        </article>
      </section>
    </main>
  );
}
