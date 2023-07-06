import React from 'react'
import AddressCard from '../Checkout.jsx/AddressCard'

const ShippingAddress = () => {
  return (
    <div className='md:flex items-center justify-center px-2 md:min-h-[60vh]'>

      <AddressCard />
      <AddressCard />
      <AddressCard />

    </div>
  )
}

export default ShippingAddress