import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiOutlineSearch } from "react-icons/ai"


const Middle = () => {
  return (
    <div className='px-6 hidden md:flex items-center justify-between gap-2 md:gap-0 py-3 md:py-2  '>
      <div className='hidden md:block'>
        <Image
          alt='logo'
          src="/assets/MENOM (1).png"
          height={70}
          width={100}
        />
      </div>
      <div className='hidden lg:flex items-center gap-2'>
        <Image
          alt='location'
          src="/SVG/location.svg"
          height={20}
          width={25}
        />
        <span className='flex flex-col'>
          <p className='text-xs opacity-50'>Delivery To</p>
          <p className='text-sm -mt-1'>Bangladesh</p>
        </span>
      </div>
      <div className='flex w-full lg:w-auto md:mx-2 lg:mx-0'>
        <input
          type="text"
          className="flex flex-1 rounded-lg rounded-r-none md:rounded md:rounded-r-none lg:flex-none lg:w-96 py-2 md:py-1 text-sm border border-r-0  border-solid border-neutral-700 pl-4 focus:outline-none "
          placeholder="Search here"
        />
        <AiOutlineSearch className='h-[38px] text-white bg-bgColor rounded-lg rounded-l-none md:rounded md:rounded-l-none md:h-8 lg:h-9 p-1 w-10 border border-l-0 border-solid border-neutral-700' size={30} />
      </div>
      <div className='hidden lg:flex items-center leading-tight gap-3 px-3'>
        <Image src="/avatar.png" alt='profile image' className='rounded-full' height={30} width={30} />
        <span className=''>
          <h6 className='text-sm'>noman@gmail.com</h6>
          <h6 className='text-xs opacity-70'>(Customer)</h6>
        </span>
      </div>
      <div className='px-3 hidden md:flex items-center gap-2 text-white'>
        <Link
          href={""}
          className="h-10 w-10 rounded-full z-10 flex justify-center items-center "
        >
          <p className="h-5 w-5 bg-bgColor rounded flex items-center justify-center absolute z-20  mb-7 ml-5 ">
            <span className="fontSize10">05</span>
          </p>
          <Image src="/SVG/wishlist.svg" alt='cart' height={20} width={28}></Image>
        </Link>
        <Link
          href={"/cart"}
          className="h-10 w-10 rounded-full z-10 flex justify-center items-center "
        >
          <p className="h-5 w-5 bg-bgColor rounded flex items-center justify-center absolute z-20  mb-7 ml-5 ">
            <span className="fontSize10">05</span>
          </p>
          <Image src="/SVG/cart2.svg" alt='cart' height={20}
            width={22}></Image>
        </Link>
      </div>

    </div>
  )
}

export default Middle
