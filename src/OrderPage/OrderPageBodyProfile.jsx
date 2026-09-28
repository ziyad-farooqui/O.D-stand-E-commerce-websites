import React from 'react'
import { FiEdit3 } from "react-icons/fi";

const OrderPageBodyProfile = () => {
  return (
    <div  className='hidden flex  w-full justify-center  '>

    <div className='border p-2 max-w-300 mt-2  h-75 w-full md:active:scale-100 active:scale-95 duration-300 rounded-xl border-white/20 bg-white/50 shadow-sm  '>

    <div className=' flex  justify-between p-2'>
        
    {/*the profile d.p*/}
    <div className='  border w-35 h-35 md:h-55 md:w-55 rounded-full border-white/20 shadow  '>
        <img src="image.jpg" alt="" />
    </div>

          <h1 className='ms:hidden md:block text-center text-[25px] '>
        Name
    </h1>

    <FiEdit3 className=' text-[25px] md:text-[30px] rounded-full  md:hover:scale-105 md:duration-300 md:active:scale-95 '  />




    </div>


    <h1 className='md:hidden text-center text-[25px] '>
        Name
    </h1>

    {/*ther will make a react show */}


    {/*the odder address*/}
    {/* <div className='border flex'>

       <h1 className=' text-[15px] uppercase'>
        oder address :
        </h1> 
        <p className='border h-'>

        </p>
    </div> */}
    

    </div>
    </div>
  )
}

export default OrderPageBodyProfile