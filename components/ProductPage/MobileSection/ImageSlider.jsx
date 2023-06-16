import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const sliderData = [
    {
        id: 1,
        image: "/demo/sp/p.webp"
    },
    {
        id: 2,
        image: "/demo/sp/p1.webp"
    },
    {
        id: 3,
        image: "/demo/sp/p2.webp"
    },
    {
        id: 4,
        image: "/demo/sp/p3.webp"
    },
    {
        id: 5,
        image: "/demo/sp/p4.webp"
    }
]

const ImageSlider = () => {
    return (
        <div>
            <div className="">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}>
                    {sliderData.map((img) => (
                        // <div className='h-[220px] w-[100%] '
                        //     style={{ backgroundImage:`url(${img.image})` }} key={img.id}>
                        // </div>
                        <picture key={img.id}>
                            <img className='h-80 ' src={img.image} alt="" />
                        </picture>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ImageSlider