import React from 'react'

const AdsSection = () => {
    return (
        <div className='px-2'>
            <div style={{ backgroundImage: `url("/demo/ds/ds3.avif")` }} className='hidden md:flex items-center justify-center  mt-3 md:mt-6  fitImage h-[180px]'>

            </div>
            <div style={{ backgroundImage: `url("/demo/ds/ds3.avif")` }} className='flex items-center justify-center md:hidden mt-3 md:mt-6 fitImage h-[100px]'>

            </div>
        </div>
    )
}

export default AdsSection