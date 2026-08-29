import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { GrFormNext } from "react-icons/gr";





const FemaleClothesSection = ({ slowFemale }) => {
  const FEMALE_CLOTHES_REF = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
    const scrollContainerRef = useRef(null);






  {/*the function for scrolling button left and right*/}
    const handleScrollButtonClick = (direction) => {

    if (scrollContainerRef.current) {

      const scrollAmount = 335;

      if (direction === 'left') {

        scrollContainerRef.current.scrollLeft -= scrollAmount;

      } else {

        scrollContainerRef.current.scrollLeft += scrollAmount;

      }
    }
  };


  // Female section ki position check
  useEffect(() => {

    const handleScroll = () => {

      if (!FEMALE_CLOTHES_REF.current) return;

      const topPosition =
        FEMALE_CLOTHES_REF.current.getBoundingClientRect().top;

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





  function Card() {

    return (

      <div className="theitem flex-shrink-0 border border-[#b4c3cb] bg-[#BDC6CE] h-96 w-72 max-w-80 md:max-w-80 rounded-2xl p-1 flex flex-col gap-1 items-center mb-20">

        {/* Upar wala box */}

        <div className="border bg-[#7D6AFF] border-white w-full h-[50%] rounded-2xl">
        </div>


        {/* Niche wala box */}

        <div className="border border-white w-full h-[50%] rounded-b-2xl">

          <div className="border bg-[#EEEEEE] h-10 w-full mt-2 rounded-2xl">

            <h1 className="text-[25px] pl-2 uppercase font-bold">
              Item Title
            </h1>

          </div>


          <div className="border-2 bg-[#EEEEEE] text-[15px] h-6 w-full mt-2 rounded-2xl text-center">

            RATING WITH STARS

          </div>


          <div className="border-2 bg-[#EEEEEE] h-24 w-full mt-2 rounded-2xl">

            <p className="text-[18px] pl-2">
              Item Description
            </p>

          </div>

        </div>

      </div>
    );
  }






  return (

    <div
      ref={FEMALE_CLOTHES_REF}
      className={`FemaleClothes sticky top-0 -mt-[80px] bg-gradient-to-b from-[#6AB8E0] to-[#2b353c] h-screen w-full flex flex-col relative z-51 transition-all duration-300
        ${isAtTop ? "rounded-none" : "rounded-t-[20px]"}
      `}
    >

      {/* Title Container */}

      <div className="TrandingBoxtital h-[10%] text-center w-full flex items-center justify-center">
        
        <h1 className="uppercase text-4xl md:text-6xl lg:text-5xl font-bold">
          Female Clothes
        </h1>

      </div>


      {/* The Line */}

      <div className="TheLoginLineTrandingBox bg-[#FFFFFF] h-2 lg:h-2 md:h-3 mt-2 w-full flex flex-nowrap shadow-[inset_10px_10px_10px_rgba(0,0,0,0.2)]">
      </div>


        {/*the box where have boc extra box 1. searchbar 2. the more option*/}
      <div className='extraBox border- border-white flex gap-1 md:gap-2 lg:gap-5 xl: '>

      {/*the serch bar in component */}
            <div className="mm:w-[60%] w-[50%] md:w- md:ml-8 lg:ml-10  ml-1 mt-5 border-2 border- xl:h-12 lg:h-10 h-9 bg-white/10 backdrop-blur-md rounded-full pl-1 border border-white/20 flex items-center justify- px- shadow-lg z-10 transition-all focus-within:border-white/40 focus-within:bg-white/15">
      
              <div className="flex  border- pr-2 border- items-center justify-center gap- w-full relative rounded-full ">
                <span className="text-white/80  text-[20px] rouded- pr-1 ">
                  <IoSearchOutline className='xl:text-[25px] xl:ml-2' />
                </span>
      
              <input
            type="text"
            placeholder = " search... "
            className="bg-transparent text-white/95 text-[15px] placeholder-white/70 tracking-wide font-normal outline-none text-left w-full transition-all duration-300"
          />
              </div>
      
            </div>

      {/*the more potion button */}
      <div className='moreoption shadow-lg border-2 gap-1 lg:gap-2 xl:gap-3 border-white/20 lg:h-10 xl:h-12 h-9 md:[30%] mm:w-[40%] w-[50%] lg:mr-10  md:mr-8 mt-5 mr-1 text- justify-center flex items-center rounded-full bg-white/10 backdrop-blur-md cursor-pointer active:scale-95 transition-transform'>
        <CgDetailsMore className='text-[25px] lg:text-[30px] xl:text-[35px]' />
      <h1 className='uppercase text-center text-[15px] xl:text-[25px] lg:text-[20px] text-white/90'>more option</h1>
      </div>

    </div>
      

      {/* Female items */}

      <div         ref={scrollContainerRef} className="bg-transparent h-[100%] w-full max-w-max mx-auto flex items-center gap-6 md:gap-10 overflow-x-auto scroll-smooth px-14 lg:px-20">

        {/* the card no01 */}
        <Card/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card/>
        <Card />
        <Card />
        <Card />
        <Card />


      </div>

      <button
        onClick={() => handleScrollButtonClick('left')}
        className="nextbuttonleft shadow-lg border-2  border-white/20 bg-white/10 backdrop-blur-md h-9 w-9 md:h-12 md:w-12 flex absolute z-90 bottom-[50%] left-2 md:left-5 rounded-full text-center justify-center items-center text-[30px] rotate-180 cursor-pointer active:scale-95 transition-transform"
      >
        <GrFormNext />
      </button>


      {/* Right Button */}

      <button
        onClick={() => handleScrollButtonClick('right')}
        className="nextbuttonright shadow-lg border-2  border-white/20 bg-white/10 backdrop-blur-md h-9 w-9 md:h-12 md:w-12 flex absolute z-90 bottom-[50%] right-2 md:right-5 rounded-full text-center justify-center items-center text-[30px] cursor-pointer active:scale-95 transition-transform"
      >
        <GrFormNext />
      </button>
      

    </div>
  );
};

export default FemaleClothesSection;