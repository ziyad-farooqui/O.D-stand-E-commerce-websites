import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";


const HomeFooter = () => {

              const [isAtTop, setIsAtTop] = useState(false);
                const scrollContainerRef = useRef(null);

                  {/*the function for scrolling button left and right*/}




  return (
         <div
             
                   className={`Homefooter sticky top-[280px]  -mt-[280px] bg-gradient-to-b from-[#18013a] to-[#2b353c] min-h-70 w-full flex flex-col relative z-51 transition-all duration-300
                     ${isAtTop ? "rounded-none" : "rounded-t-[20px]"}
                   `}
                 >
             
                   {/* Title Container */}
             

             
             
                   {/* The Line */}
             

             
                     {/*the box where have boc extra box 1. searchbar 2. the more option*/}

             
                   {/*the serch bar in component */}

             
                   {/*the more potion button */}

                   
             
                   {/* Female items */}
             

             
                  {/*the button for */}

             
             
                   {/* Right Button */}

                   
             
                   
    
    
                 </div>
  )
}

export default HomeFooter