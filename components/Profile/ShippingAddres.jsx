import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'

const ShippingAddress = () => {
  return (
    <div className='bg-white'>
      <h1 className='text-[20px] mb-1 font-[500] flex items-center justify-center md:pt-4'>Shipping Address</h1>
      <div className='md:flex items-center justify-center px-2 md:min-h-[60vh]'>
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </div>

  )
}

export default ShippingAddress