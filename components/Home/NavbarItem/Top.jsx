import React from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io"
import Image from 'next/image'


const Top = () => {
    return (
        <div className='container mx-auto py-2 hidden md:flex items-center justify-between  text-xs'>
            <div className='hidden md:flex items-center gap-3 '>
                <Link href={""}>Account</Link>
                <Link href={""}>Track Order</Link>

                <div className="flex items-center  gap-1">
                    <p className="">Available 24/7 at</p>
                    <p>+0481948491</p>
                </div>
            </div>
            <div className=' flex items-center justify-between w-full px-2 md:px-0 md:w-fit md:flex md:items-center md:gap-3'>
                <div className='flex items-center gap-3'>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <h5>Bangladesh</h5>
                        <IoIosArrowDown size={16} />
                    </span>
                    <span className='flex items-center gap-1'>
                        <h5>BDT</h5>
                        <Image
                            alt='BDFLAG'
                            src={"/SVG/BdFlag.svg"}
                            width={20}
                            height={16}
                        />
                    </span>
                </div>
                <span className="flex items-center gap-2">
                    <Link href={"/login"}>
                        Login
                    </Link>
                    <span className="">or</span>
                    <Link href={"/registration"}>Sign in</Link>
                </span>
            </div>
        </div>
    )
}

export default Top
