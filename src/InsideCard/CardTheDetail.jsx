import React from "react";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";


const CardTheDetail = () => {

  const [itemsName, setItemsName] = useState("Item Name");

  return (

    <>

      <div className='thedetails-bar flex justify-center relative z-10 md:top-0 ms:-top- -top- w-full h-auto rounded-t-[20px]
     bg-gradient-to-b from-[#68B9DD] from-10% via-[#6AB8E0] via-30% via-[#227EB3] via-50% via-[#0E5990] via-70% via-[#532499] via-80% to-[#2b353c] to-%100  '>

        <div className='md: border-white/30  md:max-w-300 w-full md:px-5 '>

          <div className="product-Name bg-white/10 md:rounded-full mt-10 border  border-white/20 flex  w-full h-10 items-center justify-center text-[25px]  md:shadow-none md: ">
            {itemsName}
          </div>



          <div className='  flex md:flex-row flex-col items-center md:gap-5 md:mx-2'>


            {/*the color name  */}
            <div className='prodect-color bg-white/10 rounded-xl flex md:flex-col mt-2 border  md: w-[95%] md:w-[50%] md:h-auto  justify- items-  border-white/20  font-bold text-[20px] pl-2 hover:scale-101 duration-300 hover:bg- '>

              <h1 className=' flex h-9 w-full pl-1  ' > Selected Color:</h1>
              <div className='color_options    border-white/20 h-20 w-full'></div>

            </div>


            {/* ================= QUANTITY ================= */}

            <div className="border bg-white/20  border-white/20 rounded-xl mt-2 p-3 flex flex-col gap-5 items-center justify- w-[95%] md:w-[50%] h-30 hover:scale-101 duration-300 hover:bg- ">

              <h2 className="font-bold text-xl">
                Quantity
              </h2>

              <div className="flex items-center gap-4 border-2 border-white/30 rounded-full px-1 py-1">

                <button
                  // {/*onClick={decreaseQuantity}*/}
                  className="active:scale-95 h-8 w-8 flex justify-center items-center rounded-full bg-white/20 transition hover:scale-115 duration-300 "
                >
                  <FaMinus />
                </button>

                <span className=" text-xl">
                  {/* {quantity} */}1
                </span>

                <button
                  // onClick={increaseQuantity}
                  className="active:scale-95 duration-300 h-8 w-8 flex justify-center items-center rounded-full bg-white/20 transition hover:scale-115 duration-300 "
                >
                  <FaPlus />
                </button>

              </div>

            </div>


          </div>


          <div className="flex  md:flex-row gap-1 md:gap-5 px-2 mt-2 ">
            {/* Price */}
            <div className="md:hidden border  text-center flex flex-col justify-center border-white/20 rounded-xl bg-white/10 backdrop-blur-md w-full md:w-[50%] p-3 active:scale-95 duration-300 ">
              <p className="text-white/70 text-sm"> Price </p> <h1 className="text-3xl font-bold">
                ₹999
              </h1>
              <p className="text-green-300">
                20% OFF
              </p>
            </div>
            {/* Rating */}
            <div className="ms:hidden md:block  md:flex  md:gap-5 w-full border border-white/20 rounded-xl p-2 bg-white/20">

            <div className="border border-white/20 rounded-xl bg-white/ backdrop-blur-md w-full md:w-[20%]  md:h-30 p-3 active:scale-95 duration-300">
              <p classzName="text-white/70 text-sm  ">
                Customer Rating
              </p>
               <div className="flex items-center gap-2">
                <div className="flex text-yellow-300">
                  {/* <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> */}
                </div>
                <span>
                  4.8 (120 reviews)
                </span>
              </div>
            </div>

            <div className="border ms:hidden md:block md:flex md:w-[78%] md:rounded-xl border-white/20">
               
            </div>
            </div>



          </div>

          {/* ================= DELIVERY ================= */}

          <div className="border mx-2  bg-white/10 flex flex-col  border-white/20 rounded-xl mt-3 p-4">

            <h2 className="text-2xl  font-bold">
              Delivery & Return
            </h2>

            <div className="flex flex-col md:flex-row cursor-pointer  gap-1 md:gap-5 mt-3">

              <div className="flex  items-center gap-3 md:w-[50%]">

                <div className="bg-white/20 md:flex-row h-25 md:justify-center md:text-center  cursor-pointer  border w-full rounded-xl p-2 border-white/20 active:scale-95 duration-300 hover:scale-101">
                  <MdOutlineLocalShipping className="text-[30px] flex  md:text-[35px] " />
                  <h3 className="font-bold text-[] ">
                    Estimated Delivery
                  </h3>

                  <p className="text-white/70">
                    Delivery within 3–5 working days
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-3 md:w-[50%] md:justify-center">

                <div className='border md:text-center bg-white/0 w-full rounded-xl border-white/20 p-2 active:scale-95 duration-300 hover:scale-101'>
                  <MdOutlineKeyboardReturn className="text-[30px] flex " />
                  <h3 className="font-bold">
                    Return Policy
                  </h3>

                  <p className="text-white/70">
                    Easy return available within 7 days
                  </p>
                </div>
              </div>

            </div>

          </div>



          {/* ================= PRODUCT DESCRIPTION ================= */}

          <div className="border bg-white/20 mx-2 border-white/20 rounded-xl mt-3 p-4">

            <h2 className="text-2xl font-bold">
              Product Description
            </h2>

            <p className="mt-2 text-white/80 leading-relaxed">
              This is a high-quality product designed for everyday use.
              It provides a comfortable experience with a clean and modern
              design. Product details, material, specifications and other
              information can be displayed here.
            </p>

          </div>



          {/* The button for Buy and Add to Cart */}
          <div className="sticky px-1  gap-2 bottom-0 z-50 active:bg-[#59ff0077] mt-2 border border-white/20 rounded-t-xl bg-white/80 {bg-[#8857ad]} flex items-center h-20 w-full">

           <div className="add-button shadow gap-2  border border-white/20 bg-white/98 rounded-xl p-1 h-[70%] w-[50%] text-center flex justify- items-center active:scale-95 ">
              <MdAddShoppingCart className="text-[35px] " />
              <h2 className="text-[15px] uppercase">add in list</h2>
           </div>

           <div className="add-button shadow   flex-col border border-white/75 bg-[#f6c104d2] rounded-xl p-1 h-[70%] w-[50%] text-center flex justify- items-center active:scale-95 ">
              {/* <MdAddShoppingCart className="text-[35px] " /> */}
              <h3 className="text-[15px] uppercase">buy now</h3>
              <h2 className="">$999</h2>
           </div>
           
          </div>

        </div>

      </div>


    </>
  );
};

export default CardTheDetail;
