import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

const InsideOderListItems = () => {
    return (
        <>
            <div className='mb-1'>

                <div className='border rounded-xl flex md:justify-between border-white/30 bg-white/20 shadow items-center md:h-18 p-1 gap-2 md:gap-0'>
                    <div className='border border-white/20 w-12  md:h-15 md:w-15 rounded-xl h-12'>
                        <img src="image.jpg" alt="" />
                    </div>

                    <h1 className=' flex items-center uppercase w-41 pl-1 text-[20px] md:text-[23px] '>
                        name
                    </h1>


                    <div className=' flex'>
                        <div className='border-l-1  border-white/20 gap-2 w-15  flex items-center  justify-center rounded-r-xl'>

                            <h1 className='text-[#77ff00] text-[25px]'>
                                $999
                            </h1>
                        </div>

                        <div className='md:block ms:hidden'>
                            <div className='border-l-1  border-white/20 gap-2 w-25 flex items-center  justify-center rounded-r-xl'>
                                <div className='border text-[25px] h-[25px] text-white/90 w-[25px] rounded-full hover:scale-105 bg-sky-500 cursor-pointer shadow border-white/20 items-center flex pb-1 justify-center text-[15px]  active:scale-95 duration-300'  >-</div>
                                <h1 className='mb-1 text-[20px]'>1</h1>
                                <div className='border text-[25px]  h-[25px] text-white/90 w-[25px] rounded-full  hover:scale-105 bg-sky-500 cursor-pointer shadow border-white/20 items-center flex pb-1 justify-center text-[15px]  active:scale-95 duration-300'  >+</div>
                            </div>
                        </div>

                        <div className='md:block ms:hidden'>
                        <div className='border-l border-white/20 px-1 text-red-500 cursor-pointer text-shadow  uppercase text-[19px] flex items-center justify-center rounded-r-xl '>
                            <h1 className='hover:scale-105 active:scale-95 duration-300'>remove</h1>
                        </div>
                        </div>

                        <div className='md:hidden ms:block '>
                            <div className='border-l border-white/20 px-1 text-[25px] h-full flex items-center text-red-500 active:scale-95 duration-300 justify-center rounded-r-xl '>
                            <CiCircleRemove className='' />
                            </div>
                        </div>



                    </div>



                </div>

            </div>
        </>
    )
}

export default InsideOderListItems