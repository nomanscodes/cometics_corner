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
    </div>
  );
};

export default ProductDetailsCerosule;
