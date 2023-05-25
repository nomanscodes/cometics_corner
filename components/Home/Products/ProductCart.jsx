import React from 'react'
import Image from 'next/image'

const ProductCart = () => {
    return (
        <div className="col-span-1 flex-shrink-0 relative overflow-hidden bg-white rounded-lg shadow-lg font-poppins">
            <div className="relative pt-3 flex items-center justify-center">
                <picture>
                    <img className="w-full mt-2 px-6 rounded-md" src="/product2.jpg" alt="" />
                </picture>
            </div>
            <div className="relative px-6 pb-2 mt-2">
                <span className="block -mb-1">Indoor</span>
                <span className="block font-medium text-lg">Red Lipistic</span>
                <div className="flex items-center gap-6">
                    <span className=" text-xs font-bold py-2 leading-none items-center">$36.00</span>
                    <span className=" rounded-full text-xs font-bold  py-2 leading-none items-center line-through">$36.00</span>
                </div>
                <button className="bg-bgColor text-white w-full rounded text-xs font-bold py-3 leading-none transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105">Add To Bucket</button>
            </div>
        </div>
    )
}

export default ProductCart