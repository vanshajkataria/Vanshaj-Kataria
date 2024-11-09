"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { experienceData } from "@/data/experienceData";

export default function experienceDisclosure() {
  return (
    <div className="w-full">
      <div className="flex flex-col overflow-hidden">
        <div>
          {experienceData.map((data, index) => (
            <div key={index} className="border-t-[1px] border-white/25 group">
              <Disclosure as="div">
                {({ open }) => (
                  <div
                    className={`${
                      open
                        ? "bg-black/25 rounded-2xl my-2 p-4 duration-300 ease-in-out transition-all"
                        : "group-hover:bg-black/25 group-hover:rounded-2xl my-2 p-4 duration-300 ease-in-out transition-all"
                    }`}
                  >
                    <DisclosureButton className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start">
                        <span className="text-2xl">{data.company}</span>
                        <small>{data.role}</small>
                        <small>{data.duration}</small>
                      </div>
                      <ChevronDownIcon className="size-5" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-base text-white/50 border-t border-white/25">
                    <ul className="pt-2 space-y-1">
                        {data.description.map((point, i) => (
                          <li key={i} className="text-sm text-white/70">
                            - {point}
                          </li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
        {/*  <span className="w-full h-0.5 bg-white/25"></span>
        <Disclosure as="div">
          {({ open }) => (
            <div
              className={`${
                open
                  ? "bg-black/25 rounded-2xl my-4 p-4 duration-300 ease-in-out transition-all"
                  : "hover:bg-black/25 hover:rounded-2xl my-4 p-4 duration-300 ease-in-out transition-all"
              }`}
            >
              <DisclosureButton className="flex justify-between items-center w-full">
                <span className="text-2xl">Selvon Instruments</span>
                <ChevronDownIcon className="size-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-base text-white/50">
                <p className="text-sm">
                  As a Frontend Web Developer Intern, I was responsible for
                  designing and implementing website layouts, focusing on
                  user-centric design principles. I gained hands-on experience
                  working with HTML and CSS to develop visually appealing and
                  functional web pages.
                </p>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
        <span className="w-full h-0.5 bg-white/25"></span>
        <Disclosure as="div">
          {({ open }) => (
            <div
              className={`${
                open
                  ? "bg-black/25 rounded-2xl my-4 p-4 duration-300 ease-in-out transition-all"
                  : "hover:bg-black/25 hover:rounded-2xl my-4 p-4 duration-300 ease-in-out transition-all"
              }`}
            >
              <DisclosureButton className="flex justify-between items-center w-full">
                <span className="text-2xl">AVLLO</span>
                <ChevronDownIcon className="size-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-base text-white/50">
                <p className="text-sm">
                  As a Frontend Web Developer Intern, I was responsible for
                  designing and implementing website layouts, focusing on
                  user-centric design principles. I gained hands-on experience
                  working with HTML and CSS to develop visually appealing and
                  functional web pages.
                </p>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure> */}
      </div>
    </div>
  );
}
