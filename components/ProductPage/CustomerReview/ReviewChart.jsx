import React from 'react'

const ReviewChart = () => {
    return (
        <div className='mt-2 '>
            <h1 className='text-[20px] font-semibold opacity-95'>Customer reviews</h1>
            <hr className='mt-2 w-[70%]'/>
            <div className='mt-2 flex items-center gap-3'>
                <picture className='flex items-center gap-1'>
                    <img src="/SVG/star.svg" className='h-4' alt="" />
                    <img src="/SVG/star.svg" className='h-4' alt="" />
                    <img src="/SVG/star.svg" className='h-4' alt="" />
                    <img src="/SVG/star.svg" className='h-4' alt="" />
                </picture>
                <h3 className='text-[18px] font-medium opacity-95'> 4.5 out of 5</h3>
            </div>
            <h3 className='capitalize text-sm font-semibold opacity-80 mt-2'>8345 total ratings</h3>
            <div className='pt-2'>
                <div className="flex items-center mt-4">
                    <span className="text-sm font-medium text-bgColor">5 Star</span>
                    <div className="w-2/4 h-[22px] mx-4 bg-gray-200 rounded">
                        <div className="h-[22px] bg-[#e46f24] rounded w-[70%]">
                        </div>
                    </div>
                    <span className="text-sm font-medium  text-bgColor">70%</span>
                </div>
                <div className="flex items-center mt-4">
                    <span className="text-sm font-medium text-bgColor">4 Star</span>
                    <div className="w-2/4 h-[22px] mx-4 bg-gray-200 rounded">
                        <div className="h-[22px] bg-[#e46f24] rounded w-[60%]">
                        </div>
                    </div>
                    <span className="text-sm font-medium  text-bgColor">60%</span>
                </div>
                <div className="flex items-center mt-4">
                    <span className="text-sm font-medium text-bgColor">3 Star</span>
                    <div className="w-2/4 h-[22px] mx-4 bg-gray-200 rounded">
                        <div className="h-[22px] bg-[#e46f24] rounded w-[30%]">
                        </div>
                    </div>
                    <span className="text-sm font-medium  text-bgColor">30%</span>
                </div>
                <div className="flex items-center mt-4">
                    <span className="text-sm font-medium text-bgColor">2 Star</span>
                    <div className="w-2/4 h-[22px] mx-4 bg-gray-200 rounded">
                        <div className="h-[22px] bg-[#e46f24] rounded w-[10%]">
                        </div>
                    </div>
                    <span className="text-sm font-medium  text-bgColor">10%</span>
                </div>
                <div className="flex items-center mt-4">
                    <span className="text-sm font-medium text-bgColor">1 Star</span>
                    <div className="w-2/4 h-[22px] mx-4 bg-gray-200 rounded">
                        <div className="h-[22px] bg-[#e46f24] rounded w-[02%]">
                        </div>
                    </div>
                    <span className="text-sm font-medium  text-bgColor">2%</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewChart