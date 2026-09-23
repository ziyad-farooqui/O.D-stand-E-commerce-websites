import React from 'react'
import CardForProductPage from './CardForProductPage'

const ProductPageBody = () => {
  return (
    <>
    <div className='product-body pt- h-screen 
    '>

    <div className=' flex px-3 gap-3 mb-5'>
        <CardForProductPage />
        <CardForProductPage />
        <CardForProductPage />
        
    </div>
    <div className=' flex px-3 gap-3 mb-5'>
        <CardForProductPage />
        <CardForProductPage />
        <CardForProductPage />
        
    </div>

    <div className=' flex px-3 gap-3 mb-5'>
        <CardForProductPage />
        <CardForProductPage />
        <CardForProductPage />
        
    </div>

    </div>
    </>
  )
}

export default ProductPageBody