import React, { useEffect, useRef, useState } from 'react';
import { GrFormNext } from "react-icons/gr";

const TrandingHome = () => {
  const trendingRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const [whenTop, setwhenTop] = useState(false);
  const componentRef = useRef(null);

  const y = componentRef.current.getBoundingClientRect().top;

  if(y = )



  useEffect(() => {
    const handleScroll = () => {
      if (!trendingRef.current) return;
      const topPosition = trendingRef.current.getBoundingClientRect().top;
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

  const handleScrollButtonClick = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; 
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  function Card() {
    return (
      // Cleaned up static widths to avoid structural clipping issues
      <div className="theitem flex-shrink-0 border border-[#b4c3cb] bg-[#BDC6CE] h-96 w-72 max-w-80 md:max-w-80 rounded-2xl p-1 flex flex-col gap-1 items-center">
        {/* Upar wala box */}
        <div className="border bg-[#7D6AFF] border-white w-full h-[50%] rounded-2xl"></div>

        {/* Niche wala box */}
        <div className="border border-white w-full h-[50%] rounded-b-2xl">
          <div className="border bg-[#EEEEEE] h-10 w-full mt-2 rounded-2xl">
            <h1 className="text-[25px] pl-2 uppercase font-bold">Item Title</h1>
          </div>
          <div className="border-2 bg-[#EEEEEE] text-[15px] h-6  w- mt-2 rounded-2xl text-center">
            RATING WITH STARS
          </div>
          <div className="border-2 bg-[#EEEEEE] h-24 w-full mt-2 rounded-2xl">
            <p className="text-[18px] pl-2">Item Description</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={trendingRef}
        className={`TrandingBox overflow-hidden sticky top-0 md:-mt-[120px] lg:-mt-[130px] -mt-[150px] bg-gradient-to-b from-[#b2cad6] via-[#6d8a9c] to-[#2b353c] h-screen w-full flex flex-col relative z-50 transition-all duration-300
           ${isAtTop ? "rounded-none" : "rounded-t-[20px]"}`}
      >
        {/* Title Container */}
        <div className="TrandingBoxtital  md:mt-2 h-[10%] md: text-center w-full flex items-center justify-center">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-5xl font-bold">Trending</h1>
        </div>

        {/* The Line */}
<div className="TheLoginLineTrandingBox bg-[#f5f5f5] h-2 lg:h-2 md:h-3 mt-2 w-full flex flex-nowrap shadow-[inset_10px_10px_10px_rgba(0,0,0,0.2)]"></div>



        {/* 
          CHANGES MADE HERE:
          - Removed "md:justify-center" completely to stop left-clipping
          - Added "max-w-max mx-auto" to cleanly center cards on desktops without side-bugs
          - Added "px-14" to prevent cards from touching the outer arrow elements
        */}
        <div 
          ref={scrollContainerRef}
          className="bg-transparent h-[100%] w-full max-w-max mx-auto flex items-center gap-6 md:gap-10 overflow-x-auto scroll-smooth px-14 lg:px-20"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Button Controls */}
        <button 
          onClick={() => handleScrollButtonClick('left')}
          className='nextbuttonleft shadow-lg border-2 border-[#eae8e8] bg-[#c7c7c7] h-9 w-9 md:h-12 md:w-12 flex absolute z-90 bottom-[50%] left-2 md:left-5 rounded-full text-center justify-center items-center text-[30px] rotate-180 cursor-pointer active:scale-95 transition-transform'
        >
          <GrFormNext />
        </button>

        <button 
          onClick={() => handleScrollButtonClick('right')}
          className='nextbuttonright shadow-lg border-2 border-[#eae8e8] bg-[#c7c7c7] h-9 w-9 md:h-12 md:w-12 flex absolute z-90 bottom-[50%] right-2 md:right-5 rounded-full text-center justify-center items-center text-[30px] cursor-pointer active:scale-95 transition-transform'
        >
          <GrFormNext />
        </button>
      </div>
    </>
  );
};

export default TrandingHome;
