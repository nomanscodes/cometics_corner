import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"
import ProductCart from '../ProductCard'

const pData = [
    {
        id: 1,
        image: "/demo/p/p1.avif",
        name: "Eyes"
    },
    {
        id: 2,
        image: "/demo/p/p2.avif",
        name: "Hand Wash"
    },
    {
        id: 3,
        image: "/demo/p/p3.avif",
        name: "Nails"
    },
    {
        id: 4,
        image: "/demo/p/p4.avif",
        name: "Hair Care"
    },
    {
        id: 1,
        image: "/demo/p/p1.avif",
        name: "Eyes"
    },
    {
        id: 2,
        image: "/demo/p/p2.avif",
        name: "Hand Wash"
    },
    {
        id: 3,
        image: "/demo/p/p3.avif",
        name: "Nails"
    },
    {
        id: 2,
        image: "/demo/p/p2.avif",
        name: "Hand Wash"
    },
    {
        id: 3,
        image: "/demo/p/p3.avif",
        name: "Nails"
    },
    {
        id: 4,
        image: "/demo/p/p4.avif",
        name: "Hair Care"
    }

]


const FeaturedProducts = () => {
    return (
        <div className=' px-2 md:px-6 mt-4 font-poppins mb-2'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-sm opacity-90'>RECOMMEND FOR YOU</h1>
                <Link href={""} className='hidden md:flex items-center gap-1 group  '>
                    <h1 className='font-medium group-hover:text-bgColor duration-300'>More products</h1>
                    <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
                </Link>
            </div>
            <hr className='mt-[3px] md:mt-[6px]' />
            <div className='mt-4 grid grid-cols-5 gap-2'>
                <div className='col-span-1 hidden md:block'>
                    <picture>
                        <img src="/brand2.png" className='rounded h-[550px] 
                        w-[230px]' alt="" />
                    </picture>
                </div>
                <div className='col-span-5 md:col-span-4 grid
                grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 '>
                    {pData.map((item) => (
                        <ProductCart key={item.id} item={item} />

                    ))}

                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts