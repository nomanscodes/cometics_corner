import React from "react";
import ProductCart from "./ProductCart";

const TabSection = () => {
    return (
        <div className="px-2 md:px-6 mt-4">
            <h5 className="flex  items-center justify-center text-2xl font-poppins font-bold">
                Popular Departments
            </h5>
            <div className="flex items-center justify-center gap-4 mt-3">
                <button className=" border border-bgColor py-[2px] px-[8px] font-poppins text-base font-bold text-bgColor rounded">New Arrivals</button>
                <button className=" border border-bgColor py-[2px] px-[8px] font-poppins text-base font-bold text-bgColor rounded">Best Seller</button>
                <button className=" border border-bgColor py-[2px] px-[8px] font-poppins text-base font-bold text-bgColor rounded">Most Popular</button>
                <button className=" border border-bgColor py-[2px] px-[8px] font-poppins text-base font-bold text-bgColor rounded">Featured</button>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-4">
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