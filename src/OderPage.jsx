import React from 'react'
import OderPageNav from './OrderPage/OderPageNav'
import OrderPageBodyProfile from './OrderPage/OrderPageBodyProfile'
import OderPageBodyList from './OrderPage/OderPageBodyList'
import OderPageAddress from './OrderPage/OderPageAddress'

const OderPage = () => {
  return (
    <>
    <OderPageNav/>
    <div className=' h-screen
    bg-gradient-to-b  from-[#bcbcbc]  from-0% via-35% to-[#1c1c1e] to-85%'>

    <OrderPageBodyProfile/>

    <OderPageBodyList />

    <OderPageAddress/>

    
    </div>
    </>
  )
}

export default OderPage