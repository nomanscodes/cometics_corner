import Head from 'next/head'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/Layouts/Layout'
import { RxCross2 } from 'react-icons/rx'
import Bottom from '@/components/PhoneBottom/Bottom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import ProductCart from '@/components/Home/Products/ProductCard'
import CategoryPageMobilePorsone from '@/components/Category/CategoryPageMobilePortion'

const Category = () => {


    const [moreBrand, setMoreBrand] = useState(false)

    return (
        <Layout className="relative">
            <Head>
                <title>Cometics Center-Category-page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='md:hidden mt-1 '>
                <CategoryPageMobilePorsone />
            </div>
            <div className='hidden md:flex lg:grid lg:grid-cols-9 gap-2 px-3 mt-2'>
                <div className='md:w-64 lg:w-auto col-span-2  bg-white px-4 py-2 shadow-md'>
                    <div className=''>
                        <div className='flex items-center justify-between '>
                            <h2 className=' font-semibold'>FILTER</h2>
                            <a className=' font-semibold text-sm text-bgColor cursor-pointer'>CLEAR ALL</a>
                        </div>
                        <div className='mt-2 mb-2 grid grid-cols-3 gap-2'>
                            <span className='px-2 py-1 bg-slate-200 text-bgColor flex items-center gap-1 w-fit cursor-pointer'>
                                <RxCross2 size={14} />
                                <h1 className='text-xs font-medium uppercase '>SHOPE</h1>
                            </span>

                        </div>

                    </div>
                    <hr />
                    <div className="categories mt-5 mb-2 px">
                        <span className="filter flex items-center gap-3  bg-gray-100 p-1">
                            <picture>
                                <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                            </picture>
                            <p className='font-semibold text-xs'>CATEGORIES</p>
                        </span>
                        <Link href={""} className='mt-3 flex items-center gap-1 px-3 opacity-70'>
                            <FiChevronLeft size={15} />
                            <h1 className='text-sm'>Face and Mackup</h1>
                        </Link>
                    </div>
                    <div className="priceRanger mt-7">
                        <span className="filter flex items-center gap-3  bg-gray-100 p-1 ">
                            <picture>
                                <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                            </picture>
                            <p className='font-semibold text-xs'>PRICE</p>
                        </span>
                        <div className='mt-3 text-xs'>
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
                                <p className='text-sm font-semibold'>From</p>
                                <span className='flex flex-col'>
                                    <input
                                        type="number" min={15}
                                        className="border border-solid border-neutral-400 focus:outline-none w-16 pl-2 py-[2px] rounded-sm text-xs"
                                        placeholder="&#2547;Min"
                                    />
                                </span>
                                <p className='text-sm font-semibold'>To</p>
                                <span className='flex flex-col'>
                                    <input
                                        type="number" min={15}
                                        className="border border-solid border-neutral-400 focus:outline-none w-16 pl-2 py-[2px] rounded-sm text-xs"
                                        placeholder="&#2547;Max"
                                    />
                                </span>
                                <button className='border border-solid p-[3px] bg-bgColor'>
                                    <picture>
                                        <img src="SVG/filterwhite.svg" className='w-4' alt="" />
                                    </picture>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="brandSection mt-7">
                        <span className="filter flex items-center gap-3 bg-gray-100 p-1">
                            <picture>
                                <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                            </picture>
                            <p className='font-semibold text-xs'>BRAND</p>
                        </span>
                        <div className='flex w-full relative mt-2'>
                            <input
                                type="text"
                                className="py-1 w-fit text-sm flex flex-1 border border-opacity-70 border-t-0 border-r-0 border-l-0 border-neutral-500 pl-6 focus:outline-none "
                                placeholder="Search brand"
                            />
                            <AiOutlineSearch className=' absolute left-0 mt-[7px] text-gray-500 border-solid border-neutral-500' size={18} />
                        </div>
                        <div className={`mt-3 text-xs  ${moreBrand ? `h-auto` : `h-44 overflow-hidden `} `}>
                            <div className='flex items-center justify-between mt-1 '>
                                <span className='flex items-center gap-2'>
                                    <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                    <p className='text-base footerText3'>Combination</p>
                                </span>
                                <p>49</p>
                            </div>
                            <div className='flex items-center justify-between mt-1 '>
                                <span className='flex items-center gap-2'>
                                    <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                    <p className='text-base footerText3'>Combination</p>
                                </span>
                                <p>49</p>
                            </div>
                            <div className='flex items-center justify-between mt-1 '>
                                <span className='flex items-center gap-2'>
                                    <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                    <p className='text-base footerText3'>Combination</p>
                                </span>
                                <p>49</p>
                            </div>
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
                            <div className='flex items-center justify-between mt-1'>
                                <span className='flex items-center gap-2'>
                                    <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                    <p className='text-base footerText3'>Sensitive</p>
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
                            <div className='flex items-center justify-between mt-1'>
                                <span className='flex items-center gap-2'>
                                    <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                    <p className='text-base footerText3'>Sensitive</p>
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
                        {moreBrand ? <><span onClick={() => setMoreBrand(false)} className='text-sm font-semibold text-bgColor cursor-pointer'>MORE  LESS</span></> : <>
                            <span onClick={() => setMoreBrand(true)} className='text-sm font-semibold text-bgColor cursor-pointer'>38 MORE</span>
                        </>}

                    </div>
                    <div className="Discount mt-5">
                        <span className="filter flex items-center gap-3 bg-gray-100 p-1">
                            <picture>
                                <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                            </picture>
                            <p className='font-semibold text-xs'>DISCOUNT</p>
                        </span>
                        <div className='mt-3 text-xs'>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <p className='text-base footerText3'>50% or more</p>
                            </span>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <p className='text-base footerText3'>25% or more</p>
                            </span>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <p className='text-base footerText3'>30% or more</p>
                            </span>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <p className='text-base footerText3'>40% or more</p>
                            </span>
                        </div>
                    </div>
                    <div className="customerRating mt-5">
                        <span className="filter flex items-center gap-3 bg-gray-100 p-1">
                            <picture>
                                <img className='w-3' src="/SVG/leftalignment.svg" alt="" />
                            </picture>
                            <p className='font-semibold text-xs'>CUSTOMER RATING</p>
                        </span>
                        <div className='mt-3 text-xs'>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <span className='text-base footerText3 flex items-center gap-1 leading-relaxed'>
                                    <h1>4</h1><picture><img src="/SVG/star.svg" className='
                                    h-[14px] px-1' alt="" />
                                    </picture>
                                    and above
                                </span>
                            </span>
                            <span className='flex items-center gap-2 mt-1'>
                                <input id="red-checkbox" value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                <span className='text-base footerText3 flex items-center gap-1 leading-relaxed'>
                                    <h1>5</h1><picture><img src="/SVG/star.svg" className='
                                    h-[14px] px-1' alt="" />
                                    </picture>
                                    and above
                                </span>
                            </span>

                        </div>
                    </div>
                </div>
                <div className='col-span-7 w-full'>
                    <div className='bg-white p-2'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-[2px]  text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
                                <Link href={""} className='uppercase'>Home</Link>
                                <FiChevronRight size={14} />
                            </div>
                            <div className='flex items-center gap-[2px] text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                                <Link href={""} className='uppercase'>Beauty and face</Link>
                                <FiChevronRight size={14} />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>
                            <h1 className='text-sm font-medium opacity-80 uppercase'>Mackup</h1>
                            <span className='text-xs opacity-60'>(Showing 1 – 24 products of 7,993 products)</span>
                        </div>
                        <div className='flex items-center gap-3 mt-3 uppercase'>
                            <span className='flex items-center gap-1'>
                                <h1 className='text-sm font-medium opacity-80 '>short by</h1>
                                <FiChevronRight />
                            </span>
                            <h1 className='text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer text-[#142b17]'>popularity</h1>
                            <h1 className='text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'>price-low to-high</h1>
                            <h1 className='text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'>price-high to-low</h1>
                            <h1 className='text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'>newest first</h1>
                        </div>
                        {/* <hr className='mt-2' /> */}
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6px] mt-1'>
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
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </div>
                </div>
            </div>
            <Bottom />

        </Layout >
    )
}


export default Category;
