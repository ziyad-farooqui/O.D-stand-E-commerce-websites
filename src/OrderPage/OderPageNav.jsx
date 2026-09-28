import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const OderPageNav = () => {
      const gotoHome = useNavigate();
    const goHomeLogo = () => {
      gotoHome("/");
    }
  return (
    <div className=' flex justify-center
     bg-gradient-to-b from-[#68B9DD] from-50% to-[#bcbcbc] to-100% '>

    <div className=' -sm max-w-300 w-full md:h-13 h-11 flex items-center  justify-'>
      

      {/*the back button */}
         <IoIosArrowBack className='ml-2  border-  text-[28px] md:text-[30px]  text-black  md:left-3 cursor-pointer   active:scale-90 duration-300  ml-1 md:ml-5 hover:scale-115 ' />
      
      <button className='md:hidden uppercase mr-2 border h-7 w-25 rounded-full border-white/20 bg-white/50 shadow-sm cursor-pointer active:scale-90 duration-300'>
        home
      </button>

                  <div className='ms:hidden md:block the-logo ms:hidden md:block border- flex md:ml-3 ml- mb-1 h-10 w-15 active:scale-95' >
              <img  onClick={goHomeLogo } src="public\bg-for-HeaderHome.png" alt="" />
            </div>

    </div>
    </div>
  )
}

export default OderPageNav