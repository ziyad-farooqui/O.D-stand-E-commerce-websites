import React, { useState } from 'react'
import { TbSmartHome } from "react-icons/tb";
import { FaBlenderPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import InsideOderListItems from './InsideOderListItems';

const InsideOderListBody = () => {
    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <div className=' h-screen
    '>

            {/*the address show and can change */}
            <div className='theaddress rounded-xl bg-white/25 shadow-sm border-white/20 border mt-2 mx-2 p-1 '>
                <div className=' flex gap-1 items-center mb-1'>

                    <TbSmartHome className=' text-[28px]' />

                    <h1 className='uppercase text-[20px]'>delivery address :</h1>


                </div>
                <div className='border border-white/20 rounded-xl mb-2'>
                    <input type="text" name="address" id="" value={'hii it you address?'} className='p-1 uppercase w-full pl-1 text-white' />
                </div>

                <button className='border  p- border-white/20 bg-sky-400 shadow-sm rounded-full uppercase px-2 active:scale-95 duration-300'>
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

            {/*the contact deatailes*/}
            <div className='border mt-2 mx-2 p-1  shadow-sm border-white/20 rounded-xl bg-white/25'>
                <div className=' flex gap-1 items-center mb-1'>

                    <FaBlenderPhone className=' text-[25px]' />

                    <h1 className='uppercase text-[20px]'>contact number :</h1>


                </div>

                <div className='border border-white/20 rounded-xl mb-5'>
                    <input type="number" name="address" id="" value={'1255564894154654'} className='p-1 uppercase w-full pl-1 text-white' />
                </div>

                <div className=' flex gap-1 items-center mb-1'>

                    <MdMarkEmailUnread  className=' text-[25px]' />

                    <h1 className='uppercase text-[20px]'>E-mail :</h1>


                </div>
                <div className='border border-white/20 rounded-xl mb-2'>
                    <input type="email" name="address" id="" value={'ziyad@.com'} className='p-1 uppercase w-full pl-1 text-white' />
                </div>

            </div>

            {/*the list*/}
            <div className='border bg-white/25 mx-2 mt-2 border-white/20 p-1 rounded-xl'>
                <InsideOderListItems/>
            </div>

                {/*the totale price and itmes show*/}
            <div className='border flex-col bg-white/25 mx-2 mt-2 justify-between border-white/20 p-1 rounded-xl
             '>

                <div className=' text-[20px] uppercase ml-1  '> items:   </div>

                <div className=' text-[20px] uppercase ml-1  '>total price:   </div>

            </div>


            {/*the oder button*/}
            <div className='bg-sky-500 border  mx-2 mt-2 border-white/20 p-1 rounded-xl
             active:scale-95 duration-300'>

                <button className='border w-full h-10 p- rounded-xl border-white/30  text-[30px] flex items-center justify-center uppercase
               '>
                oder now
                </button>

            </div>



        </div>
    )
}

export default InsideOderListBody