import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'


const MobileSection = () => {
    return (
        <div className='py-2 px-2'>
            <ImageSlider />
            <div className='mt-[3px] py-[4px]  bg-white'>
                <Link href={""} className='text-[11px] font-medium text-green-700'>View more from Blue Earth</Link>
                <h2 className='text-[13px] font-medium opacity-90 mt-1'>Basics Silky Smooth Body Wash, Peach & Orange Blossom Scent, 18 Fl Oz</h2>
                <span className='flex items-center gap-2 mt-1'>
                    <picture className='flex items-center gap-1'>
                        <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                    </picture>
                    <h5 className='text-[11px] font-medium text-green-700'> 393 rating</h5>
                </span>
                <span className='flex items-center gap-2 mt-1'>
                    <h4 className='text-[14px] font-medium text-green-700'>35% off</h4>
                    <h4 className='text-[14px] font-medium text-gray-600 line-through'>574</h4>
                    <h4 className='text-[14px] font-medium '>&#2547;798</h4>
                </span>
            </div>
            <div className='mt-1 bg-white py-1'>
                <button className='w-full py-1 bg-bgColor text-white text-sm font-medium rounded-lg'>Add To Cart</button>
                <button className='w-full py-1 bg-yellow-600 text-white text-sm font-medium rounded-lg mt-2'>Buy Now</button>
            </div>
        </div>
    )
}

export default MobileSection