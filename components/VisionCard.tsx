import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

const VisionCard = ({ title, className, description }: Props) => {
  return (
    <div className={twMerge("w-full rounded-xl px-10 pt-10 ", className)}>
      <div className="flex flex-col gap-5  bg-[#FFFFFF] p-10 rounded-t-xl w-full items-center justify-center ">
     <h1 className="text-[#2D2323] max-w-[707px] w-full font-cabinet font-[700] text-[28px] leading-[35px] tracking-[-1%] text-center">
               {title}
               
            </h1>
            <p className="font-archivo font-[400] text-[24px] leading-[33px] sm:leading-[41px] text-center text-[#2D2323]">{description}</p>

        </div>{" "}
    </div>
  );
};

export default VisionCard;
