import React from 'react'
import { FiEdit3 } from "react-icons/fi";
import { TbHandClick } from "react-icons/tb";

const OderPageBodyList = () => {
  return (
    <>
    <div className='flex '>
        <div className='border p-1 mx-2 my-2 h-45 w-full  rounded-xl border-white/20 bg-white/50 shadow-sm  '>
    
        <div className=' h-[80%] border flex-col  justify-between p-2 rounded-t-xl border-white/20'>
            
       <button className='border gap-1 p-1 shadow border-white/20 bg-white/50 justify-center items-center  flex text-center rounded-full active:scale-95 duration-300 '>
            Check 
            <TbHandClick/>
            
       </button>

    
    
    
    
        </div>
    
    
        
    <button className='border-white/20 border-b border-x bg-[#66ff0086] w-full h-[20%] rounded-b-xl active:scale-95 duration-300 uppercase shadow '>
        Oder Now
    </button>

        
    
        </div>
        </div>
        </>
  )
}

export default OderPageBodyList