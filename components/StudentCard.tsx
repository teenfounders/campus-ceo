import React from 'react'

type Props = {
    text?:string;
}

const StudentCard = (props: Props) => {
  return (
    <div className='max-w-[400px] text-left bg-[#fff] border-[3px] border-gray-300 rounded-[20px] flex-none self-center mb-5 mx-5 p-[50px] block'>
        <div className="text-[22px] text-[#2D2323] font-archivo  leading-[41.76px] tracking-[-0.1%]">

        {props.text}
        </div>
    </div>
  )
}

export default StudentCard