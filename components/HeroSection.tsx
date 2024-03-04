"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
type Props = {};
import img2 from "@/public/emp2.jpg";
import mainimg from "@/public/Group 19.svg";
import CommunityCard from "./CommunityCard";
import StudentCard from "./StudentCard";
import Marquee from "react-fast-marquee";
import star from "@/public/star.png";
import AmbassadorCard from "./AmbassadorCard";
import img1 from "@/public/employimg.jpg";
import star1 from "@/public/star.jpeg";
import EmpoweredCard from "./EmpoweredCard";
import letter from "@/public/Internship Completion Certificate 1.svg";
import Revel from "./Revel";
import Link from "next/link";
const HeroSection = (props: Props) => {
  return (
    <motion.div className="sm:mt-5 flex flex-col gap-10 w-full h-full overflow-hidden ">
      <div className="mb-5 items-center p-0 w-full max-w-[1340px] text-center justify-center self-stretch mx-auto flex  flex-col">
        <div className="max-w-[1200px]  w-full mb-[60px] flex-col flex items-center mt-10 mx-auto ">
          <Revel>
            <h1 className="max-w-[700px]  text-[#2D2323] font-cabinet  font font-[700]  sm:leading-[89.28px] tracking-[-0.02em] font-['Cabinet Grotesk'] text-[40px] sm:text-[50px] md:text-[65px] lg:text-[72px] mt-5 mb-3 ">
              You deserve more
              <p className="flex w-full items-end gap-3 justify-center ">
                than a certificate
                <Image
                  src={letter}
                  width={300}
                  height={300}
                  className="w-fit mb-2 sm:mb-4 h-full object-contain"
                  alt="image"
                />
              </p>
            </h1>
          </Revel>
          <Revel>
            <p className="font-archivo max-w-[700px] font-[400] text-[28px] leading-[3rem]  tracking-[-0.1%] text-center text-[#2D2323]">
              Making campus ambassador internships rewarding in terms of skills,
              experience and rewards{" "}
            </p>
          </Revel>
          <Revel>
          <Link href={"register"}>
                <button className="bg-[#4f75fe] hover:bg-[#254CDA] mt-10 hover:-rotate-2 transition-all duration-200 ease-in-out  leading-5 text-white rounded-[30px] flex-0 shrink pt-4 pr-5 pb-[15px] pl-[20px] text-lg font-normal ">
                  Get started
                </button>
              </Link>
          </Revel>
        </div>
        <Revel>
          <div className="w-full mb-10 items-center px-5 max-w-[1340px] rounded-[40px] flex flex-col self-stretch mx-auto overflow-hidden h-auto">
            <Image
              quality={100}
              src={mainimg}
              width={1920} // Set the width to the desired width of the image
              height={1080} // Set the height to the desired height of the image
              layout="responsive" // Use responsive layout
              className="w-full h-auto object-cover" // Apply styles to make the image cover the container
              alt="image"
            />
          </div>
        </Revel>
      </div>
      <Revel>
        <div className="max-w-[656px]  w-full  mx-auto">
          <h1 className="font-[700] max-sm:px-4 font-cabinet text-[2.5rem] leading-[4rem] tracking-[-0.015em] text-center text-[#1A1C22] ">
            How cool would it be to get rewarded for being a{" "}
            <span className="text-[#4F75FE] ">Campus Ambassador</span>
          </h1>
        </div>
      </Revel>
      {/* <div className="mt-1   w-full flex md:flex-row flex-col justify-center mx-auto gap-10 px-4 sm:px-10">
    
          <div className=" rounded-[10px]  p-10  bg-[#EEE9DF]   h-full items-center flex justify-center w-full">
            <div className=" font-archivo basis-2/3 font-[400] text-[22px] leading-[42.94px] px-5 tracking-[-0.1%]  w-full">
              
                Most brands now hire student/youth ambassadors to increase their
                reach on social media platforms like Instagram, Facebook,
                Twitter and sometimes for sales of their products on the pretext
                of a certificate.
             
            </div>
          </div>
      
      <Revel>
          <div className=" flex flex-col items-center justify-center rounded-[10px] bg-[#2D2323] ">
            <div className="font-cabinet max-w-[236px] m-11 font-[500] text-[30px] leading-[54.72px] tracking-[-1%] text-[#F3F2F2]">
              The campus ambassadors? They get nothing
            </div>
          </div>
      </Revel>
        </div>
         */}
      <div className="mt-1 w-full h-full flex lg:flex-row flex-col justify-center mx-auto gap-10 px-4 sm:px-10">
       
       <Revel>
        <div className="rounded-[10px]  lg:max-w-[650px] p-10 font-archivo font-[400] text-[22px] leading-[42.94px]   tracking-[-0.1%]  bg-[#EEE9DF] h-full items-center flex justify-center w-full basis-2/3">
          Most brands now hire student/youth ambassadors to increase their reach
          on social media platforms like Instagram, Facebook, Twitter and
          sometimes for sales of their products on the pretext of a certificate.
        </div>
        </Revel> 

        <Revel> 
        <div className="flex font-cabinet min-h-full lg:max-w-[336px] p-11 font-[500] text-[30px] leading-[54.72px] tracking-[-1%] text-[#F3F2F2] flex-col items-center   justify-center rounded-[10px] bg-[#2D2323] h-full w-full basis-1/3">
          The campus ambassadors? They get nothing
        </div>
        </Revel> 
      </div>

      {/* campus ceo section */}
      <Revel>
        <div
          className="w-full flex flex-col items-center justify-center  my-16
        "
        >
          <div className="font-archivo max-w-[723px]  font-[500] text-2xl tracking-[-0.5%] text-center">
            <p className="leading-[3rem] px-4 text-[#2D2323]">
              “Campus CEO flips the model and returns the value to the students
              who have an instinct of leadership and have been bitten with the
              craze for internet entrepreneurship by rewarding them for active
              participation in campus ambassador programs”
            </p>
          </div>
        </div>
      </Revel>

      {/* Community card */}
      <Revel>
        <div className="  h-full relative mx-4 sm:mx-10">
          <CommunityCard />
        </div>
      </Revel>
      {/* marquee student */}
      <Revel>
        <div
          className="flex  w-full h-auto flex-col items-center justify-center my-10
        gap-5
        "
        >
          <h1 className="font-cabinet max-md:text-center font-[500] text-[36px] leading-[44.64px] tracking-[-0.2%] text-[#000000] ">
            Here’s what students are saying
          </h1>
          <div className="w-full h-auto mt-7">
            <Marquee>
              <div className="mr-10 ">
                <StudentCard
                  text="I am not a big fan of campus 
ambassador programs, but I
should say that Campus CEO 
is working on some new ideas
aimed at empowering campus 
ambassadors"
                />
              </div>

              <div className="mr-10 ">
                <StudentCard
                  text="I am not a big fan of campus 
                ambassador programs, but I
                should say that Campus CEO 
                is working on some new ideas
                aimed at empowering campus 
                ambassadors"
                />
              </div>

              <div className="mr-10 ">
                <StudentCard
                  text="I am not a big fan of campus 
                ambassador programs, but I
                should say that Campus CEO 
                is working on some new ideas
                aimed at empowering campus 
                ambassadors"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </Revel>

      {/* marquee right */}

      <div className="w-full h-auto relative">
        <div className="w-full h-[60px] flex items-center bg-[#2D2323] text-white">
          <Marquee direction="right">
            <AmbassadorCard text="Be a Nova Ambassador" />
            <AmbassadorCard image={star} text="Be a Nova Ambassador" />
            <AmbassadorCard text="Be You" />
          </Marquee>
        </div>
      </div>

      <Revel>
        <div className="grid grid-cols-1 lg:grid-cols-6 items-center justify-center md:px-10 pb-[20px] mx-4 sm:mx-10 gap-10">
          <div className="col-span-1 lg:col-span-3">
            <div className="">
              <EmpoweredCard
                image1={img1}
                image2={star1}
                text="4,7"
                description="Average review on Capterra, independent review site"
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="">
              <EmpoweredCard
                text="98,9%"
                image1={img2}
                emoji="😃&nbsp;🤩"
                description="Average rating based on 1500+ support conversations"
              />
            </div>
          </div>
        </div>
      </Revel>
    </motion.div>
  );
};

export default HeroSection;
