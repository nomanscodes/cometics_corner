import Link from 'next/link'
import React from 'react'

const CategoryCart = () => {
    return (
        <Link href={"/category"} className='text-bgColor 
        file:transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 flex flex-col items-center gap-2'>

            <div className='bg-[#a1d3f5] h-24 w-24 rounded-full flex items-center justify-center'>
                <picture>
                    <img src="/skincare.png" alt="" />
                </picture>
            </div>
            <p className='text-sm font-semibold'>Skin Care</p>
        </Link>
    )
}

export default CategoryCart