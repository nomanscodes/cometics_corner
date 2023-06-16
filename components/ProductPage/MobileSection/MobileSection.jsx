import React from 'react'
import ImageSlider from './ImageSlider'


const MobileSection = () => {
    return (
        <div className='py-2 px-1'>
            <ImageSlider />
            <div className='mt-2 px-2'>
                <h4 className='text-xs font-medium text-bgColor'>View more from SEUNG</h4>
            </div>
        </div>
    )
}

export default MobileSection