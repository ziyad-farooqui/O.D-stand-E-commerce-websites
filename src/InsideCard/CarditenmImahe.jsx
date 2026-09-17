import React from 'react'

const CarditenmImahe = () => {
  return (
    <div className='relative sticky top-11'>

      {/*the product image bar  for laptop*/}
      <div className="item-images-bar ms:hidden md:block flex sticky top-11  border-black w-full md:h-[100%] h-screen justify-center">



        <div className="item-images-bar flex sticky top-11    border-black w-full md:h-[100%] h-screen justify-center p-">
          <div className="w-full   h-full flex flex-col  max-w-300 md:flex-row gap-2 p-2 justify-center">
            {/* Main Image */}
            <div className="border- border-white/40 bg-white/20 rounded-2xl w- md:w-[70%] h-100 flex justify-center items-center">
              <div className="bg-[#7D6AFF] rounded-2xl w-[90%] h-[90%] flex justify-center items-center">
                <h1 className="text-3xl font-bold text-white">
                  Product Image
                </h1>
              </div>
            </div>
            {/* Small Images */}
            <div className="p-2 border- border-white/40 bg-white/20 rounded-2xl w-full md:w-[30%] h-100 flex md:flex-col flex-row gap-2 overflow-auto">

              <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-104">
                Image 1
              </div>

              <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-104">
                Image 2
              </div>

              <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-104">
                Image 3
              </div>

              <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-104">
                Image 4
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Product Image Bar for mobile*/}
   



    </div>


  )
}

export default CarditenmImahe