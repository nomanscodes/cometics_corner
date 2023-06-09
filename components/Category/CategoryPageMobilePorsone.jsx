import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


const CategoryPageMobilePorsone = () => {

    const [short, setShort] = useState(false)

    return (
        <div className='bg-white relative'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-[2px]  text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
                    <Link href={""} className='uppercase'>Home</Link>
                    <FiChevronRight size={14} />
                </div>
                <div className='flex items-center gap-[2px] text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <Link href={""} className='uppercase'>Beauty and face</Link>
                    <FiChevronRight size={14} />
                </div>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                <h1 className='text-sm font-medium opacity-80 uppercase'>Mackup</h1>
                <span className='text-xs opacity-60'>(Showing 1 – 24 products of 7,993 products)</span>
            </div>
            <div className='flex items-center gap-2 mt-2 uppercase '>
                <span onClick={() => setShort(true)} className='flex items-center border border-bgColor gap-1 p-1 rounded-md'>
                    <h1 className='text-xs'>short by</h1>
                    <HiOutlineChevronDown size={16} />
                </span>

                <div className={`fixed bottom-0 z-50 ${short ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                    <div onClick={() => setShort(false)} className='bg-black/70 h-full w-full'>

                    </div>
                    <div className='bg-green-600 h-44'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPageMobilePorsone