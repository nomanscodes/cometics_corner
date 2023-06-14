import Link from 'next/link'
import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
    return (
        <div>
            <h1 className='text-[20px] font-[600] opacity-95 pt-3'>
                Reviews with images
            </h1>
            <div className="reviewWithImage mt-3 flex items-center gap-3">
                <picture>
                    <img src="/demo/p/p1.avif" className='w-40' alt="" />
                </picture>
                <picture>
                    <img src="/demo/p/p1.avif" className='w-40' alt="" />
                </picture>
                <picture>
                    <img src="/demo/p/p1.avif" className='w-40' alt="" />
                </picture>
            </div>
            <div className='mt-2'>
                <Link href={""} className='text-[17px] font-medium text-bgColor hover:text-orange-500 '>See all customer image</Link>
            </div>
            <h1 className='text-[20px] font-[600] opacity-95 pt-3'>
                Top Reviews
            </h1>
            <div className='mt-2'>
                <ReviewCard />
            </div>
        </div>
    )
}

export default Review