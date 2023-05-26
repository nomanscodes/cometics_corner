import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const Slider = () => {
    return (

        <div className='px-2 md:px-6 grid grid-cols-4'>
            <div className='col-span-4 md:col-span-3 '>
                <div className="relative mx-auto text-white">
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        renderArrowPrev={(clickHandler, hasPrev) => (
                            <div
                                onClick={clickHandler}
                                className="absolute right-[33px] md:right-[51px] bottom-0 w-8 md:w-12 h-7 md:h-10 bg-bgColor z-10  flex
                          items-center justify-center cursor-pointer hover:opacity-90"
                            >
                                <BiArrowBack className="text-sm  md:text-lg" />
                            </div>
                        )}
                        renderArrowNext={(clickHandler, Next) => (
                            <div
                                onClick={clickHandler}
                                className="absolute  right-0 bottom-0 w-8 md:w-12 h-7 md:h-10 
                                bg-bgColor z-10 flex
                          items-center justify-center cursor-pointer hover:opacity-90"
                            >
                                <BiArrowBack className="text-sm rotate-180  md:text-lg" />
                            </div>
                        )}
                    >
                        <div>
                            <picture>
                                <img
                                    src="/assets/Slider/slider3.png"
                                    alt="slider"
                                    className="aspect-[16/10] md:aspect-auto object-cover h-[200px] md:h-auto shadow "
                                />
                            </picture>
                            <button className="px-[15px] md:px-[5px] py-[3px] md:py-[5px] font-oswald bg-bgColor absolute bottom-[25px] md:bottom-[75px] left-0  text-[10px] md:text-[22px] font-medium cursor-pointer hover:opacity-90">
                                SHOP NOW
                            </button>
                        </div>
                        <div>
                            <picture>
                                <img
                                    src="/assets/Slider/slider3.png"
                                    alt="slider"
                                    className="aspect-[16/10] md:aspect-auto object-cover shadow  h-[200px] md:h-auto"
                                />
                            </picture>
                            <button className="px-[15px] md:px-[5px] py-[3px] md:py-[5px] font-oswald bg-bgColor absolute bottom-[25px] md:bottom-[75px] left-0  text-[10px] md:text-[22px] font-medium cursor-pointer hover:opacity-90">
                                SHOP NOW
                            </button>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="col-span-1 h-full flex flex-col items-center justify-between">
                    <picture>
                        <img className='shadow' src="/assets/side/cat4.png" alt="" />
                    </picture>
                    <picture>
                        <img className='shadow' src="/assets/side/cat4.png" alt="" />
                    </picture>
                </div>
            </div>
        </div>

    )
}

export default Slider