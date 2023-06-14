import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

const ProductCart = ({ item }) => {
    return (

        <div className=" col-span-1 font-poppins">
            <div className=" bg-white group shadow rounded">
                <div className='card__top relative'>
                    <picture>
                        <img className='h-64 ' src={item?.image} alt="" />
                    </picture>
                    <span className='absolute top-2 right-2 h-7 w-7 bg-gray-200 rounded-full hidden group-hover:flex items-center justify-center'>
                        <IoMdHeartEmpty className='cursor-pointer opacity-70' size={20} />
                    </span>
                </div>
                <div className='card__middle flex flex-col p-2 font-medium'>
                    <h3 className='text-[14px] font-[400]'>Top sent six colors matte liquied</h3>
                    <span className='flex items-center text-xs opacity-80 py-[2px]'>
                        <span>
                            <picture>
                                <img src="/SVG/star.svg" className='h-4 mr-1' alt="" />
                            </picture>
                        </span>
                        <span>44/5(130)</span>
                        <span>.765 Sold</span>
                    </span>
                    <span className='flex items-center gap-3 sm:gap-5 mt-1'>
                        <button className='border border-bgColor text-bgColor text-xs px-2 whitespace-nowrap'>Free Delivery</button>
                        <p className='text-xs px-2 text-green-900 whitespace-nowrap'>34% Off</p>
                    </span>
                    <span className='flex items-center justify-between mt-2 text-sm'>
                        <span className='flex items-center gap-2'>
                            <p className='font-semibold text-bgColor'>&#2547; 445</p>
                            <p className='line-through font-[200] opacity-80' >&#2547; 575</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCart