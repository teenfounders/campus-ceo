
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import footerlogo from "@/public/footerlogo.png";
import StartHiring from "./StartHiring";
import Revel from "./Revel";
type Props = {};

const Footer = (props: Props) => {
  const [email, setEmail] = useState('')
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative">
<Revel>

<StartHiring/>
</Revel>
      </div>

{/* footer */}
    <footer className="pt-[30px] max-w-[1340px]  relative w-full text-[#000] mb-5 mx-auto">
      <div className="max-w-full text-[#2d2323]  rounded-[20px] mx-auto block">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 px-5  gap-4 p-2 sm:p-10">
         
          <div className="w-full md:col-start-3  h-full ">
            <div className="">
              <h5 className="font-black text-[20px] leading-[24px]">
                About Homerun
              </h5>
            </div>
            <div className="">
              <ul className="pl-0 flex flex-col gap-2 my-[10px]">
                <li className="text-[20px] transition-all ease-in-out duration-200 cursor-pointer hover:text-[#2D2323] pt-[5px] pb-[10px] font-normal leading-[120%]  text-[rgba(45,35,35,.7)] l">
                  About us
                </li>
                <li className="text-[20px] transition-all ease-in-out duration-200 cursor-pointer hover:text-[#2D2323] pt-[5px] pb-[10px] font-normal leading-[120%] text-[rgba(45,35,35,.7)]  ">
                  Careers
                </li>
                <li className="text-[20px] transition-all ease-in-out duration-200 cursor-pointer hover:text-[#2D2323] pt-[5px] pb-[10px] font-normal leading-[120%] text-[rgba(45,35,35,.7)]  ">
                  {" "}
                  Contact us
                </li>
              </ul>
              <div className="mt-[30px]">
              <h5 className="font-black text-[20px] leading-[24px]">
                Legal
              </h5>
              <ul className="pl-0 flex flex-col gap-2 my-[10px]">
                <li>

                <Link href={'/terms-of-service'} className="cursor-pointer text-[20px] transition-all ease-in-out duration-200 hover:text-[#2D2323] pt-[5px] pb-[10px] font-normal leading-[120%]  text-[rgba(45,35,35,.7)] l">
                
              Terms
                </Link>
                </li>
                <li className="cursor-pointer text-[20px] pt-[5px] pb-[10px] font-normal leading-[120%] transition-all ease-in-out duration-200 hover:text-[#2D2323] text-[rgba(45,35,35,.7)]  ">
                Privacy
                </li>
               
              </ul>
              </div>
            </div>
          </div>
          <div className="block col-span-1 md:col-start-4 w-full  ">
            <div className="">
              <h5 className="font-black text-[20px] leading-[24px]">
                Our newsletter
              </h5>
            </div>
            <div className="mt-5 ">
              <Link
                href={""}
                className="max-w-[233px] w-full inline-block my-[10px] -ml-[3px]"
                >
                <Image
                  src={footerlogo}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                  alt="footer image"
                  />
              </Link>
              <p className="text-lg font-[400] leading-[140%] ">
                Receive must-read articles and trends on company culture, hiring
                and work/life balance from leading publications.
              </p>
              <div className="-ml-[10px]  mt-[15px] block mb-[15px]">
                <form className="flex items-end h-[50px]">
                  <input
                  onChange={(e)=> setEmail(e.target.value)}
                  type="text"
                  value={email}
                  placeholder="Email"
                  className="bg-[#DBD5CC] max-w-[70%] w-full  py-[9px] px-[15px] rounded-l-[30px] h-[50px] pl-5 text-[18px] placeholder:text-[#2d2323] focus:text-white inline-block text-[#333]  leading-[1.4] "
                  />
                  <input
                    
                    type="text"
                    placeholder="Sign up"
                    className="bg-white w-full max-w-[30%] text-[#2d2323] rounded-r-[30px] h-[50px] placeholder:text-[#2d2323] pr-2 text-lg relative top-0 py-[9px] px-[15px]"
                    />
                </form>
              </div>
              <div className="flex w-full  gap-1">
                <div className="w-10 h-10 rounded-full bg-[#2d2323] items-center justify-center flex mr-2 mt-[10px]">
                  <Image
                    quality={100}
                    src={
                      "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc28d9e5f43edc84e99f_logo-instagram.svg"
                    }
                    width={34} // Set the width to the desired width of the image
                    height={34}
                    className="" // Set the height to the desired height of the image
                    alt="image"
                    />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2d2323] items-center justify-center flex mr-2 mt-[10px]">
                  <Image
                    quality={100}
                    src={
                      "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc2855f0c353c22fda33_logo-linkedin.svg"
                    }
                    width={34} // Set the width to the desired width of the image
                    height={34}
                    className="" // Set the height to the desired height of the image
                    alt="image"
                    />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2d2323] items-center justify-center flex mr-2 mt-[10px]">
                  <Image
                    quality={100}
                    src={
                      "https://assets-global.website-files.com/58d684124f3644b01d649b26/5975bc270f93db3c99396453_logo-twitter.svg"
                    }
                    width={34} // Set the width to the desired width of the image
                    height={34}
                    className="" // Set the height to the desired height of the image
                    alt="image"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
                    </div>
  );
};

export default Footer;
