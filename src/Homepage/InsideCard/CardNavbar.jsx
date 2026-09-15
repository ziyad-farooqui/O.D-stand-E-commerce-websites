import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineAccountCircle, MdExpandMore } from "react-icons/md";
import { useState } from "react";

const CardNavbar = () => {
    //   const [itemsName, setItemsName] = useState("Item Name");
      const [openMore, setOpenMore] = useState(false);
    //   const [colorName, setcolorName] = useState('');
    


    const gotoHome = useNavigate();
    const goHomeLogo = () => {
      gotoHome("/");
    }
    
      const handleMouseEnter = () => { openMore(true); }
      const handleMouseLeave = () => { openMore(false); }
    
      {/*the back function for going back to the previous page */ }
      const backfromitem = useNavigate();
      const backfrom = () => {
        backfromitem(-1);
      }
    
      {/*the function for going to the list page */ }
      const gotolist = useNavigate();
      const gotolistpage = () => {
        gotolist("/");
      }
    
      {/*the function for going to the account page */ }
      const gotoaccount = useNavigate();
      const gotoaccountpage = () => {
        gotoaccount("/");
      }

  return (
        
         <div className=' item-nev sticky top-0 rounded-  flex items-center justify-center bg-gradient-to-b from-[#68B9DD] from-10% to-[##68B9DD] to-100%  border- border-pink-200 w-full  h-auto '>
           <div className='gap- md:border-2 md:rounded-full border-white/20 shadow-md max-w-300 relative justify- flex w-full h-10 md:h-11 items-center  md:justify-between px-2'>
            {/*the back button icon*/}
             <IoIosArrowBack onClick={backfrom} className="border- text-[28px] text-black absolute left-2 md:left-3" />
   
            <div className=' the-logo border- flex md:ml-10 ml-5 mb-1 h-10 w-15' >
              <img  onClick={goHomeLogo } src="public\bg-for-HeaderHome.png" alt="" />
            </div>

    
              {/*the d.p showing and linke for go profile page icone*/}
             <MdOutlineAccountCircle onClick={gotoaccountpage} className=" ms:hidden md:block absolute right-43  border- md:text-[40px] text-[30px] text-black font-light" />
   
             <div onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={() => setOpenMore(!openMore)} className="themore ml-15 cursor-pointer border-2  gap- w-25 h-7 rounded-full flex mr-10 md:mr-15 justify-center uppercase">
               more
               {openMore ? <MdExpandMore className='rotate-180 border-  text-[25px] ' /> : <MdExpandMore className=' border-  text-[25px] ' />}
             </div>


            {/*the card page linke icon*/}
             <RiShoppingCartLine onClick={gotolistpage} className="border- text-black text-[28px] absolute right-2 md:right-3 " />
           </div>
   
   
         </div>
  )
}

export default CardNavbar