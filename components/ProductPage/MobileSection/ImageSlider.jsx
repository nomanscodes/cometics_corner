import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const sliderData = [
    {
        id: 1,
        image: "/demo/b/b1.avif"
    },
    {
        id: 2,
        image: "/demo/b/b2.avif"
    },
    {
        id: 3,
        image: "/demo/b/b3.avif"
    },
    {
        id: 4,
        image: "/demo/b/b4.avif"
    },
    {
        id: 5,
        image: "/demo/b/b5.avif"
    },
    {
        id: 6,
        image: "/demo/b/b6.avif"
    }
]

const ImageSlider = () => {
    return (
        <div>
            <div className="relative mx-auto text-white">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}>
                    {sliderData.map((img) => (
                        <div className='h-[180px]  w-[100%] fitImage'
                            style={{ backgroundImage: `url(${img.image})` }} key={img.id}>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ImageSlider