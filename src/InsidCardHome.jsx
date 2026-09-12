import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineAccountCircle , MdExpandMore} from "react-icons/md";
import { useState } from "react";


const InsidCardHome = () => {
    const [itemsName, setItemsName] = useState("Item Name");
    const [openMore, setOpenMore] = useState(false);
    const [colorName, setcolorName] = useState('');



    const handleMouseEnter = () => {openMore(true);}
    const handleMouseLeave = () => {openMore(false);}

  {/*the back function for going back to the previous page */}
  const backfromitem = useNavigate();
  const backfrom = () => {
    backfromitem(-1);
  }
  
  {/*the function for going to the list page */}
  const gotolist = useNavigate();
  const gotolistpage = () => {
    gotolist("/");
  }

  {/*the function for going to the account page */}
  const gotoaccount = useNavigate();
  const gotoaccountpage = () => {
    gotoaccount("/");
  }



  return (
    <div className="border  border-gray-500 bg-gray-300 h-screen w-full flex flex-col ">




      {/*the nevbar in item*/}
      <div className=' item-nev  flex items-center justify-center bg-gradient-to-b from-[#68B9DD] from-10% to-[##68B9DD] to-100%  border- border-pink-200 w-full md:h-[7%] h-[5%] '>

      <div className=' md:border-2 border-white/20 shadow-md max-w-300 relative justify-center flex w-full h-full items-center justify-between px-2'>
        <IoIosArrowBack onClick={backfrom} className="border- text-[28px] text-black absolute left-2"/>


        <MdOutlineAccountCircle onClick={gotoaccountpage} className="md:mr-10 mr-2 border- md:text-[45px] text-[30px] text-black" />

       <div onMouseEnter={handleMouseEnter} 
       onMouseLeave={handleMouseLeave} 
       onClick={() => setOpenMore(!openMore)} className="themore border-2 gap- w-25 h-7 rounded-full flex justify-center uppercase"> 
                              more 
        {openMore ? <MdExpandMore className='rotate-180 border-  text-[25px] '/> : <MdExpandMore className=' border-  text-[25px] '/>}
        </div>

        <RiShoppingCartLine onClick={gotolistpage} className="border- text-black text-[28px] absolute right-2 "/> 
      </div>


      </div>




      <div className='item-images-bar border-2 border-black w-full h-[60%]'>

      </div>


    <div className='thedetails-bar flex justify-center border- relative z-10 -top-5 w-full h-auto rounded-t-[20px]
     bg-gradient-to-b from-[#68B9DD] from-10% via-[#6AB8E0] via-30% via-[#227EB3] via-50% via-[#0E5990] via-70% via-[#532499] via-80% to-[#2b353c] to-%100  '>

    <div className='md:border-2 border-white/30 shadow-md  md:max-w-300 w-full '>

     <div className="product-Name rounded-full mt-10 border-3  border-white/20 flex  w-full h-10 items-center justify-center text-[25px] ">
     {itemsName}
     </div>

    {/*the color name  */}
     <div className='prodect-color mt-2 border- h-50  justify-center items-center md:gap- border-white/50 flex flex-col md:flex-row font-bold text-[20px] '>
    <h1 className='border-  md:w-40 w-full' > Selected Color:</h1>  

     <div className='color_options border-2  border-white/20 h-50 w-full rounded-lg  md:w-250 ml-'>

     </div>

     </div>
    

    </div>
    </div>

    </div>
  );
};

export default InsidCardHome; 
