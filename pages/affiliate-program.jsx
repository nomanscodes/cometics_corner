import React from 'react'
import Layout from '@/Layouts/Layout'
import Head from 'next/head'
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
const AffiliateProgram = () => {
    return (
        <Layout>
            <Head>
                <title>Affiliate Program</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='p-2 md:p-6'>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-[2px]  text-xs font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                        <Link href={"/"} className="uppercase">
                            Home
                        </Link>
                        <FiChevronRight size={14} />
                    </span>
                    <span className="flex items-center gap-[2px] text-xs font-medium  hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none uppercase text-green-700 md:text-black md:opacity-80">Affiliate<FiChevronRight size={14} />
                    </span>
                </div>
                <div className="bg-gradient-to-b from-slate-200 to-slate-50 shadow-sm mt-3 flex items-center justify-between py-2 md:py-0 md:p-4">
                    <div>
                        <picture>
                            <img src="/SVG/affiliate.svg" 
                            className='h-[80px] md:h-[160px]' alt="" />
                        </picture>
                    </div>
                    <div className="flex-col justify-center md:items-center gap-3 md:gap-6 inline-flex">
                        <h4 className="text-zinc-800 text-opacity-90 md:text-[27px] font-semibold tracking-wide">AFFILIATE PROGRAM</h4>
                        <p className="text-zinc-800 text-opacity-70 text-[11px]
                        md:text-[18px] font-medium"> Earn Commissions by Recommending Products</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
                        <span className="text-neutral-500 text-[12px] md:text-[16px] font-medium">Apply now here</span>

                        <Link href={"/affiliate-form"} 
                        className="px-[10px] md:px-[30px] py-[6px] text-[12px]
                        md:py-[11px] bg-bgColor rounded shadow justify-center items-center inline-flex text-white md:text-[16px] font-semibold whitespace-nowrap">
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className='mt-4 px-3 md:px-16'>
                    <div className="text-emerald-500 
                    md:text-[22px] font-semibold flex items-center justify-center">How It Works</div>
                    <div className='mt-6 md:mt-8 grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-0'>
                        <div className="flex-col md:justify-center items-center gap-4 inline-flex">
                            <picture>
                                <img
                                    className="w-[40px] md:w-[90px]"
                                    alt=''
                                    src="/SVG/signUp.svg" />
                            </picture>
                            <div className="flex flex-col justify-center md:items-center gap-2">
                                <span className="text-zinc-800 text-opacity-90 text-[14px] md:text-[20px] font-semibold">Sign up</span>
                                <h2 className="md:text-center text-zinc-800 
                                text-[11px]
                                md:text-[13px] font-medium leading-tight">Join CART24 Affiliate program & start earning.</h2>
                            </div>
                        </div>
                        <div className='hidden md:flex items-center 
                         justify-center'>
                            <picture>
                                <img src="/SVG/arrowBold.svg" 
                                className='w-8 md:w-20 opacity-80' alt="" />
                            </picture>
                        </div>
                        <div className="flex-col md:justify-center items-center gap-4 inline-flex">
                            <picture>
                                <img
                                    className="w-[40px] md:w-[90px]"
                                    alt=''
                                    src="/SVG/recomended.svg" />
                            </picture>
                            <div className="flex flex-col justify-center md:items-center gap-2">
                                <span className="text-zinc-800 text-opacity-90 text-[14px] md:text-[20px] font-semibold">Recommend</span>
                                <h2 className="md:text-center text-zinc-800 
                                text-[11px]
                                md:text-[13px] font-medium leading-tight">Share thousands of products with your own personalized link.</h2>
                            </div>
                        </div>
                        <div className='hidden  md:last-of-type:flex items-center 
                         justify-center'>
                            <picture>
                                <img src="/SVG/arrowBold.svg" className=' w-8 md:w-20 opacity-80' alt="" />
                            </picture>
                        </div>
                        <div className="flex-col md:justify-center items-center gap-4 inline-flex">
                            <picture>
                                <img
                                    className="w-[40px] md:w-[90px]"
                                    alt=''
                                    src="/SVG/earn.svg" />
                            </picture>
                            <div className="flex flex-col justify-center md:items-center gap-2">
                                <span className="text-zinc-800 text-opacity-90 text-[14px] md:text-[20px] font-semibold">Earn</span>
                                <h2 className="md:text-center text-zinc-800 
                                text-[11px]
                                md:text-[13px] font-medium leading-tight">Earn commissions based on product purchase completion. </h2>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <h4 className="text-zinc-800 text-opacity-90 text-[24px] font-semibold tracking-wide">Frequently Asked Questions</h4>
                        <div className='mt-5 grid grid-cols-2 gap-8'>
                            <div className='py-3'>
                                <h4 className="text-zinc-800 text-opacity-90 text-[20px] font-semibold tracking-wide">How does the Associates Program work?</h4>
                                <p className='text-[14px] mt-3' >
                                    You can share products and available programs on Amazon with your audience through customized linking tools and earn money on qualifying purchases and customer actions like signing up for a free trial program. Learn more.
                                </p>
                            </div>
                            <div className='py-3'>
                                <h4 className="text-zinc-800 text-opacity-90 text-[20px] font-semibold tracking-wide">How do I earn in this program?</h4>
                                <p className='text-[14px] mt-3' >
                                    You earn from qualifying purchases and programs through the traffic you drive to Amazon. Commission income for qualifying purchases and programs differ based on product category. Note: Commission income is paid approximately 60 days after the end of the month in which it was earned.
                                </p>
                            </div>
                            <div className='py-3'>
                                <h4 className="text-zinc-800 text-opacity-90 text-[20px] font-semibold tracking-wide">How do I qualify for this program?</h4>
                                <p className='text-[14px] mt-3' >
                                    Bloggers, publishers and content creators with a qualifying website or mobile app can participate in this program. <Link className='text-green-700 hover:underline' href={""}>Learn More.</Link>
                                    <br />
                                    <br />
                                    If you are an influencer with an established social media following, learn about the <Link className='text-green-700 hover:underline' href={""}>Amazon Influencer Program.</Link>
                                </p>
                            </div>
                            <div className='py-3'>
                                <h4 className="text-zinc-800 text-opacity-90 text-[20px] font-semibold tracking-wide">How do I sign up to the program?</h4>
                                <p className='text-[14px] mt-3' >
                                    Sign up to the program <Link className='text-green-700 hover:underline' href={""}> here.</Link>
                                    <br />
                                    <br />
                                    We will review your application and approve it if you meet the qualifying criteria. <Link className='text-green-700 hover:underline' href={""}>Learn More.</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex items-center justify-between px-3 py-6 bg-gradient-to-b from-slate-200 to-slate-50 '>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-zinc-800 text-opacity-90 text-[20px] font-semibold tracking-wide">Start Earning Today</h5>
                        <Link href={"/affiliate-form"} className="px-[30px] 
                        py-[10px] bg-bgColor rounded shadow justify-center items-center inline-flex text-white text-[16px] font-semibold">
                            Sign Up
                        </Link>
                    </div>
                    <div className="text-zinc-800 text-opacity-90 
                    text-[20px] font-semibold tracking-wide"> Earn Commissions by Recommending Products</div>
                </div>
            </div>
        </Layout>

    )
}

export default AffiliateProgram