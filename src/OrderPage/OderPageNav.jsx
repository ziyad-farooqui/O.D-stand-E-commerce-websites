import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const OderPageNav = () => {
  return (
    <>
    <div className=' h-11 flex items-center  justify-between
       bg-gradient-to-b from-[#68B9DD] from-50% to-[#bcbcbc] to-100% '>

      {/*the back button */}
         <IoIosArrowBack className='ml-2  border- text-[28px] md:text-[30px] text-black  md:left-3 cursor-pointer   active:scale-90 duration-300  ml-1 md:ml-5 hover:scale-115 ' />
      
      <button className='uppercase mr-2 border h-7 w-25 rounded-full border-white/20 bg-white/50 shadow-sm cursor-pointer active:scale-90 duration-300'>
        home
      </button>

    </div>
    </>
  )
}

export default OderPageNav