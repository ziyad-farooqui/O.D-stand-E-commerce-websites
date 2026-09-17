import React from 'react'

const CardImageforMobile = () => {
  return (
    <div className="relative sticky top-10 md:hidden">

      <div className="w-full p-2">

        <div className="border-2 border-white/40  bg-white/20 rounded-2xl w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth">

          <div className="min-w-full h-100 snap-center flex justify-center items-center p-4">
            <div className="bg-[#7D6AFF] rounded-2xl w-[100%] h-[100%] flex justify-center items-center">
              <h1 className="text-3xl font-bold text-white">
                Image 1
              </h1>
            </div>
          </div>

          <div className="min-w-full h-100 snap-center flex justify-center items-center p-4">
            <div className="bg-[#68B9DD] rounded-2xl w-[90%] h-[90%] flex justify-center items-center">
              <h1 className="text-3xl font-bold text-white">
                Image 2
              </h1>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CardImageforMobile