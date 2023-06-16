import Link from 'next/link'
import React from 'react'


const TopAds = () => {
    return (
        <div>
            <Link href={''} className=' hidden md:grid grid-cols-7 bg-white px-6 border-b shadow-sm'>
                <div className="col-span-1 flex items-center place-content-center">
                    <picture>
                        <img className='h-7' src="https://m.media-amazon.com/images/I/21dG-WCc30L.jpg" alt="" />
                    </picture>
                </div>
                <div className='col-span-4 flex items-center'>
                    <h3 className=' text-xs font-medium opacity-80'>Alexa voice shopping enabled: to place your next order, just say, “Alexa, reorder Amazon Basics Body Wash to place your next order,</h3>
                </div>
                <div className='col-span-2 place-content-center flex items-center gap-6'>
                    <span className='flex items-center gap-2'>
                        <picture className='flex items-start gap-1'>
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                        </picture>
                        <h3 className='text-xs font-medium opacity-70'>346</h3>
                    </span>
                    <span className='text-sm font-semibold ml-2 text-amber-500'>TK 675</span>
                    <div className=''>
                        <picture>
                            <img src="/demo/p/p2.avif" alt="" className='h-10' />
                        </picture>
                    </div>
                </div>
            </Link>
            <Link href={""} className='flex items-center justify-between md:hidden gap-3 px-2 py-[4px] bg-[#f6f5f0] shadow'>
                <picture>
                    <img src="/demo/p/p1.avif" alt="" className='w-8 h-9 rounded-sm ' />
                </picture>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xs font-[400] ellipsisText'>Good molecules Ultra-Hydrating Facial Oil molecules Ultra-Hydrating Facial Oil</h1>
                    <h3 className='text-xs font-medium text-bgColor'>&#2547; 387</h3>
                </div>
                <span className='flex flex-col mr-1'>
                    <h2 className='text-xs font-medium text-green-800'>25%</h2>
                    <h1 className='text-xs font-medium text-green-800'>Off</h1>
                </span>
            </Link>
        </div>
    )
}

export default TopAds