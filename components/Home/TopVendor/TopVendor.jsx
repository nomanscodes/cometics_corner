import React from 'react'
import VendorCart from './VendorCart'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const TopVendor = () => {

    const scrollLeft = () => {
        document.getElementById("carouselVendor").scrollLeft -= 600
    }
    const scrolRight = () => {
        document.getElementById("carouselVendor").scrollLeft += 600
    }

    return (
        <div className="px-2 md:px-6 mt-4 relative font-poppins ">
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h1 className='font-semibold text-sm md:text-2xl opacity-90'>TOP VENDOR</h1>
                </div>
                <div className='hidden md:flex items-center gap-2 text-white '>
                    <button onClick={scrollLeft} className='bg-bgColor px-1 md:px-2 md:py-1'>
                        <FiChevronLeft size={18} />
                    </button>
                    <button onClick={scrolRight} className='bg-bgColor px-1 md:px-2 md:py-1'>
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>
            <hr className='mt-[3px] md:mt-[6px]' />
            <div id='carouselVendor' className='carouselVendor flex items-center justify-start overflow-x-auto scroll-smooth mt-4 gap-3'>
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
