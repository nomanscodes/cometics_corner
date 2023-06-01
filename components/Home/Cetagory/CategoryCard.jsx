import Link from 'next/link'
import React from 'react'

const CategoryCart = ({ item }) => {
    return (
        <Link href={"/category"} className='text-bgColor flex flex-col items-center gap-2 '>

            <div style={{ backgroundImage: `url(${item.image})` }} className='h-14 md:h-16 w-14 md:w-16 rounded-full flex items-center justify-center overflow-hidden fitImage'>

            </div>
            <p className='text-xs md:text-sm font-semibold whitespace-nowrap'>{item.name}</p>
        </Link>
    )
}

export default CategoryCart