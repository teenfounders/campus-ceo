import React from "react";
import Image from "next/image";
type Props = {};
import mainimg from "@/public/mainimage.svg";
import mainimg2 from "@/public/awardimage2.png";
import CommunityCard from "@/components/CommunityCard";
import StudentCard from "@/components/StudentCard";
import Marquee from "react-fast-marquee";
import star from "@/public/star.png";
import AmbassadorCard from "@/components/AmbassadorCard";
import EmpoweredCard from "@/components/EmpoweredCard";
import letter from "@/public/letter.png";
import Revel from "@/components/Revel";
import img2 from "@/public/emp2.jpg";
import img1 from "@/public/employimg.jpg";
import star1 from "@/public/star.jpeg";

const page = (props: Props) => {
  return (
    <div className="bg-white  px-5 sm:mx-5 rounded-[40px] -mt-[35px] max-w-full py-5 mb-10">
      <div className="mt-5 flex flex-col gap-10 w-full h-full overflow-hidden ">
        <div className="mb-5  items-center p-0 w-full max-w-[1340px] text-center justify-center self-stretch mx-auto flex  flex-col">
          <Revel>
            <div className="max-w-[1200px]  w-full mb-5 sm:mb-[60px] flex-col flex items-center mt-10 mx-auto ">
              <h1 className="max-w-[700px] font-cabinet  font font-[700] leading-[50.28px] tracking-[-3%] font-['Cabinet Grotesk']  mt-5 mb-[30px] font-archivo max-w-[700px] font-[400] text-[28px] leading-[3rem]  tracking-[-0.1%] text-center text-[#2D2323] ">
                Welcome to the Campus Ambassador Awards, where we celebrate and
                honor our talented campus superheroes for their outstanding
                achievements!
              </h1>
            </div>
          </Revel>
          <Revel>
            <div className="w-full mb-10 items-center max-w-[1340px] rounded-[40px] flex flex-col self-stretch mx-auto overflow-hidden h-auto">
              <Image
                quality={100}
                src={mainimg}
                width={1920} // Set the width to the desired width of the image
                height={1080} // Set the height to the desired height of the image
                layout="responsive" // Use responsive layout
                className="w-full  h-auto object-cover" // Apply styles to make the image cover the container
                alt="image"
              />
            </div>
          </Revel>
        </div>

        <div className="max-w-[880px]  w-full  mx-auto">
          <Revel>
            <h1 className=" text-[32px] text-start text-[#1A1C22] font-cabinet  font font-[700] leading-[50.28px] tracking-[-3%] font-['Cabinet Grotesk'] mt-2  sm:mt-5 mb-[30px] font-archivo  font-[400] text-[28px] leading-[3rem]  tracking-[-0.1%] text-center text-[#2D2323] ">
              Our Campus Ambassador Awards program recognizes and rewards
              exceptional student leaders who’ve made significant contributions
              to their campus communities and beyond
            </h1>
          </Revel>
        </div>



        <div className="mt-[20px] sm:mt-[60px]    mx-auto  w-full grid grid-cols-6 lg:grid-cols-9 lg:grid-rows-2 gap-3 md:gap-10 mb-[20px]  sm:px-10">
          <div className="col-span-6 lg:col-span-3 lg:row-span-2 w-full bg-[#4F75FE] rounded-xl">
            <div className="m-10 flex flex-col gap-3 text-[#FFFFFF] ">
              <Revel>
                <h1 className="  font-cabinet font-[700] text-[32px] leading-[40px] tracking-[-2%]">
                  Recognizing excellence
                </h1>
              </Revel>
              <Revel>
                <p className=" w-full font-archivo font-[400] text-[22px] leading-[43px] tracking-[-0.1%]">
                  The Ambassador Awards provide a platform to appreciate and
                  celebrate the hard work and dedication of campus ambassadors.
                </p>
              </Revel>
            </div>
          </div>
          {/* <div className="col-span-1 md:col-span-7 md:grid-rows-2 w-full bg-red-300 gap-y-5"> */}
          <div className="lg:row-span-1 py-10 px-10 rounded-xl bg-[#2D2323] col-span-6  flex flex-col gap-3 text-[#FFFFFF]">
            <Revel>
              <h1 className="   font-cabinet font-[700] text-[32px] leading-[40px] tracking-[-2%]">
                Catalyzing growth
              </h1>
            </Revel>
            <Revel>
              <p className="  w-full font-archivo font-[400] text-[22px] leading-[43px] tracking-[-0.1%]">
                Awards fuel the growth of ambassadors, encouraging them to
                achieve greatness in their respective fields.{" "}
              </p>
            </Revel>
          </div>
          <div className="lg:row-span-1 py-10 px-10 bg-[#4A3E3E] rounded-xl items-center justify-center col-span-6  flex flex-col gap-3 text-[#FFFFFF]">
            <Revel>
              <p className="font-cabinet font-[500] text-[26px]  leading-[50px] tracking-[-0.5%]">
                Recognizing the dedication and achievements of exceptional
                campus ambassador leaders. Witness stars being born and dreams
                coming true!
              </p>
            </Revel>
          </div>
          {/* </div> */}
        </div>
        {/* campus ceo section */}
        <div
          className="w-full flex flex-col items-center justify-center  lg:my-12
      "
        >
          <Revel>
            <div className="font-archivo max-w-[723px]  font-[500] text-2xl tracking-[-0.5%] items-center justify-center flex flex-col gap-5 text-center">
              <div className="w-[128px] h-fit flex items-center justify-center">
                <Image
                  quality={100}
                  src={mainimg2}
                  width={128} // Set the width to the desired width of the image
                  height={128} // Set the height to the desired height of the image
                  layout="responsive" // Use responsive layout
                  className="w-[128px] h-auto object-cover" // Apply styles to make the image cover the container
                  alt="image"
                />
              </div>

              <p className="leading-[35.5px] font-archivo font-[400] text-[22px] tracking-[-0.1%] text-center">
                Hey you, yes YOU! Do you have what it takes to be an
                awe-inspiring campus ambassador? Can you rally like a BOSS? Then
                click below and take the first step towards stardom.
              </p>
            </div>
          </Revel>
        </div>
        <Revel>
          <div className="flex my-10 max-sm:text-center items-center justify-center w-full font-cabinet font-[800] text-5xl tracking-[-0.1%]">
            Award Categories
          </div>
        </Revel>

        {/* Community card */}
        <Revel>
          <div className="  h-full relative sm:mx-10">
            <CommunityCard />
          </div>
        </Revel>

        <Revel>
          <div className="grid grid-cols-1 lg:grid-cols-6 items-center justify-center sm:px-10 pb-[20px] sm:mx-10 gap-10">
            <div className="col-span-1 lg:col-span-3">
              <div className="min-h-max">
                <EmpoweredCard
                  className="border-[1px]  border-[#D7D7D7]"
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
                  className="border-[1px]  border-[#D7D7D7]"
                  image1={img2}
                  emoji="😃&nbsp;🤩"
                  description="Average rating based on 1500+ support conversations"
                />
              </div>
            </div>
          </div>
        </Revel>
      </div>
    </div>
  );
};

export default page;
