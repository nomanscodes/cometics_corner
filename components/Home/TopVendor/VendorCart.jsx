import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineSupervisorAccount } from "react-icons/md"

const VendorCart = () => {
  return (
    <div className='w-auto bg-white  shadow'>
      <div style={{ backgroundImage: `url("/happy.avif")` }} className="name fitImage h-32  rounded-sm">
        <div className='p-2'>
          <h1 className='text-sm font-medium md:font-bold flex items-center gap-2'>Wellness Store <span><IoIosArrowForward size={13} /></span></h1>
          <h4 className='text-xs'>For all health needs</h4>
        </div>
      </div>
    </div>
  )
}

export default VendorCart
