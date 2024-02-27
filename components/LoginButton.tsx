import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from '@/public/google.svg'
type Props = {
    image:string| StaticImageData;
    text:string;
}

const loginButton = (props: Props) => {
  return (
    <div className="flex items-center justify-center   ">
    <button className="mb-[10px] border-[1px] hover:bg-[#F4F6F8] text-[#4a3e3e] border-[hsla(0,8%,37%,.2)] relative flex h-[56px] w-full items-center rounded-full text-lg font-[400] justify-between px-[20px] cursor-pointer ">
       <Image src={props.image} width={100/2} height={100} className='w-[24px] h-full object-contain' alt='login image'/>
         <span className='  w-full'>{props.text}</span>
    </button>
</div>
  )
}

export default loginButton