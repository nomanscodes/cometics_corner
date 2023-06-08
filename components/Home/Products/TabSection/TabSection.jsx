import React from "react";
import ProductCart from "../ProductCard";

const TabSection = () => {
    return (
        <div className="px-2 md:px-6 mt-4 font-poppins">
            <div className="flex items-center gap-2">
                <h1 className='font-semibold text-sm opacity-90 whitespace-nowrap'>POPULAR DEPARTMENTS</h1>
                <hr className="w-full" />
            </div>
            <div className="CatCarousel flex items-center justify-start overflow-x-auto scroll-smooth mt-4 gap-3">
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm whitespace-nowrap">New Arrivals</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm whitespace-nowrap">Best Seller</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm whitespace-nowrap">Most Popular</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm whitespace-nowrap">Top Deal</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm  whitespace-nowrap">Health & Personal Care</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm font-semibold text-bgColor rounded-sm whitespace-nowrap">Featured</button>
                </div>
            </div>
            <hr className='mt-[3px] md:mt-[6px]' />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
                <ProductCart />
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
    );
};

export default TabSection