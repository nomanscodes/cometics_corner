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
                    <h2 className='text-[13px] font-medium opacity-95 mt-1'>Basics Silky Smooth Body Wash, Peach & Orange Blossom Scent, 18 Fl Oz</h2>
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
                            <td className='text-[11px] pr-5 opacity-95'>Item Type</td>
                            <td className='text-[11px] font-[500] '>Cream</td>
                        </tr>
                        <tr className=''>

                            <td className='text-[11px] pr-5 opacity-95 whitespace-nowrap'>
                                Skin Type</td>
                            <td className='text-[11px] font-[500]'>Dry</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95'>Brand</td>
                            <td className='text-[11px] font-[500]  '>Lorem</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95 text-start'>Material Feature</td>
                            <td className='text-[11px] font-[500] '>Plastic Bottol</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-2 p-2 bg-white flex items-center justify-between w-full'>
                <span className='w-2/5 flex flex-col items-center justify-center gap-1'>
                    <picture>
                        <img src="/SVG/returns.svg" className='h-6' alt="" />
                    </picture>
                    <h1 className='text-sm font-medium text-center'>No Returns Alllowed</h1>
                </span>
                <hr className='w-14 rotate-90' />
                <span className='w-2/5 flex flex-col items-center justify-center gap-1'>
                    <picture>
                        <img src="/SVG/cashondelivery.svg" className='h-6' alt="" />
                    </picture>
                    <h1 className='text-sm font-medium text-center'>Cash On Delivery Available</h1>
                </span>
            </div>
            <div className='bg-white p-2 mt-2'>
                <h1 className='text-[13px] font-semibold opacity-95 mb-2'>Product Details</h1>
                <table className=''>
                    <tbody>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95'>Material Feature</td>
                            <td className='text-[11px] font-[500] '>Biodegradable Warning</td>
                        </tr>
                        <tr className=''>

                            <td className='text-[11px] pr-5 opacity-95 whitespace-nowrap'>
                                Date First Available</td>
                            <td className='text-[11px] font-[500]'>April 18, 2022</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95'>Country of Origin</td>
                            <td className='text-[11px] font-[500]  '>
                                Indian</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95 text-start'>Manufacturer</td>
                            <td className='text-[11px] font-[500] '>Amazon.com Services, Inc.</td>
                        </tr>
                        <tr className=''>
                            <td className='text-[11px] pr-5 opacity-95 text-start'>Product Code</td>
                            <td className='text-[11px] font-[500] '>B09HHD9X4B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='bg-white p-2'>
                <h1 className='text-[13px] font-semibold opacity-95 mb-2'>IMPORTANT INFORMATION</h1>
                <div className='mt-2'>
                    <h1 className='text-[12px] font-semibold opacity-95 mb-1'>Ingredients</h1>
                    <h5 className='text-[11px] font-medium'>Water, cetearyl alcohol, dimethicone, stearamidopropyl dimethylamine, behentrimonium chloride, tocopheryl acetate, ascorbic acid, panthenol, niacinamide, biotin, fragrance, dipropylene glycol, lactic acid, potassium chloride, amodimethicone, disodium EDTA, DMDM hydantoin, cetrimonium chloride, polysorbate 20, PEG-150 distearate, methylchloroisothiazolinone, methylisothiazolinone</h5>
                </div>
                <div className='mt-2'>
                    <h1 className='text-[12px] font-semibold opacity-95 mb-1'>Legal Disclaimer</h1>
                    <h5 className='text-[11px] font-medium'>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</h5>
                </div>
                <div className='mt-2'>
                    <h1 className='text-[12px] font-semibold opacity-95 mb-1'>Direction</h1>
                    <h5 className='text-[11px] font-medium'>Nip hair fall due to breakage in its bud with this hair-fall defense shampoo from TRESemme. Enriched with the strength to make for long, beautiful and strong hair.</h5>
                </div>
            </div>
        </div>
    )
}

export default MobileSection