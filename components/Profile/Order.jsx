import React, { useEffect, useState } from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'
import Link from 'next/link'
import { BiListMinus } from 'react-icons/bi'
import { MdDateRange, MdWorkspacesFilled } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import { IoMdPricetags } from 'react-icons/io'
import { HiStatusOnline } from 'react-icons/hi'
import OrderCard from './OrderCard'

const MyOrder = () => {

    const [showTab, setShowTab] = useState("all-orders")

    useEffect(() => {
        const storedTab = sessionStorage.getItem("tab2");
        if (storedTab) {
            setShowTab(storedTab);
        }
    }, []);

    const tabControl = (tab) => {
        setShowTab(tab);
        sessionStorage.setItem("tab2", tab);
    };

    return (
        <div className='px-2 bg-white rounded shadow-sm'>
            <h1 className='text-[20px] mb-1 font-[500] flex items-center justify-center'>My Orders</h1>
            <div className='hidden md:block'>
                <div className='mt-4 flex items-center justify-center border-b'>
                    <div className='flex items-center gap-6'>
                        <div onClick={() => tabControl("all-orders")} className='w-fit flex flex-col gap-3 cursor-pointer'>
                            <h3 className='text-[14px] font-semibold whitespace-nowrap'>All Orders</h3>
                            <span className={` ${showTab === "all-orders" ? `duration-500 opacity-100` : `opacity-0`} h-[2px] w-full bg-bgColor`} />
                        </div>
                        <div
                            onClick={() => tabControl("pending-order")} className='w-fit flex flex-col gap-3 cursor-pointer'>
                            <h3 className='text-[14px] font-semibold whitespace-nowrap'>Pending Orders
                            </h3>
                            <span className={` ${showTab === "pending-order" ? `duration-500 opacity-100` : `opacity-0`} h-[2px] w-full bg-bgColor`} />
                        </div>
                        <div onClick={() => tabControl("deliverd-orders")} className='w-fit flex flex-col gap-3 cursor-pointer'>
                            <h3 className='text-[14px] font-semibold whitespace-nowrap'>Delivered Orders</h3>
                            <span className={` ${showTab === "deliverd-orders" ? `duration-500 opacity-100` : `opacity-0`} h-[2px] w-full bg-bgColor`} />
                        </div>
                        <div onClick={() => tabControl("cancelled-order")} className='w-fit flex flex-col gap-3 cursor-pointer'>
                            <h3 className='text-[14px] font-semibold whitespace-nowrap'>Cancelled Orders</h3>
                            <span className={` ${showTab === "cancelled-order" ? `duration-500 opacity-100` : `opacity-0`} h-[2px] w-full bg-bgColor`} />
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='grid grid-cols-11 mt-3 bg-[#2e4cb9] text-white'>
                        <span className='col-span-2 flex items-center gap-2 p-2 border border-gray-400 text-[13px] '>
                            <BiListMinus size={21} />
                            Order ID
                        </span>
                        <span className='p-2 col-span-2 flex items-center gap-2 border border-gray-400 text-[13px] '>
                            <MdDateRange size={16} />
                            Order Date
                        </span>
                        <span className='col-span-2 flex items-center gap-2 p-2 border border-gray-400 text-[13px] '>
                            <AiFillCar size={17} />
                            Tracking Number
                        </span>
                        <span className='p-2 col-span-2 flex items-center gap-2 border border-gray-400 text-[13px] font-medium'>
                            <IoMdPricetags size={17} />
                            Product Price
                        </span>
                        <span className='col-span-2 flex items-center gap-2 p-2 border border-gray-400 text-[13px] font-medium'>
                            <HiStatusOnline size={17} />
                            Status
                        </span>
                        <span className='p-2 border border-gray-400 text-[13px] font-medium flex items-center justify-center gap-2'>
                            <MdWorkspacesFilled size={18} />
                            Action
                        </span>
                    </div>
                    <div className='grid grid-cols-11'>
                        <span className='col-span-2 flex items-center  p-[10px] border border-t-0  border-gray-400 text-[12px] font-medium'>
                            #56753GD4362
                        </span>
                        <span className='col-span-2 flex items-center p-[10px] border border-t-0  border-gray-400 text-[12px] font-medium whitespace-nowrap'>
                            12 August,2023
                        </span>
                        <span className='col-span-2 flex items-center p-[10px] border border-t-0 border-gray-400 text-[12px] font-medium'>
                            1343rers232
                        </span>
                        <span className='col-span-2 flex items-center p-[10px] border border-t-0  border-gray-400 text-[12px] font-medium'>
                            345 TK
                        </span>
                        <span className='col-span-2 flex items-center p-[10px] border border-t-0  border-gray-400 text-[12px] font-medium text-green-700'>
                            Delivered
                        </span>
                        <span className='p-[10px] border border-t-0  border-gray-400 text-[13px] font-medium flex items-center justify-center'>
                            <Link className='text-[12px] font-semibold bg-bgColor py-[4px] px-2 text-white rounded-sm shadow'
                                href={"/order-details/jhfdikgjudfhsk"}>
                                Details
                            </Link>
                        </span>
                    </div>
                </div>
            </div>


            <div className='md:hidden mt-4'>
                <div className='flex items-center justify-between mb-4'>
                    <span className='text-[11px] font-medium bg-bgColor text-white px-[10px] py-[5px] rounded-full'>All Orders</span>
                    <span className='text-[11px] font-medium  border px-[10px] py-[5px] rounded-full'>
                      Pending
                    </span>
                    <span className='text-[11px] font-medium  border px-[10px] py-[5px] rounded-full'>
                    Delivered
                    </span>
                    <span className='text-[11px] font-medium  border px-[10px] py-[5px] rounded-full'>
                    Cancelled
                    </span>
                </div>
                <OrderCard />
            </div>
        </div >
    )
}

export default MyOrder