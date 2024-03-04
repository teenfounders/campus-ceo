'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
type Props = {}
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/useacive-section'
const style = {
    listStyle: "max-w-[720px] mb-[30px] text-[20px] leading-[140%]",
    activeButton:
      "@apply w-fit bg-[#4f75fe] pt-4 pr-5 pb-[15px] leading-5 text-white rounded-[30px] flex-0 shrink text-lg font-normal",
  };
  
const TermComponent = (props: Props) => {
    const { activeSection, setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView();
  useEffect(()=>{

      if(inView) {setActiveSection("Terms of Service")}
    },[inView,setActiveSection])
  return (
    <div
    ref={ref}
      className={`min-h-screen max-w-[950px] scroll-m-32 flex flex-col justify-start items-start mb-[30px] pb-[30px] leading-9 px-[10px] lg:px-[30px] w-full `}
      id="id1"
    >
      <h1 className="text-[56px] font-cabinet mb-2 font-[900]   leading-[110%] ">
        Terms of Service
      </h1>
      <div className="max-w-[780px] font-archivo mx-auto">
        <ol className="text-left pl-0">
          <li className={style.listStyle}>
            These Terms of Service can be downloaded as a PDF
            <Link href={""} className="text-[#4f75fe">
              here
            </Link>
            .
            <br />
            <br />
            <em>Current as of: May 1, 2023</em>
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
              Article 1: Applicability <br /> &zwj;
            </strong>
            These terms of service (“Terms”) constitute the agreement
            (“Agreement”) between Homerun B.V., with its address at
            Singel 542, 1017 AZ in Amsterdam, registered with the
            Dutch Trade Register with number 66911524 (“we”, “us”,
            “Homerun”) and any legal entity that uses our Services
            (“you” or “Customer” and together with Homerun “Parties”).
            Homerun’s Data Processing Addendum (“DPA”) and – if
            applicable – Homerun’s specific proposal accepted by
            Customer (“Proposal”) are an integral part of this
            Agreement and shall have the same force and effect as set
            out in this Agreement. Any reference to this Agreement
            shall include the Data Processing Addendum and the
            accepted Proposal (if applicable). In the event of a
            conflict between provisions of the Agreement, the Proposal
            shall prevail over the DPA and the Terms, and the DPA
            shall prevail over the Terms.
            <br />
          </li>
          <li className={style.listStyle}>
            <strong>
              Article 2: Our Services <br />
            </strong>
            2.1 We offer access to recruitment software in the form of
            Software as a Service (“SaaS”) as-is, that enables you to
            create a career page and personalized job openings, for
            which candidates (the “Candidates”) can apply. We provide
            several subscription models (“Services”), each with their
            own set of functionalities and limits, which are detailed
            at
            <Link href={""} className="text-[#4f75fe">
              https://www.homerun.co/pricing
            </Link>
            (“Service Description”). Upon selection of the requested
            Service, you will receive a confirmation email, and in
            case of a paid Service, also an invoice that sets out the
            Service you selected, which invoice is an integral part of
            the Agreement.
            <br />
            <br />
            2.2 We may modify the Services from time to time, which
            includes adding or removing Services, or modifying any of
            the contents of existing Services, by updating the Service
            Description at
            <Link href={""} className="text-[#4f75fe">
              https://www.homerun.co/pricing
            </Link>
            . Changes to the Service Description will apply
            immediately to new Customers. Existing customers affected
            by the changes will be informed in writing, observing a
            notice period of at least one (1) month.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default TermComponent