import React from 'react'

const CompareCard = () => {
  return (
    <div className='w-64 pb-2'>
      <picture>
        <img src="/demo/p/p3.avif" className='h-72 w-full' alt="" />
      </picture>
      <div className='text-sm font-[450] mt-2 text-gray-900 hover:underline duration-300'>Amazon Basics Silky Smooth Body Wash, Peach & Orange Blossom Scent, 18 Fl Oz</div>
      <button className='capitalize text-sm font-medium bg-bgColor p-[6px] mt-3 rounded text-white'>add to cart</button>
    </div>
  )
}

export default CompareCard