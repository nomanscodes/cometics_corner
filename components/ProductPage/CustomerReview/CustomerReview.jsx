import React from 'react'
import ReviewChart from './ReviewChart'
import Review from './Review'

const CustomerReview = () => {
    return (
        <div className='mt-4 px-6 '>
            <h1 className='uppercase text-xl font-bold opacity-95'>Looking for specific info?</h1>
            <div className='mt-3 flex w-full'>
                <div className='w-1/3'>
                    <div className='w-full'>
                        <ReviewChart />
                        <hr className='mt-4 w-[70%]' />
                        <div className="writeAReviwew">
                            <h1 className='text-[20px] font-[600] opacity-95 pt-3'>Review this product</h1>
                            <h4 className='text-[16px] font-[450] mt-2'>Share your thoughts with other customers</h4>
                            <input
                                type="text"
                                className="w-[70%] rounded border border-neutral-400 py-1 pl-2 focus:outline-none shadow-md mt-3"
                                placeholder="Write a customer review"
                            />
                        </div>
                    </div>
                </div>
                <div className='w-2/3'>
                    <Review />
                </div>
            </div>
        </div>
    )
}

export default CustomerReview