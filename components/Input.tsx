"use client";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, id, disabled, ...props }, ref) => {
    // console.log(errors);
    return (
      <>
        {
          <label
            className={"font-normal mb-2 text-base text-[#382d2d]"}
            htmlFor={id}
          >
            {label}
          </label>
        }
        <input
          type={type}
          id={id}
          className={twMerge(
            `flex
            w-full
            rounded-[3px]
           
            border-[#DADADA]
            focus:border-black
            focus:border-[2px]
            border-[1px]
            px-[15px] py-[10px]
            text-[0.875rem]
            
            file:border-0
            


             
            file:text-sm
            file:font-medium
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none`,
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;