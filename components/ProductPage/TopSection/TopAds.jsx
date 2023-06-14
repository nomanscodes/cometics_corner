import Link from 'next/link'
import React from 'react'


const TopAds = () => {
    return (
        <Link href={''} className='grid grid-cols-7 bg-white px-6 border-b shadow-sm'>
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
    )
}

export default TopAds