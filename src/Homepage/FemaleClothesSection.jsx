import React, { useEffect, useRef, useState } from 'react';

const FemaleClothesSection = () => {

  const FEMALE_CLOTHES_REF = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!FEMALE_CLOTHES_REF.current) return;
      const topPosition = FEMALE_CLOTHES_REF.current.getBoundingClientRect().top;
      if (topPosition <= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <>
      <div
      ref={FEMALE_CLOTHES_REF}
        className={`FemaleClothes sticky top-0 -mt-[80px] bg-gradient-to-b from-[#6AB8E0]  to-[#2b353c] h-screen w-full flex flex-col relative z-51 transition-all duration-300
          ${ isAtTop ? "rounded-none" : "rounded-t-[20px]"}`}
      >

        {/* Title Container */}
        <div className="TrandingBoxtital h-[10%] text-center w-full flex items-center justify-center">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-5xl font-bold">
             Female Clothes
          </h1>
        </div>

        {/* The Line */}
        <div className="TheLoginLineTrandingBox bg-[#FFFFFF] h-2 lg:h-2 md:h-3 mt-2 w-full flex flex-nowrap shadow-[inset_10px_10px_10px_rgba(0,0,0,0.2)]"></div>

        {/*the tanding items card here */}
        <div className="border- border-black bg-transparent h-[100%] w-full flex items-center justify-center gap-5 ">

          {/*the card no01 */}



        </div>




      </div>
    </>
  )
}

export default FemaleClothesSection