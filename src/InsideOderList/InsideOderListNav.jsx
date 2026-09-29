import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const InsideOderListNav = () => {
  return (
    <>
    <div className=' h-10 flex items-center
    bg-gradient-to-b from-[#68B9DD] from-50% to-[#bcbcbc] to-100% '>
        <IoIosArrowBack className='ml-2  border-  text-[28px] md:text-[30px]  text-black  md:left-3 cursor-pointer   active:scale-90 duration-300  ml-1 md:ml-5 hover:scale-115 ' />
    </div>
    </>
  )
}

export default InsideOderListNav