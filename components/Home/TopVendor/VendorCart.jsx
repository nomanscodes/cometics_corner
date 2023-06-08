import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineSupervisorAccount } from "react-icons/md"

const VendorCart = () => {
  return (
    <div className='w-auto relative bg-white shadow-md'>
      <div className="profileImage  flex items-center justify-center">
        <picture>
          <img className='h-28 w-full' src="/happy.avif" alt="" />
        </picture>
      </div>

      <div className="name absolute top-0 mt-2 pl-1">
        <h1 className='text-sm font-bold flex items-center gap-2'>Wellness Store <span><IoIosArrowForward size={13} /></span></h1>
        <h4 className='text-xs'>For all health needs</h4>
      </div>
      <div className='px-2 w-32 mt-1'>
        {/* <div className="ratingbadge flex items-center justify-center gap-4">
          <span>
            <MdOutlineSupervisorAccount className='opacity-80' size={22} />
          </span>
          <span className='flex items-center gap-2 bg-slate-200 px-[8px] py-[2px] rounded-full'>
            <picture>
              <img src="/SVG/star.svg" className='w-4' alt="" />
            </picture>
            <p className='text-sm font-semibold mt-1'>5.0</p>
          </span>
          <span>
            <picture>
              <img src="/SVG/badge.svg" className='w-4' alt="" />
            </picture>
          </span>
        </div> */}

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
