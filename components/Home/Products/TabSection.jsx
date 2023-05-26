import React from "react";
import ProductCart from "./ProductCart";

const TabSection = () => {
    return (
        <div className="px-2 md:px-6 mt-2">
            <h1 className='font-semibold text-lg md:text-2xl opacity-90'>Popular Departments</h1>
            <div className="CatCarousel flex items-center justify-start overflow-x-auto scroll-smooth mt-4 gap-3">
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded whitespace-nowrap">New Arrivals</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded whitespace-nowrap">Best Seller</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded whitespace-nowrap">Most Popular</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded whitespace-nowrap">Top Deal</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded  whitespace-nowrap">Health & Personal Care</button>
                </div>
                <div>
                    <button className=" border border-bgColor px-[4px] py-[2px] md:px-[8px] font-poppins text-sm md:text-base md:font-bold text-bgColor rounded whitespace-nowrap">Featured</button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
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