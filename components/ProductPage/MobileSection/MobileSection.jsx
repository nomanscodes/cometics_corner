import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'


const MobileSection = () => {
    return (
        <div className='py-2 px-1'>
            <ImageSlider />
            <hr className='mt-[1px] opacity-80' />
            <div className='mt-2 px-2'>
                <div>
                    <Link href={""} className='text-xs font-[400] text-green-800'>View more from SEUNG</Link>
                    <h2 className='text-[13px] font-medium opacity-90 mt-1'>Basics Silky Smooth Body Wash, Peach & Orange Blossom Scent, 18 Fl Oz</h2>
                    <span className='flex items-center gap-2 mt-2'>
                        <picture className='flex items-center gap-1'>
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                            <img src="/SVG/star.svg" className='h-3' alt="" />
                        </picture>
                        <h5 className='text-[11px] font-medium text-green-800'> 393 rating</h5>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default MobileSection