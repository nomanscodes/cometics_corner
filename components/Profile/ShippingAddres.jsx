import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'

const ShippingAddress = () => {
  return (
    <div className='md:flex items-center justify-center gap-4 px-2'>
      <AddressCard />
      <AddressCard />
      <AddressCard />
    </div>
  )
}

export default ShippingAddress