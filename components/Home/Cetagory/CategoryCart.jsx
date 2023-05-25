import Link from 'next/link'
import React from 'react'

const CategoryCart = () => {
    return (
        <Link href={""} className='text-orange-500 flex flex-col items-center justify-center bg-white shadow-xl h-28 w-32 md:h-36 md:w-40 rounded-md m-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105'>
            <picture>
                <img className=' h-16 w-20 md:w-32 md:h-24' src="/assets/cat/cat2.png" alt="" />
            </picture>
            <h5 className='font-poppins font-semibold text-lg mb-2'>Mackup</h5>
        </Link>
    )
}

export default CategoryCart