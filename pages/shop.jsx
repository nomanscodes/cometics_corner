import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/Layouts/Layout'
import { RxCross2 } from 'react-icons/rx'
import ProductCart from '@/components/Home/Products/ProductCard'
import AdsSection from '@/components/Home/AdsSection'
import { MdKeyboardArrowDown } from 'react-icons/md'
import LikeProducts from '@/components/ShopPage/LikeProducts'
import Bottom from '@/components/PhoneBottom/Bottom'
import { useRouter } from 'next/router'

const Shop = () => {

    const { asPath, pathname } = useRouter()

    const [showFilter, setShowFilter] = useState(false)


    return (
        <Layout >
            <Head>
                <title>Cometics Center-shop-page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AdsSection />
            <div className='relative' onClick={() => {
                if (showFilter) {
                    setShowFilter(false)
                }
            }}>
                <div className='relative md:flex xl:grid grid-cols-5 px-2 md:px-6 mt-4 font-poppins'>

                    <div className=' absolute md:-top-0 z-10 md:z-0 md:static md:col-span-2 lg:col-span-1 px-3 md:px-6 md:bg-white flex flex-1'>
                        <div className='relative'>
                            <div className="desktopFilter  py-[9px] hidden md:block">
                                <span className="filter flex items-center gap-3">
                                    <picture>
                                        <img className='w-4' src="/SVG/filter.svg" alt="" />
                                    </picture>
                                    <p className='font-semibold text-base'>FILTER BY</p>
                                </span>
                            </div>
                            <div onClick={() => setShowFilter(!showFilter)} className="MobileFilter absolute w-32 px-2 py-[6px] flex items-center justify-between bg-white cursor-pointer md:hidden shadow -top-10 -ml-[10px]">
                                <span className="filter flex items-center gap-3">
                                    <picture>
                                        <img className='w-4' src="/SVG/filter.svg" alt="" />
                                    </picture>
                                    <p className='md:font-semibold text-xs md:text-base'>FILTER BY</p>
                                </span>
                                <MdKeyboardArrowDown className='ml-2' size={22} />
                            </div>
                            <hr className='hidden md:block' />
                            <div className={`${showFilter ? `block overflow-y-scroll` : `hidden`} h-96 p-2 md:mt-0 rounded md:rounded-none shadow-2xl bg-white md:shadow-none md:h-auto  md:block`}>
                                <div className="categories  md:mt-7">
                                    <span className="filter flex items-center gap-3  bg-gray-100 p-1">
                                        <picture>
                                            <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                                        </picture>
                                        <p className='font-semibold text-sm'>CATEGORY</p>
                                    </span>
                                    <div className='mt-3'>
                                        <div className='flex items-center justify-between mt-1 '>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Face</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Face</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="priceRanger mt-7">
                                    <span className="filter flex items-center gap-3  bg-gray-100 p-1 ">
                                        <picture>
                                            <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                                        </picture>
                                        <p className='font-semibold text-sm'>PRICE</p>
                                    </span>
                                    <div className='mt-3'>
                                        <div className='flex items-center  mt-1 '>
                                            <span className='flex items-center gap-2 cursor-pointer hover:text-bgColor hover:font-bold duration-300'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <span className='flex items-center '>
                                                    <p className='text-base footerText3 mr-2'>1000 </p>
                                                    <span>-</span>
                                                    <p className='text-base footerText3 ml-2'> 1200</p>
                                                </span>
                                            </span>
                                        </div>
                                        <div className='flex items-center  mt-1 '>
                                            <span className='flex items-center gap-2 cursor-pointer hover:text-bgColor hover:font-bold duration-300'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <span className='flex items-center '>
                                                    <p className='text-base footerText3 mr-2'>1000 </p>
                                                    <span>-</span>
                                                    <p className='text-base footerText3 ml-2'> 1200</p>
                                                </span>
                                            </span>
                                        </div>
                                        <div className='flex items-center  mt-1 '>
                                            <span className='flex items-center gap-2 cursor-pointer hover:text-bgColor hover:font-bold duration-300'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <span className='flex items-center '>
                                                    <p className='text-base footerText3 mr-2'>1000 </p>
                                                    <span>-</span>
                                                    <p className='text-base footerText3 ml-2'> 1200</p>
                                                </span>
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between mt-3 font-normal'>
                                            <p className='text-sm font-bold'>From</p>
                                            <span className='flex flex-col'>
                                                <input
                                                    type="number" min={15}
                                                    className="border border-solid border-neutral-400 focus:outline-none w-16 pl-2 py-[4px] rounded-sm text-sm"
                                                    placeholder="&#2547;Min"
                                                />
                                            </span>
                                            <p className='text-sm font-bold'>To</p>
                                            <span className='flex flex-col'>
                                                <input
                                                    type="number" min={15}
                                                    className="border border-solid border-neutral-400 focus:outline-none w-16 pl-2 py-[4px] rounded-sm text-sm"
                                                    placeholder="&#2547;Max"
                                                />
                                            </span>
                                            <button className='border border-solid p-[6px] bg-bgColor'>
                                                <picture>
                                                    <img src="SVG/filterwhite.svg" className='w-4' alt="" />
                                                </picture>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sizeSection mt-7">
                                    <span className="filter flex items-center gap-3 bg-gray-100 p-1">
                                        <picture>
                                            <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                                        </picture>
                                        <p className='font-semibold text-sm'>SKIN TYPE</p>
                                    </span>
                                    <div className='mt-3'>
                                        <div className='flex items-center justify-between mt-1 '>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Combination</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Dry</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Medium</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Normal</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Oily</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Sensitive</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="brandSection mt-7">
                                    <span className="filter flex items-center gap-3 bg-gray-100 p-1">
                                        <picture>
                                            <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                                        </picture>
                                        <p className='font-semibold text-sm'>BRAND</p>
                                    </span>
                                    <div className='mt-3'>
                                        <div className='flex items-center justify-between mt-1 '>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Combination</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Dry</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Medium</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Normal</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Oily</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='flex items-center gap-2'>
                                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                                <p className='text-base footerText3'>Sensitive</p>
                                            </span>
                                            <p>49</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='contentSection md:col-span-3 lg:col-span-4 mt-12 md:mt-auto'>
                        <div className='md:ml-2 flex items-center gap-3 bg-white p-2 '>
                            <div className='flex items-center gap-1 bg-white shadow rounded-full border py-[2px] px-2 cursor-pointer'>
                                <p className='font-semibold text-sm text-bgColor'>Red Lipistic</p>
                                <RxCross2 size={12} />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:ml-2 mt-4'>
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                        </div>
                    </div>
                </div>

                <AdsSection />
                <LikeProducts />
            </div>
            <Bottom shopPath={pathname} />
        </Layout >
    )
}

export default Shop