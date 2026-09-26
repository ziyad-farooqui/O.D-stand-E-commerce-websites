import React from 'react'

const CardForProductPage = () => {
  return (
    <>

    <div className=' w-23 md:w-55 md:h-65 h-40 border-white/ md:shadow-sm active:scale-95 duration-300 hover:scale-105 '>
        <div className='product-image border h-[60%] border-white/20 bg-[#1111] rounded-t-sm'>
            <img src='image1.png'/>
        </div>
        <div className='product-ditail p-1  h-[40%]  flex flex-col  rounded-b-sm'>
            <span className=' w-full h-8  md:text-[20px]  truncate uppercase'>product name</span>
            <h2 className='product-price  h-12 md:h-10 text-[20px] md:text-[25px]   flex items-center justify-center'>$999</h2>
        </div>
    </div>



    </>
  )
}

export default CardForProductPage