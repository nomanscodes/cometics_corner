import Link from 'next/link'
import React from 'react'

const TopBrandCard = () => {
    return (
        <Link href={"/category"} className='text-bgColor flex flex-col items-center gap-2 '>
            <div className='bg-[#dfdbcd] h-24 w-24 rounded-full flex items-center justify-center'>
                <picture>
                    <img src="/skincare.png" alt="" />
                </picture>
            </div>

        </Link>
    )
}

export default TopBrandCard
