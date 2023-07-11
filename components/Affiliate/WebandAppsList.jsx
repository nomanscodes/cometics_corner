import Link from 'next/link'
import React, { useState } from 'react'
import { Previous } from '@/function'


const WebandAppsList = ({ setFormTab }) => {

    const tab = "account_information"
    const [agree, setAgree] = useState(false)

    const submitHandeler = () => {
        setFormTab("affiliate_profile")
        sessionStorage.setItem("affiliateTab", "affiliate_profile")
    }

    
    return (
        <>
            <div className='bg-white border shadow-sm'>
                <h3 className='p-3 text-bgColor text-[14px] md:text-[15px] font-medium'>Your Website, Mobile Apps and Other Platform</h3>
                <hr />
                <div className='p-3'>
                    <span className='flex items-center gap-1 text-[13px] md:text-[15px] font-medium'>
                        <h4 className=' text-zinc-950 hidden md:block'>Important:</h4>
                        <h4 className='text-zinc-600'>Please read
                            <span className='text-green-700 px-1'>
                                <Link href={""}>
                                    these instraction
                                </Link>
                            </span>
                            before fill this form
                        </h4>
                    </span>
                    <p className='text-[12px] md:text-[14px] font-medium mt-2 text-zinc-900'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?</p>
                    <div className='mt-2 py-3 flex flex-col gap-4 md:grid grid-cols-2 '>
                        <div>
                            <h3 className='text-[14px] md:text-[16px] font-semibold text-zinc-800'>Enter Your Website`s URL</h3>
                            <div className='flex items-center gap-3 mt-2'>

                                <input type="text" placeholder='http://localhost:3000/affiliate-form' 
                                className='py-[6px] md:py-[7px] flex flex-1 
                                w-[100%] text-[12px] md:text-[14px] pl-2 rounded-md md:rounded-sm focus:outline-none border border-gray-500' />

                                <h1 className='px-6 py-[5px] md:py-[7px] text-white bg-bgColor w-20 flex items-center justify-center md:cursor-pointer rounded-sm'>Add</h1>
                            </div>
                            <div className='mt-2 border border-gray-500 h-36
                            md:h-48 rounded p-3 text-zinc-700'>

                            </div>
                        </div>
                        <div>
                            <h3 className='text-[14px] md:text-[16px] font-semibold text-zinc-800'>Enter Your Mobile Apps or Other Platform URL</h3>
                            <div className='flex items-center gap-3 mt-2'>
                                <input type="text" placeholder='http://localhost:3000/affiliate-form' className='
                                py-[6px] md:py-[7px] flex flex-1 w-[100%] text-[12px] md:text-[14px] pl-2 rounded-md md:rounded-sm focus:outline-none border border-gray-500' />
                                <h1 className='px-6 py-[5px] md:py-[7px] text-white bg-bgColor w-20 flex items-center justify-center md:cursor-pointer rounded-sm'>Add</h1>
                            </div>
                            <div className='mt-2 border border-gray-500 h-36
                             md:h-48 rounded p-3 text-zinc-700'>

                            </div>
                        </div>
                    </div>

                    <h1 onClick={() => setAgree(true)} className={`px-6 py-1 border border-gray-500 rounded w-20 
                    ${agree ? `hidden` : `flex`}  items-center justify-center md:cursor-pointer`}>Next</h1>

                    <div className={`py-2 ${agree ? `block` : `hidden`}`}>
                        <p className='text-[13px] md:text-[14px] font-medium md:mt-2 text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam, quaerat saepe dolores ipsa, delectus cum repudiandae deserunt unde nulla veritatis quibusdam! Quia sequi earum eaque possimus quae voluptatem molestias?</p>
                        <div className='flex items-center gap-4 mt-2'>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="customer"
                                    name="user_type"
                                    className="checked w-4 h-4 accent-bgColor"
                                />
                                <span className=" font-medium text-sm">
                                    Yes
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="customer"
                                    name="user_type"
                                    className="checked w-4 h-4 accent-bgColor"
                                />
                                <span className=" font-medium text-sm">
                                    No
                                </span>
                            </div>
                        </div>
                        <h1 onClick={() => submitHandeler()} className='px-6 py-1 text-white bg-bgColor w-20 flex items-center justify-center md:cursor-pointer text-[15px] font-medium mt-4'>Confirm</h1>
                    </div>
                </div>
            </div>
            <div className='mt-3 flex items-center'>
                <span onClick={() => Previous(setFormTab, tab)} className='flex items-center gap-2 px-4 py-1 border border-gray-500 rounded-md md:cursor-pointer'>
                    <picture>
                        <img src="/SVG/arrowBold.svg" className='w-4 rotate-180 opacity-80' alt="" />
                    </picture>
                    <h1 className='text-[14px] font-medium'>Previous</h1>
                </span>
            </div>
        </>
    )
}

export default WebandAppsList