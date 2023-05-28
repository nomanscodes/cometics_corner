import React from 'react'
import { MdOutlineSupervisorAccount } from "react-icons/md"

const VendorCart = () => {
  return (
    <div className='w-auto bg-white rounded shadow-md'>
      <div className="profileImage flex items-center justify-center p-3">
        <picture>
          <img className='rounded-full w-28' src="/assets/avatar.avif" alt="" />
        </picture>
      </div>
      <div className='px-2 w-40'>
        <div className="ratingbadge flex items-center justify-center gap-4">
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
        </div>
        <div className="name flex items-center justify-center mt-2">
          <h1 className='text-sm font-bold whitespace-nowrap'>Mehedi Hassan</h1>
        </div>
        <div className="followebutton w-fit flex items-center justify-center gap-4 mt-2 pb-2">
          <span className='flex items-center gap-2'>
            <picture>
              <img src="/SVG/accountBlack.svg" className='w-[15px] opacity-80' alt="" />
            </picture>
            <p className='text-sm font-bold'>12.6K</p>
          </span>
          <span>
            <button className='text-sm w-full font-bold text-white bg-bgColor  rounded-md px-[2px]'>
              Following
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default VendorCart
