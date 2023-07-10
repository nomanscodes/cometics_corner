import Link from 'next/link'
import React from 'react'


const StartAffiliate = () => {
  return (
    <>
      <div className='bg-white border shadow-sm p-3'>
        <h3 className=' text-green-700 text-[18px] font-semibold'>Congrats, Mr Abul Kalam</h3>
        <h3 className='text-[16px] font-semibold text-zinc-800 mt-3'>Thank you for applied to the
          Amazon.com affiliate program </h3>
        <h3 className='text-[16px] font-semibold text-zinc-700 mt-4'>
          Your unique affiliate ID is <span className='uppercase text-bgColor px-2'>4245-g5</span>
        </h3>
        <div className='mt-4'>
          <p className='text-[14px] font-medium mt-4 text-zinc-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?  unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?</p>

          <p className='text-[14px] font-medium mt-4 text-zinc-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis </p>

          <p className='text-[14px] font-medium mt-4 text-zinc-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias? quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?</p>
          <p className='text-[14px] font-medium mt-4 text-zinc-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis </p>

          <p className='text-[14px] font-medium mt-4 text-zinc-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias? quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?</p>
        </div>
      </div>
      <div className='bg-white border shadow-sm p-3 mt-3'>
        <h3 className='text-[16px] font-semibold text-zinc-800'>Enter your payment and text information</h3>
        <div className='flex items-center gap-4 mt-2'>
        <h1 className='px-6 py-2 text-white bg-bgColor md:cursor-pointer'>Now</h1>
        <h1 className='px-6 py-2 border border-gray-400 md:cursor-pointer'>Later</h1>
        </div>
      </div>
    </>
  )
}

export default StartAffiliate