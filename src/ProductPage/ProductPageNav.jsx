import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterCircleOutline } from "react-icons/io5";

const ProductPageNav = () => {
  return (
    <>
      <div className=' h-15 w-full rounded-b- {border-white/20 } flex items-center justify-between gap-3
      bg-gradient-to-b from-[#68B9DD] from-10% to-[##68B9DD] to-100% '>

        {/*the back button*/}
        <IoIosArrowBack className='border- text-[28px] text-black  md:left-3 cursor-pointer   active:scale-95 duration-300  ml-1 ' />

        {/*he the aechbar */}
        <div className="w-[70%] h-auto  flex  items-center shadow-md rounded-full border border-white/20 bg-white/50">
          <div className=" w-full flex items-center rounded-full ">
            <IoSearchOutline className=' ml-1 text-[25px] cursor-pointer active:scale-95 duration-300 ' />
            <input
              type="text"
              
              className="h-8 w-full rounded-r-full pl-1 cursor-pointer"
            />
          </div>
        </div>


          <IoFilterCircleOutline className='b text-[28px] md:right-3 cursor-pointer active:scale-95 duration-300  mr-1' />

   
        
      </div>
    </>
  )
}

export default ProductPageNav