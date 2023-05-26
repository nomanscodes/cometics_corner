import React from 'react'
import VendorCart from './VendorCart'

const TopVendor = () => {
    return (
        <div className="px-2 md:px-6 mt-2">
            <h1 className='font-semibold text-lg md:text-2xl opacity-90'>TOP VENDOR</h1>
            <hr className='mt-[3px] md:mt-[6px]' />
            <div className='CatCarousel flex items-center justify-start overflow-x-auto scroll-smooth mt-4 gap-3'>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
                <div>
                    <VendorCart />
                </div>
            </div>
        </div>
    )
}

export default TopVendor
