import React, { useEffect } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import TopBrandCard from './TopBrandCard'


const TopBrand = () => {

    const scrollLeft = () => {
        document.getElementById("brandContent").scrollLeft -= 600
    }
    const scrolRight = () => {
        document.getElementById("brandContent").scrollLeft += 600
    }

    return (
        <div className='md:px-6 relative mt-2 md:mt-4 font-poppins '>
            <div className='flex items-center justify-between '>
                <div className='px-2 md:px-0 flex items-center '>
                    <h1 className='font-semibold text-sm opacity-90'>TOP BRAND</h1>
                    {/* <Link href={""} className='hidden md:flex items-center gap-1 group  '>
                        <h1 className='font-medium text-xs group-hover:text-bgColor duration-300'>All Brand</h1>
                        <FaLongArrowAltRight className='group-hover:text-bgColor duration-300' size={22} />
                    </Link> */}
                </div>
                <div className='hidden md:flex items-center gap-2 text-white'>
                    <button onClick={scrollLeft} className='bg-bgColor px-1 md:px-2 md:py-1'>
                        <FiChevronLeft size={18} />
                    </button>
                    <button onClick={scrolRight} className='bg-bgColor px-1 md:px-2 md:py-1'>
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>
            <div id='brandContent' className='CatCarousel flex items-center justify-start gap-4 md:gap-8 overflow-x-auto 
             scroll-smooth mt-2 md:mt-4'>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
                <div>
                    <TopBrandCard />
                </div>
            </div>
        </div>

    )
}

export default TopBrand
