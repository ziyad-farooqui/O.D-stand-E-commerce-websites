import React, { useState } from 'react'
import { TbSmartHome } from "react-icons/tb";

const InsideOderListBody = () => {
    const [selectedOption, setSelectedOption] = useState(0)

  return (
    <div className='border h-screen
    '>

        {/*the address show and can change */}
        <div className='theaddress rounded-xl bg-white/25 shadow-sm border-white/20 border mt-2 mx-2 p-1 '>
            <div className=' flex gap-1 items-center mb-1'>

            <TbSmartHome className=' text-[28px]' />

                <h1 className='uppercase text-[20px]'>delivery address :</h1>

                
            </div>
            <div className='border border-white/20 rounded-xl mb-2'>
                <input type="text" name="address" id="" value={'hii it you address?'}  className='p-1 uppercase w-full pl-1 text-white'/>
            </div>

            <button className='border  p- border-white/20 bg-[#afe0f5] shadow-sm rounded-full uppercase px-2 active:scale-95 duration-300'>
                change 
            </button>

            <div className=' flex items-start gap-5 mt-4 ml-[55%]'>
                <button
                    type='button border'
                    onClick={() => setSelectedOption(0)}
                    aria-label='Select regular delivery'
                    aria-pressed={selectedOption === 0}
                    className={`h-5 w-5 rounded-full border-2 ${selectedOption === 0 ? 'border-sky-400 bg-sky-400' : 'border-white/60'}`}
                />
                <div className=' flex flex- items-center gap-1'>
                    <button
                        type='button'
                        onClick={() => setSelectedOption(1)}
                        aria-label='Select gift'
                        aria-pressed={selectedOption === 1}
                        className={`h-5 w-5 rounded-full border-2 ${selectedOption === 1 ? 'border-sky-400 bg-sky-400' : 'border-white/60'}`}
                    />
                    <span className='text-sm uppercase'>gift</span>
                </div>
            </div>

        </div>

        <div className='border mt-2 mx-2 p-1 shadow-sm border-white/20 rounded-xl bg-white/25'>
            <div className=' flex gap-1 items-center mb-1'>

            <TbSmartHome className=' text-[28px]' />

                <h1 className='uppercase text-[20px]'>contact number :</h1>

                
            </div>
        </div>

    </div>
  )
}

export default InsideOderListBody