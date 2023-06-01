import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from "react-icons/ai"

const PhoneNav = () => {
    return (
        <div className='px-3 py-[5px]  text-white'>
            <div className='flex items-center'>
                <div className='logoSection'>
                    <Image
                        alt='logo'
                        src="/logo1.png"
                        height={40}
                        width={90}
                    />
                </div>
            </div>
            <div className='flex w-full'>
                <input
                    type="text"
                    className="flex flex-1 py-2 md:py-1 text-sm border border-r-0 border-neutral-400 pl-4 focus:outline-none "
                    placeholder="Search For Products"
                />
                <AiOutlineSearch className='h-[38px] bg-white text-black md:h-8 lg:h-9 p-1 w-10 border border-l-0 border-neutral-400' size={30} />
            </div>
        </div>
    )
}

export default PhoneNav