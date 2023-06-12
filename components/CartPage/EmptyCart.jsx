import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'


const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
    <picture>
      <img src="/assets/emptycart.webp" alt="" />
    </picture>
    <div className='flex flex-col items-center gap-3'>
      <h3 className='uppercase text-base md:text-xl font-bold opacity-75'>opps! your cart is empty</h3>
      <span className='flex items-center gap-1'>
        <h3 className='uppercase text-sm md:text-base font-bold opacity-75'>going to </h3>

        <span>
          <Link className='flex ' href={"/shop"}>
            <button className='px-2 md:px-3 py-[2px] md:py-1 pl-8 bg-bgColor text-white uppercase relative text-sm'>shopping</button>
            <FaLongArrowAltRight size={22} className='absolute mt-[3px] md:mt-[5px] ml-[3px] text-white' />
          </Link>
        </span>
      </span>
    </div>
  </div>
  )
}

export default EmptyCart