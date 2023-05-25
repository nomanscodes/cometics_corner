import React from 'react'

const AdsSection = () => {
    return (
        <div className='container mx-auto p-2 md:p-0 md:flex md:items-center  md:justify-center gap-5 md:mt-6 '>
            <picture>
                <img className='hidden md:block rounded' src="/assets/Slider/ads2.png" alt="" />
            </picture>
            <picture>
                <img className=' rounded' src="/assets/Slider/ads2.png" alt="" />
            </picture>
        </div>
    )
}

export default AdsSection