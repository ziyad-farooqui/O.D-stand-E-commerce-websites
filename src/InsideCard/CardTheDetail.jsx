import React from "react";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CardTheDetail = () => {

     const [itemsName, setItemsName] = useState("Item Name");

  return (
    
    <>

           <div className='thedetails-bar flex justify-center relative z-50 md:top-0 ms:-top- -top- w-full h-auto md:rounded-t-[20px]
     bg-gradient-to-b from-[#68B9DD] from-10% via-[#6AB8E0] via-30% via-[#227EB3] via-50% via-[#0E5990] via-70% via-[#532499] via-80% to-[#2b353c] to-%100  '>

        <div className='md: border-white/30  md:max-w-300 w-full md:px-5 '>

          <div className="product-Name md:rounded-full mt-10 border  border-white/20 flex  w-full h-10 items-center justify-center text-[25px] shadow md:shadow-none md: ">
            {itemsName}
          </div>

        <div className='border flex items-center '>


          {/*the color name  */}
          <div className='prodect-color mt-2  h-50 w-[70%]  justify-center items-center md:gap- border-white/50 flex flex-col md:flex-row font-bold text-[20px] '>

            <div className='color_options border  border-white/20 h-50 w-full rounded-lg   ml-'>
            <h1 className='border-  md:w-40 w-full' > Selected Color:</h1>

            </div>

          </div>


                    {/* ================= QUANTITY ================= */}

          <div className="border x border-white/20 rounded-xl mt-2 p-3 flex flex-col gap-20 items-center justify- w-[30%] h-50">

            <h2 className="font-bold text-xl">
              Quantity
            </h2>

            <div className="flex items-center gap-4 border-2 border-white/30 rounded-full px-1 py-1">

              <button
                // {/*onClick={decreaseQuantity}*/}
                className="h-8 w-8 flex justify-center items-center rounded-full bg-white/20"
                >
                <FaMinus />
              </button>

              <span className="text-xl">
                {/* {quantity} */}
              </span>

              <button
                // onClick={increaseQuantity}
                className="h-8 w-8 flex justify-center items-center rounded-full bg-white/20 transition hover:scale-115 duration-300 "
              >
                <FaPlus />
              </button>

            </div>

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


    </>
  );
};

export default CardTheDetail;
