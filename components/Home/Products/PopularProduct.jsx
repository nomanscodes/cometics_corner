import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"
import ProductCart from './ProductCart'
import ProductCart1 from './ProductCard1'

const PopularProduct = () => {
    return (
        <div className='container mx-auto mt-4 font-poppins'>
            <div className='flex items-center justify-between px-2 md:px-0'>
                <h1 className='font-semibold text-lg md:text-2xl opacity-90'>Popular Products </h1>
                <Link href={""} className='hidden md:flex items-center gap-1 group  '>
                    <h1 className='font-medium group-hover:text-bgColor duration-300'>More products</h1>
                    <MdKeyboardArrowRight className='group-hover:text-bgColor duration-300' size={22} />
                </Link>
            </div>
            <div className='mt-4 grid grid-cols-5 gap-2'>
                <div className=' col-span-1 hidden md:block'>
                    <picture>
                        <img src="/brand2.png" className='rounded h-[550px] 
                        w-[230px]' alt="" />
                    </picture>
                </div>
                <div className='col-span-5 md:col-span-4 grid
                grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-2 md:px-0'>
                    <ProductCart1 />
                    <ProductCart />
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


export default PopularProduct