import React from 'react'

const Bottom = () => {
    return (
        <div className='fixed bottom-0 left-0 z-50 w-full bg-white border-t shadow-2xl md:hidden '>
            <div className='flex items-center justify-between px-6'>
                <div className='flex flex-col items-center p-1'>
                    <picture>
                        <img className='w-5' src="/SVG/home.svg" alt="home" />
                    </picture>
                    <p className='font-medium footerText2  text-[#A1A0A0]'>Home</p>
                </div>
                <div className='flex flex-col items-center p-1'>
                    <picture>
                        <img className='w-5' src="/SVG/category.svg" alt="home" />
                    </picture>
                    <p className='font-medium footerText2 text-[#A1A0A0]'>Categories</p>
                </div>
                <div className='flex flex-col items-center p-1'>
                    <picture>
                        <img className='w-5' src="/SVG/bottomcart.svg" alt="home" />
                    </picture>
                    <p className='font-medium footerText2 text-[#A1A0A0]'>Cart</p>
                </div>
                <div className='flex flex-col items-center p-1'>
                    <picture>
                        <img className='w-5' src="/SVG/bottomaccount.svg" alt="home" />
                    </picture>
                    <p className='font-medium footerText2 text-[#A1A0A0]'>Account</p>
                </div>
            </div>
        </div>
    )
}

export default Bottom
