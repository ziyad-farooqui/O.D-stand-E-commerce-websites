import React from 'react'

const CarditenmImahe = () => {
  return (
    <div>


            {/*the product image bar */}
      <div className='item-images-bar ms:hidden md:block justify-center sticky top-0 border- border-black w-full md:h-[100%] h-screen flex justify-center'>
        <div className="w-full md:max-w-[1200px] h-full flex flex-col md:flex-row gap-2 p-2">
          {/* Main Image */}
          <div className="border-2 border-white/40 bg-white/20 rounded-2xl w-full md:w-[70%] h-100 flex justify-center items-center">
            <div className="bg-[#7D6AFF] rounded-2xl w-[90%] h-[90%] flex justify-center items-center">
              <h1 className="text-3xl font-bold text-white">
                Product Image
              </h1>
            </div>
          </div>
          {/* Small Images */} 
           <div className="p-  border-2 border-white/40 bg-white/20 rounded-2xl w-full md:w-[30%] h-full p-2 flex md:flex-col flex-row gap-2 overflow-auto">
            <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer">
              Image 1
            </div>
            <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer">
              Image 2
            </div>
            <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer">
              Image 3
            </div>
            <div className="pt-1 bg-[#EEEEEE] rounded-xl min-w-[100px] md:w-full h-24 flex justify-center items-center cursor-pointer">
              Image 4
            </div> 
          </div>
        </div>

      </div>


<div> {/* Product Image Bar */} <div className=" item-images-bar sticky top-0 border border-black w-full md:h-[100%] h-screen flex justify-center "> <div className=" w-full md:max-w-[1200px] h-full p-2 "> {/* ================= IMAGE SCROLLER ================= */} <div className=" border-2 border-white/40 bg-white/20 rounded-2xl w-full h-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth scrollbar-hide "> {/* Image 1 */} <div className=" min-w-full h-full snap-center flex justify-center items-center p-4 "> <div className=" bg-[#7D6AFF] rounded-2xl w-[90%] h-[90%] flex justify-center items-center "> <h1 className="text-3xl font-bold text-white"> Image 1 </h1> </div> </div> {/* Image 2 */} <div className=" min-w-full h-full snap-center flex justify-center items-center p-4 "> <div className=" bg-[#68B9DD] rounded-2xl w-[90%] h-[90%] flex justify-center items-center "> <h1 className="text-3xl font-bold text-white"> Image 2 </h1> </div> </div> {/* Image 3 */} <div className=" min-w-full h-full snap-center flex justify-center items-center p-4 "> <div className=" bg-[#532499] rounded-2xl w-[90%] h-[90%] flex justify-center items-center "> <h1 className="text-3xl font-bold text-white"> Image 3 </h1> </div> </div> {/* Image 4 */} <div className=" min-w-full h-full snap-center flex justify-center items-center p-4 "> <div className=" bg-[#2b353c] rounded-2xl w-[90%] h-[90%] flex justify-center items-center "> <h1 className="text-3xl font-bold text-white"> Image 4 </h1> </div> </div> </div> </div> </div> </div>





      
      </div>

  
  )
}

export default CarditenmImahe