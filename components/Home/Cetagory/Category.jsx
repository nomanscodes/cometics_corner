import React from 'react'
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
    <div className='container mx-auto relative mt-4 font-poppins md:px-0'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-7'>
          <h1 className='font-bold text-xl md:text-3xl opacity-90'>Browse by Category</h1>
          <Link href={""} className='hidden md:flex items-center gap-1 group  '>
            <h1 className='font-medium group-hover:text-bgColor duration-300'>All Category</h1>
            <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={scrollLeft} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronLeft size={18} />
          </button>
          <button onClick={scrolRight} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
      <div id='carouselContent' className='CatCarousel flex items-center justify-start overflow-x-auto 
      scroll-smooth'>
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