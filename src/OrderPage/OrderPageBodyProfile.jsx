import React from 'react'
import { FiEdit3 } from "react-icons/fi";

const OrderPageBodyProfile = () => {
  return (
    <div className='flex'>
    <div className='border p-2 mx-2 h-75 w-full active:scale-95 duration-300 rounded-xl border-white/20 bg-white/50 shadow-sm  '>

    <div className=' flex  justify-between p-2'>
        
    {/*the profile d.p*/}
    <div className=' border w-35 h-35 rounded-full border-white/20 shadow  '>
        <img src="image.jpg" alt="" />
    </div>

    <FiEdit3 className=' text-[25px]'  />




    </div>


    <h1 className=' text-center text-[25px] '>
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