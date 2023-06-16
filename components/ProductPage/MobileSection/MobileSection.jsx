import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'


const MobileSection = () => {
    return (
        <div className='py-2 px-1'>
            <ImageSlider />
            <hr className='mt-[1px] opacity-70'/>
            <div className='mt-2 px-2'>
                <Link href={""} className='text-xs font-[400] text-bgColor'>View more from SEUNG</Link>
            </div>
        </div>
    )
}

export default MobileSection