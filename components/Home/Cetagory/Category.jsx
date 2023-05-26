import React, { useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CategoryCart from './CategoryCart';

const Category = () => {

  const scrollLeft = () => {
    document.getElementById("carouselContent").scrollLeft -= 600
  }
  const scrolRight = () => {
    document.getElementById("carouselContent").scrollLeft += 600
  }

  return (
    <div className='px-2 md:px-6 relative md:mt-4 font-poppins '>
      <div className='hidden md:flex items-center justify-between '>
        <div className='flex items-center gap-7'>
          <h1 className='font-semibold text-lg md:text-2xl opacity-90'>SHOP BY CETEGORY</h1>
          <Link href={""} className='hidden md:flex items-center gap-1 group  '>
            <h1 className='font-medium group-hover:text-bgColor duration-300'>All Category</h1>
            <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
          </Link>
        </div>
        <div className='flex items-center gap-2 text-white'>
          <button onClick={scrollLeft} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronLeft size={18} />
          </button>
          <button onClick={scrolRight} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
      <div id='carouselContent' className='CatCarousel flex items-center justify-start gap-3 overflow-x-auto 
      scroll-smooth mt-4'>
        
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
        <div>
          <CategoryCart />
        </div>
      </div>


    </div>

  )
}

export default Category