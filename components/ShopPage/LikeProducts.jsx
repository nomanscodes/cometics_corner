import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"
import ProductCart from '../Home/Products/ProductCard'

const LikeProducts = () => {
  return (
    <div className=' px-2 md:px-6 mt-4 font-poppins mb-2'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-lg md:text-2xl opacity-90'>PRODUCT YOU MAY ALSO LIKE</h1>
        <Link href={""} className='hidden md:flex items-center gap-1 group  '>
          <h1 className='font-medium group-hover:text-bgColor duration-300'>More products</h1>
          <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
        </Link>
      </div>
      <hr className='mt-[3px] md:mt-[6px]' />
      <div className=' grid
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  )
}

export default LikeProducts
