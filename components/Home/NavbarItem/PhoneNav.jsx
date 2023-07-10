import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from "react-icons/ai"
import Link from 'next/link'

const PhoneNav = () => {
    return (
        <div className='px-2 py-[3px] bg-[#131a22]'>
            <div className=''>
                <div className='logoSection py-[6px] flex items-center justify-between text-white'>
                    {/* <Image
                        alt='logo'
                        src="/assets/MENOM (1).png"
                        height={40}
                        width={90}
                    /> */}
                    <h1 className='text-[20px] font-bold '>cometics</h1>

                    <div className='flex items-center gap-3'>
                        <Link href={""} className='flex items-center gap-2'>
                            <h5 className='text-[13px] font-medium'>Sign In</h5>
                            <picture>
                                <img className='w-5' src="/SVG/accountWhite.svg" alt="" />
                            </picture>
                        </Link>
                        <Link
                            href={"/cart"}
                            className="h-10 w-10 rounded-full z-10 flex justify-center items-center"
                        >
                            <p className="h-5 w-5 bg-bgColor rounded-full flex items-center justify-center absolute z-20  mb-7 ml-5 ">
                                <span className="fontSize10">05</span>
                            </p>
                            <picture>
                                <img className='w-5' src="/SVG/whitecart.svg" alt="" />
                            </picture>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 w-full mb-1'>
                <div className='flex w-full'>
                    <input
                        type="text"
                        className="flex flex-1 py-2 text-black text-sm border border-l-0 border-neutral-300 pl-2 focus:outline-none rounded"
                        placeholder="Search Amazon"
                    />
                    <AiOutlineSearch className='absolute right-4 mt-1' size={28} />
                </div>
            </div>
        </div>
    )
}

export default PhoneNav