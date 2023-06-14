import Link from 'next/link'
import React from 'react'
Link

const ReviewCard = () => {
    return (
        <div className='mt-6'>
            <div className='reviewsPerson'>
                <Link href={""} className='flex items-center gap-2'>
                    <picture>
                        <img src="/avatar.png" className='w-10 h-10 rounded-full' alt="" />
                    </picture>
                    <h4 className='text-[16px] font-[550] opacity-90'>Eriq Jhonson</h4>
                </Link>
            </div>
            <div className='reviewsTitle flex items-center gap-2 mt-2'>
                <picture className='flex items-center gap-2'>
                    <img src="/SVG/star.svg" className='w-4' alt="" />
                    <img src="/SVG/star.svg" className='w-4' alt="" />
                    <img src="/SVG/star.svg" className='w-4' alt="" />
                    <img src="/SVG/star.svg" className='w-4' alt="" />
                </picture>
                <h4 className='text-[14px] font-[550]'>Really really good!</h4>
            </div>
            <div className='reviewsEverythings mt-1'>
                <h3 className='text-[15px] font-[400] opacity-90'>Reviewed in the United States 🇺🇸 on June 10, 2023</h3>
                <h3 className='text-[15px] font-[400] opacity-90 pt-[1px]'>Size: 28 Fl Oz (Pack of 4)</h3>

                <h4 className='text-[15px] font-[400] pt-[4px] w-[80%]'>My hair is straight and very fine so this product works just fine. However, my girlfriend has thick, curly hair and it does not work well to condition her hair.</h4>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <button className='border border-gray-400 px-4 py-[2px] rounded-md shadow hover:bg-slate-100 duration-200 text-[17px]  font-[400] opacity-95'>Helpfull</button>
                <hr className='w-[18px] rotate-90 bg-slate-800' />
                <h4 className='text-[17px] font-semibold opacity-90 cursor-pointer'>Report</h4>
            </div>
        </div>
    )
}

export default ReviewCard