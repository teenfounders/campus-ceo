"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import down from "@/public/downarrow.svg";

type Props = {};

const Navbar = (props: Props) => {
 
 
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
  return (
    <div className="z-50 h-[85px] object-fill flex flex-col items-center sticky top-0">
      <div className="max-w-[980px] w-[95%] drop-shadow-md bg-[#fff] relative rounded-[50px] mt-[10px] py-[15px] px-5 overflow-visible">
        <Link
          href={"/"}
          className="max-w-[280px] h-[52px] float-left px-5 inline-block"
        >
          <Image
            className="mt-4 mr-[13px] max-w-full inline-block align-middle"
            src={logo}
            alt="logo"
            width={100}
            height={70}
          />
        </Link>
        <div className="flex ite]ms-center justify-end">
          <div className="text-center float-right relative flex-row justify-center items-center self-center mx-auto hidden lg:flex">
            <div className="text-left mx-auto font-archivo inline-flex relative">
              {navbarcontent.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="  text-[20px] leading-[120%] h-[46px] py-[10px] px-2 font-normal cursor-pointer flex items-center justify-center flex-row"
                  >
                    <Link
                      href={item.link}
                      className={`text-[#2d2323] flex items-center px-3 py-2 rounded-lg hover:bg-[#F8F4F4]  text-[20px] leading-[120%] `}
                    >
                      {item.name}
                      {item.dropdown && (
                        <p className="text-[#2d2323] pl-2  w-[1em] h-[1em] mt-2">
                          <Image
                            src={down}
                            alt="image"
                            width={30}
                            height={40}
                            className="w-fit text-black h-fit object-cover"
                          />
                        </p>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center ">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
