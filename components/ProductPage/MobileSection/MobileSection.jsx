import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'
import { AiOutlineDislike, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai'
import { MdMan, MdVerifiedUser } from 'react-icons/md'
import ProductCart from '@/components/Home/Products/ProductCard'
import { BiSearch, BiArrowBack } from 'react-icons/bi'
import { FaUserShield } from 'react-icons/fa'



const MobileSection = () => {

    const [showQuestion, setShowQuestion] = useState(false)

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
            <div className=' productDetils bg-white p-2 mt-2'>
                <h1 className='text-[13px] font-semibold opacity-95 mb-2 uppercase'>Product Details</h1>
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
            <div className='immportantInformation bg-white p-2'>
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
            <div className='reviewSection bg-white p-2 mt-2'>
                <h1 className='text-[13px] font-semibold opacity-95 mb-2 uppercase'>customer review</h1>
                <div className='flex items-center gap-3'>
                    <picture className='flex items-center gap-1'>
                        <img src="/SVG/star.svg" className='h-[12px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[12px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[12px]' alt="" />
                        <img src="/SVG/star.svg" className='h-[12px]' alt="" />
                    </picture>
                    <h1 className='text-[11px] font-semibold'>4.5 OUT OF 5</h1>
                    <h3 className='text-[11px] font-semibold ml-3 text-green-700'>8345 Total ratings</h3>
                </div>
                <div className='pt-1'>
                    <div className="flex items-center mt-2">
                        <span className="text-[11px] font-medium ">5 Star</span>
                        <div className="w-2/4 h-[15px] mx-4 bg-gray-200 rounded-sm">
                            <div className="h-[15px] bg-bgColor  
                            w-[70%] rounded-sm">
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">70%</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-[11px] font-medium ">4 Star</span>
                        <div className="w-2/4 h-[15px] mx-4 bg-gray-200 rounded-sm">
                            <div className="h-[15px] bg-bgColor  
                            w-[60%] rounded-sm">
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">60%</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-[11px] font-medium ">3 Star</span>
                        <div className="w-2/4 h-[15px] mx-4 bg-gray-200 rounded-sm">
                            <div className="h-[15px] bg-bgColor  
                            w-[50%] rounded-sm">
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">50%</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-[11px] font-medium ">2 Star</span>
                        <div className="w-2/4 h-[15px] mx-4 bg-gray-200 rounded-sm">
                            <div className="h-[15px] bg-bgColor  
                            w-[20%] rounded-sm">
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">20%</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-[11px] font-medium ml-[3px]">1 Star</span>
                        <div className="w-2/4 h-[15px] mx-4 bg-gray-200 rounded-sm">
                            <div className="h-[15px] bg-bgColor  
                            w-[02%] rounded-sm">
                            </div>
                        </div>
                        <span className="text-[11px] font-medium">02%</span>
                    </div>

                </div>
            </div>
            <div className='reviewSection p-2 bg-white'>
                <h1 className='text-[12px] font-semibold opacity-95 mb-1 capitalize'>review with image</h1>
                <div className='flex items-center justify-start gap-2 overflow-x-auto scroll-smooth mt-2'>
                    <picture>
                        <img src="/demo/p/p1.avif" className='h-16 w-16' alt="" />
                    </picture>
                    <picture>
                        <img src="/demo/p/p2.avif" className='h-16 w-16' alt="" />
                    </picture>
                    <picture>
                        <img src="/demo/p/p3.avif" className='h-16 w-16' alt="" />
                    </picture>
                    <picture>
                        <img src="/demo/p/p4.avif" className='h-16 w-16' alt="" />
                    </picture>
                </div>
                <div className='mt-2'>
                    <h1 className='text-[12px] font-semibold opacity-95 mb-1 capitalize '>top reviews</h1>
                    <div className='mt-2 pb-3'>
                        <span className='flex items-center gap-2'>
                            <picture>
                                <img src="/avatar.png" className='h-7 w-7 rounded-full' alt="" />
                            </picture>
                            <h3 className='text-[12px] 
                            font-medium  mb-1 capitalize'>David Jhon</h3>
                        </span>
                        <div className='flex items-center gap-2'>
                            <picture className='flex items-center gap-1'>
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                            </picture>
                            <span className='flex items-center '>
                                <MdVerifiedUser size={12} />
                                <h3 className='text-[11px] 
                            font-medium'>Verified Purchease</h3>
                            </span>

                        </div>
                        <span className='text-[10px] font-medium'>
                            Reviewed Date : April 5 ,2024
                        </span>
                        <div className='text-[12px] font-semibold'>
                            This is a holy Grail primeum
                        </div>
                        <h5 className='text-[11px] 
                        font-medium mt-1'>My hair is straight and very fine so this product works just fine. However, my girlfriend has thick, curly hair and it does not work well to condition her hair.</h5>
                        <div className='flex items-center gap-5 mt-2'>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineLike size={13} />
                                <h5 className='text-[10px]'>Helpful for 43</h5>
                            </span>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineDislike size={13} />
                                <h5 className='text-[10px]'>12</h5>
                            </span>
                        </div>
                    </div>
                    <div className='mt-2 pb-3'>
                        <span className='flex items-center gap-2'>
                            <picture>
                                <img src="/avatar.png" className='h-7 w-7 rounded-full' alt="" />
                            </picture>
                            <h3 className='text-[12px] 
                            font-medium  mb-1 capitalize'>Sara Ali Khan</h3>
                        </span>
                        <div className='flex items-center gap-2'>
                            <picture className='flex items-center gap-1'>
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                                <img src="/SVG/star.svg"
                                    className='h-[12px]' alt="" />
                            </picture>
                            <span className='flex items-center '>
                                <MdVerifiedUser size={12} />
                                <h3 className='text-[11px] 
                            font-medium'>Verified Purchease</h3>
                            </span>

                        </div>
                        <span className='text-[10px] font-medium'>
                            Reviewed Date : June 8 ,2024
                        </span>
                        <div className='text-[12px] font-semibold'>
                            This is a Awesome Product
                        </div>
                        <div className='mt-1'>
                            <picture className='flex items-center gap-2'>
                                <img src="/product1.avif" className='h-20' alt="" />
                                <img src="/product2.jpg" className='h-20' alt="" />
                            </picture>
                        </div>
                        <h5 className='text-[11px] 
                        font-medium mt-1'>
                            However, my girlfriend has thick, curly hair and it does not work well to condition her hair My hair is straight and very fine so this product works just fine. .</h5>
                        <div className='flex items-center gap-5 mt-2'>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineLike size={13} />
                                <h5 className='text-[10px]'>Helpful for 43</h5>
                            </span>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineDislike size={13} />
                                <h5 className='text-[10px]'>12</h5>
                            </span>
                        </div>
                    </div>
                    <h3 className='text-[12px] font-medium text-green-700 underline'>See All Review </h3>
                    <hr className='mt-2' />
                    <div className='mt-2'>
                        <input
                            type="text"
                            className="w-full border rounded focus:outline-none text-xs py-2 pl-3"
                            placeholder="Write a review" />
                    </div>
                </div>
            </div>
            <div className='relatedProducts bg-white p-2'>
                <h1 className='text-[13px] font-semibold opacity-95 mb-2'>RELATED PRODUCTS</h1>
                <div className=' flex items-start gap-2 overflow-x-auto scroll-smooth mt-2'>
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                </div>
            </div>
            <div className='question&answer mt-2 p-2 bg-white'>
                <span className='flex items-center justify-between gap-12 relative'>
                    <h1 className='text-[13px] font-semibold opacity-95 mb-2 whitespace-nowrap'>QUESTIONS & ANSWERS</h1>
                    <input
                        type="text"
                        className="w-full border rounded focus:outline-none text-xs py-[6px] pl-7"
                        placeholder="Search here"
                    />
                    <BiSearch size={15} className='absolute left-52 opacity-80' />
                </span>
                <div className='flex flex-col gap-3 mt-2'>
                    <div>
                        <h3 className='text-[12px] font-medium'>Q: It is shade 128</h3>
                        <h4 className='text-[12px] mt-1'>A: 120</h4>
                        <div className='flex items-center gap-5 mt-2'>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineLike size={13} />
                                <h5 className='text-[10px]'>Helpful for 43</h5>
                            </span>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineDislike size={13} />
                                <h5 className='text-[10px]'>12</h5>
                            </span>
                        </div>
                        <span className='flex items-center gap-1 mt-1'>
                            <MdVerifiedUser size={12} />
                            <h3 className='text-[11px] 
                            font-medium'>Menom Seller</h3>
                        </span>
                    </div>
                    <hr />
                    <div>
                        <h3 className='text-[12px] font-medium'>Q: Which brand is this?</h3>
                        <h4 className='text-[12px] mt-1'>A: Blue Earth</h4>
                        <div className='flex items-center gap-5 mt-2'>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineLike size={13} />
                                <h5 className='text-[10px]'>Helpful for 34</h5>
                            </span>
                            <span className='flex items-center gap-1 border border-gray-400 px-2 py-1 rounded-full shadow'>
                                <AiOutlineDislike size={13} />
                                <h5 className='text-[10px]'>6</h5>
                            </span>
                        </div>
                        <span className='flex items-center gap-1 mt-1'>
                            <MdVerifiedUser size={12} />
                            <h3 className='text-[11px] 
                            font-medium'>Menom Seller</h3>
                        </span>
                    </div>
                </div>
                <h3 onClick={() => setShowQuestion(true)} className='text-[12px] font-medium text-green-700 underline mt-2'>All Questions</h3>

                <div className={`fixed bottom-0 left-0 right-0 z-50 ${showQuestion ? `h-[100vh] ease-in-out transition-all duration-500` : `h-0 ease-in-out transition-all duration-500`} w-full  flex flex-col`}>
                    <div onClick={() => setShowQuestion(false)} className='bg-black/70  h-full w-full'>
                    </div>
                    <div className='bg-white h-[550px]'>
                        <div className='bg-bgColor overflow-hidden fixed w-full z-50'>
                            <span className='flex items-center gap-3 p-2 text-white'>
                                <BiArrowBack onClick={() => setShowQuestion(false)} size={18} />
                                <h1 className='capitalize text-[12px] font-semibold'>
                                    question & answer
                                </h1>
                            </span>
                            <hr className='opacity-20' />
                            <div className='flex relative p-3'>
                                <input
                                    type="text"
                                    className="py-1 w-full text-xs pl-8 focus:outline-none rounded"
                                    placeholder="Have a question? Search for answers"
                                />
                                <AiOutlineSearch className=' absolute ml-1 mt-[4px] text-gray-500 border-solid border-neutral-500' size={20} />
                            </div>
                        </div>
                        <div className='overflow-auto h-[500px]'>
                            <div className='mt-20'>
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : It is a sutable for oily skin?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : Yes you can use this on all skin types</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Blue Earth</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>6</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>2</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                                <div className='p-2'>
                                    <h4 className='text-[11px] font-semibold'>Q : Which brand is this?</h4>
                                    <h4 className='text-[11px] mt-[2px]'>A : This
                                        brand is Uniliver</h4>
                                    <span className='flex items-center justify-between mt-1'>
                                        <h4 className='text-[11px] mt-[3px] font-medium opacity-70'>Lorem Lots</h4>
                                        <span className='flex items-center gap-2'>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineLike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>9</h4>
                                            </span>
                                            <span className='flex items-center gap-1 opacity-80'>
                                                <AiOutlineDislike className='' size={12} />
                                                <h4 className=' text-[11px] font-medium'>4</h4>
                                            </span>
                                        </span>
                                    </span>
                                    <span className='flex items-center gap-1 mt-[2px]'>
                                        <FaUserShield size={12} className='opacity-75' />
                                        <h4 className='text-[11px]  font-medium opacity-70'> Menom User</h4>
                                    </span>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSection