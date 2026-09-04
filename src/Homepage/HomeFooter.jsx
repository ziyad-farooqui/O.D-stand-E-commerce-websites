import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";


const HomeFooter = () => {

              const [isAtTop, setIsAtTop] = useState(false);
                const scrollContainerRef = useRef(null);

                  {/*the function for scrolling button left and right*/}




  return (
         <div
             
                   className={`Homefooter  border-transparent border-1 border-t-white/10  shadow-[0px_-5px_10px_] sticky top-[280px]  -mt-[280px] bg-gradient-to-b from-[#18013a] to-[#2b353c] min-h-70 w-full flex flex-col relative z-51 transition-all duration-300
                     ${isAtTop ? "rounded-none" : "rounded-t-[20px]"}
        `}>
             
                    {/*the paragraph for contact information*/}
        <div className={`theparagraph md:border-0  border-b-1 border-white/50 flex flex-col gap-3 h-[140px] w-full justify-center items-center`}>
          <p className='text-[#d5d3d3] uppercase text-center'>if you want to your product on this platform you should contact us</p>
          <button className=' border-2  border-transparent h-10 w-30 bg-[#532499] uppercase rounded-full text-[#d5d3d3] transition-transform cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#fffff]'>contact us</button>
        </div>

                    {/*the center line who don't show in mobile*/}
        <span className="theFooterCenterLine  md:flex md:border-1 md:border-white/20 md:w-180 md:mx-auto"></span>
             
        <div className='theIcons border-1 h-34 w-full flex items-center justify-center gap-4 '>

        </div>
    
    
                 </div>
  )
}

export default HomeFooter