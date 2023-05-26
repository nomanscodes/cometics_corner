import Link from 'next/link'
import React from 'react'

const CategoryCart = () => {
    return (
        <Link href={""} className='text-bgColor relative file:transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105  shadow-bgColor shadow-lg'>
            <picture>
                <img className='w-32 h-24 rounded-t-md ' src="/vendorImage.avif" alt="" />
            </picture>
            <div className='bg-white w-32 py-[1px] px-[2px] rounded-b-md'>
                <h5 className='font-poppins font-medium text-lg mb-2 '>Mackup</h5>
            </div>
        </Link>
    )
}

export default CategoryCart