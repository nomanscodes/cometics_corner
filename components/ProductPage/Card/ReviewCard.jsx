import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { MdVerifiedUser } from 'react-icons/md'


const ReviewCard = () => {
    return (
        <div className='mt-2 pb-3'>
            <span className='flex items-center gap-2'>
                <picture>
                    <img src="/avatar.png" className='h-7 w-7 rounded-full' alt="" />
                </picture>
                <h3 className='text-[12px] md:text-[14px] font-medium mb-1 capitalize'>David Jhon</h3>
            </span>
            <div className='flex items-center gap-2'>
                <picture className='flex items-center gap-1'>
                    <img src="/SVG/star.svg"
                        className='h-[12px]' alt="" />
                    <img src="/SVG/star.svg"
                        className='h-[12px]' alt="" />
                    <img src="/SVG/star.svg"
                        className='h-[12px]' alt="" />
                    <img src="/SVG/star.svg"
                        className='h-[12px]' alt="" />
                </picture>
                <span className='flex items-center '>
                    <MdVerifiedUser size={12} />
                    <h3 className='text-[11px] md:text-[12px] font-medium'>Verified Purchease</h3>
                </span>
            </div>
            <span className='md:text-[11px] font-medium'>
                Reviewed Date : April 5 ,2024
            </span>
            <div className='text-[12px] font-semibold'>
                This is a holy Grail primeum
            </div>
            <div className='mt-2 flex items-center gap-2'>
                <picture>
                    <img src="/demo/p/p3.avif" className='w-20 md:w-28' alt="" />
                </picture>
            </div>
            <h5 className='text-[11px] md:text-[13px] 
        font-medium mt-1'>My hair is straight and very fine so this product works just fine. However, my girlfriend has thick, curly hair and it does not work well to condition her hair.</h5>
            <div className='flex items-center gap-5 mt-2'>
                <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow cursor-pointer'>
                    <AiOutlineLike size={13} />
                    <h5 className='text-[10px]'>Helpful for 43</h5>
                </span>
                <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow cursor-pointer'>
                    <AiOutlineDislike size={13} />
                    <h5 className='text-[10px]'>12</h5>
                </span>
            </div>
        </div>
    )
}

export default ReviewCard