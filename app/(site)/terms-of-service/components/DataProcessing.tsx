"use client";
import { useContext, useEffect, useState } from "react";
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import Link from "next/link";
import React from "react";
import { termsLink } from "@/lib/data";
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "@/context/useacive-section";
import { useInView } from "react-intersection-observer";
 
type Props ={}
const style = {
  listStyle: "max-w-[720px] mb-[30px] text-[20px] leading-[140%]",
  activeButton:
    "@apply w-fit bg-[#4f75fe] pt-4 pr-5 pb-[15px] leading-5 text-white rounded-[30px] flex-0 shrink text-lg font-normal",
};

  // const [activeSection, setActiveSection] = useState("id1"); // State to track active section
  const DataProcessing = (props: Props) => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView();
  useEffect(()=>{

      if(inView) {setActiveSection("Data Processing Services")}
    },[inView,setActiveSection])
  return (
    <div
    ref={ref}
    className={`min-h-screen max-w-[950px] scroll-m-32 flex flex-col justify-start items-start mb-[30px] pb-[30px] px-[10px] lg:px-[30px] w-full   `}
    id="id2"
  >
    <h1 className="text-[56px] max-w-[609px] mb-2 font-[900]  font-cabinet leading-[110%] ">
      Data Processing Addendum
    </h1>
    <div className="max-w-[780px] font-archivo mx-auto">
      <ol className="text-left pl-0">
        <li className={style.listStyle}>
          This data processing addendum (“DPA”) pertains to the
          processing of personal data by Homerun on behalf of the
          Customer and is an integral part of the Terms of Service
          (“Terms”) of Homerun and, if applicable, the accepted
          Proposal of Homerun, together defined as “Agreement”. .
          <br />
          <br />
          <em>Current as of: 16 March 2022</em>
          <br />
          <br />
          These Terms of Service apply to all Homerun customers on
          current pricing plans. For Homerun customers on the Legacy
          pricing plan, you can find the terms
          <Link href={""}>here</Link>
          .
          <br />
        </li>
        <li className={style.listStyle}>
          <strong>
            Article 1: Definitions <br /> &zwj;
          </strong>
          The terms used in this DPA correspond with the definitions
          provided in the Terms of Service of Homerun (available at
          https://www.homerun.co/terms-of-service), unless specified
          differently. Terms such as “processing”, “personal data”
          and “personal data breach” shall have the meaning ascribed
          to them in the General Data Protection Regulation
          (2016/679/EU – “GDPR”).
          <br />
        </li>
        <li className={style.listStyle}>
          <strong>
            Article 2: Scope and Subject
            <br />
          </strong>
          This DPA applies exclusively to the processing of personal
          data by Homerun on your behalf, in the course of providing
          the Services to you as set out in the Agreement.
        </li>
      </ol>
    </div>
  </div>
  )
}

export default DataProcessing