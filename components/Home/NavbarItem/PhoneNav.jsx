import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from "react-icons/ai"

const PhoneNav = () => {
    return (
        <div className='px-3 py-[5px]'>
            <div className=''>
                <div className='logoSection'>
                    <Image
                        alt='logo'
                        src="/assets/MENOM (1).png"
                        height={40}
                        width={90}
                    />
                </div>
            </div>
            <div className='flex items-center gap-2 w-full'>
                <div className='flex w-full'>
                    <AiOutlineSearch className='h-[38px] text-black p-1 w-10 border border-r-0 border-neutral-400 opacity-60' size={30} />
                    <input
                        type="text"
                        className="flex flex-1 py-2 md:py-1 text-black text-sm border border-l-0 border-neutral-300 pl-4 focus:outline-none "
                        placeholder="Search For Products"
                    />
                </div>
            </div>
        </div>
    )
}

export default PhoneNav