"use client";
import { useContext, useState } from "react";
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import Link from "next/link";
import React from "react";
import { termsLink } from "@/lib/data";
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "@/context/useacive-section";
import { useInView } from "react-intersection-observer";
import TermComponent from "./components/TermComponent";
import DataProcessing from "./components/DataProcessing";

const style = {
  listStyle: "max-w-[720px] mb-[30px] text-[20px] leading-[140%]",
  activeButton:
    "@apply w-fit bg-[#4f75fe] pt-4 pr-5 pb-[15px] leading-5 text-white rounded-[30px] flex-0 shrink text-lg font-normal",
};

const Page = () => {
  // const [activeSection, setActiveSection] = useState("id1"); // State to track active section
  const { activeSection, setActiveSection } = useActiveSectionContext();
 

   
  return (
    <div className="xl:items-center mt-[10px] lg:mt-[60px] h-full !scroll-smooth xl:-mt-7 xl:pt-10 flex flex-col lg:mx-10">
      <div className="flex w-full relative top-[60px]  h-full flex-col items-center justify-center">
        <div className="max-w-[1200px] w-full mx-10 block ">
          <div className="h-full  w-full flex flex-row">
            <div className="px-[30px] mb-[50px] sticky top-[120px] max-w-[33.33%] w-full lg:block hidden float-left">
              <div className="max-w-[320px] w-full sticky top-[100px] items-stretch flex-col flex">
                <h5 className="font-black my-[10px] text-[20px] leading-[24px]">
                  Table of content
                </h5>
                <ol
                  role="list"
                  className="list-none flex flex-col gap-4 pl-0 mb-[20px]"
                >
                  {termsLink.map((item, index) => {
                    return (
                      <Link key={index} href={item.hash}>
                        <li className={`pt-4 pr-5 pb-[15px] pl-[20px]  ${activeSection === item.name ? style.activeButton:"bg-transparent"} `}>
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="flex w-full  lg:w-[66.66%] flex-col px-[10px] relative min-h-[1px] float-left">
            <TermComponent/>
            <DataProcessing/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
