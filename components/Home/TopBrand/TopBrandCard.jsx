import Link from 'next/link'
import React from 'react'

const TopBrandCard = () => {
    return (
        <Link href={"/category"} className='text-bgColor flex flex-col items-center gap-2 '>

            <div style={{ backgroundImage: `url("/brandName.png")` }} className='h-14 md:h-16 w-14 md:w-16 rounded-full flex items-center justify-center overflow-hidden fitImage bg-[#dfdbcd]'>

            </div>
        </Link>
    )
}

export default TopBrandCard
// bg-[#dfdbcd]