import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineSupervisorAccount } from "react-icons/md"

const VendorCart = () => {
  return (
    <div className='w-32 relative bg-white shadow-md'>
      <div className="profileImage  flex items-center justify-center">
        <picture>
          <img className='h-24 w-full' src="/happy.avif" alt="" />
        </picture>
      </div>
      <div className="name absolute top-0 mt-2 pl-1">
        <h1 className='text-sm font-bold flex items-center gap-2'>Wellness Store <span><IoIosArrowForward size={13} /></span></h1>
        <h4 className='text-xs'>For all health needs</h4>
      </div>
      <div className='px-2 w-32 mt-1'>
        <div className="followebutton flex items-center justify-between  pb-1">
          <span className='flex items-center gap-2'>
            <picture>
              <img src="/SVG/accountBlack.svg" className='w-[15px] opacity-80' alt="" />
            </picture>
            <p className='text-sm font-bold'>12.6K</p>
          </span>
          <span>
            <button className='text-xs md:text-sm w-full  text-white bg-bgColor px-[5px]'>
              Follow
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default VendorCart
