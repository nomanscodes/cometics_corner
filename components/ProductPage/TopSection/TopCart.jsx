import React from 'react'

const TopCart = () => {
    return (
        <div className='border border-r-gray-50 shadow-sm 
        p-[6px] flex items-center justify-center rounded'>
            <div className='mt-2'>
                <h1 className='text-sm font-medium opacity-90 whitespace-nowrap'>465 TK <span className='text-xs text-bgColor opacity-100'>(35 TK Discount)</span></h1>

                <span className='text-xs font-[400] opacity-90 capitalize mt-2 line-clamp-3'>40 Tk discouont charge any place in bangladesh</span>

                <div className='mt-1'>
                    <h1 className='text-xs font-[400]  capitalize mt-2 line-clamp-4'>
                        Delivery <span className='text-sm font-medium'>Friday, June 23.</span> Order withinsp <span className='text-bgColor'>12 hrs 7 mins</span>
                    </h1>
                </div>
                <div className='flex items-center gap-3 mt-1'>
                    <picture>
                        <img src="/SVG/location.svg" className='h-[14px] mt-2' alt="" />
                    </picture>
                    <h1 className='text-xs font-[400]  capitalize mt-2 line-clamp-4 text-bgColor'>Delivery in Dhaka</h1>
                </div>
                <h1 className='text-base font-semibold text-bgColor mt-3'>IN STOCK</h1>
                <div className='mt-3'>
                    <button className='capitalize text-sm font-[600] bg-bgColor w-full text-white  p-1 rounded'>add to cart</button>
                    <button className='capitalize text-sm font-[600] bg-[#c96a00] w-full text-white  p-1 rounded mt-2'>buy now</button>
                </div>
                <div className=' mt-3'>
                    <table className=' w-fit mt-2'>
                        <tbody>
                            <tr className='mt-[2px]'>
                                <td className='text-[12px] font-[400] capitalize pr-2 opacity-95 whitespace-nowrap'>Payment</td>
                                <td className='text-[12px] font-[400] text-bgColor capitalize whitespace-nowrap'>secure transjection</td>
                            </tr>
                            <tr className='mt-[2px]'>
                                <td className='text-[12px] font-[400] capitalize pr-2 opacity-95 whitespace-nowrap'>ships from</td>
                                <td className='text-[12px] font-[400]  capitalize whitespace-nowrap'>store author</td>
                            </tr>
                            <tr className='mt-[2px]'>
                                <td className='text-[12px] font-[400] capitalize pr-2 opacity-95 whitespace-nowrap'>sold by</td>
                                <td className='text-[12px] font-[400]  capitalize whitespace-nowrap'>store author</td>
                            </tr>
                            <tr className='mt-[2px]'>
                                <td className='text-[12px] font-[400] capitalize pr-2 opacity-95 whitespace-nowrap'>returns</td>
                                <td className='text-[12px] font-[400] text-bgColor capitalize '>
                                    Eligible for Refund or Replacement</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TopCart