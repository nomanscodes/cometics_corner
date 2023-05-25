import React from 'react'

const CategoryCart = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white shadow-xl h-36 w-40 rounded-md m-2'>
            <picture>
                <img className='w-32 h-24' src="/assets/cat/cat2.png" alt="" />
            </picture>
            <h5 className='font-poppins font-semibold text-lg mb-2'>Mackup</h5>
        </div>
    )
}

export default CategoryCart