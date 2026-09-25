import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterCircleOutline } from "react-icons/io5";
import { MdFilterFrames } from "react-icons/md";
import { IoFilter } from "react-icons/io5";

const ProductPageNav = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['All', 'Women', 'Men', 'Kids', 'New'];

  return (
    <div className='  flex justify-center
     bg-gradient-to-b from-[#68B9DD] from-10% to-[##68B9DD] to-100%'>

      <div className=' h-15 md:h-16 w-full rounded-b- {border-white/20 } flex items-center justify-between gap-3 max-w-300  md:shadow-sm '>

        {/*the back button*/}
        <IoIosArrowBack className='border- text-[28px] md:text-[30px] text-black  md:left-3 cursor-pointer   active:scale-95 duration-300  ml-1 md:ml-5 hover:scale-115 ' />

        {/*he the saechbar */}
        <div className="w-[70%] md:w-[55%] h-auto   flex  items-center shadow-md rounded-full border border-white/20 bg-white/50 {hover:scale-105} duration-300">
          <div className=" w-full flex items-center rounded-full ">
            <IoSearchOutline className=' ml-1 md:ml-2 md:text-[30px] text-[25px]  cursor-pointer active:scale-95 duration-300 hover:scale-115  ' />
            <input
              type="text"
              
              className="h-8 md:h-10 w-full  rounded-r-full pl-1 ml-1 cursor-pointer"
              />
          </div>
        </div>

              {/*the searching filter box for md screen*/}
        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 rounded-full border border-white/20 bg-white/50 px-5 py-2 text-md font-medium text-black shadow-md backdrop-blur-sm transition duration-300 hover:bg-white/20 mr-5"
          >
            <span>{selectedOption}</span>
            <span className={`ml-2 text-base transition-transform duration-200 `}>
             <IoFilter  className=' text-[25px] hover:scale-105 duration-300 '/>
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedOption(option)
                    setIsOpen(false)
                  }}
                  className={`block w-full px-3 py-2 text-left text-sm transition hover:bg-slate-100 ${
                    selectedOption === option ? 'bg-sky-50 text-sky-700' : 'text-slate-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <IoFilterCircleOutline className='md:hidden text-[28px] md:right-3 cursor-pointer active:scale-95 duration-300  mr-1' />


      </div>
    </div>
  )
}

export default ProductPageNav