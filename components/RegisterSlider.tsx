
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/registerimg1.jpg";
import img2 from "@/public/registerimg2.jpg";
import img3 from "@/public/img3.jpg";

const RegisterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: img1,
      title: "Career sites & job post",
      description: "The best-looking career site out there (built by you)",
    },
    {
      src: img2,
      title: "Application Tracking",
      description: "One clear overview for smooth collaborative hiring",
    },
    {
      src: img3,
      title: "Application forms",
      description: "Forms for organized hiring & a great candidate experience",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Change '3' to the total number of slides
    }, 5000); // Change '5000' to the interval duration in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full duration-700 transform  transition-all  h-full ease-in-out"
      data-carousel="slide"
    >
      <div className="relative  overflow-hidden rounded-lg  transition-opacity">
        {images.map((ctx, index) => (
          <div
            key={index}
            className={`duration-700 transform  w-full transition-all ease-in-out ${
              currentSlide === index ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <Image
              src={ctx.src}
               width={1900/2}
               height={1900/2}
               className="w-full  rounded-lg object-contain"
               alt="img"
            />
          </div>
        ))}
      </div>
      {images.map((ctx, index) => (
        <div
          key={index}
          className={`duration-700 flex flex-col  h-full ease-in-out ${
            currentSlide === index ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <p className="text-[24px] font-normal  text-[#382D2D] mt-10 mb-[10px] font-cabinet">
            {ctx.title}
          </p>
          <h3 className="text-[34px] leading-9  font-archivo mb-[36px] font-[900]">
            {ctx.description}
          </h3>
        </div>
      ))}
      <div className=" z-30 flex items-center justify-center space-x-3 rtl:space-x-reverse">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RegisterSlider;
