import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text?: string;
  description?: string;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  emoji?:string;
  className?:string;
};

const EmpoweredCard = (props: Props) => {
  return (
    <div className={twMerge('bg-white max-w-[630px] min-h-[410px] w-full h-full rounded-[20px] py-[20px] md:py-10 px-[20px] md:px-[60px]',props.className)}>
      {props.image1 && (
        <Image
          src={props.image1}
          width={300/2}
          className="mb-[10px] max-w-[160px] max-h-[44px]  inline-block w-full h-full object-cover"
          height={300/2}
          alt="image"
        />
      )}
      <div className="font-cabinet  text-[#2D2323]  font-[900] leading-[140%] tracking-[-1%]  text-[82px] my-[10px] ">
        {props.text}
      </div>
      
      {props.image2 && (
        <div className="min-h-fit">

        <Image
          src={props.image2}
          width={500/2}
          className="w-fit  h-fit mb-[25px] mt-[5px] align-middle inline-block  object-cover"
          height={500/2}
          alt="image"
          />
          </div>
      )}
      {
        props.emoji && (
          <div className="mb-5 text-[50px] leading-[120%]">{props.emoji}</div>
        )
      }
      <p className="mb-[10px] font-archivo  font-[500] text-[22px] tracking-[-2%] leading-[170%] ">
        {props.description}
      </p>
    </div>
    
  );
};

export default EmpoweredCard;
