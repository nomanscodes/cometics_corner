import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'
import Link from 'next/link'

const MyOrder = () => {
    return (
        <div className='p-3 bg-white rounded shadow-sm'>
            <h1 className='text-[20px] mb-1 font-[500] flex items-center justify-center'>My Orders</h1>
            <div className='hidden md:block'>
                <div className='grid grid-cols-10 mt-3'>
                    <span className='col-span-1 p-2 border border-gray-400 text-[14px] font-medium'>
                        No
                    </span>
                    <span className='col-span-2 p-2 border border-gray-400 text-[14px] font-medium'>
                        Order
                    </span>
                    <span className='p-2 border border-gray-400 text-[14px] font-medium'>
                        Date
                    </span>
                    <span className='col-span-2 p-2 border border-gray-400 text-[14px] font-medium'>
                        Tracking Number
                    </span>
                    <span className='p-2 border border-gray-400 text-[14px] font-medium'>
                        Quantity
                    </span>
                    <span className='p-2 border border-gray-400 text-[14px] font-medium'>
                        Total Amount
                    </span>
                    <span className='p-2 border border-gray-400 text-[14px] font-medium'>
                        State
                    </span>
                    <span className='p-2 border border-gray-400 text-[14px] font-medium flex items-center justify-center'>
                        Action
                    </span>
                </div>
                <div className='grid grid-cols-10'>
                    <span className='col-span-1 flex items-center  p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium'>
                        1
                    </span>
                    <span className='col-span-2 flex items-center  p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium'>
                        #56753GD4362
                    </span>
                    <span className='flex items-center p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium whitespace-nowrap'>
                        12 August,2023
                    </span>
                    <span className='col-span-2 flex items-center p-[10px] border border-t-0 border-gray-400 text-[13px] font-medium'>
                        1343rers232
                    </span>
                    <span className='flex items-center p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium'>
                        04
                    </span>
                    <span className='flex items-center p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium'>
                        345 TK
                    </span>
                    <span className='flex items-center p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium text-green-700'>
                        Delivered
                    </span>
                    <span className='p-[10px] border border-t-0  border-gray-400 text-[14px] font-medium flex items-center justify-center'>
                        <Link className='text-[13px] font-semibold bg-bgColor py-[4px] px-2 text-white rounded-sm shadow'
                            href={"/order-details/jhfdikgjudfhsk"}>
                            Details
                        </Link>
                    </span>
                </div>
            </div>

            <div className='md:hidden mt-4'>
                <div className='flex items-center justify-between mb-4'>
                    <span className='text-[12px] font-medium bg-bgColor text-white p-2 rounded'>Delivered</span>
                    <span className='text-[12px] font-medium  border p-2 rounded'>
                        Processing
                    </span>
                    <span className='text-[12px] font-medium  border p-2 rounded'>
                        Cancelled
                    </span>
                </div>
                <div className='mt-2 bg-[#e4e1d7] p-3'>
                    <span className='flex items-center justify-between'>
                        <h3 className='text-[13px] font-semibold '>Order No 34875</h3>
                        <h3 className='text-[13px] font-medium opacity-70 '>05-03-2023</h3>
                    </span>
                    <span className='flex items-center gap-3 text-xs font-medium mt-2'>
                        <h1 className='opacity-75'> Tracking Number :</h1> <h3 className='opacity-100'> 323df34545f</h3>
                    </span>
                    <span className='flex items-center justify-between mt-[8px]'>
                        <span className='flex items-center gap-3 text-xs font-medium '>
                            <h1 className='opacity-75'>Quantity :</h1> <h3 className='opacity-100'>3</h3>
                        </span>
                        <span className='flex items-center gap-3 text-xs font-medium '>
                            <h1 className='opacity-75'>Total Amount :</h1> <h3 className='opacity-100'>334 TK</h3>
                        </span>
                    </span>
                    <span className='flex items-center justify-between mt-[10px]'>
                        <Link className='text-[13px] font-medium bg-bgColor py-[4px] px-2 text-white rounded-sm shadow'
                            href={"/order-details/jhfdikgjudfhsk"}>
                            Details
                        </Link>
                        <h4 className=' text-[13px] font-medium text-green-700'>
                            Delivered
                        </h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MyOrder