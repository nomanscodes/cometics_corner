import Link from 'next/link'
import React from 'react'

const CategoryCart = () => {
    return (
        <Link href={"/category"} className='text-bgColor flex flex-col items-center gap-2 '>

            <div className='h-14 md:h-16 w-14 md:w-16 rounded-full flex items-center justify-center overflow-hidden'>
                <picture>
                    <img className='w-full h-full' src="/product1.avif" alt="" />
                </picture>
            </div>
            <p className='text-xs md:text-sm font-semibold whitespace-nowrap'>Skin Care</p>
        </Link>
    )
}

export default CategoryCart