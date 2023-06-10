import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import ProductCart from '../Home/Products/ProductCard'


const CategoryPageMobilePorsone = () => {

    const [short, setShort] = useState(false)
    const [brand, setBrand] = useState(false)
    const [discount, setDiscount] = useState(false)
    const [price, setPrice] = useState(false)
    const [customerRating, setCustomerRating] = useState(false)

    return (
        <>
            <div className='bg-white relative'>
                <div className='flex items-center justify-start  overflow-x-auto scroll-smooth gap-2 mt-1 p-2'>
                    <div className='short_bySection'>
                        <span onClick={() => setShort(true)} className='flex items-center border border-bgColor gap-1 px-[10px] py-[5px] rounded-full w-fit'>
                            <h1 className='xxsFont uppercase whitespace-nowrap'>short by</h1>
                            <HiOutlineChevronDown size={14} />
                        </span>
                        <div className={`fixed bottom-0 left-0 right-0  z-50 ${short ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                            <div onClick={() => setShort(false)} className='bg-black/70 h-full w-full'>

                            </div>
                            <div className='bg-white h-fit'>
                                <h1 className='uppercase font-medium text-sm p-4'>
                                    short by
                                </h1>
                                <hr />
                                <div className='p-4 mt-1 flex flex-col gap-4'>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                    <span className='flex items-center justify-between mb-1'>
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                        <input name='short_by' value="" type="radio" className='checked w-4 h-4 accent-bgColor' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='brandSection'>
                        <span onClick={() => setBrand(true)} className='flex items-center border border-bgColor gap-1 px-[10px] py-[5px] rounded-full'>
                            <h1 className='xxsFont uppercase'>brand</h1>
                            <HiOutlineChevronDown size={14} />
                        </span>
                        <div className={`fixed bottom-0 left-0 right-0 z-50 ${brand ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                            <div onClick={() => setBrand(false)} className='bg-black/70 h-full w-full'>

                            </div>
                            <div className='bg-white h-fit'>
                                <h1 className='uppercase font-medium text-sm p-4'>
                                    filters
                                </h1>
                                <div className='flex w-full px-4 relative'>
                                    <input
                                        type="text"
                                        className="py-2 w-fit text-sm flex flex-1 border border-opacity-60  borderborder-neutral-500 pl-8 focus:outline-none "
                                        placeholder="Search brand"
                                    />
                                    <AiOutlineSearch className=' absolute ml-1 mt-[10px] text-gray-500 border-solid border-neutral-500' size={22} />
                                </div>
                                <div className='p-4 mt-1 grid grid-cols-2 gap-3'>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                </div>
                                <div className='bg-white flex items-center gap-5 mb-1 p-2'>
                                    <button className='px-2 py-1 bg-gray-500 text-white w-full'>Clear</button>
                                    <button className='px-2 py-1 bg-bgColor text-white w-full'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='discountSection'>
                        <span onClick={() => setDiscount(true)} className='flex items-center border border-bgColor gap-1 px-[10px] py-[5px] rounded-full'>
                            <h1 className='xxsFont uppercase'>discount</h1>
                            <HiOutlineChevronDown size={14} />
                        </span>
                        <div className={`fixed bottom-0 left-0 right-0 z-50 ${discount ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                            <div onClick={() => setDiscount(false)} className='bg-black/70 h-full w-full'>

                            </div>
                            <div className='bg-white h-fit'>
                                <h1 className='uppercase font-medium text-sm p-4'>
                                    filters
                                </h1>
                                <hr />
                                <div className='p-4 mt-1 grid grid-cols-2 gap-3'>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                    <span className='flex items-center  gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium'>Relevance</h4>
                                    </span>
                                </div>
                                <div className='bg-white flex items-center gap-5 mb-1 p-2'>
                                    <button className='px-2 py-1 bg-gray-500 text-white w-full'>Clear</button>
                                    <button className='px-2 py-1 bg-bgColor text-white w-full'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='priceSection'>
                        <span onClick={() => setPrice(true)} className='flex items-center border border-bgColor gap-1 
                    px-[10px] py-[5px] rounded-full'>
                            <h1 className='xxsFont uppercase'>price</h1>
                            <HiOutlineChevronDown size={14} />
                        </span>
                        <div className={`fixed bottom-0 left-0 right-0 z-50 ${price ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                            <div onClick={() => setPrice(false)} className='bg-black/70 h-full w-full'>

                            </div>
                            <div className='bg-white h-fit'>
                                <h1 className='uppercase font-medium text-sm p-4'>
                                    filters
                                </h1>
                                <hr />
                                <div className='p-4 mt-1 grid grid-cols-2 gap-3'>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium capitalize'>tk 299 and below</h4>
                                    </span>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium capitalize'>tk 300 to tk 499</h4>
                                    </span>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-4 h-4 accent-bgColor' />
                                        <h4 className='text-xs font-medium capitalize'>tk 500 to tk 999</h4>
                                    </span>

                                </div>
                                <div className='bg-white flex items-center gap-5 mb-1 p-2'>
                                    <button className='px-2 py-1 bg-gray-500 text-white w-full'>Clear</button>
                                    <button className='px-2 py-1 bg-bgColor text-white w-full'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='priceSection'>
                        <span onClick={() => setCustomerRating(true)} className='flex items-center border border-bgColor gap-1 
                    px-[10px] py-[5px] rounded-full w-fit'>
                            <h1 className='xxsFont uppercase whitespace-nowrap'>customer rating</h1>
                            <HiOutlineChevronDown size={14} />
                        </span>
                        <div className={`fixed bottom-0 left-0 right-0 z-50 ${customerRating ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                            <div onClick={() => setCustomerRating(false)} className='bg-black/70 h-full w-full'>
                            </div>
                            <div className='bg-white h-fit'>
                                <h1 className='uppercase font-medium text-sm p-4'>
                                    filters
                                </h1>
                                <hr />
                                <div className='p-4 mt-1 grid grid-cols-2 gap-3'>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-3 h-3 accent-bgColor' />
                                        <h4 className='text-xs font-medium  flex items-center '>
                                            3 <picture>
                                                <img className='h-3 mx-2' src="/SVG/star.svg" alt="" />
                                            </picture>
                                            above
                                        </h4>
                                    </span>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-3 h-3 accent-bgColor' />
                                        <h4 className='text-xs font-medium  flex items-center '>
                                            4 <picture>
                                                <img className='h-3 mx-2' src="/SVG/star.svg" alt="" />
                                            </picture>
                                            above
                                        </h4>
                                    </span>
                                    <span className='flex items-center gap-3 mb-1'>
                                        <input name='short_by' value="" type="checkbox" className='checked w-3 h-3 accent-bgColor' />
                                        <h4 className='text-xs font-medium  flex items-center '>
                                            3.5 <picture>
                                                <img className='h-3 mx-2' src="/SVG/star.svg" alt="" />
                                            </picture>
                                            above
                                        </h4>
                                    </span>
                                </div>
                                <div className='bg-white flex items-center gap-5 mb-1 p-2'>
                                    <button className='px-2 py-1 bg-gray-500 text-white w-full'>Clear</button>
                                    <button className='px-2 py-1 bg-bgColor text-white w-full'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-2 py-1 flex items-center justify-start  overflow-x-auto scroll-smooth gap-3'>
                    <div className='flex items-center gap-2 bg-[#f6f5f0] border border-gray-400 rounded py-1 px-2'>
                        <span className='flex flex-1 w-6'>
                            <picture>
                                <img className='w-full' src="/SVG/ceremony.svg" alt="" />
                            </picture>
                        </span>
                        <span>
                            <h1 className='text-xs font-medium font-poppins whitespace-nowrap'> Ceremony Offer</h1>
                        </span>
                    </div>
                    <div className='flex items-center gap-2 bg-[#f6f5f0] border border-gray-400 rounded py-1 px-2'>
                        <span className='flex flex-1 w-6'>
                            <picture>
                                <img className='w-full' src="/SVG/saving.svg" alt="" />
                            </picture>
                        </span>
                        <span>
                            <h1 className='text-xs font-medium font-poppins whitespace-nowrap'>Biggest Price less</h1>
                        </span>
                    </div>
                    <div className='flex items-center gap-2 bg-[#f6f5f0] border border-gray-400 rounded py-1 px-2'>
                        <span className='flex flex-1 w-6'>
                            <picture>
                                <img className='w-full' src="/SVG/combo.svg" alt="" />
                            </picture>
                        </span>
                        <span>
                            <h1 className='text-xs font-medium font-poppins whitespace-nowrap'>Combo offer</h1>
                        </span>
                    </div>
                    <div className='flex items-center gap-2 bg-[#f6f5f0] border border-gray-400 rounded py-1 px-2'>
                        <span className='flex flex-1 w-6'>
                            <picture>
                                <img className='w-full' src="/SVG/toprated.svg" alt="" />
                            </picture>
                        </span>
                        <span>
                            <h1 className='text-xs font-medium font-poppins whitespace-nowrap'>Top rated</h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-1 gap-1 px-2'>
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
        </>

    )
}

export default CategoryPageMobilePorsone