import Link from 'next/link'
import React from 'react'

const CategoryCart = ({ item }) => {
    return (
        <Link href={"/category"} className='text-bgColor flex flex-col items-center gap-2 '>

            <div style={{ backgroundImage: `url(${item.image})` }} className='h-14  w-14  rounded-full flex items-center justify-center overflow-hidden fitImage'>

            </div>
            <p className='text-xs md:text-sm font-semibold whitespace-nowrap'>{item.name}</p>
        </Link>
    )
}

export default CategoryCart