import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCart from './CategoryCart';

const Category = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  return (
    <div className='container mx-auto mt-6 font-poppins px-2 md:px-0'>
      <div className='flex items-center gap-7'>
        <h1 className='font-bold text-3xl opacity-90'>Browse by Category</h1>
        <Link href={""} className='hidden md:flex items-center gap-1 group  '>
          <h1 className='font-medium group-hover:text-bgColor duration-300'>All Category</h1>
          <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>
        <div className='mt-3'>
          <CategoryCart />
        </div>

      </Carousel>


    </div>

  )
}

export default Category