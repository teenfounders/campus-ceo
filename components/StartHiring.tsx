import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const StartHiring = (props: Props) => {
  return (
    <div className="max-w-screen-[1460px] bg-[#2d2323] text-[#fff] rounded-[40px] flex-col items-center flex mx-[20px]  py-[60px] px-10 ">
      <div className="max-w-[930px] w-full flex flex-col items-center my-[20px] mr-[20px] ">
        <div className="tracking-[-1px] mt-[10px] text-center mb-[30px] font-cabinet text-[30px] sm:text-[45px] md:text-[66px] font-black leading-10 md:leading-[100%]">
          Start your <br />
          free Homerun <br />
          trial today
        </div>
        <Link
          className="justify-center items-center mb-[30px] flex"
          href={"register"}
        >
          <button className="bg-[#4f75fe] hover:bg-[#254CDA]  hover:-rotate-2 transition-all duration-200 ease-in-out  leading-5 text-white rounded-[30px] flex-0 shrink pt-4 pr-5 pb-[15px] pl-[20px] text-lg font-normal ">
            Start hiring for free
          </button>
        </Link>
        <div className="mt-[25px] justify-center  items-center md:flex-row flex-col  gap-4 flex relative">
          <div className=" mx-[10px] flex items-center">
            <p className="text-[#736b6b] text-center flex-none mb-0 text-[17px]">
              The first job is free
            </p>
          </div>
          <div className="mx-[10px] flex items-center">
            <p className="text-[#736b6b] text-center flex-none mb-0 text-[17px] ">
              No credit card needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHiring;
