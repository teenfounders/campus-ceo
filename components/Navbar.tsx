"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import down from "@/public/downarrow.svg";
import { FaBars } from "react-icons/fa6";

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  
  const navbarRef = useRef<HTMLDivElement>(null);
  let navbarcontent = [
    {
      name: "Awards",
      link: "/awards",
      dropdown: false,
      submenu: [],
    },
    {
      name: "vision",
      link: "/our-vision",
      dropdown: false,
      submenu: [],
    },
    {
      name: "Use cases",
      link: "/",
      dropdown: true,
      submenu: [],
    },
    {
      name: "Resources",
      link: "/",
      dropdown: true,
      submenu: [],
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  return (
    <div className="z-50 h-[71px] md:h-[85px] object-fill  flex flex-col items-center sticky top-0" ref={navbarRef}>
      <div className="max-w-[980px] flex items-center justify-between w-[95%] drop-shadow-md bg-[#fff] relative rounded-[50px] mt-[10px] py-[15px] px-5 overflow-visible">
        <Link href={"/"} className="max-w-[280px] max-lg:order-2 h-[52px] float-left px-5 inline-block">
          <Image
            className="mt-4 mr-[13px] max-w-full inline-block align-middle"
            src={logo}
            alt="logo"
            width={100}
            height={70}
          />
        </Link>
        <div onClick={() => setShow((prev) => !prev)} className="cursor-pointer lg:hidden flex order-1">
          <FaBars />
        </div>
        <div className="flex order-3 items-center justify-end">
          <div className={`text-center float-right relative gap-10 justify-center items-center self-center mx-auto lg:flex`}>
            <div className="text-left mx-auto font-archivo hidden lg:inline-flex relative">
              {navbarcontent.map((item, index) => (
                <div
                  key={index}
                  className="text-[20px] leading-[120%] h-[46px] py-[10px] px-2 font-normal cursor-pointer flex items-center justify-center flex-row"
                >
                  <Link href={item.link} className="text-[#2d2323] flex items-center px-3 py-2 rounded-lg hover:bg-[#F8F4F4] text-[20px] leading-[120%]">
                    {item.name}
                    {item.dropdown && (
                      <p className="text-[#2d2323] pl-2 w-[1em] h-[1em] mt-2">
                        <Image src={down} alt="image" width={30} height={40} className="w-fit text-black h-fit object-cover" />
                      </p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center ">
            <div className="hidden md:flex flex-row ">
              <div className=" rounded-full hover:bg-[#E8E5DE]  hover:-rotate-2 transition-all duration-200 ease-in-out  text-[18px]  text-[#2d2323] leading-[120%] h-[46px] py-[10px] px-4 font-normal cursor-pointer flex items-center justify-center flex-row">
                Log In
              </div>
              <div className="w-[10px] h-[10px]"></div>
              <Link href={"register"}>
                <button className="bg-[#4f75fe] hover:bg-[#254CDA]  hover:-rotate-2 transition-all duration-200 ease-in-out  leading-5 text-white rounded-[30px] flex-0 shrink pt-4 pr-5 pb-[15px] pl-[20px] text-lg font-normal ">
                  Get started
                </button>
              </Link>
            </div>
            <Link className="md:hidden block" href={"register"}>
              <button className="bg-[#4f75fe] hover:bg-[#254CDA]  transition-all duration-200 ease-in-out  leading-5 text-white rounded-[30px] flex-0 shrink pt-4 pr-5 pb-[15px] pl-[20px] text-lg font-normal ">
               Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
          <div className={`w-full h-full relative lg:hidden  px-5`}>

      {show && (
        <div className={`translate-y-[-10px]  opacity-100 duration-300 flex flex-col justify-start items-start rounded-2xl mt-4  ease-in-out bg-white w-full  font-archivo`}>
          <div className="rounded-full transition-all duration-200 ease-in-out text-[18px] text-[#2d2323] leading-[120%] h-[46px] py-[10px] px-4 font-normal cursor-pointer text-start flex items-center justify-center flex-row">
            Log In
          </div>
          <hr />
          {navbarcontent.map((item, index) => (
            <div key={index} className="">
              <Link
              onClick={()=>setShow(false)}
                href={item.link}
                className={`text-[#2d2323] flex items-center px-3 py-4 rounded-lg   text-[20px] leading-[120%]`}
              >
                {item.name}
                {item.dropdown && (
                  <p className="text-[#2d2323] pl-2 w-[1em] h-[1em] mt-2">
                    <Image src={down} alt="image" width={30} height={40} className="w-fit text-black h-fit object-cover" />
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
