import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";

const HomeHeader = () => {
  // Search placeholder animation
  const [placeholderText, setPlaceholderText] = useState("");
  const targetText = "Search...";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = "";

    const typeLoop = () => {
      if (!isDeleting) {
        currentText = targetText.substring(0, index + 1);
        setPlaceholderText(currentText);
        index++;

        if (index === targetText.length) {
          setTimeout(() => {
            isDeleting = true;
            typeLoop();
          }, 2000);
          return;
        }
      } else {
        currentText = targetText.substring(0, index - 1);
        setPlaceholderText(currentText);
        index--;

        if (index === 0) {
          isDeleting = false;

          setTimeout(() => {
            typeLoop();
          }, 500);

          return;
        }
      }

      const currentSpeed = isDeleting ? 60 : 120;
      setTimeout(typeLoop, currentSpeed);
    };

    const initialTimer = setTimeout(typeLoop, 800);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
  <div className="relative w-full overflow-hidden sticky top-20 justify-center items-center flex flex-col z-50">
    {/* Background Gradient - EXACTLY SAME */}
    <div className="absolute border- border-pink-500  left-[0%] right-[0%] w-full md:max-w-full inset-0 bg-gradient-to-b  from-[#bcbcbc]  from-0% via-35% to-[#1c1c1e] to-85% z-0 pointer-events-none " />

    {/* Main Content - ONLY THIS IS STICKY */}
    <div className="sticky  border- border-yellow-500 top-20 w-full  h-[calc(100vh-5rem)] flex items-center justify-center relative px-6 z-0 ">

      {/* 3D Character */}
      <div className="absolute w-full border- top-[5%] md:top-[13%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none select-none w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className=" border- h-full opacity-90 transition-all duration-300 scale-140">
          <img
            src="/bg-for-HeaderHome.png"
            className="object-contain w-full h-full"
            alt="3d asset character"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-[600px] border- md:max-w-full h-11 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center px-6 shadow-lg z-10 transition-all focus-within:border-white/40 focus-within:bg-white/15">

        <div className="flex  border- items-center justify-center gap-1.5 w-full relative">
          <span className="text-white/80 text-[20px] select-none pb-0.5 mt-1">
            <IoSearchOutline />
          </span>

          <input
            type="text"
            placeholder={placeholderText}
            className="bg-transparent text-white text-[15px] placeholder-white/70 tracking-wide font-normal outline-none text-left w-full transition-all duration-300"
          />
        </div>

      </div>
    </div>
  </div>
);
};

export default HomeHeader;