"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import bigmark from "../../public/svg/big-mark.svg";
import successman from "../../public/svg/succes-man.svg";
import emoji from "../../public/svg/emoji.svg";
import Button from "component/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Congratulations({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-[#150E28] bg-opacity-80"
            onClick={closeModal}
          />
        </Transition.Child>
        <div
          className="fixed inset-0 bg-[#150E28]  opacity-20"
          aria-hidden="true"
          onClick={closeModal}
        />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-max  transform overflow-hidden  p-6 text-left align-middle shadow-xl transition-all">
                <div className="border border-primary md:w-[50rem] md:p-12 rounded-md text-white p-4 mx-auto">
                  <section>
                    <div className="flex justify-center mx-auto items-center md:w-[24rem] w-[20rem]">
                      <Image
                        src={bigmark}
                        alt="mark"
                        width={290}
                        className="md:-mr-[10rem]mr-[5rem] md:w-auto w-[10rem]"
                      />
                      <Image
                        src={successman}
                        alt="man"
                        width={300}
                        className="md:-ml-[10rem] -ml-[5rem] md:w-auto w-[10rem]"
                      />
                    </div>
                  </section>
                  <section className="flex justify-center items-center flex-col gap-2 text-center">
                    <p className="text-xl font-semibold md:2xl">
                      Congratulations
                    </p>
                    <p className="text-xls font-semibold md:2xl text-center">
                      you have successfully Registered
                    </p>
                    <p className="text-sm">Yes, it was easy and you did it!</p>
                    <div className="flex items-center gap-2 text-sm">
                      <p>check your mail box for next step </p>
                      <Image src={emoji} alt="emoji" />
                    </div>
                  </section>
                  <Link href="/" onClick={closeModal}>
                    <Button title="Back" style="w-full font-bold mt-5" />
                  </Link>
                </div>
                ;
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
