import React from "react";
import "./globals.css";
import VisionCard from "@/components/VisionCard";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-white  rounded-[40px] px-10  items-center justify-center flex flex-col w-full h-full gap-10 max-w-full py-5 mb-10">
      {/* hero section */}
      <div className="max-w-[950px] gap-10 flex flex-col justify-center items-center w-full h-full">
        <div className=" rounded-lg items-end w-full  justify-end bg-[#9971F4]">
          <div className="flex max-h-min py-10 flex-col w-full mx-auto  min-h-max items-center justify-center gap-[45px]">
            <span className="bg-[#7541EA] text-[#FFFFFF] px-4 py-2  rounded-lg font-archivo font-[400] text-[28px] leading-[30px]">
              Our vision
            </span>

            <p className="font-cabinet text-[#FFFFFF] max-w-[775px] font-[700] text-[48px] leading-[59px] tracking-[-2%] text-center">
              Fostering a community where campus ambassadors flourish, innovate,
              and redefine success on their terms
            </p>
          </div>
        </div>
        {/* title section */}
        <div className="max-w-[686px] w-full ">
          <h1 className="text-center font-archivo leading-[46px] text-[1.5rem] ">
            Welcome to Campus CEO, where we invite you to explore the future of
            campus ambassadorship and leadership.
          </h1>
        </div>
        {/* what we envision */}
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <VisionCard
          className="bg-[#1C98EB]"
          title="A Community of Empowered Leaders"
          description="We envision a future where every campus ambassador is empowered to lead 
          with confidence, creativity, and compassion. Through our platform, we aim to 
          create a vibrant community of empowered leaders who are committed to making 
          a positive impact on their campuses and beyond."
          />
          <VisionCard
          className="bg-[#FC98B2]"
          title="Continuous Learning and Growth"
          description="In our vision of the future, learning never stops. We believe in providing our 
          members with access to continuous learning opportunities, so they can stay 
          ahead of the curve and adapt to the ever-evolving demands of the world."
          />
          <VisionCard
          className="bg-[#B9A4F4]"
            title="Recognition and Reward for Excellence"
            description="Excellence should be celebrated and rewarded. That's why we envision a future 
where campus ambassadors are recognized and rewarded for their outstanding 
contributions. Whether it's through cash rewards, exclusive perks, or public 
recognition, we believe in honoring the hard work and dedication of our members."
          />
          <VisionCard
          className="bg-[#ADD8F7]"
            title="Making a Lasting Impact"
            description="Above all, we envision a future where our platform makes a lasting impact – not just 
            on the lives of Campus CEOs, but on the world at large. By supporting non-profit 
            organizations and promoting social good, we aim to create positive change that 
            reverberates far beyond our platform's walls."
          />
        </div>
        {/* join */}
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="font-cabinet font-[700] text-[32px] leading-[40px] text-center">Join Us in Bringing Our Vision to Life</h1>
      <p className="font-archivo font-[400] text-[20px] leading-[42px] text-center max-w-[792px] w-full ">If you share our vision for a future where every campus ambassador is empowered to lead,
 learn, and make a difference, then we invite you to join us. Together, we can turn our vision 
into reality and create a brighter future for generations to come.</p>
        </div>
      </div>

      <div className=" w-full rounded-xl h-screen flex flex-col justify-center items-center text-[#FFFFFF] bg-[#2D2323]">
        <h1 className="font-cabinet max-w-[823px] font-[900] text-[64px] leading-[79px] text-center">Join us in shaping the future 
of campus ambassadorship.</h1>
      </div>
    </div>
  );
};

export default page;
