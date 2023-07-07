import Link from 'next/link'
import React from 'react'


const OrderCard = () => {
    return (
        <div>
            <div className='mt-2 bg-[#e4e1d7] p-3 rounded shadow'>
                <span className='flex items-center justify-between'>
                    <h3 className='text-[13px] font-semibold '>Order No : 34875</h3>
                    <h3 className='text-[13px] font-medium opacity-70 '>05-03-2023</h3>
                </span>
                <span className='flex items-center gap-3 text-xs font-medium mt-[10px]'>
                    <h1 className='opacity-75'> Tracking Number :</h1> <h3 className='opacity-100'> 323df34545f</h3>
                </span>
                <span className='flex items-center justify-between mt-[10px]'>
                    <span className='flex items-center gap-3 text-xs font-medium '>
                        <h1 className='opacity-75'>Quantity :</h1> <h3 className='opacity-100'>3</h3>
                    </span>
                    <span className='flex items-center gap-3 text-xs font-medium '>
                        <h1 className='opacity-75'>Total Amount :</h1> <h3 className='opacity-100'>334 TK</h3>
                    </span>
                </span>
                <span className='flex items-center justify-between mt-[14px]'>
                    <Link className='text-[12px] font-medium bg-bgColor py-[4px] px-[10px] text-white rounded-sm shadow'
                        href={"/order-details/jhfdikgjudfhsk"}>
                        Details
                    </Link>
                    <h4 className='text-[13px] font-medium text-green-700'>
                        Delivered
                    </h4>
                </span>
            </div>
        </div>
    )
}

export default OrderCard