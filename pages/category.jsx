import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/Layouts/Layout'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import Bottom from '@/components/PhoneBottom/Bottom'
import { useRouter } from 'next/router'
import CategoryList from '@/components/Category/CategoryList'
import ProductCart from '@/components/Home/Products/ProductCard'
import AdsSection from '@/components/Home/AdsSection'
import TopBrand from '@/components/Home/TopBrand/TopBrand'

const Category = () => {

    const { asPath, pathname } = useRouter()
    const [showShort, setShowShort] = useState(false)
    const [showColor, setShowColor] = useState(false)
    const [showSize, setShowSize] = useState(false)
    const [showRating, setShowRating] = useState(false)
    const [showSkin, setShowSkin] = useState(false)

    return (
        <Layout >
            <Head>
                <title>Cometics Center-shop-page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='relative md:flex lg:grid grid-cols-5 gap-4 px-2 md:px-6 mt-4'>
                <div className="categorySection lg:col-span-1 bg-white shadow h-fit">
                    <CategoryList />
                </div>
                <div className="contentSection md:w-full lg:w-full lg:col-span-4">
                    <AdsSection />
                    <div className='flex items-center justify-start  lg:justify-between  mt-3 px-2'>
                        <div className='flex items-center  gap-6'>
                            <div className="relative px-2 py-[6px] bg-white cursor-pointer shadow ">
                                <span onClick={() => setShowSize(false) || setShowRating(false) || setShowColor(false) || setShowShort(!showShort)} className='flex items-center'>
                                    <p className='font-semibold text-xs whitespace-nowrap'>SHORTED BY</p>
                                    <MdKeyboardArrowDown className='ml-2' size={22} />
                                </span>
                                <div className={`absolute z-30 mt-[7px] -ml-2 ${showShort ? `w-32 transition-all duration-500` : `hidden`}  bg-white p-3 flex flex-col gap-2`}>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                </div>
                            </div>
                            <div className="relative px-2 py-[6px] bg-white cursor-pointer shadow ">
                                <span onClick={() => setShowSize(false) || setShowRating(false) || setShowShort(false) || setShowColor(!showColor)} className='flex items-center'>
                                    <p className='font-semibold text-xs whitespace-nowrap'>COLOR</p>
                                    <MdKeyboardArrowDown className='ml-2' size={22} />
                                </span>
                                <div className={`absolute z-30 mt-[7px] -ml-2 ${showColor ? `w-32 transition-all duration-500` : `hidden`}  bg-white p-3 flex flex-col gap-2`}>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                </div>
                            </div>
                            <div className="relative px-2 py-[6px] bg-white cursor-pointer shadow ">
                                <span onClick={() => setShowColor(false) || setShowRating(false) || setShowShort(false) || setShowSize(!showSize)} className='flex items-center'>
                                    <p className='font-semibold text-xs whitespace-nowrap'>SIZE</p>
                                    <MdKeyboardArrowDown className='ml-2' size={22} />
                                </span>
                                <div className={`absolute z-30 mt-[7px] -ml-2 ${showSize ? `w-32 transition-all duration-500` : `hidden`}  bg-white p-3 flex flex-col gap-2`}>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                </div>
                            </div>
                            <div className="relative px-2 py-[6px] bg-white cursor-pointer shadow ">
                                <span onClick={() => setShowColor(false) || setShowSize(false) || setShowShort(false) || setShowRating(!showRating)} className='flex items-center'>
                                    <p className='font-semibold text-xs whitespace-nowrap'>RATING</p>
                                    <MdKeyboardArrowDown className='ml-2' size={22} />
                                </span>
                                <div className={`absolute z-30 mt-[7px] -ml-2 ${showRating ? `w-32 transition-all duration-500` : `hidden`}  bg-white p-3 flex flex-col gap-2`}>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                    <span className='flex items-center gap-3'>
                                        <input value="" type="radio" className=' radio w-4 h-4 accent-bgColor' />
                                        <p className='text-base font-medium footerText3'>Face</p>
                                    </span>
                                </div>
                            </div>


                        </div>
                        <div className=" hidden lg:flex items-center px-2 py-[6px]  bg-white shadow">
                            <p className='font-semibold text-xs'>65 Items</p>
                        </div>
                    </div>
                    <div className='mt-3 w-fit'>
                        <h1 className='font-semibold text-base'>QUALITY MACKUP</h1>
                        <hr className='bg-bgColor h-[2px] w-full mt-2' />
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3'>
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
                    {/* <TopBrand /> */}
                </div>
            </div>
            <Bottom />
        </Layout >
    )
}


export default Category;
