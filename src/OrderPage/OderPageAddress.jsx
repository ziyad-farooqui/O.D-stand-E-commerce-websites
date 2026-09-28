import React from 'react'
import { TbHandClick } from "react-icons/tb";
import { MdEditLocationAlt } from "react-icons/md";

const OderPageAddress = () => {
  return (
    <div className=' justify-center flex'>
        <div className='flex  max-w-300 w-full'>
            <div className='border p-1 mx-2 md:h-40 h-30 w-full  rounded-xl border-white/20 bg-white/50 shadow-sm  '>
        
            <div className=' h-[100%] border flex-col  justify-between p-1 rounded-xl border-white/20 '>
                
           <button className='uppercase  text-[25px] border w- mt-16 gap-1 p-1 shadow border-white/20 bg-white/50 justify-center items-center  flex text-center rounded-full active:scale-95 duration-300 '>
        
                {/* <TbHandClick/> */}
                <MdEditLocationAlt />
                
           </button>
    
        
        
        
        
            </div>
        
        
            
    
            
        
            </div>
            </div>
    </div>
  )
}

export default OderPageAddress