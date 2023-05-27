import React from "react";


const TopFooter = () => {
  return (
    <div className="bg-bgColor text-white">
      <div className=" container mx-auto">
        <div className=" md:flex items-center  justify-between py-4">
          <div className=" md:flex md:items-center gap-4">
            <div
              className=" flex items-center justify-center  gap-2 
            "
            >
              <picture>
                <img src="/flay_3-removebg-preview.png" alt="" />
              </picture>
              <h1 className=" md:text-lg  md:font-bold whitespace-nowrap">Sign up to Newsletter</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="">
                ...and receive
                <span className="ml-2 font-medium">
                  50 Taka coupon for first shopping
                </span>
              </h1>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center gap-3 mt-3 md:mt-0 ">
              <input
                type="text"
                className=" w-48 md:w-56 lg:w-96 py-1 md:py-2 text-sm text-black pl-4 focus:outline-none "
                placeholder="Your Email Address"
              />
              <button className="h-7 md:h-9 w-24 text-white text-xs md:text-sm md:font-semibold border-2 rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
