import React from "react";
import Image from "next/image";
import logo from "@/public/registerlogo.png";
import Link from "next/link";
import google from "@/public/google.svg";
import microsoft from "@/public/microsoft.svg";
import LoginButton from "@/components/LoginButton";
import Input from "@/components/Input";
import RegisterSlider from "@/components/RegisterSlider";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="bg-white w-full min-h-screen flex-col  relative">
      <header className="left-0  py-9 px-10 relative  sm:sticky top-0 z-10 flex items-center justify-between ">
        <Link href={"/"} className="">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="image"
            className="w-fit"
          />
        </Link>
        <div className="md:right-10 absolute right-[20px] ">
          <Link href={"/"}>
            <button
              className="md:text-lg md:px-[20px] text-base px-[15px] bg-transparent border-[1px] border-[#e3e1dd] text-[#4a3e3e]
    inline-flex
    h-[56px]
    w-full
    items-center
    rounded-full
    font-[400]
    justify-center 
    
    "
            >
              login
            </button>
          </Link>
        </div>
      </header>
      <div className="md:py-[36px] md:px-10 flex flex-1 items-center justify-center px-1 ">
        <div className="lg:mt-[20px] py-[4vmin] flex justify-start  px-0 w-full">
          <div className="flex justify-center lg:w-[50%]   lg:p-10 w-full">
            <div className="max-w-[500px]  w-full">
              <div className="">
                <h1 className="mb-[50px] text-center md:text-[58px] text-[#2d2323] text-[46px] tracking-[-0.0065em] leading-[1] m-0 font-cabinet font-[900]">
                  Start hiring with Homerun
                </h1>
                <div className="">
                  <div className="px-3 sm:px-[60px]">
                    <LoginButton image={google} text={"Continue with Google"} />
                    <LoginButton
                      image={microsoft}
                      text={"Continue with Microsoft"}
                    />

                    <div
                      className="items-center
                    text-[#2d2323]
                    text-base
                    font-normal
                    justify-center 
                     h-[80px]
                    flex
                    "
                    >
                      <hr className="flex-grow  border-t-2 mr-3" />
                      <span className="text-[#4a3e3e] text-base mb-1">or</span>
                      <hr className="flex-grow border-t-2 ml-3" />
                    </div>
                    <form>
                      <div
                        className="
                  mb-[30px]
max-sm:flex-col max-sm:min-w-full  
              flex gap-2 relative justify-start min-h-20  items-start"
                      >
                        <div className="flex max-sm:min-w-full flex-col h-fit">
                          <Input
                            label="First name"
                            type="text"
                            className={`text-base }`}
                            id="first_name"
                          />
                        </div>
                        <div className="flex min-h-20 max-sm:min-w-full flex-col h-fit">
                          <Input
                            label="Last name"
                            className={`text-base  }`}
                            type="text"
                            id="last_name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <Input
                          label="Work email"
                          type="email"
                          className={`text-base mb-[30px]`}
                          id="email"
                        />
                      </div>
                      <div className="flex flex-col  justify-center">
                        <Input
                          label="Set a password"
                          type="password"
                          className={`text-base mb-[30px]`}
                          // className={`${
                          //   errors?.first_name ||
                          //   (touchedFields.first_name && "border-[#cc3341]")
                          // }`}
                          id="email"
                          placeholder="At least 6 characters"
                        />
                      </div>

                      <button className="bg-[#4f75fe] hover:bg-[#254CDA] h-[56px] w-full transition-all duration-200 ease-in-out  leading-5 text-white rounded-[30px] flex-0 shrink pt-4 pr-5 pb-[15px] pl-[20px] text-lg font-normal ">
                        Continue with email
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-lg:hidden lg:flex max-lg:relative lg:fixed right-0 top-0 items-center bg-[#fbf9f5] justify-center p-10  w-1/2 h-full">
            <div className="max-w-[460px] w-full ">
              <div className="relative">
                {/* slider */}
                <div className="h-full tracking-[-0.0065em] text-center w-full">
                  <RegisterSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
