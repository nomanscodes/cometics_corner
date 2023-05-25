import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"
import ProductCart from './ProductCart'

const FeaturedProducts = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl md:text-3xl opacity-90'>Featured Products </h1>
                <Link href={""} className='hidden md:flex items-center gap-1 group  '>
                    <h1 className='font-medium group-hover:text-bgColor duration-300'>More products</h1>
                    <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
                </Link>
            </div>
            <div className='mt-4 grid grid-cols-5 gap-2'>
                <div className=' col-span-1 hidden md:block'>
                    <picture>
                        <img src="/brand2.png" className='rounded' alt="" />
                    </picture>
                </div>
                <div className='col-span-5 md:col-span-4 grid
                grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-1 md:px-0'>
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts