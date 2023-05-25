import React from 'react'
import Image from 'next/image'

const ProductCart = () => {
    return (
        <div className="col-span-1 flex-shrink-0 relative overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-52 bottom-0 left-0 -mb-24 ml-3" ></div>
                <picture>
                    <img className="relative w-32" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
                </picture>
            </div>
            <div className="relative text-bgColor px-6 pb-2 mt-2">
                <span className="block -mb-1">Indoor</span>
                <span className="block font-semibold text-xl">Red Lipistic</span>
                <div className="flex items-center gap-6">
                    <span className="text-bgColor text-xs font-bold py-2 leading-none items-center">$36.00</span>
                    <span className=" rounded-full text-bgColor text-xs font-bold  py-2 leading-none items-center line-through">$36.00</span>
                </div>

                <button className="bg-bgColor text-white w-full rounded text-xs font-bold py-3 leading-none transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105">Add To Bucket</button>
            </div>
        </div>
    )
}

export default ProductCart