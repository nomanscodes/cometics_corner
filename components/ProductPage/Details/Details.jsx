import React from 'react'

const Details = () => {
    return (
        <div className='mt-4 px-6'>
            <h1 className='uppercase text-xl font-bold opacity-95'>product details</h1>
            <div className='mt-3 ml-6'>
                <span className='flex items-center gap-3 mt-2'>
                    <h1 className='text-[17px] font-semibold'>Material Feature :</h1>
                    <h3 className='text-[15px] font-[500] opacity-95'> Biodegradable Warning</h3>
                </span>
                <span className='flex items-center gap-3 mt-2'>
                    <h1 className='text-[17px] font-semibold'>Date First Available :</h1>
                    <h3 className='text-[15px] font-[500] opacity-95'> April 18, 2022</h3>
                </span>
                <span className='flex items-center gap-3 mt-2'>
                    <h1 className='text-[17px] font-semibold'>Country of Origin :</h1>
                    <h3 className='text-[15px] font-[500] opacity-95'> Indian</h3>
                </span>
                <span className='flex items-center gap-3 mt-2'>
                    <h1 className='text-[17px] font-semibold'>Manufacturer :</h1>
                    <h3 className='text-[15px] font-[500] opacity-95'>  Amazon.com Services, Inc.</h3>
                </span>
                <span className='flex items-center gap-3 mt-2'>
                    <h1 className='text-[17px] font-semibold'>Product Code :</h1>
                    <h3 className='text-[15px] font-[500] opacity-95'>B09HHD9X4B</h3>
                </span>
            </div>

            
        </div>
    )
}

export default Details