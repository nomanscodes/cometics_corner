import React from "react";
import ProductCart from "../ProductCard";


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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
                {pData.map((item) => (
                    <ProductCart key={item.id} item={item} />

                ))}
            </div>
        </div>
    );
};


export default TabSection


