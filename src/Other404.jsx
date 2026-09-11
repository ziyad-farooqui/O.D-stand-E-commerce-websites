
import React from "react";
import { useNavigate } from "react-router-dom";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { useState } from "react";

const Other404 = () => {
  const [text, setText] = useState("http://localhost:5173/");
  const [copySuccess, setCopySuccess] = useState(false);
  const backthepage = useNavigate();

  {/*the function for going back to the previous page */}
  const handleBack = () => {
    backthepage(-1);
  };

  {/*the function for copying text to clipboard */}
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  return (
    <div className="md:pt-20 border-gray-500 flex-col md:gap-0 gap-5 bg-gray-300 h-screen w-full flex justify-center items-center">

      <h1 className="flex absolute md:mb-140 mb-105 z-10 text-[70px] [text-shadow:_0px_0px_50px_#ffba08] text-red-500 md:text-[100px] font-bold">
        404
      </h1>

      <div className="flex z-0 md:w-100 items-center justify-center">

        {/* Input field for copying the link */}
        <div className="border-2 border-white/50 bg-white/20 shadow-lg absolute z-10 rounded-full flex items-center justify-center pr-5">

          <input
            value={text}
            // onChange={(e) => setText(e.target.value)}
            className="placeholder-black border-none bg-transparent focus:outline-none px-3"
          />

          <button onClick={handleCopy}>
            {copySuccess ? (
              <LuCopyCheck
                className="cursor-pointer active:scale-95 hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <LuCopy
                className="text-black cursor-pointer active:scale-95 hover:scale-110 transition-transform duration-300"
              />
            )}
          </button>

        </div>

        <img
          src="/Winter road-cuate.png"
          alt="404"
          className=" md:w-100 md:h-100 w-64 h-64"
        />

      </div>

      <p className="mask-r-from-80% text-[30px] md:text-[50px] text-shadow-lg font-bold">
        Oops, wrong turn.....
      </p>

      <button onClick={handleBack} className="bg-black shadow-lg uppercase h-10 hover:text-gray-100 text-gray-200 rounded-full w-35 hover:bg-gray-900 cursor-pointer active:scale-95 transition-all duration-300 ease-in-out">
        back to home
      </button>

    </div>
  );
};

export default Other404;
