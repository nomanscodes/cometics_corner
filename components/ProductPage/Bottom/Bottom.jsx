import Link from "next/link";
import React from "react";

const ProductPageBottom = () => {
    return (
        <div className="fixed bottom-0 left-0 z-40 w-full 
        h-[50px] bg-white  shadow-2xl md:hidden">
            <div className="flex items-center justify-center w-full h-full">
             <div className="w-1/2 h-full flex items-center justify-center text-sm font-semibold bg-bgColor text-white">
              Add To Cart
             </div>
             <div className="w-1/2 h-full text-sm font-semibold flex items-center justify-center bg-[#ff7607] text-white">
               Buy Now
             </div> 
            </div>
        </div>
    );
};

export default ProductPageBottom;