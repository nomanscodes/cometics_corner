import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineSupervisorAccount } from "react-icons/md"

const VendorCart = () => {
  return (
    <div className='w-auto bg-white shadow-lg'>
      <div style={{ backgroundImage: `url("/happy.avif")` }} className="name fitImage h-44">
        <div className='p-2'>
          <h1 className='text-sm font-medium md:font-bold flex items-center gap-2'>Wellness Store <span><IoIosArrowForward size={13} /></span></h1>
          <h4 className='text-xs'>For all health needs</h4>
        </div>
      </div>
      {/* <div className='px-2 w-full mt-1'>
        <div className="followebutton flex items-center justify-between pb-1">
          <span className='flex items-center gap-2'>
            <picture>
              <img src="/SVG/accountBlack.svg" className='w-[15px] opacity-80' alt="" />
            </picture>
            <p className='text-sm font-medium md:font-bold'>12.6K</p>
          </span>
          <span>
            <button className='text-xs md:text-sm w-full  text-white bg-bgColor px-[5px]'>
              Follow
            </button>
          </span>
        </div>
      </div> */}
    </div>
  )
}

export default VendorCart
