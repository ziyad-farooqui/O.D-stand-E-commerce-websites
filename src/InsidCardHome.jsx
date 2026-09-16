import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CardNavbar from './InsideCard/CardNavbar';
import CarditenmImahe from './InsideCard/CarditenmImahe';


const InsidCardHome = () => {
  const [itemsName, setItemsName] = useState("Item Name");
  const [colorName, setcolorName] = useState('');







  return (
    <div className="border  border-gray-500 bg-gray-300 h-screen w-full flex flex-col ">



      <CardNavbar/>

      <CarditenmImahe />



      <div className='thedetails-bar flex justify-center border- relative z-10 -top-5 w-full h-auto rounded-t-[20px]
     bg-gradient-to-b from-[#68B9DD] from-10% via-[#6AB8E0] via-30% via-[#227EB3] via-50% via-[#0E5990] via-70% via-[#532499] via-80% to-[#2b353c] to-%100  '>

        <div className='md:border- border-white/30 shadow-  md:max-w-300 w-full '>

          <div className="product-Name rounded-full mt-10 border-3  border-white/20 flex  w-full h-10 items-center justify-center text-[25px] ">
            {itemsName}
          </div>

          {/*the color name  */}
          <div className='prodect-color mt-2 border- h-50  justify-center items-center md:gap- border-white/50 flex flex-col md:flex-row font-bold text-[20px] '>
            <h1 className='border-  md:w-40 w-full' > Selected Color:</h1>

            <div className='color_options border-2  border-white/20 h-50 w-full rounded-lg  md:w-250 ml-'>

            </div>

          </div>


          <div className="flex flex-col md:flex-row gap-2 mt-2">
            {/* Price */}
            <div className="border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-md w-full md:w-[50%] p-3">
              <p className="text-white/70 text-sm"> Price </p> <h1 className="text-3xl font-bold">
                ₹999
              </h1>
              <p className="text-green-300">
                20% OFF
              </p>
            </div>
            {/* Rating */}
            <div className="border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-md w-full md:w-[50%] p-3">
              <p classzName="text-white/70 text-sm">
                Customer Rating
              </p> <div className="flex items-center gap-2">
                <div className="flex text-yellow-300">
                  {/* <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> */}
                </div>
                <span>
                  4.8 (120 reviews)
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default InsidCardHome; 
