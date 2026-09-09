import React from 'react'

const Card = () => {
  return (
    <>
     <div className={`theitem flex-shrink-0 border border-[#b4c3cb] bg-[#BDC6CE] h-96 w-72 max-w-80 md:max-w-80 rounded-2xl p-1 flex flex-col gap-1 items-center mb-25 `}>

        {/* Upar wala box */}

        <div className="border bg-[#7D6AFF] border-white w-full h-[50%] rounded-2xl">
        </div>


        {/* Niche wala box */}

        <div className="border border-white w-full h-[50%] rounded-b-2xl">

          <div className="border bg-[#EEEEEE] h-10 w-full mt-2 rounded-2xl">

            <h1 className="text-[25px] pl-2 uppercase font-bold">
              Item Title
            </h1>

          </div>


          <div className="border-2 bg-[#EEEEEE] text-[15px] h-6 w-full mt-2 rounded-2xl text-center">

            RATING WITH STARS

          </div>


          <div className="border-2 bg-[#EEEEEE] h-24 w-full mt-2 rounded-2xl">

            <p className="text-[18px] pl-2">
              Item Description
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default Card