import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'


const MobileSection = () => {
    return (
        <div className='py-2'>
            <ImageSlider />
            <div className='mt-[3px] bg-white'>
                <div className='p-2'>
                    <Link href={""} className='text-[11px] font-medium text-green-700'>View more from Blue Earth</Link>
                    <h2 className='text-[13px] font-medium opacity-90 mt-1'>Basics Silky Smooth Body Wash, Peach & Orange Blossom Scent, 18 Fl Oz</h2>
                    <span className='flex items-center gap-2 mt-1'>
                        <picture className='flex items-center gap-1'>
                            <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                            <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                            <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                            <img src="/SVG/star.svg" className='h-[11px]' alt="" />
                        </picture>
                        <h5 className='text-[11px] font-medium text-green-700'> 393 rating</h5>
                    </span>
                    <span className='flex items-center gap-2 mt-1'>
                        <h4 className='text-[13px] font-medium text-green-700'>35% off</h4>
                        <h4 className='text-[13px] font-medium text-gray-600 line-through'>574</h4>
                        <h4 className='text-[13px] font-medium '>&#2547;798</h4>
                    </span>
                </div>
            </div>
            <div className='bg-white p-2'>
                <table className=''>
                    <tbody>
                        <tr className=''>
                            <td className='text-[12px] pr-5 opacity-90'>Item Type</td>
                            <td className='text-[11px] font-[500] '>Cream</td>
                        </tr>
                        <tr className=''>

                            <td className='text-[12px] pr-5 opacity-90 whitespace-nowrap'>
                                Skin Type</td>
                            <td className='text-[11px] font-[500]'>Dry</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[12px] pr-5 opacity-90'>Brand</td>
                            <td className='text-[11px] font-[500]  '>Lorem</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[12px] pr-5 opacity-90 text-start'>Material Feature</td>
                            <td className='text-[11px] font-[500] '>Plastic Bottol</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-2 p-2 bg-white flex items-center justify-between w-full'>
                <span className='flex flex-col items-center justify-center gap-1'>
                    <picture>
                        <img src="/SVG/returns.svg" className='h-5' alt="" />
                    </picture>
                    <h1 className='text-sm font-medium'>No Returns Alllowed</h1>
                </span>
                <hr className='w-12 rotate-90' />
                <span className='flex flex-col items-center justify-center gap-1'>
                    <picture>
                        <img src="/SVG/cashondelivery.svg" className='h-5' alt="" />
                    </picture>
                    <h1 className='text-sm font-medium'>Cash On Delivery Available</h1>
                </span>
            </div>
        </div>
    )
}

export default MobileSection