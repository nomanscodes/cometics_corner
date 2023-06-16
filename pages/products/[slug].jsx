import React from 'react'
import Layout from '@/Layouts/Layout'
import Head from 'next/head'
import TopSection from '@/components/ProductPage/TopSection/TopSection'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import TopAds from '@/components/ProductPage/TopSection/TopAds'
import Details from '@/components/ProductPage/Details/Details'
import Compare from '@/components/ProductPage/CompareSection/Compare'
import CustomerReview from '@/components/ProductPage/CustomerReview/CustomerReview'
import ImpInformation from '@/components/ProductPage/ImportantInformation/ImpInformation'
import MobileSection from '@/components/ProductPage/MobileSection/MobileSection'




const ProductDetails = () => {
    return (
        <Layout>
            <Head>
                <title>Cometics Center product_page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopAds />
            <div className=' bg-white'>
                <div className='PCsection py-2 hidden md:block'>
                    <div className="flex items-center gap-2 px-6">
                        <div className="flex items-center gap-[2px] xxsFont font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
                            <Link href={""} className="uppercase">
                                Home
                            </Link>
                            <FiChevronRight size={12} />
                        </div>
                        <div className="flex items-center gap-[2px] xxsFont font-medium opacity-80 hover:text-bgColor transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <Link href={""} className="uppercase">
                                Products
                            </Link>
                            <FiChevronRight size={12} />
                        </div>
                    </div>
                    <TopSection />
                    <hr className='mt-4' />
                    <Details />
                    <hr className='mt-4' />
                    <Compare />
                    <hr className='mt-4' />
                    <ImpInformation />
                    <hr className='mt-4' />
                    <CustomerReview />
                </div>
                <div className='mobileSection md:hidden mt-2'>
                    <MobileSection />
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails