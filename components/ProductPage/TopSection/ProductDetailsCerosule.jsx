import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "../../../Extra/image.json"

const ProductDetailsCerosule = () => {

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-8">
      <Carousel
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {Image?.map((img) => (
          <picture key={img.id}>
            <img src={img?.src} className="" alt="" />
          </picture>
        ))}

      </Carousel>
      <div className='mt-3 flex items-center gap-5 ml-[76px]'>
        <button className='capitalize text-sm font-[600] bg-bgColor w-full text-white   p-2'>add to cart</button>
        <button className='capitalize text-sm font-[600] 
        bg-[#131a22] w-full text-white   p-2'>buy now</button>
      </div>
    </div>
  );
};

export default ProductDetailsCerosule;
