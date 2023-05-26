import React from 'react'

const VendorCart = () => {
  return (
    <div className=''>
      <picture>
        <img className='w-40 h-32 rounded-t' src="/vendorImage.avif" alt="vedor" />
      </picture>
      <div className='w-40 bg-white p-1 rounded-b'>
        <div className="name">
          <h3 className='text-base font-poppins font-semibold'>Absolute Glam</h3>
        </div>
        <div className="rating">
          <span className='flex items-center text-xs opacity-70'>
            <p className='pr-2'>Rating :</p>
            <p>⭐</p>
            <p>44/5(130)</p>
          </span>
        </div>
        <div className="follwer">
          <span className='flex items-center text-xs opacity-70'>
            <p className='pr-2'>Follower :</p>
            <p>481</p>
          </span>
        </div>
        <div className="follow mt-1 ">
          <button className="border border-bgColor font-poppins text-sm  text-bgColor rounded px-3 py-[2px] whitespace-nowrap transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105">Follow Vendor</button>
        </div>
      </div>
    </div>
  )
}

export default VendorCart
