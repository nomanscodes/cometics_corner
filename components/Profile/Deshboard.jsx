import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'


const Deshboard = () => {
    return (
        <div className='p-3 bg-white rounded shadow-sm'>
            <h1 className='text-[17px] font-[500] flex items-center justify-center'>My Deshboard</h1>
            <div className='mt-2 flex items-center justify-center md:grid grid-cols-4  gap-3'>
                <div className='availablePoint bg-[#e4e1d7] flex items-center justify-center p-5 rounded shadow'>
                    <div>
                        <span className='flex gap-2'>
                            <h1 className='text-[13px] font-medium'>Available Points</h1>
                            <picture>
                                <img src="/SVG/points.svg" className='w-5' alt="" />
                            </picture>
                        </span>
                        <h4 className='text-[20px] font-bold opacity-75 flex items-center  mt-3'>5456533</h4>
                    </div>
                </div>
                <div className='totalPurchased bg-[#e4e1d7] flex items-center justify-center p-5 rounded shadow'>
                    <div>
                        <h1 className='text-[13px] font-medium'>
                            Total Purchased
                        </h1>
                        <h4 className='text-[20px] font-bold opacity-75 flex items-center  mt-3'>533 TK</h4>
                    </div>
                </div>
                <div className='lastPurchasedItem bg-[#e4e1d7] p-[10px] rounded shadow'>
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='col-span-1'>
                            <picture>
                                <img src="/demo/p/p1.avif" className=' rounded-sm w-16' alt="" />
                            </picture>
                        </div>

                        <span className='col-span-3 flex flex-col gap-1'>
                            <h1 className='text-[12px] font-semibold opacity-80'>Uniliver Hair shampoo and conditioner</h1>
                            <h1 className='text-[12px] font-medium opacity-80'>Price: 423 TK</h1>
                        </span>
                    </div>

                    <h3 className='text-[12px] flex items-center justify-end gap-2'>
                        <span className='text-green-700 font-semibold opacity-75'>
                            Last Purchased Item
                        </span>
                        <picture>
                            <img src="/SVG/last.svg" className='w-5' alt="" />
                        </picture>
                    </h3>
                </div>
                <div className='button flex flex-col items-center gap-3 pl-8'>
                    <button className='text-[13px] font-semibold text-white bg-bgColor rounded p-[13px] w-full'>Go To Shopping </button>
                    <button className='text-[13px] font-semibold border rounded p-[13px] w-full'>Go To Shopping </button>
                </div>
            </div>
            <div className='mt-2 grid grid-cols-9 gap-4'>
                <div className='col-span-1 w-full left flex flex-col gap-2 mt-2'>
                    <div className='orderdProduct bg-[#e4e1d7] flex flex-col items-center justify-center p-3 text-center rounded shadow'>
                        <h1 className='text-[12px] font-medium '>
                            Products You Order
                        </h1>
                        <h4 className='text-[20px] font-bold opacity-75 flex items-center text-green-700 mt-3'>52</h4>
                    </div>
                    <div className='orderdProduct bg-[#e4e1d7] flex flex-col items-center justify-center p-3 text-center rounded shadow'>
                        <h1 className='text-[12px] font-medium '>
                            Products In Your Cart
                        </h1>
                        <h4 className='text-[20px] font-bold opacity-75 flex items-center text-bgColor mt-3'>52</h4>
                    </div>
                    <div className='orderdProduct bg-[#e4e1d7] flex flex-col items-center justify-center p-3 text-center rounded shadow'>
                        <h1 className='text-[12px] font-medium '>
                            Number Off Following
                        </h1>
                        <h4 className='text-[20px] font-bold opacity-75 flex items-center text-cyan-800 mt-3'>52</h4>
                    </div>
                </div>
                <div className='col-span-2 w-full middle'>
                    <AddressCard />
                    <div className='mt-4 p-3 bg-[#293b62] rounded shadow flex flex-col gap-2 text-center max-w-[275px]' >
                        <h1 className='text-[20px] text-white'>Get More Done Together With US</h1>
                        <h1 className='text-[11px] text-white px-12'>Lorem ipsum dolor sit amet, consectetur </h1>
                        <div >
                            <button className='px-3 py-2 mt-2 rounded shadow-sm bg-white text-[12px] font-medium w-fit'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full middleRight mt-2 p-2 bg-white border shadow rounded'>
                    <h3 className='text-[13px] font-medium'>
                        Recent Orders
                    </h3>
                    <div className='flex items-center gap-3 mt-2'>
                        <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4'>
                            All
                        </span>
                        <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4'>
                            Due
                        </span>
                        <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4'>
                            Delivered
                        </span>
                        <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4'>
                            Canceled
                        </span>
                    </div>
                    <hr className='mt-2' />
                    <div className='flex flex-col gap-1 mt-2'>
                        <div className='flex items-center justify-between mt p-2 '>
                            <span >
                                <h1 className='text-[12px] font-semibold opacity-80 '>Order #6754556453</h1>
                                <h1 className='text-[11px] font-medium opacity-80 mt-[2px]'>Place on 23 January 2023 at 12:00am</h1>
                            </span>
                            <span>
                                <h1 className='text-[12px] font-semibold opacity-80 '>242 TK</h1>
                                <h1 className='text-[11px] font-medium opacity-80 mt-[2px]'>2 Item</h1>
                            </span>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between mt p-2 '>
                            <span >
                                <h1 className='text-[12px] font-semibold opacity-80 '>Order #6754556453</h1>
                                <h1 className='text-[11px] font-medium opacity-80 mt-[2px]'>Place on 23 January 2023 at 12:00am</h1>
                            </span>
                            <span>
                                <h1 className='text-[12px] font-semibold opacity-80 '>242 TK</h1>
                                <h1 className='text-[11px] font-medium opacity-80 mt-[2px]'>2 Item</h1>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='Right col-span-3 w-full  '>
                    <div className=' mt-2 p-2 bg-white border shadow rounded'>
                        <h3 className='text-[13px] font-medium'>
                            Recent Message
                        </h3>
                        <div className='flex items-center gap-3 mt-2'>
                            <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4 rounded'>
                                All
                            </span>
                            <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4 rounded'>
                                Read
                            </span>
                            <span className='text-[11px] font-medium border bg-slate-200 py-[6px] px-4 rounded'>
                                Unread
                            </span>

                        </div>
                        <hr className='mt-2' />
                        <div className='flex flex-col gap-1 mt-2'>
                            <div className='flex items-center justify-between gap-12 p-2'>
                                <span className='flex items-center gap-2'>
                                    <picture>
                                        <img src="/brand.avif"
                                            className='w-10 h-10 rounded-full'
                                            alt="" />
                                    </picture>

                                    <span>
                                        <span className='flex items-center gap-2'>
                                            <h1 className='text-[13px] font-medium'>Fatema Begum</h1>
                                            <picture>
                                                <img src="/SVG/badge.svg"
                                                    className='w-4 rounded-full'
                                                    alt="" />
                                            </picture>
                                        </span>
                                        <h1 className='truncate text-[11px] font-medium opacity-80'>Hey its Fatima how can help you?</h1>
                                    </span>
                                </span>
                                <span>
                                    <h1 className='text-[11px] font-medium opacity-80 mt-[2px]'> 46 mins</h1>
                                </span>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deshboard