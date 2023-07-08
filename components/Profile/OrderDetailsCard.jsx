import React from 'react'

const OrderDetailsCard = () => {
    return (

        <div className='grid grid-cols-4 border shadow-sm p-[2px] bg-white mt-3'>
            <picture className='col-span-1'>
                <img src="/demo/p/p1.avif" className='w-[90px] h-full' alt="" />
            </picture>
            <div className='col-span-3 px-2 '>
                <h4 className='text-[12px] font-semibold text-gray-700'>American Hair Gel For Women</h4>
                <h4 className='text-[11px] font-semibold text-gray-600 mt-1'>Sky Blue</h4>
                <span className='flex items-center gap-3 
      mt-1'>
                    <h4 className='text-[11px] font-semibold text-gray-700'>Color : <span className='text-black'>Red</span></h4>
                    <h4 className='text-[11px] font-semibold text-gray-700'>Size : <span className='text-black'>L</span></h4>
                    <h4 className='text-[11px] font-semibold text-gray-700'>Qty : <span className='text-black'>02</span></h4>
                </span>
                <span className='flex items-center justify-between mt-1'>
                    <h4 className='text-[11px] font-semibold text-gray-700'>Qty : <span className='text-black'>02</span></h4>
                    <span className='text-[12px] font-semibold text-gray-900'>342 TK</span>
                </span>
            </div>
        </div>
    )
}

export default OrderDetailsCard