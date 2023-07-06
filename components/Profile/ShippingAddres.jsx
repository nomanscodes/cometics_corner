import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'

const ShippingAddress = () => {
  return (
    <div className='bg-white md:min-h-[60vh]'>
      <h1 className='text-[20px] mb-1 font-[500] flex items-center justify-center py-3'>Shipping Address</h1>
      <div className='md:flex justify-center gap-5 px-2'>
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </div>

  )
}

export default ShippingAddress