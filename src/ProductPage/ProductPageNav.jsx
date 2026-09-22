import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const ProductPageNav = () => {
  return (
    <>
    <div className='border h-15 w-full rounded-b- {border-white/20 } flex items-center justify-center gap-3 '>
            <IoIosArrowBack className='border- text-[28px] text-black absolute left-2 md:left-3'/>

                  <div className="w-[80%] border- md:max-w-full h-11 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center px-6 shadow-lg z-10 transition-all focus-within:border-white/40 focus-within:bg-white/15">
            
                    <div className="flex  border- items-center justify-center gap-1.5 w-full relative">
                      <span className="text-white/80 text-[20px] select-none pb-0.5 mt-1">
                        <IoSearchOutline />
                      </span>
            
                      {/* <input
                        type="text"
                        // placeholder={placeholderText}
                        className="bg-transparent text-white text-[15px] placeholder-white/70 tracking-wide font-normal outline-none text-left w-full transition-all duration-300"
                      /> */}
                    </div>
            
                  </div>
    </div>
    </>
  )
}

export default ProductPageNav