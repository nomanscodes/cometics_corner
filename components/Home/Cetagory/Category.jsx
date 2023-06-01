import React, { useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import CategoryCart from './CategoryCard';

const catData = [
  {
    id: 1,
    image: "/demo/c/c1.jpg",
    name: "Eyes"
  },
  {
    id: 2,
    image: "/demo/c/c2.avif",
    name: "Hand Wash"
  },
  {
    id: 3,
    image: "/demo/c/c3.avif",
    name: "Nails"
  },
  {
    id: 4,
    image: "/demo/c/c4.avif",
    name: "Hair Care"
  },
  {
    id: 1,
    image: "/demo/c/c1.jpg",
    name: "Eyes"
  },
  {
    id: 2,
    image: "/demo/c/c2.avif",
    name: "Hand Wash"
  },
  {
    id: 3,
    image: "/demo/c/c3.avif",
    name: "Nails"
  },
  {
    id: 4,
    image: "/demo/c/c4.avif",
    name: "Hair Care"
  },
  {
    id: 1,
    image: "/demo/c/c1.jpg",
    name: "Eyes"
  },
  {
    id: 2,
    image: "/demo/c/c2.avif",
    name: "Hand Wash"
  },
  {
    id: 3,
    image: "/demo/c/c3.avif",
    name: "Nails"
  },
  {
    id: 4,
    image: "/demo/c/c4.avif",
    name: "Hair Care"
  },
  {
    id: 2,
    image: "/demo/c/c2.avif",
    name: "Hand Wash"
  },
  {
    id: 3,
    image: "/demo/c/c3.avif",
    name: "Nails"
  },
  {
    id: 4,
    image: "/demo/c/c4.avif",
    name: "Hair Care"
  },
  {
    id: 2,
    image: "/demo/c/c2.avif",
    name: "Hand Wash"
  },
  {
    id: 3,
    image: "/demo/c/c3.avif",
    name: "Nails"
  },
  {
    id: 4,
    image: "/demo/c/c4.avif",
    name: "Hair Care"
  },
]



const Category = () => {

  const scrollLeft = () => {
    document.getElementById("carouselContent").scrollLeft -= 600
  }
  const scrolRight = () => {
    document.getElementById("carouselContent").scrollLeft += 600
  }

  return (
    <div className='md:px-6 relative mt-2 md:mt-4 font-poppins '>
      <div className='flex items-center justify-between '>
        <div className='px-2 md:px-0 flex items-center'>
          <h1 className='font-semibold text-sm opacity-90'>SHOP BY CETEGORY</h1>

        </div>
        <div className='hidden md:flex items-center gap-2 text-white'>
          <button onClick={scrollLeft} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronLeft size={18} />
          </button>
          <button onClick={scrolRight} className='bg-bgColor px-1 md:px-2 md:py-1'>
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
      <div id='carouselContent' className='CatCarousel flex items-center justify-start gap-4 md:gap-8 overflow-x-auto 
      scroll-smooth mt-2 md:mt-4'>
        {catData.map((item) => (
          <div key={item.id}>
            <CategoryCart item={item} />
          </div>
        ))}

      </div>


    </div>

  )
}

export default Category