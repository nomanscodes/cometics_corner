import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'


const CategoryPageMobilePorsone = () => {

    const [short, setShort] = useState(false)
    const [brand, setBrand] = useState(false)

    return (
        <div className='bg-white relative'>
            <div className='flex items-center gap-2 mt-1 p-2'>
                <div>
                    <span onClick={() => setShort(true)} className='flex items-center border border-bgColor gap-1 px-3 py-1 rounded-full'>
                        <h1 className='xxsFont uppercase'>short by</h1>
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
                <div>
                    <span onClick={() => setBrand(true)} className='flex items-center border border-bgColor gap-1 px-3 py-1 rounded-full'>
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
            </div>
        </div>
    )
}

export default CategoryPageMobilePorsone