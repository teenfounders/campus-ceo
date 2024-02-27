import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import star from '@/public/star.png'
type Props = {
    image?:string| StaticImageData;
    text?:string;
}

const AmbassadorCard = (props: Props) => {
  return (
    <div className="flex gap-4 mr-10">
        {props.image && 
    <Image src={star || props.image} width={30} height={30} alt="image" className="w-fit h-full object-cover"/>
        }
    <h1 className="font-cabinet font-[500] text-[24px] leading-[29.7px] tracking-[-1%] text-[#F3F2F2]">
   {props.text}
    </h1>
  </div>
  )
}

export default AmbassadorCard