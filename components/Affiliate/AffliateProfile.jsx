import Link from 'next/link'
import React from 'react'
import { Previous } from '@/function'

const AffliateProfile = ({ setFormTab }) => {
    const tab = "webandapps_list"

    const submitHandeler = () => {
        setFormTab("start_affiliate")
        sessionStorage.setItem("affiliateTab", "start_affiliate")
    }

    return (
        <>
            <div className='bg-white border shadow-sm'>

                <h3 className='p-3 text-bgColor text-[14px] md:text-[15px] font-medium'>Profile</h3>
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
                    <div className='mt-5'>
                        <div className='md:w-3/5'>
                            <h3 className='text-[13px] md:text-[16px] font-semibold text-zinc-800'>What is your prefred affiliate store ID ?</h3>
                            <input type="text" className='py-[8px] md:py-[7px] flex flex-1 w-[100%] text-[12px] md:text-[14px] pl-2 rounded-md md:rounded-sm focus:outline-none border border-gray-500 mt-2' />
                            <h3 className='text-[13px] md:text-[16px] font-semibold text-zinc-800 mt-4'>Tell us about the content you create</h3>
                            <textarea type="text" className='py-[8px] md:py-[7px] flex flex-1 w-[100%] text-[12px] md:text-[14px] pl-2 rounded-md md:rounded-sm focus:outline-none border border-gray-500 mt-2 min-h-[100px] md:min-h-[150px]' />
                            <p className='mt-2 text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem tenetur adipisci porro quam minus mollitia impedit esse, suscipit iste </p>
                            <div className='mt-3 '>
                                <h3 className='text-[13px] md:text-[16px] font-semibold text-zinc-800'>Which of the following best describe your content ? </h3>
                                <div className='mt-2 md:flex items-center gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className="font-medium 
                                            text-[13px] md:text-sm">
                                                Blog
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className=" font-medium text-[13px] md:text-sm">
                                                Comperison shopping engine
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className=" font-medium text-[13px] md:text-sm">
                                                Search
                                            </span>
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-2 md:mt-0'>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className=" font-medium text-[13px] md:text-sm">
                                                Content or niche website
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className=" font-medium text-[13px] md:text-sm">
                                                Coupon or deals website
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="customer"
                                                name="user_type"
                                                className="checked w-4 h-4 accent-bgColor"
                                            />
                                            <span className=" font-medium text-[13px] md:text-sm">
                                                Other skills
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='text-[13px] md:text-[16px] font-semibold text-zinc-800'>How did you here about us ?</h3>
                                    <select className="w-[100%] py-[8px] px-2 md:px-3 text-[14px] focus:outline-none rounded border border-gray-300 bg-slate-200 mt-2" name="division">
                                        <option value="Dhaka ">Dhaka</option>
                                        <option value="Barisl ">Barisal</option>
                                        <option value="Khulna ">Khulna</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <p className='mt-2 text-zinc-900 text-[12px] md:text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem tenetur adipisci porro quam minus mollitia impedit esse, suscipit iste Autem tenetur adipisci porro quam minus mollitia impedit esse, suscipit iste </p>
                            <div className='mt-2 bg-gradient-to-b from-slate-300 to-red-200 w-56 h-20 rounded-sm shadow flex items-center justify-center font-captcha text-[35px] font-bold p-2'>
                                bhd3dH4Bw3#
                            </div>
                            <h3 className='text-[13px] md:text-[16px] font-semibold text-zinc-800 mt-2'>Type the charecters in the above image</h3>
                            <input type="text" className='py-[6px] md:py-[7px] flex flex-1 
                            w-[200px] text-[12px] md:text-[14px] pl-2 rounded-md md:rounded-sm focus:outline-none border border-gray-500 mt-2' />
                            <span className="flex md:items-center gap-2 mt-3">
                                <input
                                    id="red-checkbox"
                                    value=""
                                    type="checkbox"
                                    className="checked w-4 h-4 accent-bgColor mt-1 md:mt-0"
                                />
                                <p className="text-[13px] font-medium text-zinc-700">
                                    You agree to the terms and conditon of
                                    <Link href={""} className='text-green-600 px-1'>
                                        affiliate program operating agreement
                                    </Link>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 flex items-center justify-between'>
                <span onClick={() => Previous(setFormTab, tab)} className='flex items-center gap-2 px-4 py-1 border border-gray-500 rounded-md md:cursor-pointer'>
                    <picture>
                        <img src="/SVG/arrowBold.svg" className='w-4 rotate-180 opacity-80' alt="" />
                    </picture>
                    <h1 className='text-[14px] font-medium'>Previous</h1>
                </span>
                <span onClick={() => submitHandeler()} className='flex items-center gap-2 px-4 py-[6px] bg-bgColor rounded md:cursor-pointer'>
                    <h1 className='text-[14px] text-white font-medium'>Finish</h1>
                </span>
            </div>
        </>
    )
}

export default AffliateProfile