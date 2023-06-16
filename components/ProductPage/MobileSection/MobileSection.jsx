import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'


const MobileSection = () => {
    return (
        <div className='py-2'>
            <ImageSlider />
            <div className='mt-[3px] bg-white'>
                <div className='px-2'>
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
            <hr className='opacity-90' />
            <div className='bg-white px-2'>
                <table className=''>
                    <tbody>
                        <tr className='mt-[2px]'>
                            <td className='text-[11px] pr-5 opacity-90'>Payment</td>
                            <td className='text-[11px] font-[500] '>Secure Transition</td>
                        </tr>
                        <tr className='mt-[2px]'>
                            <td className='text-[11px] pr-5 opacity-90 whitespace-nowrap'>
                                Ships From  </td>
                            <td className='text-[11px] font-[500]  '>Author Store</td>
                        </tr>
                        <tr className='mt-[2px]'>
                            <td className='text-[11px] pr-5 opacity-90'>Sold By</td>
                            <td className='text-[11px] font-[500]  '>Author</td>
                        </tr>
                        <tr className='mt-[2px]'>
                            <td className='text-[11px] pr-5 opacity-90 text-start'>Return  </td>
                            <td className='text-[11px] font-[500] '>Eligible for return refund or replacement within 30 days of recepit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MobileSection