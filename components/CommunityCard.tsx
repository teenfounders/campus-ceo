import React from "react";

type Props = {};

const CommunityCard = (props: Props) => {
  return (
    <div className="w-full p-8 bg-[#3DB8AA] rounded-[10px]  text-[#FFFFFF] h-auto relative ">
      <div className="flex my-10  flex-col gap-3 justify-center items-center w-full">
        <h1 className="max-w-[749px]  font-cabinet font-[700] text-4xl leading-[3.25rem] tracking-[-1%] text-center">
          Enter the community of top 1% student leaders and be a campus
          sensation!
        </h1>
        <p className="max-w-[749px] w-full font-[400] text-[22px] leading-[2.5rem] -tracking-[0.1%] text-center font-archivo">
          Building a community of energetic, passionate, brilliant, like minded
          students who want to network, empower, learn and grow. It’s time to
          learn real-world skills like marketing, communication & leadership
          while getting rewarded
        </p>
      </div>
    </div>
  );
};

export default CommunityCard;
