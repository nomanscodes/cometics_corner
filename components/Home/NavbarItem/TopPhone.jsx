import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from "react-icons/ai"

const TopPhone = () => {
    return (
        <div className='container mx-auto md:hidden px-3 '>
            <div className='flex items-center justify-between'>
                <div className='logoSection'>
                    <Image
                        alt='logo'
                        src="/logo1.png"
                        height={40}
                        width={90}
                    />
                </div>
                <div className='account&cart flex items-center gap-4'>
                    <Link href={""} className='flex items-center gap-1'>
                        <span className='text-base font-semibold font-poppins'>Sign in</span>
                        <Image
                            alt='accountt'
                            src="/SVG/accountBlack.svg"
                            height={20}
                            width={20}
                        />
                    </Link>
                    <div className='cartSection flex items-center '>
                        <Link
                            href={"/cartpage"}
                            className="h-10 w-10 rounded-full z-10 flex justify-center items-center  relative mt-2"
                        >
                            <p className="h-5 w-5 bg-bgColor rounded flex items-center justify-center absolute z-50 mb-6 ml-5 ">
                                <span className="fontSize10 text-white">05</span>
                            </p>
                            <Image src="/SVG/cart2.svg" alt='cart' height={20}
                                width={22}></Image>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex w-full'>
                <input
                    type="text"
                    className="flex flex-1 rounded-lg rounded-r-none md:rounded md:rounded-r-none lg:flex-none lg:w-96 py-2 md:py-1 text-sm border border-r-0  border-solid border-neutral-700 pl-4 focus:outline-none "
                    placeholder="Search here"
                />
                <AiOutlineSearch className='h-[38px] text-white bg-bgColor rounded-lg rounded-l-none md:rounded md:rounded-l-none md:h-8 lg:h-9 p-1 w-10 border border-l-0 border-solid border-neutral-700' size={30} />
            </div>
        </div>
    )
}

export default TopPhone