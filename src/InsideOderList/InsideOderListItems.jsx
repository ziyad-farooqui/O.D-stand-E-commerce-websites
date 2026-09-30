import React from 'react'

const InsideOderListItems = () => {
    return (
        <>
            <div className='mb-1'>

                <div className='border rounded-xl flex border-white/30 bg-white/20 shadow  '>
                    <div className='border border-white/20 w-12 rounded-xl h-12'>
                        <img src="image.jpg" alt="" />
                    </div>

                    <h1 className=' flex items-center uppercase w-41 pl-1 text-[20px] '>
                        name
                    </h1>



                    <div className='border-l-1 border-white/20 gap-2 w-20 flex items-center  justify-center rounded-r-xl'>
                        {/* <span className='border h-5 w-5 rounded-full items-center flex justify-center text-[15px] scale-105 active:scale-95 duration-300'  >-</span>
                        <h1 className='mb-1 text-[20px]'>1</h1>
                        <span className='border h-5 w-5 rounded-full items-center flex justify-center text-[15px] scale-105 active:scale-95 duration-300'  >+</span> */}
                        <h1 className='text-[#77ff00] text-[25px]'>
                                $999
                        </h1>
                    </div>



                </div>

            </div>
        </>
    )
}

export default InsideOderListItems