import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const Slider = () => {
    return (

        <div className=' container mx-auto grid grid-cols-4 gap-1 py-2'>
            <div className='col-span-4 md:col-span-3 px-2 md:px-0'>
                <div className="relative mx-auto">
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
                                    src="/assets/Slider/1.png"
                                    alt="slider"
                                    className="aspect-[16/10] md:aspect-auto object-cover shadow rounded-sm"
                                />
                            </picture>
                            <button className="px-[15px] md:px-[5px] py-[5px] md:py-[7px] font-oswald bg-bgColor absolute bottom-[25px] md:bottom-[75px] left-0  text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90">
                                SHOP NOW
                            </button>
                        </div>
                        <div>
                            <picture>
                                <img
                                    src="/assets/Slider/2.png"
                                    alt="slider"
                                    className="aspect-[16/10] md:aspect-auto object-cover shadow rounded-sm"
                                />
                            </picture>
                            <button className="px-[15px] md:px-[5px] py-[5px] md:py-[7px] font-oswald bg-bgColor absolute bottom-[25px] md:bottom-[75px] left-0  text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90">
                                SHOP NOW
                            </button>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="col-span-1 h-full flex flex-col items-center justify-between">
                    <picture>
                        <img className='shadow' src="/assets/side/side4.png" alt="" />
                    </picture>
                    <picture>
                        <img className='shadow' src="/assets/side/side4.png" alt="" />
                    </picture>
                </div>
            </div>
        </div>

    )
}

export default Slider